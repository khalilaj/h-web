import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import ButtonBase from 'material-ui/ButtonBase';
import Typography from 'material-ui/Typography';

import AppDialog from '../Common/AppDialog'
import ContactAdd from '../../Containers/ContactAdd'


const styles = theme => ({
  root: {
    marginTop: "10%",
    display: 'flex',
    flexWrap: 'wrap',
    minWidth: 300,
    width: '100%',
  },
  tiles: {
    position: 'relative',
    height: 200,
    [theme.breakpoints.down('sm')]: {
      width: '100% !important', // Overrides inline-style
      height: 100,
    },
    '&:hover': {
      zIndex: 1,
    },
    '&:hover $tilesBackdrop': {
      opacity: 0.15,
    },
    '&:hover $tilesMarked': {
      opacity: 0,
    },
    '&:hover $tilesTitle': {
      border: '4px solid currentColor',
    },
  },
  tilesButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  },
  tilesSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  },
  tilesBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    background: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
  },
  tilesTitle: {
    position: 'relative',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 4}px ${theme.spacing.unit + 6}px`,
  },
  tilesMarked: {
    height:
    3,
    width: 18,
    background: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
});


class DashboardNavigation extends React.Component {
  state = {
    OpenMenuComponent: false,
     tiles: [
          {
            title: 'Add Tenant',
            width: '30%',
          },
          {
            title: 'Add Transaction',
            width: '30%',
          },
          {
            title: 'Add Owner',
            width: '30%',
          },
     ]
  };

  handleMenuComponentClickOpen = () => {this.setState({ OpenMenuComponent: true })};
  handleMenuComponentRequestClose = () => {this.setState({ OpenMenuComponent: false })};

  render(){
   const { classes } = this.props;
   const {addTenant}= this.state.tiles[0].title

  return (
    <div className={classes.root}>
      {this.state.tiles.map(tiles => (
        <ButtonBase
          focusRipple
          key={tiles.title}
          className={classes.tiles}
          style={{
            width: tiles.width,
          }}
          onClick={this.handleMenuComponentClickOpen}
        >
          <div className={classes.tilesSrc}  />
          <div className={classes.tilesBackdrop} />
          <div className={classes.tilesButton}>
            <Typography
              component="h3"
              type="subheading"
              color="inherit"
              className={classes.tilesTitle}
              onClick={this.handleMenuComponentClickOpen}
            >
              {tiles.title}
              <div className={classes.tilesMarked} />
            </Typography>
          </div>
        </ButtonBase>
      ))}
     <AppDialog
         title="MENU COMPONENT"
         open={this.state.OpenMenuComponent}
         handleMenuComponentClickOpen ={this.handleMenuComponentClickOpen}
         onHandleRequestClose = {this.handleMenuComponentRequestClose}
      >
        <ContactAdd />
       </AppDialog>

    </div>
  );
 }
}

DashboardNavigation.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DashboardNavigation);