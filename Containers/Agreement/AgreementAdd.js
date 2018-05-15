import React, {Component} from 'react';
import api from '../../api'

import {connect} from 'react-redux';

import AgreementForm from '../../Components/Property/Agreement/AgreementForm'

const mapStateToProps = (store) => ({
  sto:store,
  property: store.property.property,
  formData: store.unit.formData,
  tenant: store.tenant.tenant,
  unit: store.unit.unit,
});

const mapDispatchToProps = (dispatch) => ({
  addAgreement: (payload) => dispatch({type:'ADD_AGREEMENT', payload:payload }),
  onFormChange: (key, value) => dispatch({ type:"ON_UNIT_FORM_CHANGE", key, value}),
 });


class AgreementAdd extends Component{
   state = {
        selectPropertyState: null,
        selectUnitState: null,
        selectRentTypeState: null,
        selectTenantState: null,
   }
    constructor(){
      super();
     this.onAgreementFormTitleChange = this.onAgreementFormTitleChange.bind(this)
     this.onAgreementFormDayToPayRentChange = this.onAgreementFormDayToPayRentChange.bind(this)
     this.onAgreementFormDepositAmountChange = this.onAgreementFormDepositAmountChange.bind(this)
     this.onAgreementFormRentAmountChange = this.onAgreementFormRentAmountChange.bind(this)
     this.onAgreementFormPropertyChange = this.onAgreementFormPropertyChange.bind(this)
     this.onAgreementFormTenantChange = this.onAgreementFormTenantChange.bind(this)
     this.onAgreementFormRentTypeChange = this.onAgreementFormRentTypeChange.bind(this)
     this.onAgreementFormSubmit = this.onAgreementFormSubmit.bind(this)
     this.onAgreementFormRentStartDateChange = this.onAgreementFormRentStartDateChange.bind(this)

    }


    onAgreementFormTitleChange = (ev) => this.props.onFormChange('tittle', ev.target.value)
    onAgreementFormDayToPayRentChange = (ev) => this.props.onFormChange('day_to_pay_rent', ev.target.value)
    onAgreementFormDepositAmountChange = (ev) => this.props.onFormChange('deposit_amount', ev.target.value)
    onAgreementFormRentAmountChange = (ev) => this.props.onFormChange('rent_amount', ev.target.value)
    onAgreementFormRentStartDateChange = (ev) => this.props.onFormChange('rent_start_date', ev.target.value)

    onAgreementFormPropertyChange = (ev) => {
        this.setState({selectPropertyState: ev.target.value})
        this.props.onFormChange('property', ev.target.value)
    }
    onAgreementFormTenantChange = (ev) => {
        this.setState({selectTenantState: ev.target.value})
        this.props.onFormChange('tenant', ev.target.value)
    }
    onAgreementFormUnitChange = (ev) => {
     this.setState({selectUnitState: ev.target.value})
     this.props.onFormChange('unit', ev.target.value)
    }
    onAgreementFormRentTypeChange = (ev) => {
     this.setState({selectRentTypeState: ev.target.value})
     this.props.onFormChange('rent_payment_type', ev.target.value)
    }

    onAgreementFormSubmit (ev){
       ev.preventDefault();
       const AgreementData = this.props.formData;
       const payload = api.Agreement.add(AgreementData)
       this.props.addAgreement(payload)
       console.log(payload)
    }

    render(){
        return(

         <AgreementForm
           onAgreementFormSubmit = {this.onAgreementFormSubmit}
           onAgreementFormTitleChange = {this.onAgreementFormTitleChange}
           onAgreementFormTenantChange = {this.onAgreementFormTenantChange}
           onAgreementFormPropertyChange = {this.onAgreementFormPropertyChange}
           onAgreementFormUnitChange = {this.onAgreementFormUnitChange}
           onAgreementFormRentTypeChange = {this.onAgreementFormRentTypeChange}
           onAgreementFormDayToPayRentChange = {this.onAgreementFormDayToPayRentChange}
           onAgreementFormRentStartDateChange = {this.onAgreementFormRentStartDateChange}
           onAgreementFormRentAmountChange = {this.onAgreementFormRentAmountChange}
           onAgreementFormDepositAmountChange = {this.onAgreementFormDepositAmountChange}

           property = {this.props.property}
           tenant = {this.props.tenant}
           unit = {this.props.unit}

           PropertyState = {this.state.selectPropertyState}
           UnitState = {this.state.selectUnitState}
           TenantState = {this.state.selectTenantState}
           RentTypeState = {this.state.selectRentTypeState}

         />
  );
 }
}


export default connect(mapStateToProps, mapDispatchToProps) (AgreementAdd)

