import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Drawer from 'material-ui/Drawer'
import Button from 'material-ui/Button'
import Divider from 'material-ui/Divider'
import Typography from 'material-ui/Typography';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List'

import Tooltip from 'material-ui/Tooltip'
import IconButton from 'material-ui/IconButton'
import EmailIcon from 'material-ui-icons/Email'
import PersonIcon from 'material-ui-icons/Person'
import ContactPhoneIcon from 'material-ui-icons/ContactPhone'
import CreditCardIcon from 'material-ui-icons/CreditCard';
import PermIdentityIcon from 'material-ui-icons/PermIdentity'
import DeleteIcon from 'material-ui-icons/Delete'
import HotelIcon from 'material-ui-icons/Hotel'
import HotTubIcon from 'material-ui-icons/HotTub'
import FeedbackIcon from 'material-ui-icons/Feedback'
import BusinessIcon from 'material-ui-icons/Business'
import LibraryBooksIcon from 'material-ui-icons/LibraryBooks'
import RoomIcon from 'material-ui-icons/Room'
import EventIcon from 'material-ui-icons/Event'

import PropertyEditDrawer from './PropertyEditDrawer'
import DescriptionIcon from 'material-ui-icons/Description'
import _ from 'lodash';

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
  marginRight:"30%"
  }


});

class PropertyDetailsComponent extends React.Component {
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
    const owner = _.filter(this.props.owner, {'property': this.props.id });
    const ownerList = (owner.map((n,index) => {
        return(
          <ListItem key={n.id} className = {classes.item}>
            <ListItemIcon>
            <PersonIcon />
            </ListItemIcon>
            <ListItemText primary="Owner" secondary={n.firstname + " " + n.lastname} />
            <Divider />
          </ListItem>
          );
        })
      )

    const sideList = (
    <div className={classes.list}>
    <br />

    <Typography type="headline" className = {classes.text} gutterBottom>
       Property Information
    <Divider />
    </Typography>

      <ListItem  className = {classes.item}>
        <ListItemIcon>
        <RoomIcon />
        </ListItemIcon>
        <ListItemText primary="Location" secondary={this.props.location} />
        <Divider />
      </ListItem>

       <ListItem  className = {classes.item}>
        <ListItemIcon>
        <EventIcon />
        </ListItemIcon>
       <ListItemText primary="Year of Completion" secondary={this.props.year_of_completion} />
        <Divider />
      </ListItem>

      <Typography type="headline" className = {classes.text} gutterBottom>
       Owner Information
        <Divider />
       </Typography>
        {ownerList}
         <br />

        <ListItem >
          <div  className={classes.button}>
          <PropertyEditDrawer
            id = {this.props.id}
             name={this.props.name }
             location={this.props.location}
             year_of_completion={this.props.year_of_completion}
             owner={this.props.owner}
             notes={this.props.notes}

          />
             </div>

          <Button color="accent" onClick={()=>(this.props.onDeleteProperty(this.props.id))}>Delete Property</Button>
          </ListItem>

    </div>
    );

  return (
  <div className={classes.root} >
            {sideList}
  </div>
    );
  }
}


export default withStyles(styles)(PropertyDetailsComponent);