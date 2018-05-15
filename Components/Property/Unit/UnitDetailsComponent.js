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
import CloseIcon from 'material-ui-icons/Close'

import UnitEditDrawer from './UnitEditDrawer'
import DescriptionIcon from 'material-ui-icons/Description';


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

class UnitDetailsComponent extends React.Component {
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
        <br/>
        <ListItem >
          <ListItemText primary="Name " secondary={this.props.name} />
        <Divider />
          </ListItem>

    <Typography type="headline" className = {classes.text} gutterBottom>
       Unit Information
    <Divider />
    </Typography>

      <ListItem >
        <ListItemIcon>
        <HotelIcon />
        </ListItemIcon>
        <ListItemText primary="No of Beds" secondary={this.props.no_of_bed} />
        <Divider />
      </ListItem>

       <ListItem >
        <ListItemIcon>
        <HotTubIcon />
        </ListItemIcon>
       <ListItemText primary="No of Bathroom" secondary={this.props.no_of_bathroom} />
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
          <div tabIndex={0} role="button" >
           <IconButton color="accent" onClick={this.toggleDrawer('right', false)} aria-label="Close">
            <CloseIcon />
            </IconButton>
            {sideList}
            <br />

          <ListItem >
          <div  className={classes.button}>
          <UnitEditDrawer
           id = {this.props.id}
           name={this.props.name}
           no_of_bed={this.props.no_of_bed}
           status={this.props.status}
           no_of_bathroom={this.props.no_of_bathroom}
           prop_id = {this.props.prop_id}
          />
             </div>
             <Button color="accent" onClick={()=>(this.props.onDeleteUnit(this.props.id))}>Delete Unit</Button>
          </ListItem>

          </div>
        </Drawer>
      </div>
    );
  }
}


export default withStyles(styles)(UnitDetailsComponent);