import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Dialog from 'material-ui/Dialog';
import List, { ListItem, ListItemText } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';
import CloseIcon from 'material-ui-icons/Close';
import Slide from 'material-ui/transitions/Slide';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';


const styles = {
  appBar: {
    position: 'relative',
  },
  flex: {
    flex: 1,
  },
  textField: {
  marginRight: "30%",
  marginLeft: "10%",
  marginTop: "2%",
  width: "100%",
}
};

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class AppDialog extends React.Component {
  constructor(props){
     super(props);
  }

  render() {
    const { classes } = this.props;
    return (

        <Dialog
          fullScreen
          open={this.props.open}
          onRequestClose={this.props.onHandleRequestClose}
          transition={Transition}
        >
          <AppBar className={classes.appBar}>
            <Toolbar>
              <IconButton color="contrast" onClick={this.props.onHandleRequestClose} aria-label="Close">
                <CloseIcon />
              </IconButton>
              <Typography type="title" color="inherit" className={classes.flex}>
                {this.props.title}
              </Typography>
              <Button color="contrast" onClick={this.props.appBarOnClick}>
                {this.props.button}
              </Button>
            </Toolbar>
          </AppBar>
            {this.props.children}
        </Dialog>
    );
  }
}


export default withStyles(styles)(AppDialog);

