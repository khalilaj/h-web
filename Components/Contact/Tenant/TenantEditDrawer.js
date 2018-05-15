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

import TenantEdit from '../../../Containers/TenantEdit';
import TenantEditComponent from './TenantEditComponent';

const styles = {
  appBar: {
    position: 'relative',
  },
  flex: {
    flex: 1,
  },
};

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class TenantEditDrawer extends React.Component {
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
        <Button  color="primary" onClick={this.handleClickOpen}>Edit Contact</Button>
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
                EDIT TENANT DETAILS
             </Typography>
            </Toolbar>
          </AppBar>
        <br/> <br /> <br />
         <TenantEdit
         firstname = {this.props.firstname}
         lastname = {this.props.lastname}
         phone_number = {this.props.phone_number}
         national_id = {this.props.national_id}
         email =  {this.props.email}
         username = {this.props.username}
         id = {this.props.id}
         account_id ={this.props.account_id}

         onTenantFormEmailChange = {this.props.onTenantFormEmailChange }
         onTenantFormPassChange = {this.props.onTenantFormPassChange }
         onTenantFormFirstnameChange = {this.props.onTenantFormFirstnameChange }
         onTenantFormLastnameChange  = {this.props.onTenantFormLastnameChange }
         onTenantFormNationalIdChange = {this.props.onTenantFormNationalIdChange }
         onTenantFormPhoneChange= {this.props.onTenantFormPhoneChange }
         onTenantFormUsernameChange= {this.props.onTenantFormUsernameChange}
         onTenantFormSubmit= {this.props.onTenantFormSubmit}
       />
        </Dialog>
      </div>
    );
  }
}



export default withStyles(styles)(TenantEditDrawer);