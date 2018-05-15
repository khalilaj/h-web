import React, {Component} from 'react';
import api from '../../api'

import {connect} from 'react-redux';

import TransactionComponent from '../../Components/Transactions/TransactionComponent'

const mapStateToProps = (store) => ({
  transaction: store.transaction.transaction,
  property: store.property.property,
  unit: store.unit.unit,
  tenant: store.tenant.tenant
});

const mapDispatchToProps = (dispatch) => ({
  getTransaction:(payload) => dispatch({type:'GET_TRANSACTIONS', payload:payload }),
  getProperty:(payload) => dispatch({type:'GET_PROPERTIES', payload:payload }),

  getTenants: (payload) => dispatch({type:'GET_TENANTS', payload:payload }),
  getUnit: (payload => dispatch ({type:'GET_UNITS', payload:payload})),

  deleteTransaction: (id) => dispatch({type:'DELETE_TRANSACTION',id}),
  });

class Transaction extends Component{
    state = {
        selectPropertyState: null,
        selectPayerState: null,
        selectUnitState: null,
        selectTransactionTypeState: null,
        selectTransactionStatusState: null,
         }

    constructor(){
      super();
         this.onDeleteTransaction = this.onDeleteTransaction.bind(this);
         this.componentDidMount = this.componentDidMount.bind(this);
      }

   componentDidMount(){
   const payload = api.Transaction.all();
   const propertyPayload = api.Property.all();
   const tenantPayload = api.Tenant.all();
   const unitPayLoad = api.Unit.all()

   this.props.getUnit(unitPayLoad)
   this.props.getTenants(tenantPayload)
   this.props.getProperty(propertyPayload)
   this.props.getTransaction(payload)
   }
    onDeleteTransaction = (id) =>{
    let confirm = window.confirm("ARE YOU SURE YOU WANT TO DELETE?")
      if(confirm){
        const payload = api.Transaction.delete(id);
        this.props.deleteTransaction(id)
      }
    }

    render(){

        return(
        <TransactionComponent
            property={this.props.property}
            payer = {this.props.tenant}
            unit = {this.props.unit}
            transaction={this.props.transaction}
            onDeleteTransaction={this.onDeleteTransaction}

           PropertyState = {this.state.selectPropertyState}
           UnitState = {this.state.selectUnitState}
           PayerState = {this.state.selectPayerState}
           TransactionStatusState = {this.state.selectTransactionStatusState}
           TransactionTypeState = {this.state.selectTransactionTypeState}

        />
  );
}
}


export default connect(mapStateToProps, mapDispatchToProps) (Transaction)

