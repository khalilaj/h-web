import React from 'react';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';

import PropTypes from 'prop-types';
import AppBar from 'material-ui/AppBar';
import Tabs, { Tab } from 'material-ui/Tabs';


import TransactionForm from './TransactionForm'



const styles = theme => ({
  root: {
    width: '100%',
    flexGrow: 1,
  },
 }
 );

class AddTransactionComponent extends React.Component{


 render()
   {const { classes } = this.props;

   return(
    <div>
      <div className={classes.root} >
         <TransactionForm
          onTransactionFormTitleChange = {this.props.onTransactionFormTitleChange}
          onTransactionFormPayerChange = {this.props.onTransactionFormPayerChange}
          onTransactionFormAmountDueChange = {this.props.onTransactionFormAmountDueChange}
          onTransactionFormAmountPaidChange = {this.props.onTransactionFormAmountPaidChange}
          onTransactionFormTransactionTypeChange = {this.props.onTransactionFormTransactionTypeChange}
          onTransactionFormTransactionStatusChange = {this.props.onTransactionFormTransactionStatusChange}
          onTransactionFormDatePaidChange = {this.props.onTransactionFormDatePaidChange}
          onTransactionFormDateDueChange = {this.props.onTransactionFormDateDueChange}
          onTransactionFormPropertyChange = {this.props.onTransactionFormPropertyChange}
          onTransactionFormUnitChange = {this.props.onTransactionFormUnitChange}
          onTransactionFormSubmit = {this.props.onTransactionFormSubmit}

           payer = {this.props.payer}
           unit = {this.props.unit}
           property = {this.props.property}

           PropertyState = {this.props.PropertyState}
           UnitState = {this.props.UnitState}
           PayerState = {this.props.PayerState}
           TransactionStatusState = {this.props.TransactionStatusState}
           TransactionTypeState = {this.props.TransactionTypeState}
           startDate = {this.startDate}

         />
    </div>
  </div>
  );
 }

}


export default withStyles(styles) (AddTransactionComponent)