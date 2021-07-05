import React, {Component} from 'react';
import { connect } from 'react-redux';
import { fetchAccountReviews } from '../actions/accountReviews';
import AccountReviewRow from './AccountReviewRow';

import './assets/styles/AccountReview.css';

class AccountReviews extends Component {
    componentDidMount() {
        this.props.fetchAccountReviews();
    }

    render () {
        return (
            <div>
                <h2>Account Reviews</h2>
                {
                    this.props.accountReviews.reviews.map(review => {
                        return(
                            <div key={review.reviewId} className='account__review__container'>
                                <AccountReviewRow review={review} />
                                <hr/>
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}

export default connect(
({ accountReviews }) => ({ accountReviews}),
{ fetchAccountReviews }
)(AccountReviews);