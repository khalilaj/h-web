import React from 'react';
import IconButton from 'material-ui/IconButton';
import Menu, { MenuItem } from 'material-ui/Menu';
import MoreVertIcon from 'material-ui-icons/MoreVert';

import AppDialog from '../Common/AppDialog';

import TransactionAdd from '../../Containers/Transaction/TransactionAdd'

class TransactionSettingsMenu extends React.Component {
  state = {
    anchorEl: null,
    open: false,
    OpenAddTransaction: false,
  };

  handleTransactionClickOpen = () => {this.setState({ OpenAddTransaction: true })};
  handleTransactionRequestClose = () => {this.setState({ OpenAddTransaction: false })};

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
         <MenuItem onClick={this.handleTransactionClickOpen}>Add Transaction</MenuItem>
        </Menu>

         <AppDialog
             title="ADD TRANSACTION"
             open={this.state.OpenAddTransaction}
             onHandleRequestClose ={this.handleTransactionRequestClose}
             handleTransactionClickOpen = {this.handleTransactionClickOpen}
           >
            <TransactionAdd  />
           </AppDialog>
      </div>
    );
  }
}

export default TransactionSettingsMenu;
