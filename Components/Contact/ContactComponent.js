import React from 'react';
import { withStyles } from 'material-ui/styles';

import PropTypes from 'prop-types';
import AppBar from 'material-ui/AppBar';
import Tabs, { Tab } from 'material-ui/Tabs';

import TenantContactTab from './Tenant/TenantContactTab'
import OwnerContactTab from './Owner/OwnerContactTab'


function TabContainer(props) {
  return <div>{props.children}</div>;
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = theme => ({
  root: {
    width: '100%',
  },
 }
 );

class ContactComponent extends React.Component{

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
          <Tabs centered value={value} onChange={this.handleChange}>
            <Tab label="Tenants" />
            <Tab label="Owners"/>
          </Tabs>
        </AppBar>

        {value === 0 &&
        <TabContainer>
        <TenantContactTab
          tenant={this.props.tenant}
          onDeleteTenant={this.props.onDeleteTenant}

          onTenantFormEmailChange = {this.props.onTenantFormEmailChange }
          onTenantFormPassChange = {this.props.onTenantFormPassChange }
          onTenantFormFirstnameChange = {this.props.onTenantFormFirstnameChange }
          onTenantFormLastnameChange  = {this.props.onTenantFormLastnameChange }
          onTenantFormNationalIdChange = {this.props.onTenantFormNationalIdChange }
          onTenantFormPhoneChange= {this.props.onTenantFormPhoneChange }
          onTenantFormUsernameChange= {this.props.onTenantFormUsernameChange}
          onTenantFormSubmit= {this.props.onTenantFormSubmit}

          setFormDetail = {this.props.setFormDetail}
        />
        </TabContainer>}

        {value === 1 &&
         <TabContainer>
         <OwnerContactTab
           owner={this.props.owner}
           onDeleteOwner={this.props.onDeleteOwner}

           property = {this.props.property}
           selectState = {this.props.selectState}

           onOwnerFormEmailChange = {this.props.onOwnerFormEmailChange }
           onOwnerFormFirstnameChange = {this.props.onOwnerFormFirstnameChange }
           onOwnerFormLastnameChange  = {this.props.onOwnerFormLastnameChange }
           onOwnerFormNationalIdChange = {this.props.onOwnerFormNationalIdChange }
           onOwnerFormPhoneChange= {this.props.onOwnerFormPhoneChange }
           onOwnerFormPropertyChange = {this.props.onOwnerFormPropertyChange}
           onOwnerFormSubmit= {this.props.onOwnerFormSubmit }
         />
         </TabContainer>
        }

      </div>
    </div>
  );
 }

}

export default withStyles(styles) (ContactComponent)


