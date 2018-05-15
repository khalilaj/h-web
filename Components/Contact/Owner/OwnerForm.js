import React from 'react';

import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardHeader, CardContent, } from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';

import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';
import MenuItem from 'material-ui/Menu/MenuItem';

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

},button:{
    marginLeft:250,
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
},
  general: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  menu: {
    width: 200,
  },
});



class OwnerForm extends React.Component {
  render() {
    const { classes } = this.props;
    return (

      <div>
         <Paper className={classes.card}>
                <div>
                    <form onSubmit={this.props.onOwnerFormSubmit}>
                       <div className={classes.general}>
                          <TextField
                              id="firstname"
                              label="Firstname"
                              className={classes.textField}
                              defaultValue={this.props.firstname}
                              type="text"
                              margin="normal"
                              required
                              onChange={this.props.onOwnerFormFirstnameChange} />
                          <br/>

                          <TextField
                              id="lastname"
                              label="Lastname"
                              defaultValue={this.props.lastname}
                              className={classes.textField}
                              type="text"
                              required
                              margin="normal"
                              onChange={this.props.onOwnerFormLastnameChange} />
                          <br/>
                       </div>

                      <TextField
                      id="email"
                      label="Email"
                      required
                      className={classes.textField}
                      defaultValue={this.props.email}
                      type="email"
                      margin="normal"
                      onChange={this.props.onOwnerFormEmailChange} />

                     <TextField
                      id="Phone Number"
                      label="Phone Number"
                      required
                      defaultValue={this.props.phone_number}
                      className={classes.textField}
                      inputProps={{ pattern:"[0-9]{10}" , title: "Phone number must be entered in the format: '07123456789'. Up to 10 digits allowed." }}
                      type="text"
                      margin="normal"
                      onChange={this.props.onOwnerFormPhoneChange} />

                    <br/>

                      <TextField
                      id="national_id"
                      label="National ID"
                      required
                      inputProps={{ pattern:"[0-9]{8}" , title: "National id must be entered in the format: '33335501'. Up to 8 digits allowed" }}
                      className={classes.textField}
                      defaultValue={this.props.national_id}
                      type="text"
                      margin="normal"
                      onChange={this.props.onOwnerFormNationalIdChange} />

                     <TextField
                      id="select-property"
                      select
                      label="Property"
                      required
                      className={classes.textField}
                      value={this.props.selectState}
                      onChange={this.props.onOwnerFormPropertyChange}
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


export default withStyles(styles)(OwnerForm);
