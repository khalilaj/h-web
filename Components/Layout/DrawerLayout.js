import React from 'react'
import Slide from 'material-ui/transitions/Slide'

import AppDialog from '../Common/AppDialog'
import DrawerMenu from './DrawerMenu'

import Property from '../../Containers/Property/Property'
import PropertyAdd from '../../Containers/Property/PropertyAdd'

import Contact from '../../Containers/Contacts'
import ContactAdd from '../../Containers/ContactAdd'

import Transaction from '../../Containers/Transaction/Transaction'
import TransactionAdd from '../../Containers/Transaction/TransactionAdd'


function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class DrawerLayout extends React.Component {
  state = {
    OpenProperty: false,
    OpenTransaction: false,
    OpenContacts: false,
    OpenReport: false,

    contactAppBar: false,
    transactionAppBar: false,
    propertyAppBar: false

  };

  handlePropertyClickOpen = () => {this.setState({ OpenProperty: true })};
  handlePropertyRequestClose = () => {this.setState({ OpenProperty: false })};
  propertyAppBarOnClickOpen = () => {this.setState({ propertyAppBar: true })};
  propertyAppBarRequestClose = () => {this.setState({ propertyAppBar: false })};

  handleTransactionClickOpen = () => {this.setState({ OpenTransaction: true })};
  handleTransactionRequestClose = () => {this.setState({OpenTransaction: false })};
  transactionAppBarOnClickOpen = () => {this.setState({ transactionAppBar: true })};
  transactionAppBarRequestClose = () => {this.setState({ transactionAppBar: false })};

  handleContactsClickOpen = () => { this.setState({ OpenContacts: true }) };
  handleContactsRequestClose = () => {this.setState({ OpenContacts: false })};
  contactAppBarOnClickOpen = () => {this.setState({ contactAppBar: true })};
  contactAppBarRequestClose = () => {this.setState({ contactAppBar: false })};

  render() {
    return (

    <div>
       <DrawerMenu
       onHandlePropertyOpen={this.handlePropertyClickOpen}
       onHandleTransactionOpen={this.handleTransactionClickOpen}
       onHandleContactsOpen={this.handleContactsClickOpen}

       user={this.props.user}
       />


       <AppDialog
         appBarOnClick = {this.propertyAppBarOnClickOpen}
         title="PROPERTIES"
         button="ADD PROPERTY"
         open={this.state.OpenProperty}
         onHandleRequestClose ={this.handlePropertyRequestClose}
         onHandleClickOpen={this.handlePropertyClickOpen} >
         <Property  />
       </AppDialog>

       <AppDialog
         title="ADD PROPERTY"
         open={this.state.propertyAppBar}
         onHandleRequestClose ={this.propertyAppBarRequestClose}
         onHandleClickOpen={this.propertyAppBarOnClickOpen} >
        <PropertyAdd />
       </AppDialog>

      <AppDialog
         appBarOnClick = {this.transactionAppBarOnClickOpen}
         title="TRANSACTION"
         button="ADD TRANSACTION"
         open={this.state.OpenTransaction}
         onHandleRequestClose ={this.handleTransactionRequestClose}
         onHandleClickOpen={this.handleTransactionClickOpen} >
        <Transaction transition={this.props.transition}/>
       </AppDialog>

       <AppDialog
         title="ADD TRANSACTION"
         open={this.state.transactionAppBar}
         onHandleRequestClose ={this.transactionAppBarRequestClose}
         onHandleClickOpen={this.transactionAppBarOnClickOpen} >
        <TransactionAdd />
       </AppDialog>


       <AppDialog
         appBarOnClick = {this.contactAppBarOnClickOpen}
         title="CONTACTS"
         button="ADD CONTACT"
         open={this.state.OpenContacts}
         onHandleRequestClose ={this.handleContactsRequestClose}
         onHandleClickOpen={this.handleContactsClickOpen} >
        <Contact />
       </AppDialog>

       <AppDialog
         title="ADD CONTACT"
         open={this.state.contactAppBar}
         onHandleRequestClose ={this.contactAppBarRequestClose}
         onHandleClickOpen={this.contactAppBarOnClickOpen} >
        <ContactAdd />
       </AppDialog>

   </div>
    );
  }
}

export default DrawerLayout;

