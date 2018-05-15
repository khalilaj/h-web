import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import Button from 'material-ui/Button';
import Divider from 'material-ui/Divider';
import Typography from 'material-ui/Typography';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';

import Tooltip from 'material-ui/Tooltip';
import IconButton from 'material-ui/IconButton';
import EmailIcon from 'material-ui-icons/Email';
import PersonIcon from 'material-ui-icons/Person';
import ContactPhoneIcon from 'material-ui-icons/ContactPhone';
import CreditCardIcon from 'material-ui-icons/CreditCard';
import PermIdentityIcon from 'material-ui-icons/PermIdentity';
import DeleteIcon from 'material-ui-icons/Delete';
import CloseIcon from 'material-ui-icons/Close';


import TenantEditDrawer from './TenantEditDrawer'


const styles = theme => ({
  list: {
    width: 400,
  },
  listFull: {
    width: 'auto',
  },
  text:{
  marginTop: "2%",
  marginLeft:"5%",
  marginRight:"5%",
  marginBottom: "2%"
  },
  dialog:{
  marginTop: "10%",
  marginLeft:"5%",
  backgroundColor: theme.palette.background.default,
  float:"right",
  marginBottom: "2%"
  },
  drawer:{
  marginTop: "10%",
  marginLeft:"10%",
  float:"left",
  width:"10%",
  marginBottom: "2%"
  },
  button:{
  marginRight:"30%"
  }


});

class TenantDetailsComponent extends React.Component {
  state = {
    right: false,
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };

  render() {
    const { classes } = this.props;

    const sideList = (
    <div className={classes.list}>
     <Typography type="headline" className = {classes.text} gutterBottom>
       General Information
       <Divider />
    </Typography>

      <ListItem >
        <ListItemIcon>
        <PersonIcon />
        </ListItemIcon>
        <ListItemText primary="Firstname" secondary={this.props.firstname} />
        <ListItemText primary="Lastname" secondary={this.props.lastname} />
        <Divider />
      </ListItem>
     <br />
    <Typography type="headline" className = {classes.text} gutterBottom>
       Contact Information
    <Divider />
    </Typography>
      <ListItem >
        <ListItemIcon>
        <ContactPhoneIcon />
        </ListItemIcon>
        <ListItemText primary="Phone" secondary={this.props.phone_number} />
        <Divider />
      </ListItem>

       <ListItem >
        <ListItemIcon>
        <EmailIcon />
        </ListItemIcon>
        <ListItemText primary="Email" secondary={this.props.email} />
        <Divider />
      </ListItem>

      <ListItem >
        <ListItemIcon>
        <CreditCardIcon />
        </ListItemIcon>
        <ListItemText primary="National ID" secondary={this.props.national_id} />
        <Divider />
      </ListItem>
         <br />
     <Typography type="headline" className = {classes.text} gutterBottom>
       User Information
       <Divider />
    </Typography>

      <ListItem >
        <ListItemIcon>
        <PermIdentityIcon />
        </ListItemIcon>
        <ListItemText primary="Username" secondary={this.props.username} />
        <Divider />
      </ListItem>


    </div>
    );

  return (
      <div className={classes.root} >
        <Button color="primary" onClick={this.toggleDrawer('right', true)}>View Details</Button>

        <Drawer
          anchor="right"
          open={this.state.right}
          onRequestClose={this.toggleDrawer('right', false)}
        >
          <div
            tabIndex={0}
            role="button"
          >

        <IconButton color="accent" onClick={this.toggleDrawer('right', false)} aria-label="Close">
          <CloseIcon />
        </IconButton>

            {sideList}

          <ListItem >
          <div  className={classes.button}>
          <TenantEditDrawer
             className={classes.drawer}
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
             </div>

             <Button color="accent" onClick={()=>(this.props.onDeleteTenant(this.props.id))}>Delete Contact</Button>
          </ListItem>

          </div>
        </Drawer>
      </div>
    );
  }
}


export default withStyles(styles)(TenantDetailsComponent);