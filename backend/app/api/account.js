const { Router } = require ('express');
const AccountTable = require('../account/table');
const ReviewsToAccountTable = require('../reviews_to_account/table');
const {hash} = require ('../account/helper');
const {setSession, authenticatedAccount} = require ('./helper');
const Session = require ('../account/session');

const router = new Router();

router.post('/signup', (req,res,next) => {
    const {firstName, lastName, username, password} = req.body;
    const usernameHash = hash(username);
    const passwordHash = hash(password);

    AccountTable.getAccount({usernameHash})
    .then(({ account })=> {
        if (!account) {
            return AccountTable.storeAccount({firstName, lastName, usernameHash, passwordHash})
        } else {
            const error = new Error('This username has already been taken');
       
            error.statusCode=409;

            throw error;
        }
    })
    .then( ()=> {
        return setSession ({ username, res });
        
    })
    .then (({ message })=>res.json({ message }))
    .catch(error => next(error));
});
router.post('/login', (req,res,next)=> {
    const {username,password}=req.body;

    AccountTable.getAccount({ usernameHash: hash(username)})
    .then(({account})=> {
        if(account && account.passwordHash === hash(password)){
            const {sessionId} = account;

            return setSession({ username, res, sessionId })
        }else {
            const error = new Error('Incorrect username/password');

            error.statusCode = 409;

            throw error;
        }
    })
    .then(({ message })=> res.json({ message }))
    .catch(error => next(error));
});

router.get('/logout', (req,res, next) => {
    const { username } = Session.parse(req.cookies.sessionString);

    AccountTable.updateSessionId({
        sessionId: null,
        usernameHash: hash(username)
    })
    .then (() => {
        res.clearCookie('sessionString');

        res.json({message: 'successful logout'});
    })
    .catch(error=> next(error));
});

router.get('/authenticated', (req, res, next) => {
    authenticatedAccount({ sessionString: req.cookies.sessionString })
    .then(({ authenticated }) => res.json({ authenticated }))
    .catch(error => next(error));
});

router.get('/info', (req,res,next) => {
    authenticatedAccount({ sessionString: req.cookies.sessionString })
    .then (({username })=>{
        res.json({info: { username } });
    })
    .catch(error=>next(error));
});

router.get('/reviews', (req,res,next)=>{
    authenticatedAccount({ sessionString: req.cookies.sessionString})
    .then(( {account} )=>{
        return ReviewsToAccountTable.getAccountReviews({
            accountId: account.id
        });
    })
    .then(({ accountReviews }) => res.json({ accountReviews }))
    .catch(error=>next(error));
});

module.exports = router;