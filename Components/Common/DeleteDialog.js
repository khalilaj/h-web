import React from 'react';
import Button from 'material-ui/Button';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog';
import Slide from 'material-ui/transitions/Slide';
import NoSSR from 'docs/src/modules/components/NoSSR';

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class AlertDialogSlide extends React.Component {
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
    return (
      <div>
        <Button onClick={this.handleClickOpen}>Slide in alert dialog</Button>
        <NoSSR>
          <Dialog
            open={this.state.open}
            transition={Transition}
            keepMounted
            onRequestClose={this.handleRequestClose}
          >
            <DialogTitle>{this.props.tittle}</DialogTitle>
            <DialogContent>
              <DialogContentText>
                {this.props.deleteMessage}
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleRequestClose} color="primary">
                Disagree
              </Button>
              <Button onClick={this.handleRequestClose} color="primary">
                Agree
              </Button>
            </DialogActions>
          </Dialog>
        </NoSSR>
      </div>
    );
  }
}

export default AlertDialogSlide