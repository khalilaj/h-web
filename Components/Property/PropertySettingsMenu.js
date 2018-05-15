import React from 'react';
import IconButton from 'material-ui/IconButton';
import Menu, { MenuItem } from 'material-ui/Menu';
import MoreVertIcon from 'material-ui-icons/MoreVert';

import AppDialog from '../Common/AppDialog';

import UnitAdd from '../../Containers/Unit/UnitAdd'
import HorizontalNonLinearAlternativeLabelStepper from '../../Containers/Agreement/AgreementAdd'

class PropertySettingsMenu extends React.Component {
  state = {
    anchorEl: null,
    open: false,
    OpenAddAgreement: false,
    OpenAddUnit: false,
  };

  handleAgreementClickOpen = () => {this.setState({ OpenAddAgreement: true })};
  handleAgreementRequestClose = () => {this.setState({ OpenAddAgreement: false })};

  handleUnitClickOpen = () => {this.setState({ OpenAddUnit: true })};
  handleUnitRequestClose = () => {this.setState({ OpenAddUnit: false })};

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
         <MenuItem onClick={this.handleUnitClickOpen}>Add Unit</MenuItem>
         <MenuItem onClick={this.handleAgreementClickOpen}>Add Agreement</MenuItem>
        </Menu>

         <AppDialog
             title="ADD AGREEMENT"
             open={this.state.OpenAddAgreement}
             onHandleRequestClose ={this.handleAgreementRequestClose}
             handleAgreementClickOpen = {this.handleAgreementClickOpen}
           >
            <HorizontalNonLinearAlternativeLabelStepper  />
           </AppDialog>

         <AppDialog
             title="ADD UNIT"
             open={this.state.OpenAddUnit}
             onHandleRequestClose ={this.handleUnitRequestClose}
             handleUnitClickOpen = {this.handleUnitClickOpen}
           >
            <UnitAdd  />
         </AppDialog>
      </div>
    );
  }
}

export default PropertySettingsMenu;
