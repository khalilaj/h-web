import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import Slide from 'material-ui/transitions/Slide';

import UserLogInForm from './UserLogInForm';
import AppDialog from '../Common/AppDialog';
import LogInNavigation from './LogInNavigation';

import huduma from '../../Images/huduma.png';

const styles = theme => ({
  root: {
    marginTop: "5%",
    marginLeft: "35%",
  },
 }
)

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class MainLogIn extends React.Component {
  state = {
    OpenLogIn: false,
  };

  handleLogInClickOpen = () => {this.setState({ OpenLogIn: true })};
  handleLogInRequestClose = () => {this.setState({ OpenLogIn: false })};


  render() {
  const { classes } = this.props;
    return (
      <div>
        <img src={huduma}  className={classes.root} />

       <LogInNavigation LogIn={this.handleLogInClickOpen} />

       <AppDialog
        title="LOGIN"
        open={this.state.OpenLogIn}
        onHandleRequestClose ={this.handleLogInRequestClose}
        onHandleClickOpen={this.handleLogInClickOpen} >
        <UserLogInForm onEmailChange={this.props.onEmailChange}  onPassChange={this.props.onPassChange} onLogin={this.props.onLogin}  />
        </AppDialog>
      </div>
    );
  }
}


export default withStyles(styles) (MainLogIn);



