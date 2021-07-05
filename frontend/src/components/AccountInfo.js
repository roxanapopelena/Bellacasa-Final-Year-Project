import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAccountInfo} from '../actions/accountInfo';
import { logout } from '../actions/account';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AccountReviews from './AccountReviews';

import './assets/styles/AccountInfo.css';

const styles = theme => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  });

class AccountInfo extends Component {
    componentDidMount() {
        this.props.fetchAccountInfo();
    }

    render() {
        return (
            <div className='container'>
                <div className='info__header__container'>
                    <h1>ACCOUNT</h1>
                </div>
                <div className='info__content'>
                    <h2>Username: {this.props.accountInfo.username}</h2>
                    <AccountReviews/>
                    <Button variant="outlined" color="secondary" onClick={this.props.logout}>
                    Log Out
                    </Button>
                    </div>
                
            </div>
        )
    }
}

export default connect(
    ({ accountInfo }) => ({ accountInfo }),
    { logout, fetchAccountInfo }
)(withStyles(styles, { withTheme: true })(AccountInfo));