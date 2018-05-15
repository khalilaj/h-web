import React, {Component} from 'react';
import api from '../../api'

import {connect} from 'react-redux';

import UnitForm from '../../Components/Property/Unit/UnitForm'

const mapStateToProps = (store) => ({
  sto:store,
  property: store.property.property,
  formData: store.unit.formData,
});

const mapDispatchToProps = (dispatch) => ({
  addUnit: (payload) => dispatch({type:'ADD_UNIT', payload:payload }),
  onFormChange: (key, value) => dispatch({ type:"ON_UNIT_FORM_CHANGE", key, value}),
 });


class UnitAdd extends Component{
    state = {
        PropertyState: "",
        UnitState: "",
    }
    constructor(){
      super();
     this.onUnitFormSubmit = this.onUnitFormSubmit.bind(this)
     this.onUnitFormNameChange = this.onUnitFormNameChange.bind(this)
     this.onUnitFormNoBedsChange = this.onUnitFormNoBedsChange.bind(this)
     this.onUnitFormNoBathroomChange = this.onUnitFormNoBathroomChange.bind(this)
     this.onUnitFormPropertyChange = this.onUnitFormPropertyChange.bind(this)
     this.onUnitFormStatusChange = this.onUnitFormStatusChange.bind(this)

    }


    onUnitFormNameChange = (ev) => this.props.onFormChange('name', ev.target.value)
    onUnitFormNoBedsChange = (ev) => this.props.onFormChange('no_of_bed', ev.target.value)
    onUnitFormNoBathroomChange = (ev) => this.props.onFormChange('no_of_bathroom', ev.target.value)
    onUnitFormPropertyChange = (ev) => {
        this.setState({PropertyState: ev.target.value})
        this.props.onFormChange('property', ev.target.value)
    }
    onUnitFormStatusChange = (ev) => {
     this.setState({ UnitState: ev.target.value })
     this.props.onFormChange('status', ev.target.value)
    }

    onUnitFormSubmit (ev){
       ev.preventDefault();
       const UnitData = this.props.formData;
       const payload = api.Unit.add(UnitData)
       this.props.addUnit(payload)
    }

    render(){

        return(
        <UnitForm
          onUnitFormSubmit = {this.onUnitFormSubmit}
          onUnitFormNameChange = {this.onUnitFormNameChange}
          onUnitFormNoBedsChange = {this.onUnitFormNoBedsChange}
          onUnitFormNoBathroomChange = {this.onUnitFormNoBathroomChange}
          onUnitFormPropertyChange = {this.onUnitFormPropertyChange}
          onUnitFormStatusChange = {this.onUnitFormStatusChange}

          UnitState = {this.state.UnitState}
          PropertyState = {this.state.PropertyState}
          property={this.props.property}

         />
  );
 }
}


export default connect(mapStateToProps, mapDispatchToProps) (UnitAdd)

