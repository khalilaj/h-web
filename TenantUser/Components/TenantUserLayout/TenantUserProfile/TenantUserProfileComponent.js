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
import HotelIcon from 'material-ui-icons/Hotel';
import HotTubIcon from 'material-ui-icons/HotTub';
import FeedbackIcon from 'material-ui-icons/Feedback'
import BusinessIcon from 'material-ui-icons/Business'
import LibraryBooksIcon from 'material-ui-icons/LibraryBooks'
import RoomIcon from 'material-ui-icons/Room'
import EventIcon from 'material-ui-icons/Event'
import DescriptionIcon from 'material-ui-icons/Description';

const styles = theme => ({
  list: {
    width: "50%",
    marginLeft:"25%",
     marginRight:"30%"
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
  item:{
  marginLeft:"20%",
  },
  button:{
  marginRight:"30%",
  marginLeft:"40%"
  },
    item:{
  marginLeft:"10%",
  },
});

class TenantUserProfileComponent extends React.Component {

  render() {
    const { classes } = this.props;
    return(
   <div className={classes.list}>
    <br />
     <Typography type="headline" className = {classes.text} gutterBottom>
       General Information
       <Divider />
    </Typography>

      <ListItem  className={classes.item}>
        <ListItemIcon>
        <PersonIcon />
        </ListItemIcon>
        <ListItemText primary="Firstname" secondary={this.props.profile.firstname} />
        <ListItemText primary="Lastname" secondary={this.props.profile.lastname} />
        <Divider />
      </ListItem>
     <br />
    <Typography type="headline" className = {classes.text} gutterBottom>
       Contact Information
    <Divider />
    </Typography>
      <ListItem  className = {classes.item}>
        <ListItemIcon>
        <ContactPhoneIcon />
        </ListItemIcon>
        <ListItemText primary="Phone" secondary={this.props.profile.phone_number} />
        <Divider />
      </ListItem>

       <ListItem className = {classes.item} >
        <ListItemIcon>
        <EmailIcon />
        </ListItemIcon>
        <ListItemText primary="Email" secondary={this.props.profile.email} />
        <Divider />
      </ListItem>

      <ListItem className = {classes.item} >
        <ListItemIcon>
        <CreditCardIcon />
        </ListItemIcon>
        <ListItemText primary="National ID" secondary={this.props.profile.national_id} />
        <Divider />
      </ListItem>
         <br />
     <Typography type="headline" className = {classes.text} gutterBottom>
       User Information
       <Divider />
    </Typography>

      <ListItem className = {classes.item}>
        <ListItemIcon>
        <PermIdentityIcon />
        </ListItemIcon>
        <ListItemText primary="Username" secondary={this.props.profile.username} />
        <Divider />
      </ListItem>

    </div>
    );

  }
}



export default withStyles(styles)(TenantUserProfileComponent);