import React, { Component } from 'react';
import {connect} from 'react-redux';

import api from '../api'

import MainLogIn from '../Components/LogIn/MainLogIn'
import { Redirect } from 'react-router'


const mapStateToProps = (store) => ({
  sto:store,
  formData: store.auth.formData,
  user : store.auth.user,
  tenant : store.auth.tenant
});

const mapDispatchToProps = (dispatch) => ({
  onFormChange: (key, value) => dispatch({type:'ON_AUTH_FORM_CHANGE', key:key, value:value }),
  onLogin: (payload) => dispatch({type:'LOGIN', payload:payload }),
  setToken: (payload) => dispatch({type:'LOGIN', payload:payload })
});

class LogIn extends Component {
  constructor(props){
    super(props);
    this.onLoginEmailChange = this.onLoginEmailChange.bind(this);
    this.onLoginPassChange = this.onLoginPassChange.bind(this)
    this.onLogin = this.onLogin.bind(this);
  }
  onLoginEmailChange = (ev) => this.props.onFormChange('email',ev.target.value );
  onLoginPassChange = (ev) => this.props.onFormChange('password',ev.target.value );

  componentDidMount(){
    const token = localStorage.getItem('Token');
    if (token){
        api.setToken(token);
        const payload = api.Auth.current();
        this.props.setToken(payload)
        this.props.onLogin(payload)
    }
  }
  onLogin = (ev) => {
    ev.preventDefault();
    const loginData = this.props.formData;
    const payload = api.Auth.login(loginData);
    this.props.onLogin(payload)

  }

  render() {

     if(this.props.user) {
        return <Redirect to='/' />
     } else if(this.props.tenant){
          return <Redirect to='/' />
     }
     else{
     return <MainLogIn onEmailChange={this.onLoginEmailChange}  onPassChange={this.onLoginPassChange} onLogin={this.onLogin} />
     }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);
