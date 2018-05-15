import React from 'react';
import {Link} from 'react-router-dom'

import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Divider from 'material-ui/Divider';


import EmailIcon from 'material-ui-icons/Email';
import BusinessIcon from 'material-ui-icons/Business';
import AccountBalanceIcon  from 'material-ui-icons/AccountBalance';
import AccountCircleIcon  from 'material-ui-icons/AccountCircle';
import TimelineIcon  from 'material-ui-icons/Timeline';
import DescriptionIcon  from 'material-ui-icons/Description';

import TenantUserCard from './TenantUserCard'

const styles = theme => ({
  root: {
    width: '25%',
    background: theme.palette.background.paper,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
    height: '100%',
    marginTop: 15,
    [theme.breakpoints.up('sm')]: {
      height: '100%',
      marginTop: 15
    },
    float:"left",
  },
  menu: {
    marginTop: 70,
  },
  link:{
      textDecoration: "none"
}
});

class DrawerMenu extends React.Component{
  constructor(props) {
  super(props);

  }
  render(){
  const { classes } = this.props;
  return (
     <div className={classes.root}>
        <List>
            <ListItem>
              <TenantUserCard  user={this.props.user}/>
            </ListItem>
         <Divider />
        </List>
     </div>
  );
 }
}

export default withStyles(styles)(DrawerMenu);
