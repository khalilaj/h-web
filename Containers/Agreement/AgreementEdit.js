import React, {Component} from 'react';
import api from '../../api'

import {connect} from 'react-redux';

import AgreementEditComponent from '../../Components/Property/Agreement/AgreementEditComponent'

const mapStateToProps = (store) => ({
  sto:store,
  property: store.property.property,
  formData: store.unit.formData,
  agreement: store.agreement.agreement,
  tenant: store.tenant.tenant,
  unit: store.unit.unit,

});

const mapDispatchToProps = (dispatch) => ({
  editAgreement: (payload) => dispatch({type:'EDIT_AGREEMENT', payload:payload }),
  onFormChange: (key, value) => dispatch({ type:"ON_UNIT_FORM_CHANGE", key, value}),

  getAgreement:(payload) => dispatch({type:'GET_AGREEMENTS', payload:payload }),
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

    componentDidMount(){
    this.props.onFormChange('tittle', this.props.tittle);
    this.props.onFormChange('day_to_pay_rent', this.props.day_to_pay_rent);
    this.props.onFormChange('deposit_amount', this.props.deposit_amount);
    this.props.onFormChange('rent_amount', this.props.rent_amount);
    this.props.onFormChange('status', this.props.status);
    this.props.onFormChange('rent_start_date', this.props.rent_start_date);
    this.props.onFormChange('property', this.props.prop_id);
    this.props.onFormChange('tenant', this.props.tenant_id);
    this.props.onFormChange('unit', this.props.unit_id);
    this.props.onFormChange('rent_payment_type', this.props.rent_payment_type);

    this.setState({selectPropertyState: this.props.prop_id})
    this.setState({ selectUnitState: this.props.unit_id })
    this.setState({ selectRentTypeState: this.props.rent_payment_type })
    this.setState({ selectTenantState: this.props.tenant_id })
   }

   componentWillUnmount(){
   console.log("Hi")
    const payload = api.Agreement.all()
    this.props.getAgreement(payload )
   }


    onAgreementFormSubmit (ev){
       ev.preventDefault();
       const AgreementData = this.props.formData;
       const payload = api.Agreement.edit(this.props.id ,AgreementData)
       this.props.editAgreement(payload)
    }

    render(){

        return(

         <AgreementEditComponent
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

               id = {this.props.id}
               tittle={this.props.tittle}
               description={this.props.description}
               deposit_amount={this.props.deposit_amount}
               rent_amount={this.props.rent_amount}
               rent_payment_type={this.props.rent_payment_type}
               rent_start_date={this.props.rent_start_date}
               day_to_pay_rent={this.props.day_to_pay_rent}

               prop_id = {this.props.prop_id}
               tenant_id={this.props.tenant_id}
               unit_id={this.props.unit_id}


               tenant = {this.props.tenant}
               unit = {this.props.unit}
               property = {this.props.property}

           PropertyState = {this.state.selectPropertyState}
           UnitState = {this.state.selectUnitState}
           TenantState = {this.state.selectTenantState}
           RentTypeState = {this.state.selectRentTypeState}

         />
  );
 }
}


export default connect(mapStateToProps, mapDispatchToProps) (AgreementAdd)

