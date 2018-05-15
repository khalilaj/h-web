import React from 'react';

import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardHeader, CardContent, } from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import blue from 'material-ui/colors/blue';

import Calendar from 'react-calendar-material';


const styles = theme => ({
  calendar: {
    maxWidth: '50%',
    marginTop:'10%',
    marginLeft:'2%',
    height:'20%',
    float:'right'
  },

});

class CalenderCard extends React.Component {
  render() {
    const { classes } = this.props;
    return (

      <div>
       <Calendar
       className = {classes.calendar}
         accentColor={'blue'}
           orientation={'horizintal                   '}
            showHeader={true}
        />

      </div>
    );
  }
}


export default withStyles(styles)(CalenderCard);