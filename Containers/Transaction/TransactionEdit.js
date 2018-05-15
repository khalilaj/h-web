import React, {Component} from 'react';
import api from '../../api'

import {connect} from 'react-redux';

import EditTransactionComponent from '../../Components/Transactions/EditTransactionComponent'

const mapStateToProps = (store) => ({
  sto:store,
  formData: store.transaction.formData,
});

const mapDispatchToProps = (dispatch) => ({
  editTransaction: (payload) => dispatch({type:'EDIT_TRANSACTION', payload:payload }),
  getTransaction: (payload) => dispatch({type:'GET_TRANSACTIONS', payload:payload }),

  onFormChange: (key, value) => dispatch({ type:"ON_TRANSACTION_FORM_CHANGE", key, value}),
 });


class TransactionEdit extends Component{
    state = {
        selectPropertyState: null,
        selectPayerState: null,
        selectUnitState: null,
        selectTransactionTypeState: null,
        selectTransactionStatusState: null,

         }
    constructor(){
      super();
      this.onTransactionFormSubmit = this.onTransactionFormSubmit.bind(this)
      this.componentDidMount = this.componentDidMount.bind(this)
      }

   componentDidMount(){
    this.props.onFormChange('name', this.props.name);
    this.props.onFormChange('amount_due', this.props.amount_due);
    this.props.onFormChange('amount_paid', this.props.amount_paid);
    this.props.onFormChange('date_paid', this.props.date_paid);
    this.props.onFormChange('date_due',this.props.date_due);
    this.props.onFormChange('property', this.props.property_id);
    this.props.onFormChange('transaction_type', this.props.transaction_type);
    this.props.onFormChange('transaction_status', this.props.transaction_status);
    this.props.onFormChange('unit', this.props.unit_id);
    this.props.onFormChange('payer', this.props.payer_id);
    this.setState({
            selectPropertyState: this.props.property_id,
            selectPayerState : this.props.payer_id,
            selectUnitState: this.props.unit_id,
            selectTransactionTypeState: this.props.transaction_type,
            selectTransactionStatusState : this.props.transaction_status
    })
   }

    componentWillUnmount(){
        const payload = api.Transaction.all()
        this.props.getTransaction(payload)
    }

   onTransactionFormTitleChange  = (ev) => this.props.onFormChange('name', ev.target.value);
   onTransactionFormAmountDueChange = (ev) => this.props.onFormChange('amount_due', ev.target.value);
   onTransactionFormAmountPaidChange = (ev) => this.props.onFormChange('amount_paid', ev.target.value);
   onTransactionFormDatePaidChange = (ev) => this.props.onFormChange('date_paid', ev.target.value);
   onTransactionFormDateDueChange= (ev) => { this.props.onFormChange('date_due', ev.target.value); }

   onTransactionFormPropertyChange = (ev) => {
       this.setState({selectPropertyState:ev.target.value})
       this.props.onFormChange('property', ev.target.value);
   }
    onTransactionFormTransactionTypeChange = (ev) => {
      this.setState({selectTransactionTypeState:ev.target.value})
      this.props.onFormChange('transaction_type', ev.target.value);
      }

      onTransactionFormTransactionStatusChange = (ev) => {
      this.setState({selectTransactionStatusState:ev.target.value})
      this.props.onFormChange('transaction_status', ev.target.value);
      }

      onTransactionFormUnitChange = (ev) => {
        this.setState({selectUnitState:ev.target.value})
        this.props.onFormChange('unit', ev.target.value);
      }
      onTransactionFormPayerChange= (ev) => {
        this.setState({selectPayerState:ev.target.value})
        this.props.onFormChange('payer', ev.target.value);
      }


     onTransactionFormSubmit = (ev) => {
     ev.preventDefault();
     const transactionData = this.props.formData;
     const payload = api.Transaction.edit(this.props.id, transactionData);
     this.props.editTransaction(payload)
     console.log(payload)
   }


    render(){
        return(
        <EditTransactionComponent

              name = {this.props.name}
              amount_due={this.props.amount_due}
              amount_paid ={this.props.amount_paid}
              transaction_status = {this.props.transaction_status}
              transaction_type = {this.props.transaction_type}
              date_due = {this.props.date_due}
              date_paid = {this.props.date_paid}
              property_id = {this.props.property_id}
              unit_id = {this.props.unit_id}
              payer_id = {this.props.payer_id}

             unit = {this.props.unit}
             payer = {this.props.payer}
             property = {this.props.property}

             PropertyState = {this.state.selectPropertyState}
             UnitState = {this.state.selectUnitState}
             PayerState = {this.state.selectPayerState}
             TransactionStatusState = {this.state.selectTransactionStatusState}
             TransactionTypeState = {this.state.selectTransactionTypeState}

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


        />
  );
 }
}


export default connect(mapStateToProps, mapDispatchToProps) (TransactionEdit)

