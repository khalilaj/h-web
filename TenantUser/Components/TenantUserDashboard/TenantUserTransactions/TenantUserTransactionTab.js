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


import TenantUserMaintenanceTransactionTab from './TenantUserMaintenance/TenantUserMaintenanceTransactionTab'
import TenantUserServiceChargeTransactionTab from './TenantUserServiceCharge/TenantUserServiceChargeTransactionTab'
import TenantUserRentTransactionTab from './TenantUserRent/TenantUserRentTransactionTab'
import TenantUserDepositTransactionTab from './TenantUserDeposit/TenantUserDepositTransactionTab'

import _ from 'lodash';

import {connect} from 'react-redux'
import api from '../../../../api'


const mapStateToProps = (store) => ({
  sto:store,
  agreement : store.agreement.agreement,
  tenant: store.tenant.tenant,
  property: store.property.property,
  unit: store.unit.unit,
  transaction: store.transaction.transaction
});


const mapDispatchToProps = (dispatch) => ({
  getTransaction:(payload) => dispatch({type:'GET_TRANSACTIONS', payload:payload }),
 });


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


class TenantUserTransactionTab extends React.Component {
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

   componentDidMount(){
       const payload = api.Transaction.all();
       this.props.getTransaction(payload)
    }

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    const rent = _.filter(this.props.transaction, { 'transaction_type': 'RN' });
    const serviceCharge = _.filter(this.props.transaction, { 'transaction_type': 'SC' });
    const maintenance = _.filter(this.props.transaction, { 'transaction_type': 'MT'});
    const deposit = _.filter(this.props.transaction, { 'transaction_type': 'DP'});

    console.log(this.props.transaction)

    return (
     <div>
      <div className={classes.appBarRoot} >
          <Tabs value={value}  onChange={this.handleChange}>
            <Tab label="RENT" />
            <Tab label="SERVICE CHARGE" />
            <Tab label="MAINTENANCE" />
            <Tab label="DEPOSIT" />
          </Tabs>

        {value === 0 &&
        <TabContainer>
          <TenantUserRentTransactionTab
           transaction={rent}
           unit = {this.props.unit}
           payer = {this.props.payer}
           property = {this.props.property}
        />
        </TabContainer>}

        {value === 1 &&
         <TabContainer>
           <TenantUserServiceChargeTransactionTab
            transaction={serviceCharge}

            unit = {this.props.unit}
            payer = {this.props.payer}
            property = {this.props.property}
         />
         </TabContainer>
        }
        {value === 2 &&
         <TabContainer>
            <TenantUserMaintenanceTransactionTab
             transaction={maintenance}
             unit = {this.props.unit}
             payer = {this.props.payer}
             property = {this.props.property}
         />
         </TabContainer>
        }
        {value === 3 &&
         <TabContainer>
         <TenantUserDepositTransactionTab
           transaction = {deposit}
           unit = {this.props.unit}
           payer = {this.props.payer}
           property = {this.props.property}
         />
         </TabContainer>
        }

      </div>
    </div>


    );
  }
}



TenantUserTransactionTab = withStyles(styles, {name: 'TenantUserTransactionTab'})(TenantUserTransactionTab);

export default  connect(mapStateToProps, mapDispatchToProps) (TenantUserTransactionTab);