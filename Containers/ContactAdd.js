import React, {Component} from 'react';
import api from '../api'

import {connect} from 'react-redux';

import AddContactComponent from '../Components/Contact/AddContactComponent'

const mapStateToProps = (store) => ({
  sto:store,
  tenantForm: store.tenant.formData,
  ownerForm: store.owner.formData,
  property: store.property.property
});

const mapDispatchToProps = (dispatch) => ({
  addTenant: (payload) => dispatch({type:'ADD_TENANT', payload:payload }),
  addOwner: (payload) => dispatch({type:'ADD_OWNER', payload:payload }),
  getProperty:(payload) => dispatch({type:'GET_PROPERTIES', payload:payload }),

  onTenantFormChange: (key, value) => dispatch({ type:"ON_TENANT_FORM_CHANGE", key, value}),
  onOwnerFormChange: (key, value) => dispatch({ type:"ON_OWNER_FORM_CHANGE", key, value}),
 });


class ContactAdd extends Component{
    state = { selectState: null }
    constructor(){
      super();

      this.onTenantFormFirstnameChange = this.onTenantFormFirstnameChange.bind(this)
      this.onTenantFormLastnameChange = this.onTenantFormLastnameChange.bind(this)
      this.onTenantFormEmailChange = this.onTenantFormEmailChange.bind(this)
      this.onTenantFormPassChange = this.onTenantFormPassChange.bind(this)
      this.onTenantFormNationalIdChange = this.onTenantFormNationalIdChange.bind(this)
      this.onTenantFormPhoneChange = this.onTenantFormPhoneChange.bind(this)
      this.onTenantFormUsernameChange = this.onTenantFormUsernameChange.bind(this)
      this.onTenantFormSubmit = this.onTenantFormSubmit.bind(this)

      this.onOwnerFormFirstnameChange = this.onOwnerFormFirstnameChange.bind(this)
      this.onOwnerFormLastnameChange = this.onOwnerFormLastnameChange.bind(this)
      this.onOwnerFormEmailChange = this.onOwnerFormEmailChange.bind(this)
      this.onOwnerFormNationalIdChange = this.onOwnerFormNationalIdChange.bind(this)
      this.onOwnerFormPhoneChange = this.onOwnerFormPhoneChange.bind(this)
      this.onOwnerFormPropertyChange = this.onOwnerFormPropertyChange.bind(this)
      this.onOwnerFormSubmit = this.onOwnerFormSubmit.bind(this)
      this.componentDidMount = this.componentDidMount.bind(this)

      }

   componentDidMount(){
   if(!this.props.property){
     const propertyPayload = api.Property.all();
     this.props.getProperty(propertyPayload);
      }
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
       this.setState({selectState:ev.target.value})
       this.props.onOwnerFormChange('property', ev.target.value);
   }

   onTenantFormSubmit = (ev) => {
     ev.preventDefault();
     const tenantData = this.props.tenantForm;
     const payload = api.Tenant.add(tenantData);
     this.props.addTenant(payload)
   }

     onOwnerFormSubmit = (ev) => {
     ev.preventDefault();
     const ownerData = this.props.ownerForm;
     const payload = api.Owner.add(ownerData);
     this.props.addOwner(payload)
   }


    render(){
        return(
        <AddContactComponent
           onTenantFormEmailChange = {this.onTenantFormEmailChange }
           onTenantFormPassChange = {this.onTenantFormPassChange }
           onTenantFormFirstnameChange = {this.onTenantFormFirstnameChange }
           onTenantFormLastnameChange  = {this.onTenantFormLastnameChange }
           onTenantFormNationalIdChange = {this.onTenantFormNationalIdChange }
           onTenantFormPhoneChange= {this.onTenantFormPhoneChange }
           onTenantFormUsernameChange= {this.onTenantFormUsernameChange}
           onTenantFormSubmit= {this.onTenantFormSubmit }

           onOwnerFormEmailChange = {this.onOwnerFormEmailChange }
           onOwnerFormFirstnameChange = {this.onOwnerFormFirstnameChange }
           onOwnerFormLastnameChange  = {this.onOwnerFormLastnameChange }
           onOwnerFormNationalIdChange = {this.onOwnerFormNationalIdChange }
           onOwnerFormPhoneChange= {this.onOwnerFormPhoneChange }
           onOwnerFormPropertyChange = {this.onOwnerFormPropertyChange}
           onOwnerFormSubmit= {this.onOwnerFormSubmit }

           property = {this.props.property}
           selectState = {this.state.selectState}
         />
  );
 }
}


export default connect(mapStateToProps, mapDispatchToProps) (ContactAdd)

