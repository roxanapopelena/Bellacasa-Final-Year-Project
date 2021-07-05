import React, {Component} from 'react';
import { connect } from 'react-redux';
import AccountInfo from '../AccountInfo';
import SignIn from '../SignIn';

class SignInPage extends Component {
    componentDidMount() {
        window.scrollTo(0, 0)
      }
      
    render() {
        return (
            this.props.account.loggedIn ? <AccountInfo /> : <SignIn/>
        )
    }
};

export default connect(
({ account }) => ({ account }),
null
)(SignInPage);