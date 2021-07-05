import { combineReducers } from 'redux';
import account from './account';
import accountInfo from './accountInfo';
import accountReviews from './accountReviews';


export default combineReducers({
    account,
    accountInfo,
    accountReviews
});