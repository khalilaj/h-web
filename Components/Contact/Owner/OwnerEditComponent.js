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



class OwnerEdit extends React.Component {
  render() {

    const { classes } = this.props;
    return (

      <div>
         <Paper className={classes.card}>
                <div>
                    <form onSubmit={this.props.onOwnerFormSubmit}>
                       <div className={classes.general}>
                          <TextField
                              required
                              id="firstname"
                              label="Firstname"
                              className={classes.textField}
                              defaultValue={this.props.firstname}
                              type="text"
                              margin="normal"
                              onChange={this.props.onOwnerFormFirstnameChange} />
                          <br/>

                          <TextField
                              id="lastname"
                              required
                              label="Lastname"
                              defaultValue={this.props.lastname}
                              className={classes.textField}
                              type="text"
                              margin="normal"
                              onChange={this.props.onOwnerFormLastnameChange} />
                          <br/>
                       </div>
                      <TextField
                      id="email"
                      required
                      label="Email"
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
                      type="text"
                      margin="normal"
                      onChange={this.props.onOwnerFormPhoneChange} />

                    <br/>

                      <TextField
                      id="national_id"
                      label="National ID"
                      required
                      className={classes.textField}
                      defaultValue={this.props.national_id}
                      type="text"
                      margin="normal"
                      onChange={this.props.onOwnerFormNationalIdChange} />

                     <TextField
                      id="select-property"
                      select
                      required
                      label="Property"
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


export default withStyles(styles)(OwnerEdit);
