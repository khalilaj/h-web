import React, {Component} from 'react';
import api from '../../api'

import {connect} from 'react-redux';

import AddTransactionComponent from '../../Components/Transactions/AddTransactionComponent'
import moment from 'moment';

const mapStateToProps = (store) => ({
  sto:store,
  transactionForm: store.transaction.formData,
  property: store.property.property,
  unit: store.unit.unit,
  tenant: store.tenant.tenant
});

const mapDispatchToProps = (dispatch) => ({
  addTransaction: (payload) => dispatch({type:'ADD_TRANSACTION', payload:payload }),
  onTransactionFormChange: (key, value) => dispatch({ type:"ON_TRANSACTION_FORM_CHANGE", key, value}),
 });


class TransactionAdd extends Component{
    state = {
        selectPropertyState: null,
        selectPayerState: null,
        selectUnitState: null,
        selectTransactionTypeState: null,
        selectTransactionStatusState: null,
         }

   onTransactionFormTitleChange  = (ev) => this.props.onTransactionFormChange('name', ev.target.value);
   onTransactionFormAmountDueChange = (ev) => this.props.onTransactionFormChange('amount_due', ev.target.value);
   onTransactionFormAmountPaidChange = (ev) => this.props.onTransactionFormChange('amount_paid', ev.target.value);
   onTransactionFormDatePaidChange = (ev) => this.props.onTransactionFormChange('date_paid', ev.target.value);
   onTransactionFormDateDueChange= (ev) => { this.props.onTransactionFormChange('date_due', ev.target.value);  }

   onTransactionFormPropertyChange = (ev) => {
       this.setState({selectPropertyState:ev.target.value})
       this.props.onTransactionFormChange('property', ev.target.value);
   }
    onTransactionFormTransactionTypeChange = (ev) => {
      this.setState({selectTransactionTypeState:ev.target.value})
      this.props.onTransactionFormChange('transaction_type', ev.target.value);
      }

      onTransactionFormTransactionStatusChange = (ev) => {
      this.setState({selectTransactionStatusState:ev.target.value})
      this.props.onTransactionFormChange('transaction_status', ev.target.value);
      }

      onTransactionFormUnitChange = (ev) => {
        this.setState({selectUnitState:ev.target.value})
        this.props.onTransactionFormChange('unit', ev.target.value);
      }
      onTransactionFormPayerChange= (ev) => {
        this.setState({selectPayerState:ev.target.value})
        this.props.onTransactionFormChange('payer', ev.target.value);
      }

   onTransactionFormSubmit = (ev) => {
     ev.preventDefault();
     const transactionData = this.props.transactionForm;
     const payload = api.Transaction.add(transactionData);
     this.props.addTransaction(payload)
     console.log(payload)
     }

    render(){
        return(
        <AddTransactionComponent
          onTransactionFormTitleChange = {this.onTransactionFormTitleChange}
          onTransactionFormPayerChange = {this.onTransactionFormPayerChange}
          onTransactionFormAmountDueChange = {this.onTransactionFormAmountDueChange}
          onTransactionFormAmountPaidChange = {this.onTransactionFormAmountPaidChange}
          onTransactionFormTransactionTypeChange = {this.onTransactionFormTransactionTypeChange}
          onTransactionFormTransactionStatusChange = {this.onTransactionFormTransactionStatusChange}
          onTransactionFormDatePaidChange = {this.onTransactionFormDatePaidChange}
          onTransactionFormDateDueChange = {this.onTransactionFormDateDueChange}
          onTransactionFormPropertyChange = {this.onTransactionFormPropertyChange}
          onTransactionFormUnitChange = {this.onTransactionFormUnitChange}
          onTransactionFormSubmit = {this.onTransactionFormSubmit}

           property = {this.props.property}
           payer = {this.props.tenant}
           unit = {this.props.unit}

           PropertyState = {this.state.selectPropertyState}
           UnitState = {this.state.selectUnitState}
           PayerState = {this.state.selectPayerState}
           TransactionStatusState = {this.state.selectTransactionStatusState}
           TransactionTypeState = {this.state.selectTransactionTypeState}
         />
  );
 }
}


export default connect(mapStateToProps, mapDispatchToProps) (TransactionAdd)

