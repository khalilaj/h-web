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

});

class TenantEditComponent extends React.Component {
  render() {
    const { classes } = this.props;
    return (

      <div>
         <Paper className={classes.card}>
                <div>
                    <form onSubmit={this.props.onTenantFormSubmit}>
                       <div className={classes.general}>
                          <TextField
                          id="firstname"
                          label="Firstname"
                          required
                          className={classes.textField}
                          defaultValue={this.props.firstname}
                          type="text"
                          margin="normal"
                          onChange={this.props.onTenantFormFirstnameChange} />
                          <br/>

                          <TextField
                          id="lastname"
                          label="Lastname"
                          required
                          defaultValue={this.props.lastname}
                          className={classes.textField}
                          type="text"
                          margin="normal"
                          onChange={this.props.onTenantFormLastnameChange} />
                          <br/>

                         <TextField
                          id="Phone Number"
                          required
                          label="Phone Number"
                          defaultValue={this.props.phone_number}
                          className={classes.textField}
                          type="text"
                          margin="normal"
                          onChange={this.props.onTenantFormPhoneChange} />

                         <TextField
                          id="email"
                          label="Email"
                          required
                          className={classes.textField}
                          defaultValue={this.props.email}
                          type="email"
                          margin="normal"
                          onChange={this.props.onTenantFormEmailChange} />
                          <br/>


                          <TextField
                          id="username"
                          label="Username"
                          required
                          className={classes.textField}
                          defaultValue={this.props.username}
                          type="text"
                          margin="normal"
                          onChange={this.props.onTenantFormUsernameChange} />
                          <br/>

                          <TextField
                          id="password"
                          label="Password"
                          required
                          className={classes.textField}
                          defaultValue={this.props.password}
                          type="text"
                          margin="normal"
                          onChange = {this.props.onTenantFormPassChange} />
                          <br/>

                         <TextField
                          id="national_id"
                          label="National ID"
                          required
                          className={classes.textField}
                          defaultValue={this.props.national_id}
                          type="text"
                          margin="normal"
                          onChange={this.props.onTenantFormNationalIdChange} />
                          <br/>
                      </div>
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


export default withStyles(styles)(TenantEditComponent);
