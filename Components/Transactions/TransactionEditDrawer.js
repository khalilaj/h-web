import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import Dialog from 'material-ui/Dialog';
import List, { ListItem, ListItemText } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';
import CloseIcon from 'material-ui-icons/Close';
import Slide from 'material-ui/transitions/Slide';

import EditTransactionComponent from './EditTransactionComponent';
import TransactionEdit from '../../Containers/Transaction/TransactionEdit';

const styles = {
  appBar: {
    position: 'relative',
  },
  flex: {
    flex: 1,
  },
};

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class TransactionEditDrawer extends React.Component {
  state = {
    open: false,
    formData: {}
  };

  componentDidMount(){
  }

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
        <Button  color="primary" onClick={this.handleClickOpen}>Edit Transaction</Button>
        <Dialog
          fullScreen
          open={this.state.open}
          onRequestClose={this.handleRequestClose}
          transition={Transition}
        >
          <AppBar className={classes.appBar}>
            <Toolbar>
              <IconButton color="contrast" onClick={this.handleRequestClose} aria-label="Close">
                <CloseIcon />
              </IconButton>
              <Typography type="title" color="inherit" className={classes.flex}>
                EDIT TRANSACTION DETAILS
             </Typography>
            </Toolbar>
          </AppBar>

         <TransactionEdit
             unit = {this.props.unit}
             payer = {this.props.payer}
             property = {this.props.property}

              id = {this.props.id}
              name = {this.props.name}
              amount_due={this.props.amount_due}
              amount_paid ={this.props.amount_paid}
              transaction_status = {this.props.transaction_status}
              transaction_type = {this.props.transaction_type}
              date_due = {this.props.date_due}
              date_paid = {this.props.date_paid}
              property_id = {this.props.property_id}
              unit_id = {this.props.unit_id}
              payer_id = {this.props.payer_id}
            />
        </Dialog>
      </div>
    );
  }
}


export default withStyles(styles)(TransactionEditDrawer);