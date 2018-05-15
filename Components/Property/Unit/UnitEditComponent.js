import React from 'react';

import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardHeader, CardContent, } from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import Menu, { MenuItem } from 'material-ui/Menu';
import Paper from 'material-ui/Paper';

import { FormControlLabel, FormGroup } from 'material-ui/Form';
import Switch from 'material-ui/Switch';

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
},switch:{
     marginLeft:"10%",
}

});


const transaction_status = [
 {
    value: true,
    label: 'OCCUPIED',
  },
  {
    value: false,
    label: 'VACANT',
  },
  ]

class UnitEditComponent extends React.Component {
  render() {

    const { classes } = this.props;
    return (

      <div>
         <Paper className={classes.card}>
                <div>
                    <form onSubmit={this.props.onUnitFormSubmit}>

                          <TextField
                          id="name"
                          label="Unit Name"
                          required
                          className={classes.textField}
                          defaultValue = {this.props.name}
                          type="text"
                          margin="normal"
                          onChange={this.props.onUnitFormNameChange} />
                          <br/>

                          <TextField
                          id="no_of_beds"
                          label="Number of Bedroom"
                          required
                          defaultValue = {this.props.no_of_bed}
                          className={classes.textField}
                          type="text"
                          inputProps={{ pattern: "[0-9]{1,}", title :"Integer Value Allowed" }}
                          margin="normal"
                          onChange={this.props.onUnitFormNoBedsChange} />
                          <br/>

                         <TextField
                          id="no_of_bathroom"
                          label="Number of Bathroom"
                          className={classes.textField}
                          defaultValue = {this.props.no_of_bathroom}
                          type="text"
                          inputProps={{ pattern: "[0-9]{1,}", title :"Integer Value Allowed" }}
                          margin="normal"
                          required
                          onChange={this.props.onUnitFormNoBathroomChange} />

                          <TextField
                          id="select-property"
                          select
                          required
                          label="Property"
                          className={classes.textField}
                          value={this.props.PropertyState}
                          onChange={this.props.onUnitFormPropertyChange}
                          SelectProps={{  MenuProps: { className: classes.menu,  }, }}
                          helperText="Please select property"
                          margin="normal"
                        >
                          {this.props.property.map(option => (
                            <MenuItem key={option.id} value={option.id}>
                              {option.name}
                            </MenuItem>
                          ))}

                          </TextField>

                          <TextField
                          id="select-unit-status"
                          select
                          label="Unit"
                          required
                          className={classes.textField}
                          value={this.props.UnitStatusState}
                          onChange={this.props.onUnitFormStatusChange}
                          SelectProps={{  MenuProps: { className: classes.menu,  }, }}
                          helperText="Please select unit status"
                          margin="normal"
                        >
                          {transaction_status.map(option => (
                            <MenuItem key={option.value} value={option.value}>
                              {option.label}
                            </MenuItem>
                          ))}

                          </TextField>
                            <br />
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


export default withStyles(styles)(UnitEditComponent);
