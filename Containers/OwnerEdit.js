import React, {Component} from 'react';
import api from '../api'

import {connect} from 'react-redux';

import OwnerEditComponent from '../Components/Contact/Owner/OwnerEditComponent'

const mapStateToProps = (store) => ({
  sto:store,
  ownerForm: store.owner.formData,
});

const mapDispatchToProps = (dispatch) => ({
  addOwner: (payload) => dispatch({type:'EDIT_OWNER', payload:payload }),
  getOwners: (payload) => dispatch({type:'GET_OWNERS', payload:payload }),

  onOwnerFormChange: (key, value) => dispatch({ type:"ON_OWNER_FORM_CHANGE", key, value}),
 });


class OwnerEdit extends Component{
    state = { selectState: null  }
    constructor(){
      super();
      this.onOwnerFormSubmit = this.onOwnerFormSubmit.bind(this)
      this.componentDidMount = this.componentDidMount.bind(this)
      }

   componentDidMount(){
    this.props.onOwnerFormChange('firstname', this.props.firstname);
    this.props.onOwnerFormChange('lastname', this.props.lastname);
    this.props.onOwnerFormChange('email', this.props.email);
    this.props.onOwnerFormChange('national_id', this.props.national_id);
    this.props.onOwnerFormChange('phone_number',this.props.phone_number);
    this.props.onOwnerFormChange('property', this.props.property_id);
    this.setState({selectState: this.props.property_id})
   }

    componentWillUnmount(){
        const payload = api.Owner.all();
        this.props.getOwners(payload)
    }

     onOwnerFormSubmit = (ev) => {
     ev.preventDefault();
     const ownerData = this.props.ownerForm;
     const payload = api.Owner.edit(this.props.id, ownerData);
     this.props.addOwner(payload)
     console.log(payload)
   }


    render(){
    console.log(this.props.ownerForm)
        return(
        <OwnerEditComponent
           onOwnerFormEmailChange = {this.props.onOwnerFormEmailChange }
           onOwnerFormFirstnameChange = {this.props.onOwnerFormFirstnameChange }
           onOwnerFormLastnameChange  = {this.props.onOwnerFormLastnameChange }
           onOwnerFormNationalIdChange = {this.props.onOwnerFormNationalIdChange }
           onOwnerFormPhoneChange= {this.props.onOwnerFormPhoneChange }
           onOwnerFormPropertyChange = {this.props.onOwnerFormPropertyChange}
           onOwnerFormSubmit= {this.onOwnerFormSubmit }

             firstname = {this.props.firstname}
             lastname = {this.props.lastname}
             phone_number = {this.props.phone_number}
             national_id = {this.props.national_id}
             email =  {this.props.email}

           property = {this.props.property}
           selectState = {this.state.selectState}
         />
  );
 }
}


export default connect(mapStateToProps, mapDispatchToProps) (OwnerEdit)

