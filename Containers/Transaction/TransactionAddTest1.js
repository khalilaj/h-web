import React, {Component} from 'react';
import api from '../../api'

import {connect} from 'react-redux';

import AddTransactionComponent from '../../Components/Transactions/AddTransactionComponent'

const mapStateToProps = (store) => ({
  formData: store.transaction.formData,
  property: store.property.property,
  tenant: store.tenant.tenant,
  unit: store.unit.unit
});

const mapDispatchToProps = (dispatch) => ({
   getTenants: (payload) => dispatch({type:'GET_TENANTS', payload:payload }),
   getProperty:(payload) => dispatch({type:'GET_PROPERTIES', payload:payload }),
   getUnit: (payload => dispatch ({type:'GET_UNITS', payload:payload})),

  addTransaction: (payload) => dispatch({type:'ADD_ TRANSACTION', payload:payload }),
  onTransactionFormChange: (key, value) => dispatch({ type:"ON_TRANSACTION_FORM_CHANGE", key, value}),
 });


class TransactionAdd extends Component{
 state = {
        selectPayerState: null,
        selectTransactionTypeState: null,
        selectTransactionStatusState: null,
        selectPropertyState: null,
        selectUnitState: null
    }
    constructor(){
      super();
      this.onTransactionFormTitleChange = this.onTransactionFormTitleChange.bind(this)
      this.onTransactionFormPayerChange = this.onTransactionFormPayerChange(this)
      this.onTransactionFormAmountDueChange = this.onTransactionFormAmountDueChange(this)
      this.onTransactionFormAmountPaidChange = this.onTransactionFormAmountPaidChange(this)
      this.onTransactionFormTransactionTypeChange = this.onTransactionFormTransactionTypeChange(this)
      this.onTransactionFormTransactionStatusChange = this.onTransactionFormTransactionStatusChange(this)
      this.onTransactionFormDatePaidChange = this.onTransactionFormDatePaidChange(this)
      this.onTransactionFormDateDueChange = this.onTransactionFormDateDueChange(this)
      this.onTransactionFormPropertyChange = this.onTransactionFormPropertyChange(this)
      this.onTransactionFormUnitChange = this.onTransactionFormUnitChange(this)
    }

    componentDidMount(){
     if(!this.props.property){
     const propertyPayload = api.Property.all();
     this.props.getProperty(propertyPayload)
      }
     if(!this.props.tenant){
     const tenantPayload = api.Tenant.all();
     this.props.getTenants(tenantPayload)
      }
      if(!this.props.unit){
       const unitPayload = api.Unit.all();
       this.props.getUnit(unitPayload)
      }
    }

      onTransactionFormTitleChange  = (ev) => this.props.onTransactionFormChange('name', ev.target.value);
      onTransactionFormAmountDueChange = (ev) => this.props.onTransactionFormChange('amount_due', ev.target.value);
      onTransactionFormAmountPaidChange = (ev) => this.props.onTransactionFormChange('amount_paid', ev.target.value);
      onTransactionFormDatePaidChange = (ev) => this.props.onTransactionFormChange('date_paid', ev.target.value);
      onTransactionFormDateDueChange= (ev) => this.props.onTransactionFormChange('date_due', ev.target.value);

      onTransactionFormTransactionTypeChange = (ev) => {
      this.setState({selectTransactionTypeState:ev.target.value})
      this.props.onTransactionFormChange('transaction_type', ev.target.value);
      }

      onTransactionFormTransactionStatusChange = (ev) => {
      this.setState({selectTransactionStatusState:ev.target.value})
      this.props.onTransactionFormChange('transaction_status', ev.target.value);
      }

      onTransactionFormPropertyChange = (ev) => {
        this.setState({selectPropertyState:ev.target.value})
        this.props.onTransactionFormChange('property', ev.target.value);
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
     const transactionData = this.props.formData;
     const payload = api.Transaction.add(transactionData);
     this.props.addTransaction(payload)
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
           tenant = {this.props.tenant}
           unit = {this.props.unit}

         />
  );
 }
}


export default connect(mapStateToProps, mapDispatchToProps) (TransactionAdd)

