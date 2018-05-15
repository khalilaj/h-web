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
import DateRangeIcon from 'material-ui-icons/DateRange'
import PersonIcon from 'material-ui-icons/Person';
import DescriptionIcon from 'material-ui-icons/Description';
import CreditCardIcon from 'material-ui-icons/CreditCard';
import PermIdentityIcon from 'material-ui-icons/PermIdentity';
import DeleteIcon from 'material-ui-icons/Delete';
import FeedbackIcon from 'material-ui-icons/Feedback'
import AccountBalanceIcon from 'material-ui-icons/AccountBalance'
import CloseIcon from 'material-ui-icons/Close';
import BusinessIcon from 'material-ui-icons/Business';
import HomeIcon from 'material-ui-icons/Home'

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

class TenantUserTransactionDetailsComponent extends React.Component {
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
    const property = _.find(this.props.property, ['id', this.props.property_id]);
    const unit = _.find(this.props.unit, ['id', this.props.unit_id]);
    const payer = _.find(this.props.payer, ['id', this.props.payer_id]);
    const payer_name =  payer ? (payer.account.firstname + " " + payer.account.lastname ) : 'Unavailable'

    console.log(this.props.id)

    const sideList = (
    <div className={classes.list}>
     <Typography type="headline" className = {classes.text} gutterBottom>
       General Information
       <Divider />
    </Typography>

      <ListItem >
        <ListItemText primary="Transaction Title"  secondary={this.props.name}/>
        <Divider />
      </ListItem>
     <br />
    <Typography type="headline" className = {classes.text} gutterBottom>
       Payment Information
    <Divider />
    </Typography>

      <ListItem >
        <ListItemIcon>
        <AccountBalanceIcon />
        </ListItemIcon>
        <ListItemText primary="Amount Due" secondary={this.props.amount_due} />
        <ListItemText primary="Amount Paid" secondary={this.props.amount_paid} />
        <Divider />
      </ListItem>
      <br />
    <Typography type="headline" className = {classes.text} gutterBottom>
       Date Information
    <Divider />
    </Typography>
       <ListItem >
        <ListItemIcon>
        <DateRangeIcon />
        </ListItemIcon>
        <ListItemText primary="Due Date" secondary={this.props.date_due} />
        <ListItemText primary="Date Paid" secondary={this.props.date_paid} />
        <Divider />
      </ListItem>
      <br />
      <Typography type="headline" className = {classes.text} gutterBottom>
           Transaction Information
        <Divider />
        </Typography>
      <ListItem >
        <ListItemIcon>
        <CreditCardIcon />
        </ListItemIcon>
        <ListItemText primary="Transaction Type" secondary={this.props.transaction_type} />
        <Divider />
      </ListItem>
      <ListItem >
        <ListItemIcon>
        <FeedbackIcon />
        </ListItemIcon>
        <ListItemText primary="Transaction Status" secondary={this.props.transaction_status} />
        <Divider />
      </ListItem>

    <ListItem >
        <ListItemIcon>
        <BusinessIcon />
        </ListItemIcon>
        <ListItemText primary="Property" secondary={property.name} />
        <Divider />
      </ListItem>

      <ListItem >
        <ListItemIcon>
        <HomeIcon />
        </ListItemIcon>
        <ListItemText primary="Unit" secondary={unit.name} />
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

           </div>
        </Drawer>
      </div>
    );
  }
}


export default withStyles(styles)(TenantUserTransactionDetailsComponent);