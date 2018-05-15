import React from 'react';

import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardHeader, CardContent, } from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';


const styles = theme => ({
  card: {
    maxWidth: '60%',
    marginTop:'5%',
    marginLeft:'20%',
    height:'60%',
  },
  textField: {
  marginLeft:100,
  marginRight: theme.spacing.unit,
  width: 400,
},button:{
    marginLeft:200,
    marginTop: 10,
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

class UserLogInForm extends React.Component {
  render() {
    const { classes } = this.props;
    return (

      <div>
         <Card className={classes.card}>
            <CardHeader className={classes.header} title="Log in"  />
                <CardContent>
                    <form >
                        <TextField
                          id="email"
                          label="Email"
                          className={classes.textField}
                          type="email"
                          required
                          margin="normal"
                          onChange={this.props.onEmailChange} />
                          <br/>

                          <TextField
                          id="password"
                          label="Password"
                          className={classes.textField}
                          type="password"
                          required
                          margin="normal"
                          onChange = {this.props.onPassChange} />
                          <br/>

                        <Button
                            raised
                            type="submit"
                            color="primary"
                            className={classes.button}
                            onClick={this.props.onLogin}
                            >
                               Login
                        </Button>
                   </form>
                  </CardContent>
                </Card>
                </div>
    );
  }
}

UserLogInForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(UserLogInForm);
