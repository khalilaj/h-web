import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';

import TenantUserSettingsMenu from './TenantUserSettingsMenu';
import TenantUserDrawerMenu from './TenantUserDrawerMenu'
import TenantUserTab from '../TenantUserDashboard/TenantUserTab'

import {connect} from 'react-redux'
import api from '../../../api'


const mapStateToProps = (store) => ({
  property: store.property.property,
  unit: store.unit.unit,
  tenant: store.tenant.tenant
});

const mapDispatchToProps = (dispatch) => ({
  getUnit:(payload) => dispatch({type:'GET_UNITS', payload:payload }),
  getProperty:(payload) => dispatch({type:'GET_PROPERTIES', payload:payload }),
  getTenant:(payload) => dispatch({type:'GET_TENANTS', payload:payload }),
  getAgreement:(payload) => dispatch({type:'GET_AGREEMENTS', payload:payload }),
 });



const styles = theme => ({
  root: {
    width: '100%',
     height: '100%',
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
content: {
    backgroundColor: theme.palette.background.default,
    width: '74%',
    padding: theme.spacing.unit * 3,
     height: '100%',
    marginTop: 15,
    [theme.breakpoints.up('sm')]: {
      height: '100%',
      marginTop: 15
    },
    float:"right",
}
});

class TenantUserMainDrawer extends React.Component {
   componentDidMount(){
   const propertyPayload = api.Property.all();
   const unitPayload = api.Unit.all();
   const tenantPayload = api.Tenant.all();
   const agreementPayload = api.Agreement.all();

   this.props.getAgreement(agreementPayload)
   this.props.getProperty(propertyPayload)
   this.props.getUnit(unitPayload)
   this.props.getTenant(tenantPayload)
   }

 render(){
  const { classes } = this.props;
  return (
      <div className={classes.root}>
          <AppBar position="static">
            <Toolbar>
              <Typography type="title" color="inherit" className={classes.flex}>
                HUDUMA
              </Typography>
              <TenantUserSettingsMenu user={this.props.user} />
            </Toolbar>
          </AppBar>

         <TenantUserDrawerMenu user={this.props.user} />
         <main className={classes.content}>
           <TenantUserTab />
         </main>
      </div>
  );
  }
}

TenantUserMainDrawer = withStyles(styles, {name: 'TenantUserMainDrawer'})(TenantUserMainDrawer);

export default  connect(mapStateToProps, mapDispatchToProps) (TenantUserMainDrawer);

