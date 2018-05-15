import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';

import SettingsMenu from './SettingsMenu';
import DrawerLayout from './DrawerLayout'
import DashboardComponent from '../Dashboard/DashboardComponent'

const styles = theme => ({
  root: {
    width: '100%',
     height: '100%',
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
content: {
    backgroundColor: theme.palette.background.default,
    width: '74%',
    padding: theme.spacing.unit * 3,
     height: '100%',
    marginTop: 15,
    [theme.breakpoints.up('sm')]: {
      height: '100%',
      marginTop: 15
    },
    float:"right",
}
});

function MainDrawer(props) {
  const { classes } = props;
  return (
      <div className={classes.root}>
          <AppBar position="static">
            <Toolbar>
              <Typography type="title" color="inherit" className={classes.flex}>
                HUDUMA
              </Typography>
              <SettingsMenu user={props.user} />
            </Toolbar>
          </AppBar>

         <DrawerLayout  user={props.user} />

         <main className={classes.content}>
           <DashboardComponent />
         </main>
      </div>
  );
}

MainDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MainDrawer);