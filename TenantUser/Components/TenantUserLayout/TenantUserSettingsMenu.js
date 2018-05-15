import React from 'react';
import IconButton from 'material-ui/IconButton';
import Menu, { MenuItem } from 'material-ui/Menu';
import MoreVertIcon from 'material-ui-icons/MoreVert';

import AppDialog from '../../../Components/Common/AppDialog';

import TenantUserProfileComponent from './TenantUserProfile/TenantUserProfileComponent'
import {connect} from 'react-redux';

import { Redirect } from 'react-router'

const mapStateToProps = (store) => ({
  tenant: store.auth.tenant
});


const mapDispatchToProps = (dispatch) => ({
  onLogOut: (payload) => dispatch({type:'LOGOUT', payload:payload }),
});



class TenantUserSettingsMenu extends React.Component {
  state = {
    anchorEl: null,
    open: false,
    OpenProfile: false,
  };

  handleProfileClickOpen = () => {this.setState({ OpenProfile: true })};
  handleProfileRequestClose = () => {this.setState({ OpenProfile: false })};

  handleClick = event => {
    this.setState({ open: true, anchorEl: event.currentTarget });
  };
  handleClick = event => {
    this.setState({ open: true, anchorEl: event.currentTarget });
  };

  handleRequestClose = () => {
    this.setState({ open: false });
  };


  render() {
    if(!this.props.tenant){
     <Redirect to='/login' />
    } else{
    return (
      <div>
        <IconButton aria-label="More" aria-owns={this.state.open ? 'long-menu' : null} aria-haspopup="true" onClick={this.handleClick} >
          <MoreVertIcon  onClick={this.handleClick} />
        </IconButton>

        <Menu
           id="long-menu"
           anchorEl={this.state.anchorEl}
           open={this.state.open}
           onRequestClose={this.handleRequestClose}
        >
         <MenuItem onClick={this.handleProfileClickOpen}>Profile</MenuItem>
         <MenuItem onClick={() => this.props.onLogOut() }>Logout</MenuItem>
        </Menu>

         <AppDialog
             title="USER PROFILE"
             open={this.state.OpenProfile}
             onHandleRequestClose ={this.handleProfileRequestClose}
             handleProfileClickOpen = {this.handleProfileClickOpen}
           >
            <TenantUserProfileComponent  profile={this.props.user} />
           </AppDialog>
      </div>
    );
   }
 }
}

export default connect (mapStateToProps, mapDispatchToProps) (TenantUserSettingsMenu);
