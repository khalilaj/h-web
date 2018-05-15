import React from 'react';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import Drawer from 'material-ui/Drawer';

import TenantUserMessageViewComponent from './TenantUserMessageViewComponent'



class TenantUserMessageDetailsComponent extends React.Component {
  state = {
    open: false,
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleRequestClose = () => {
    this.setState({ open: false });
  };

  render() {
 const { classes } = this.props;
    return (
     <div>
      <Button onClick={this.handleClickOpen}>View</Button>
        <Drawer anchor="bottom" open={this.state.open} onRequestClose= {this.handleRequestClose} >
          <div>
            <TenantUserMessageViewComponent
              handleRequestClose={this.handleRequestClose}
               id = {this.props.id}
               created_at={this.props.created_at}
               title={this.props.tittle}
               property={this.props.property}
               tenant={this.props.tenant}
               message={this.props.message}
               response={this.props.response}
               updated_on={this.props.updated_on}
            />
          </div>
        </Drawer>
      </div>
    );
  }
}



export default (TenantUserMessageDetailsComponent);