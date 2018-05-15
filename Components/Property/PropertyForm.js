import React from 'react';

import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardHeader, CardContent, } from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';

import Paper from 'material-ui/Paper';


import Typography from 'material-ui/Typography';

const styles = theme => ({
  card: {
    marginTop:'2%',
    marginLeft:'25%',
    marginRight:'20%',
    marginBottom:"10%",
    width:"50%"
  },
  textField: {
  marginLeft:"10%",
  marginLeft:"10%",
  width: 400,
},button:{
    marginLeft:200,
    marginTop: "5%",
    marginBottom:"5%"
  },
  header: {
  marginBottom: '2%',
  marginLeft:250,
  textDecoration: 'none',
  fontSize: '24px',
  fontWeight: '50',
  fontFamily: "Roboto Helvetica Arial sans-serif",
  lineHeight: '20px'
}

});

class PropertyForm extends React.Component {
  render() {
    const { classes } = this.props;
    return (

      <div>
         <Paper className={classes.card}>
                <div>
                    <form onSubmit={this.props.onPropertyFormSubmit}>

                          <TextField
                          id="name"
                          label="Property Name"
                          className={classes.textField}
                          defaultValue={this.props.name}
                          type="text"
                          required
                          margin="normal"
                          onChange={this.props.onPropertyFormNameChange} />
                          <br/>

                          <TextField
                          id="location"
                          label="Location"
                          required
                          defaultValue={this.props.location}
                          className={classes.textField}
                          type="text"
                          margin="normal"
                          onChange={this.props.onPropertyFormLocationChange} />
                          <br/>

                         <TextField
                          id="year_completed"
                          label="Year of Completion"
                          required
                          defaultValue={this.props.year_of_completion}
                          className={classes.textField}
                          type="date"
                          margin="normal"
                          InputLabelProps={{
                              shrink: true,
                          }}
                          onChange={this.props.onPropertyFormYearOfCompletionChange} />

                          <br/>

                          <Button
                            raised
                            type="submit"
                            color="primary"
                            className={classes.button}
                            >
                               Save
                        </Button>

                   </form>
                  </div>
                </Paper>
                </div>
    );
  }
}


export default withStyles(styles)(PropertyForm);
