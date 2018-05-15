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
import TransactionForm from './TransactionForm';
import classNames from 'classnames';
import keycode from 'keycode';
import Table, {
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TablePagination,
  TableRow,
  TableSortLabel,
} from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import Checkbox from 'material-ui/Checkbox';
import Tooltip from 'material-ui/Tooltip';
import DeleteIcon from 'material-ui-icons/Delete';
import FilterListIcon from 'material-ui-icons/FilterList';
import Tabs, { Tab } from 'material-ui/Tabs';


import MaintenanceTransactionTab from './Maintenance/MaintenanceTransactionTab'
import ServiceChargeTransactionTab from './ServiceCharge/ServiceChargeTransactionTab'
import RentTransactionTab from './Rent/RentTransactionTab'
import ReportsComponent from './Reports/ReportsComponent'
import DepositTransactionTab from './Deposit/DepositTransactionTab'
import TransactionSettingsMenu from './TransactionSettingsMenu'

import _ from 'lodash';

function TabContainer(props) {
  return <div>{props.children}</div>;
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};


const styles = {
  appBarRoot: {
    width: '100%',
  },
  appBar: {
    position: 'relative',
  },
  flex: {
    flex: 1,
  },
  root: {
    width: '100%',
    marginLeft:'2%',
  },
};

function Transition(props) {
  return <Slide direction="up" {...props} />;
}


class TransactionTab extends React.Component {
  state = {
    open: false,
    value: 0,
  };
  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleRequestClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;
    const rent = _.filter(this.props.transaction, { 'transaction_type': 'RN', 'property': this.props.prop_id });
    const serviceCharge = _.filter(this.props.transaction, { 'transaction_type': 'SC', 'property': this.props.prop_id });
    const maintenance = _.filter(this.props.transaction, { 'transaction_type': 'MT', 'property': this.props.prop_id });
    const deposit = _.filter(this.props.transaction, { 'transaction_type': 'DP', 'property': this.props.prop_id });

    return (
      <div>
        <Button  color="primary" onClick={this.handleClickOpen}>VIEW MORE</Button>
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
                {this.props.title}
             </Typography>
             <IconButton aria-label="More" aria-owns={this.state.open ? 'long-menu' : null} aria-haspopup="true" onClick={this.handleClick} >
            </IconButton>
             <TransactionSettingsMenu />
            </Toolbar>
          </AppBar>

     <div>
      <div className={classes.appBarRoot} >
        <AppBar position="static" color="default" color="inherit">
          <Tabs value={value} onChange={this.handleChange}>
            <Tab label="RENT" />
            <Tab label="SERVICE CHARGE" />
            <Tab label="MAINTENANCE" />
            <Tab label="DEPOSIT" />
          </Tabs>
        </AppBar>

        {value === 0 &&
        <TabContainer>
          <RentTransactionTab
           transaction={rent}
           unit = {this.props.unit}
           payer = {this.props.payer}
           property = {this.props.property}

           onDeleteTransaction = {this.props.onDeleteTransaction}

           PropertyState = {this.props.PropertyState}
           UnitState = {this.props.UnitState}
           PayerState = {this.props.PayerState}
           TransactionStatusState = {this.props.TransactionStatusState}
           TransactionTypeState = {this.props.TransactionTypeState}


        />
        </TabContainer>}

        {value === 1 &&
         <TabContainer>
           <ServiceChargeTransactionTab
            transaction={serviceCharge}
            unit = {this.props.unit}
            payer = {this.props.payer}
            property = {this.props.property}

            onDeleteTransaction = {this.props.onDeleteTransaction}

             PropertyState = {this.props.PropertyState}
             UnitState = {this.props.UnitState}
             PayerState = {this.props.PayerState}
             TransactionStatusState = {this.props.TransactionStatusState}
             TransactionTypeState = {this.props.TransactionTypeState}
         />
         </TabContainer>
        }
        {value === 2 &&
         <TabContainer>
            <MaintenanceTransactionTab
             transaction={maintenance}
             unit = {this.props.unit}
             payer = {this.props.payer}
             property = {this.props.property}

             onDeleteTransaction = {this.props.onDeleteTransaction}

             PropertyState = {this.props.PropertyState}
             UnitState = {this.props.UnitState}
             PayerState = {this.props.PayerState}
             TransactionStatusState = {this.props.TransactionStatusState}
             TransactionTypeState = {this.props.TransactionTypeState}
         />
         </TabContainer>
        }
        {value === 3 &&
         <TabContainer>
         <DepositTransactionTab
          transaction = {deposit}
          onDeleteTransaction = {this.props.onDeleteTransaction}

          unit = {this.props.unit}
          payer = {this.props.payer}
          property = {this.props.property}

          PropertyState = {this.props.PropertyState}
          UnitState = {this.props.UnitState}
          PayerState = {this.props.PayerState}
          TransactionStatusState = {this.props.TransactionStatusState}
          TransactionTypeState = {this.props.TransactionTypeState}
        />
         </TabContainer>
        } 
      </div>
    </div>



        </Dialog>
      </div>
    );
  }
}

TransactionTab.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles) (TransactionTab)

