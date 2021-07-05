import React, {Component} from 'react';
import { connect } from 'react-redux';
import AccountInfo from '../AccountInfo';
import SignUp from '../SignUp';

class SignUpPage extends Component {
    componentDidMount() {
        window.scrollTo(0, 0)
      }
      
    render() {
        return (
            this.props.account.loggedIn ? <AccountInfo /> : <SignUp/>
        )
    }
};

export default connect(
({ account }) => ({ account }),
null
)(SignUpPage);