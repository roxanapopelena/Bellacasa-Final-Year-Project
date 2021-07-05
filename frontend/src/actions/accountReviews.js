import { ACCOUNT_REVIEWS } from './types';
import { fetchFromAccount} from './account';

export const fetchAccountReviews = () => fetchFromAccount({
    endpoint: 'reviews',
    options: { credentials: 'include'},
    FETCH_TYPE: ACCOUNT_REVIEWS.FETCH,
    ERROR_TYPE: ACCOUNT_REVIEWS.FETCH_ERROR,
    SUCCESS_TYPE: ACCOUNT_REVIEWS.FETCH_SUCCESS
});
