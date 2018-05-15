import React, {Component} from 'react';
import api from '../../api'

import {connect} from 'react-redux';

import UnitEditComponent from '../../Components/Property/Unit/UnitEditComponent'

const mapStateToProps = (store) => ({
  sto:store,
  property: store.property.property,
  formData: store.unit.formData,
});

const mapDispatchToProps = (dispatch) => ({
  editUnit: (payload) => dispatch({type:'EDIT_UNIT', payload:payload }),
  getUnit:(payload) => dispatch({type:'GET_UNITS', payload:payload }),
  onFormChange: (key, value) => dispatch({ type:"ON_UNIT_FORM_CHANGE", key, value}),
 });


class UnitEdit extends Component{
    state = {
        PropertyState: "",
        UnitStatusState: ""
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
        this.setState({UnitStatusState: ev.target.value})
        this.props.onFormChange('status', ev.target.value)
    }


    componentDidMount(){
    this.props.onFormChange('name', this.props.name);
    this.props.onFormChange('no_of_bed', this.props.no_of_bed);
    this.props.onFormChange('no_of_bathroom', this.props.no_of_bathroom);
    this.props.onFormChange('property', this.props.prop_id);
    this.props.onFormChange('status', this.props.status);
    this.setState({PropertyState: this.props.prop_id})
    this.setState({ UnitStatusState: this.props.status })
   }

   componentWillUnmount(){
    const payload = api.Unit.all()
    this.props.getUnit(payload)
    console.log(payload)
   }


    onUnitFormSubmit (ev){
       ev.preventDefault();
       const UnitData = this.props.formData;
       const payload = api.Unit.edit(this.props.id ,UnitData)
       this.props.editUnit(payload)
    }

    render(){
    console.log(this.state.UnitStatusState)
        return(
        <UnitEditComponent
          onUnitFormSubmit = {this.onUnitFormSubmit}
          onUnitFormNameChange = {this.onUnitFormNameChange}
          onUnitFormNoBedsChange = {this.onUnitFormNoBedsChange}
          onUnitFormNoBathroomChange = {this.onUnitFormNoBathroomChange}
          onUnitFormPropertyChange = {this.onUnitFormPropertyChange}
          onUnitFormStatusChange = {this.onUnitFormStatusChange}

          PropertyState = {this.state.PropertyState}
          UnitStatusState = {this.state.UnitStatusState}
          property={this.props.property}

           id = {this.props.id}
           name={this.props.name}
           no_of_bed={this.props.no_of_bed}
           status={this.props.status}
           no_of_bathroom={this.props.no_of_bathroom}

         />
  );
 }
}


export default connect(mapStateToProps, mapDispatchToProps) (UnitEdit)

