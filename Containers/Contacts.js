import React, {Component} from 'react';
import api from '../api'

import {connect} from 'react-redux';

import ContactComponent from '../Components/Contact/ContactComponent'

const mapStateToProps = (store) => ({
  tenant: store.tenant.tenant,
  owner: store.owner.owner,
  property: store.property.property,

  tenantForm: store.tenant.formData,
  ownerForm: store.owner.formData,
});

const mapDispatchToProps = (dispatch) => ({
  getTenants: (payload) => dispatch({type:'GET_TENANTS', payload:payload }),
  getOwners: (payload) => dispatch({type:'GET_OWNERS', payload:payload }),
  getProperty:(payload) => dispatch({type:'GET_PROPERTIES', payload:payload }),

  onTenantFormChange: (key, value) => dispatch({ type:"ON_TENANT_FORM_CHANGE", key, value}),
  onOwnerFormChange: (key, value) => dispatch({ type:"ON_OWNER_FORM_CHANGE", key, value}),

  deleteTenant: (id) => dispatch({type:'DELETE_TENANT',  id}),
  deleteOwner: (id) => dispatch({type:'DELETE_OWNER',  id}),
  });

class Contact extends Component{
 state = { selectState: null }
    constructor(){
      super();
         this.onDeleteTenant = this.onDeleteTenant.bind(this);
         this.onDeleteOwner = this.onDeleteOwner.bind(this);
         this.componentDidMount = this.componentDidMount.bind(this);

          this.onTenantFormFirstnameChange = this.onTenantFormFirstnameChange.bind(this)
          this.onTenantFormLastnameChange = this.onTenantFormLastnameChange.bind(this)
          this.onTenantFormEmailChange = this.onTenantFormEmailChange.bind(this)
          this.onTenantFormPassChange = this.onTenantFormPassChange.bind(this)
          this.onTenantFormNationalIdChange = this.onTenantFormNationalIdChange.bind(this)
          this.onTenantFormPhoneChange = this.onTenantFormPhoneChange.bind(this)
          this.onTenantFormUsernameChange = this.onTenantFormUsernameChange.bind(this)

          this.onOwnerFormFirstnameChange = this.onOwnerFormFirstnameChange.bind(this)
          this.onOwnerFormLastnameChange = this.onOwnerFormLastnameChange.bind(this)
          this.onOwnerFormEmailChange = this.onOwnerFormEmailChange.bind(this)
          this.onOwnerFormNationalIdChange = this.onOwnerFormNationalIdChange.bind(this)
          this.onOwnerFormPhoneChange = this.onOwnerFormPhoneChange.bind(this)
          this.onOwnerFormPropertyChange = this.onOwnerFormPropertyChange.bind(this)
          this.onOwnerFormSubmit = this.onOwnerFormSubmit.bind(this)
      }

   componentDidMount(){

   const propertyPayload = api.Property.all();
   const tenantPayload = api.Tenant.all();
   const ownerPayload = api.Owner.all();

   this.props.getTenants(tenantPayload);
   this.props.getOwners(ownerPayload);
   this.props.getProperty(propertyPayload);
   }

   onTenantFormFirstnameChange = (ev) => this.props.onTenantFormChange('firstname', ev.target.value);
   onTenantFormLastnameChange = (ev) => this.props.onTenantFormChange('lastname', ev.target.value);
   onTenantFormEmailChange = (ev) => this.props.onTenantFormChange('email', ev.target.value);
   onTenantFormUsernameChange = (ev) => this.props.onTenantFormChange('username', ev.target.value);
   onTenantFormPassChange = (ev) => this.props.onTenantFormChange('password', ev.target.value);
   onTenantFormNationalIdChange = (ev) => this.props.onTenantFormChange('national_id', ev.target.value);
   onTenantFormPhoneChange = (ev) => this.props.onTenantFormChange('phone_number', ev.target.value);

   onOwnerFormFirstnameChange = (ev) => this.props.onOwnerFormChange('firstname', ev.target.value);
   onOwnerFormLastnameChange = (ev) => this.props.onOwnerFormChange('lastname', ev.target.value);
   onOwnerFormEmailChange = (ev) => this.props.onOwnerFormChange('email', ev.target.value);
   onOwnerFormNationalIdChange = (ev) => this.props.onOwnerFormChange('national_id', ev.target.value);
   onOwnerFormPhoneChange = (ev) => this.props.onOwnerFormChange('phone_number', ev.target.value);
   onOwnerFormPropertyChange = (ev) => {
      this.setState({selectState: ev.target.value})
      this.props.onOwnerFormChange('property', ev.target.value);
   }

   onTenantFormSubmit = (ev, id) => {
     ev.preventDefault();
     const tenantData = this.props.tenantForm;
     const payload = api.Tenant.edit(id, tenantData);
     console.log(payload)
     this.props.editTenant(payload)
     console.log(payload)
   }


   onOwnerFormSubmit = (ev, id) => {
     ev.preventDefault();
     const ownerData = this.props.ownerForm;
     const payload = api.Owner.edit(id, ownerData);
     this.props.editOwner(payload)
     console.log(payload)
   }

    onDeleteTenant = (id) =>{
    let confirm = window.confirm("ARE YOU SURE YOU WANT TO DELETE?")
      if(confirm){
        const payload = api.Tenant.delete(id);
        this.props.deleteTenant(id)
      }
    }
    onDeleteOwner = (id) =>{
   let confirm = window.confirm("ARE YOU SURE YOU WANT TO DELETE?")
      if(confirm){
        const payload = api.Owner.delete(id);
        this.props.deleteOwner(id)
      }
    }

    render(){
        return(
      <ContactComponent
        tenant={this.props.tenant}
        owner = {this.props.owner}

        property = {this.props.property}
        selectState = {this.state.selectState}

       onTenantFormEmailChange = {this.onTenantFormEmailChange }
       onTenantFormPassChange = {this.onTenantFormPassChange }
       onTenantFormFirstnameChange = {this.onTenantFormFirstnameChange }
       onTenantFormLastnameChange  = {this.onTenantFormLastnameChange }
       onTenantFormNationalIdChange = {this.onTenantFormNationalIdChange }
       onTenantFormPhoneChange= {this.onTenantFormPhoneChange }
       onTenantFormUsernameChange= {this.onTenantFormUsernameChange}
       onTenantFormSubmit= {this.onTenantFormSubmit}

       setFormDetail = {this.setFormDetail}


       onOwnerFormEmailChange = {this.onOwnerFormEmailChange }
       onOwnerFormFirstnameChange = {this.onOwnerFormFirstnameChange }
       onOwnerFormLastnameChange  = {this.onOwnerFormLastnameChange }
       onOwnerFormNationalIdChange = {this.onOwnerFormNationalIdChange }
       onOwnerFormPhoneChange= {this.onOwnerFormPhoneChange }
       onOwnerFormPropertyChange = {this.onOwnerFormPropertyChange}
       onOwnerFormSubmit= {this.onOwnerFormSubmit }

        onDeleteTenant={this.onDeleteTenant}
        onDeleteOwner={this.onDeleteOwner}
      />
  );
}
}


export default connect(mapStateToProps, mapDispatchToProps) (Contact)

