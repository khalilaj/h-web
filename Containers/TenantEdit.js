import React, {Component} from 'react';
import api from '../api'

import {connect} from 'react-redux';

import TenantEditComponent from '../Components/Contact/Tenant/TenantEditComponent'


const mapStateToProps = (store) => ({
  sto:store,
  tenantForm: store.tenant.formData,
});

const mapDispatchToProps = (dispatch) => ({
  editTenant: (payload) => dispatch({type:'EDIT_TENANT', payload:payload }),
  getTenants: (payload) => dispatch({type:'GET_TENANTS', payload:payload }),

  onTenantFormChange: (key, value) => dispatch({ type:"ON_TENANT_FORM_CHANGE", key, value}),
 });


class TenantEdit extends Component{
    state = { selectState: null }
    constructor(){
      super();

      this.onTenantFormSubmit = this.onTenantFormSubmit.bind(this)
      this.componentDidMount = this.componentDidMount.bind(this)
      this.componentWillUnmount = this.componentWillUnmount.bind(this)

      }

   componentDidMount(){
    this.props.onTenantFormChange('firstname', this.props.firstname);
    this.props.onTenantFormChange('lastname', this.props.lastname);
    this.props.onTenantFormChange('email', this.props.email);
    this.props.onTenantFormChange('username', this.props.username);
    this.props.onTenantFormChange('phone_number',this.props.phone_number);
    this.props.onTenantFormChange('national_id', this.props.national_id);
    console.log(this.props.account_id)
   }

    componentWillUnmount(){
    const payload = api.Tenant.all();
    this.props.getTenants(payload)
    }

   onTenantFormSubmit = (ev) => {
     ev.preventDefault();
     const tenantData = this.props.tenantForm;
     const payload = api.Tenant.edit(this.props.account_id,tenantData);
     this.props.editTenant(payload)
     console.log(payload)
   }


    render(){
        return(
        <TenantEditComponent
           onTenantFormEmailChange = {this.props.onTenantFormEmailChange }
           onTenantFormPassChange = {this.props.onTenantFormPassChange }
           onTenantFormFirstnameChange = {this.props.onTenantFormFirstnameChange }
           onTenantFormLastnameChange  = {this.props.onTenantFormLastnameChange }
           onTenantFormNationalIdChange = {this.props.onTenantFormNationalIdChange }
           onTenantFormPhoneChange= {this.props.onTenantFormPhoneChange }
           onTenantFormUsernameChange= {this.props.onTenantFormUsernameChange}
           onTenantFormSubmit= {this.onTenantFormSubmit }

           firstname = {this.props.firstname}
           lastname = {this.props.lastname}
           phone_number = {this.props.phone_number}
           national_id = {this.props.national_id}
           email =  {this.props.email}
           username = {this.props.username}
         />
  );
 }
}


export default connect(mapStateToProps, mapDispatchToProps) (TenantEdit)

