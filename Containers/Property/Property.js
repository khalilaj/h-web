import React, {Component} from 'react';
import api from '../../api'

import {connect} from 'react-redux';

import PropertyComponent from '../../Components/Property/PropertyComponent'

const mapStateToProps = (store) => ({
  property: store.property.property,
  unit: store.unit.unit,
  agreement: store.agreement.agreement,
  message: store.message.message,
  owner: store.owner.owner,
  tenant: store.tenant.tenant
});

const mapDispatchToProps = (dispatch) => ({
  getUnit:(payload) => dispatch({type:'GET_UNITS', payload:payload }),
  getProperty:(payload) => dispatch({type:'GET_PROPERTIES', payload:payload }),
  getAgreement:(payload) => dispatch({type:'GET_AGREEMENTS', payload:payload }),
  getMessage:(payload) => dispatch({type:'GET_MESSAGES', payload:payload }),
  getOwner:(payload) => dispatch({type:'GET_OWNERS', payload:payload }),
  getTenant:(payload) => dispatch({type:'GET_TENANTS', payload:payload }),

  onDeleteUnit: (id) => dispatch({type:'DELETE_UNIT',id}),
  onDeleteProperty: (id) => dispatch({type:'DELETE_PROPERTY',id}),
  onDeleteAgreement: (id) => dispatch({type:'DELETE_AGREEMENT',id}),
  onDeleteMessage: (id) => dispatch({type:'DELETE_MESSAGE',id}),

  });

class Property extends Component{
    constructor(){
      super();
         this.onDeleteProperty = this.onDeleteProperty.bind(this);
         this.onDeleteUnit = this.onDeleteUnit.bind(this);
         this.onDeleteAgreement = this.onDeleteAgreement.bind(this);
         this.onDeleteMessage = this.onDeleteMessage.bind(this);
         this.componentDidMount = this.componentDidMount.bind(this);
      }

   componentDidMount(){
   const propertyPayload = api.Property.all();
   const unitPayload = api.Unit.all();
   const agreementPayload = api.Agreement.all();
   const messagePayload = api.Message.all();
   const ownerPayload = api.Owner.all();
   const tenantPayload = api.Tenant.all();

   this.props.getProperty(propertyPayload)
   this.props.getUnit(unitPayload)
   this.props.getAgreement(agreementPayload)
   this.props.getMessage(messagePayload)
   this.props.getOwner(ownerPayload)
   this.props.getTenant(tenantPayload)
   }
   onDeleteProperty = (id) =>{
    let confirm = window.confirm("ARE YOU SURE YOU WANT TO DELETE?")
      if(confirm){
        const payload = api.Property.delete(id);
        this.props.onDeleteProperty(id)
      }
    }
    onDeleteAgreement = (id) =>{
    let confirm = window.confirm("ARE YOU SURE YOU WANT TO DELETE?")
      if(confirm){
        const payload = api.Agreement.delete(id);
        this.props.onDeleteAgreement(id)
      }
    }
    onDeleteMessage = (id) =>{
    let confirm = window.confirm("ARE YOU SURE YOU WANT TO DELETE?")
      if(confirm){
        const payload = api.Message.delete(id);
        this.props.onDeleteMessage(id)
      }
    }
    onDeleteUnit = (id) =>{
    let confirm = window.confirm("ARE YOU SURE YOU WANT TO DELETE?")
      if(confirm){
        const payload = api.Unit.delete(id);
        this.props.onDeleteUnit(id)
      }
    }

    render(){
        return(
        <PropertyComponent
            property={this.props.property}
            unit={this.props.unit}
            agreement={this.props.agreement}
            message={this.props.message}
            owner={this.props.owner}
            tenant = {this.props.tenant}

            onDeleteUnit={this.onDeleteUnit}
            onDeleteProperty={this.onDeleteProperty}
            onDeleteAgreement={this.onDeleteAgreement}
            onDeleteMessage={this.onDeleteMessage}
        />
  );
}
}


export default connect(mapStateToProps, mapDispatchToProps) (Property)

