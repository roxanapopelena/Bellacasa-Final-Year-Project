import React, {Component} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import {Link} from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import fetchStates from '../reducers/fetchStates';
import { login } from '../actions/account';

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

const styles = theme  => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(/images/AsteriaNL.jpg)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
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
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
});

class SignInSide extends Component {
  state= { username : '', password: '', buttonClicked:false};
  

updateUsername = event => {
    this.setState({ username: event.target.value});
}

updatePassword = event => {
    this.setState({ password: event.target.value});
}

  login = (event) => {
    event.preventDefault();
    this.setState({buttonClicked: true});

    const { username, password}=this.state;

    this.props.login({username, password });
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
  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
           {this.Error}
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              value = {this.state.username}
              onChange={this.updateUsername}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoFocus
            />
            <TextField
              value = {this.state.password}
              onChange={this.updatePassword}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
            />
            <Button
              type="submit"
              onClick={this.login}
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              disabled={this.state.password.trim().length < 1 || this.state.username.trim().length < 1}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item>
                <Link to="/sign-up" variant="body2">
                  Don't have an account? Sign Up
                </Link>
              </Grid>
            </Grid>
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}
}

export default connect(
  ({account}) => ({ account }),
  { login }) (withStyles(styles, { withTheme: true })(SignInSide));