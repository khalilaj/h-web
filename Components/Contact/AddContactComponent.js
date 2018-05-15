import React from 'react';
import { withStyles } from 'material-ui/styles';

import PropTypes from 'prop-types';
import AppBar from 'material-ui/AppBar';
import Tabs, { Tab } from 'material-ui/Tabs';


import OwnerForm from './Owner/OwnerForm'
import TenantForm from './Tenant/TenantForm'


function TabContainer(props) {
  return <div style={{ padding: 8 * 3 }}>{props.children}</div>;
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = theme => ({
  root: {
    width: '100%',
    flexGrow: 1,
  },
 }
 );

class AddContactComponent extends React.Component{

  state = {value: 0, };

  handleChange = (event, value) => {
    this.setState({ value });
  };

 render()
   {const { classes } = this.props;
   const { value } = this.state;
   return(
    <div>
      <div className={classes.root} >
        <AppBar position="static" color="default" color="inherit">
          <Tabs centered value={value} onChange={this.handleChange} >
            <Tab label="Add Tenant" />
            <Tab label="Add Owner"/>
          </Tabs>
        </AppBar>

        {value === 0 &&
        <TabContainer>
        <TenantForm
           onTenantFormEmailChange = {this.props.onTenantFormEmailChange }
           onTenantFormPassChange = {this.props.onTenantFormPassChange }
           onTenantFormUsernameChange= {this.props.onTenantFormUsernameChange}
           onTenantFormFirstnameChange = {this.props.onTenantFormFirstnameChange }
           onTenantFormLastnameChange  = {this.props.onTenantFormLastnameChange }
           onTenantFormNationalIdChange = {this.props.onTenantFormNationalIdChange }
           onTenantFormPhoneChange= {this.props.onTenantFormPhoneChange }
           onTenantFormSubmit= {this.props.onTenantFormSubmit }
          />

        </TabContainer>

       }

        {value === 1 &&
        <TabContainer>
         <OwnerForm
           onOwnerFormEmailChange = {this.props.onOwnerFormEmailChange }
           onOwnerFormFirstnameChange = {this.props.onOwnerFormFirstnameChange }
           onOwnerFormLastnameChange  = {this.props.onOwnerFormLastnameChange }
           onOwnerFormNationalIdChange = {this.props.onOwnerFormNationalIdChange }
           onOwnerFormPhoneChange= {this.props.onOwnerFormPhoneChange }
           onOwnerFormPropertyChange = {this.props.onOwnerFormPropertyChange}
           onOwnerFormSubmit= {this.props.onOwnerFormSubmit }

           property = {this.props.property}
           selectState = {this.props.selectState}
         />
         </TabContainer>
        }

      </div>
    </div>
  );
 }

}


export default withStyles(styles) (AddContactComponent)