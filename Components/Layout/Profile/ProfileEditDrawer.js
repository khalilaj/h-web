import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import Dialog from 'material-ui/Dialog';
import List, { ListItem, ListItemText } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';
import CloseIcon from 'material-ui-icons/Close';
import Slide from 'material-ui/transitions/Slide';

import UserForm from './UserForm'


const styles = {
  appBar: {
    position: 'relative',
  },
  flex: {
    flex: 1,
  }
};

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class ProfileEditDrawer extends React.Component {
  state = {
    open: false,
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleRequestClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Button  color="primary" className={classes.drawer} onClick={this.handleClickOpen}>Edit Profile</Button>
        <Dialog
          fullScreen
          open={this.state.open}
          onRequestClose={this.handleRequestClose}
          transition={Transition}
        >
          <AppBar className={classes.appBar}>
            <Toolbar>
              <IconButton color="contrast" onClick={this.handleRequestClose} aria-label="Close">
                <CloseIcon />
              </IconButton>
              <Typography type="title" color="inherit" className={classes.flex}>
                EDIT PROFILE DETAILS
             </Typography>
            </Toolbar>
          </AppBar>
           <UserForm />
        </Dialog>
      </div>
    );
  }
}

ProfileEditDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProfileEditDrawer);