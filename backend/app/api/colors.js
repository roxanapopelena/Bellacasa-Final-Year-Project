const {Router} = require('express');
const {getProductColors,
        getColors
    } = require ('../colors/table');

const router = new Router();


router.get('/product-colors', (req,res,next) => {
    getColors()
    .then(({ colors }) => res.json({ colors }))
    .catch(error => next(error));
});

router.get('/product-colors/:id', (req,res,next) => {
    getProductColors({id: req.params.id})
    .then(({ colors }) => res.json({ colors }))
    .catch(error => next(error));
});
module.exports= router;