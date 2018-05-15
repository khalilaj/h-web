import React from 'react';
import { withStyles } from 'material-ui/styles';

import PropTypes from 'prop-types';
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

          selectPayerState = {this.props.selectPayerState}
          selectTransactionTypeState = {this.props.selectTransactionTypeState}
          selectTransactionStatusState = {this.props.selectTransactionStatusState}
          selectPropertyState = {this.props.selectPropertyState}
          selectUnitState = {this.props.selectUnitState}

           property = {this.props.property}
           tenant = {this.props.tenant}
           unit = {this.props.unit}
             />
          </div>
        </div>
      );
 }
}

export default withStyles(styles) (AddTransactionComponent)