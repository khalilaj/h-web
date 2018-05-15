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

import UnitEdit from  '../../../Containers/Unit/UnitEdit'


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

class UnitEditDrawer extends React.Component {
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
        <Button  color="primary" onClick={this.handleClickOpen}>Edit Unit</Button>
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
                EDIT UNIT DETAILS
             </Typography>
            </Toolbar>
          </AppBar>
          <UnitEdit
           id = {this.props.id}
           name={this.props.name}
           no_of_bed={this.props.no_of_bed}
           status={this.props.status}
           no_of_bathroom={this.props.no_of_bathroom}
           prop_id = {this.props.prop_id}
           />
        </Dialog>
      </div>
    );
  }
}

UnitEditDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(UnitEditDrawer);