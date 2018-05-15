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
import HomeIcon from 'material-ui-icons/Home'
import EventIcon from 'material-ui-icons/Event'
import AttachMoneyIcon from 'material-ui-icons/AttachMoney'

import AgreementEditDrawer from './AgreementEditDrawer'
import DescriptionIcon from 'material-ui-icons/Description';
import AssignmentIcon from 'material-ui-icons/Assignment';
import CloseIcon from 'material-ui-icons/Close';
import _ from 'lodash';

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

class AgreementDetailsComponent extends React.Component {
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
    const tenant = _.find(this.props.tenant, ['id', this.props.tenant_id]);
    const unit = _.find(this.props.unit, ['id', this.props.unit_id]);

    const sideList = (
    <div className={classes.list}>
    <br />
     <ListItem >
        <ListItemText primary="Tittle " secondary={this.props.tittle} />
        <Divider />
      </ListItem>
     <Typography type="headline" className = {classes.text} gutterBottom>
       Property Information Terms
       <Divider />
    </Typography>


      <ListItem >
       <ListItemIcon>
        <HomeIcon />
        </ListItemIcon>
      <ListItemText primary="Unit " secondary={unit.name} />
        <Divider />
      </ListItem>
     <br />

      <Typography type="headline" className = {classes.text} gutterBottom>
           Resident
        <Divider />
        </Typography>

       <ListItem >
        <ListItemIcon>
        <PersonIcon />
        </ListItemIcon>
       <ListItemText primary="Tenant" secondary={tenant.account.firstname + " " + tenant.account.lastname} />
        <Divider />
      </ListItem>

    <Typography type="headline" className = {classes.text} gutterBottom>
       Invoicing Terms
    <Divider />
    </Typography>

      <ListItem >
        <ListItemIcon>
        <EventIcon />
        </ListItemIcon>
         <ListItemText primary="Rent Start Date" secondary={this.props.rent_start_date} />
        <Divider />
      </ListItem>
    <ListItem >
        <ListItemIcon>
        <EventIcon />
        </ListItemIcon>
         <ListItemText primary="Day to Pay Rent" secondary={this.props.day_to_pay_rent} />
        <Divider />
      </ListItem>
    <ListItem >
        <ListItemIcon>
        <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="Rent Payment Type" secondary={this.props.rent_payment_type} />
        <Divider />
      </ListItem>

        <Typography type="headline" className = {classes.text} gutterBottom>
           Rent
        <Divider />
        </Typography>

       <ListItem >
        <ListItemIcon>
        <AttachMoneyIcon />
        </ListItemIcon>
       <ListItemText primary="Rent Amount" secondary={this.props.rent_amount} />
        <Divider />

      </ListItem><Typography type="headline" className = {classes.text} gutterBottom>
           Deposit
        <Divider />
        </Typography>

       <ListItem >
        <ListItemIcon>
        <AttachMoneyIcon />
        </ListItemIcon>
       <ListItemText primary="Deposit Amount" secondary={this.props.deposit_amount} />
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
            <br />

          <ListItem >
          <div  className={classes.button}>
          <AgreementEditDrawer
               id = {this.props.id}
               tittle={this.props.tittle}
               description={this.props.description}
               deposit_amount={this.props.deposit_amount}
               rent_amount={this.props.rent_amount}
               rent_payment_type={this.props.rent_payment_type}
               rent_start_date={this.props.rent_start_date}
               day_to_pay_rent={this.props.day_to_pay_rent}

               prop_id = {this.props.prop_id}
               tenant_id={this.props.tenant_id}
               unit_id={this.props.unit_id}


               tenant = {this.props.tenant}
               unit = {this.props.unit}
               property = {this.props.property}

           />
             </div>

            <Button color="accent">Delete Agreement</Button>

          </ListItem>

          </div>
        </Drawer>
      </div>
    );
  }
}

AgreementDetailsComponent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AgreementDetailsComponent);