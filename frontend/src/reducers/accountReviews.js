import { ACCOUNT_REVIEWS } from '../actions/types';
import fetchStates from './fetchStates';

const DEFAULT_ACCOUNT_REVIEWS = { reviews: [] };

const accountReviews = (state= DEFAULT_ACCOUNT_REVIEWS, action) => {
    switch(action.type) {
        case ACCOUNT_REVIEWS.FETCH:
            return {...state, status: fetchStates.fetching};
        case ACCOUNT_REVIEWS.FETCH_ERROR:
            return { ...state, status: fetchStates.error, message: action.message};
        case ACCOUNT_REVIEWS.FETCH_SUCCESS:
            return {
                ...state,
                status: fetchStates.success,
                message: action.message,
                reviews: action.accountReviews
            };
            default:
                return state;
    }
}

export default accountReviews;