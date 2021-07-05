import React, {Component} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import {Link} from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import fetchStates from '../reducers/fetchStates';
import { signup } from '../actions/account';

import { connect } from 'react-redux';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" to='/'>
        bellacasa
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const styles = theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(15, 0, 2),
  },
});


const validateForm = (errors) => {
  let valid = true;
  Object.values(errors).forEach(
    (val) => val.length > 0 && (valid = false)
  );
  return valid;
}
var format = /[ `!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/;

class SignUp extends Component {
  state= { firstName : '',
          lastName :'',
          username : '', 
          password: '',
          buttonClicked:false,
          errors: {
            firstName: '',
            lastName:'',
            username:'',
            password:''}
          };
  
  updateContent = event => {
    const { name, value } = event.target;
    let errors = this.state.errors;

    switch (name) {
      case 'firstName': 
            if (format.test(value)) {
              errors.firstName = 'Invalid first name format';
          } else {
            errors.firstName ='';
          }
          break;
          case 'lastName': 
          if (format.test(value)) {
            errors.lastName = 'Invalid first name format';
        } else {
          errors.lastName ='';
        }
        break;
        case 'username': 
          if (format.test(value)) {
            errors.username = 'Invalid username format';
        } else {
          errors.username ='';
        }
        break;
          case 'password': 
          if (value.length < 8)
                errors.password = 'Password must be 8 characters long'
                //console.log(errors.content)
            else
                errors.password=''
              break;
        default:
          break;
      }
    
      this.setState({errors, [name]: value}, ()=> {
          //console.log(errors)
      })
}

  
  handleSubmit = (event) => {
    event.preventDefault();
    if(validateForm(this.state.errors)) {
      this.signup();
    }
  }
  
signup = () => {
  this.setState({buttonClicked: true});

  const { firstName, lastName, username, password}=this.state;

  this.props.signup({firstName, lastName, username, password });
}


get Error() {
  if (
      this.state.buttonClicked &&
      this.props.account.status === fetchStates.error
      ) {
      return <div>{this.props.account.message}</div>
  }else{
    return <div></div>
  }
};

  render(){
    const  {classes}  = this.props;
    const {errors} = this.state;
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        {this.Error}
        <form className={classes.form}>
          <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
              <TextField
              value = {this.state.firstName}
              onChange={this.updateContent}
                autoComplete="firstName"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                helperText={this.state.errors.firstName}
                error={this.state.errors.firstName.trim().length !== 0}
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
              value = {this.state.lastName}
              onChange={this.updateContent}
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lastName"
                helperText={this.state.errors.lastName}
                error={this.state.errors.lastName.trim().length !== 0}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                value = {this.state.username}
                onChange={this.updateContent}
                helperText={this.state.errors.username}
                error={this.state.errors.username.trim().length !== 0}
                variant="outlined"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                autoComplete="username"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
              value = {this.state.password}
              onChange={this.updateContent}
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="password"
                helperText={this.state.errors.password}
                error={this.state.errors.password.trim().length !== 0}
              />
                <div className='info'>
              <small>Password must be eight characters in length.</small>
            </div>
            </Grid>
          </Grid>
          <Button
            type="submit"
            onClick={this.handleSubmit}
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            disabled={errors.firstName.trim().length > 0 || errors.lastName.trim().length > 0 || errors.password.trim().length > 0
              || this.state.firstName.trim().length < 1 || this.state.lastName.trim().length < 1 || this.state.password.trim().length < 1 || this.state.username.trim().length < 1}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link to='/sign-in' variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}
}

export default connect(
  ({account}) => ({ account }),
  { signup }) (withStyles(styles, { withTheme: true })(SignUp));