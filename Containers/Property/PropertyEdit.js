import React, {Component} from 'react';
import api from '../../api'

import {connect} from 'react-redux';

import EditPropertyComponent from '../../Components/Property/EditPropertyComponent'

const mapStateToProps = (store) => ({
  sto:store,
  formData: store.property.formData,
  error: store.property.error,
});

const mapDispatchToProps = (dispatch) => ({
  editProperty: (payload) => dispatch({type:'EDIT_PROPERTY', payload:payload }),
  onFormChange: (key, value) => dispatch({ type:"ON_PROPERTY_FORM_CHANGE", key, value}),

  getProperty:(payload) => dispatch({type:'GET_PROPERTIES', payload:payload }),
 });


class PropertyEdit extends Component{
    constructor(props){
      super(props);
      this.state = { hasError: false }

     this.onPropertyFormSubmit = this.onPropertyFormSubmit.bind(this)
     this.onPropertyFormNameChange = this.onPropertyFormNameChange.bind(this)
     this.onPropertyFormLocationChange = this.onPropertyFormLocationChange.bind(this)
     this.onPropertyFormYearOfCompletionChange = this.onPropertyFormYearOfCompletionChange.bind(this)

    }

    componentDidMount (){
        this.props.onFormChange('name', this.props.name)
        this.props.onFormChange('location',this.props.location)
        this.props.onFormChange ('year_of_completion',this.props.year_of_completion)
    }

    componentWillUnmount(){
        const propertyPayload = api.Property.all();
        this.props.getProperty(propertyPayload)
    }

    onPropertyFormNameChange = (ev) => this.props.onFormChange('name', ev.target.value)
    onPropertyFormLocationChange = (ev) => this.props.onFormChange('location', ev.target.value)
    onPropertyFormYearOfCompletionChange = (ev) => this.props.onFormChange('year_of_completion', ev.target.value)

    onPropertyFormSubmit (ev){
       ev.preventDefault();
       const propertyData = this.props.formData;
       const payload = api.Property.edit(this.props.id,propertyData)
       this.props.editProperty(payload)
        console.log(payload)
    }


    render(){
        console.log(this.props.error)
        return(
        <EditPropertyComponent
          onPropertyFormSubmit = {this.onPropertyFormSubmit}
          onPropertyFormNameChange = {this.onPropertyFormNameChange}
          onPropertyFormLocationChange = {this.onPropertyFormLocationChange}
          onPropertyFormYearOfCompletionChange = {this.onPropertyFormYearOfCompletionChange}

         id = {this.props.id}
         name={this.props.name }
         location={this.props.location}
         year_of_completion={this.props.year_of_completion}
         />
  );
 }
}


export default connect(mapStateToProps, mapDispatchToProps) (PropertyEdit)

