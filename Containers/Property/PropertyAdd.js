import React, {Component} from 'react';
import api from '../../api'

import {connect} from 'react-redux';

import { toast, ToastContainer } from 'react-toastify';

import AddPropertyComponent from '../../Components/Property/AddPropertyComponent'
import _ from 'lodash'

const mapStateToProps = (store) => ({
  sto:store,
  formData: store.property.formData,
  error: store.property.error
});

const mapDispatchToProps = (dispatch) => ({
  addProperty: (payload) => dispatch({type:'ADD_PROPERTY', payload:payload }),
  onFormChange: (key, value) => dispatch({ type:"ON_PROPERTY_FORM_CHANGE", key, value}),
 });


class PropertyAdd extends Component{
    constructor(){
      super();

     this.onPropertyFormSubmit = this.onPropertyFormSubmit.bind(this)
     this.onPropertyFormNameChange = this.onPropertyFormNameChange.bind(this)
     this.onPropertyFormLocationChange = this.onPropertyFormLocationChange.bind(this)
     this.onPropertyFormYearOfCompletionChange = this.onPropertyFormYearOfCompletionChange.bind(this)

    }


    onPropertyFormNameChange = (ev) => this.props.onFormChange('name', ev.target.value)
    onPropertyFormLocationChange = (ev) => this.props.onFormChange('location', ev.target.value)
    onPropertyFormYearOfCompletionChange = (ev) => this.props.onFormChange('year_of_completion', ev.target.value)

   onPropertyFormSubmit (ev){
     ev.preventDefault();
     const propertyData = this.props.formData;
     const payload = api.Property.add(propertyData)
     this.props.addProperty(payload)
   }

   render(){
     return(
      <div>
        <AddPropertyComponent
          onPropertyFormSubmit = {this.onPropertyFormSubmit}
          onPropertyFormNameChange = {this.onPropertyFormNameChange}
          onPropertyFormLocationChange = {this.onPropertyFormLocationChange}
          onPropertyFormYearOfCompletionChange = {this.onPropertyFormYearOfCompletionChange}
         />

       <ToastContainer
          position="top-right"
          type="default"
          autoClose={4000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          pauseOnHover
       />
      </div>
  );
 }
}


export default connect(mapStateToProps, mapDispatchToProps) (PropertyAdd)

