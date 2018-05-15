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

import AgreementEdit from  '../../../Containers/Agreement/AgreementEdit'

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

class AgreementEditDrawer extends React.Component {
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
        <Button  color="primary" onClick={this.handleClickOpen}>EDIT AGREEMENT</Button>
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
                EDIT AGREEMENT DETAILS
             </Typography>
            </Toolbar>
          </AppBar>
            <AgreementEdit
               id = {this.props.id}
               tittle={this.props.tittle}
               description={this.props.description}
               deposit_amount={this.props.deposit_amount}
               rent_amount={this.props.rent_amount}
               rent_payment_type={this.props.rent_payment_type}
               rent_start_date={this.props.rent_start_date}
               day_to_pay_rent={this.props.day_to_pay_rent}

               prop_id = {this.props.prop_id}
               tenant_id={this.props.tenant_id}
               unit_id={this.props.unit_id}


               tenant = {this.props.tenant}
               unit = {this.props.unit}
               property = {this.props.property}
             />

        </Dialog>
      </div>
    );
  }
}

AgreementEditDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AgreementEditDrawer);