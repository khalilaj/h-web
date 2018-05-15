import React,{Component} from 'react';
import MainDrawer from '../Components/Layout/MainDrawer';
import {connect} from 'react-redux';

import LogIn from './LogIn';
import Contacts from './Contacts'
import Dashboard from './Dashboard'
import TenantUserMainDrawer from '../TenantUser/Components/TenantUserLayout/TenantUserMainDrawer'

import { Redirect } from 'react-router'


const mapStateToProps = (store) => ({
  user: store.auth.user,
  tenant: store.auth.tenant
});


class Layout extends Component{
  render(){

    if(this.props.user) {
      return(
      <MainDrawer user={this.props.user} >
      <Dashboard />
      </MainDrawer >
      );
    }else if(this.props.tenant) {
      return(
        <TenantUserMainDrawer user={this.props.tenant} />
      );
    }else{
      return <Redirect to='/login' />;
    }


  }
}

export default connect(mapStateToProps, ()=>({})) (Layout);
