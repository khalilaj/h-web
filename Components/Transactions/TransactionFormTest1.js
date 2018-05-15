import React from 'react';

import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardHeader, CardContent, } from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';

import Paper from 'material-ui/Paper';
import MenuItem from 'material-ui/Menu/MenuItem';

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
  },
  button:{
    marginLeft:300,
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


const transaction_type = [
 {
    value: 'RN',
    label: 'RENT',
  },
  {
    value: 'SC',
    label: 'SERVICE CHARGE',
  },
  {
    label: 'MAINTENANCE',
    value: 'MT',
  },
  {
    label: 'DEPOSIT',
    value: 'DP',
  },

];

const transaction_status = [
 {
    value: 'P',
    label: 'PAID',
  },
  {
    value: 'UN',
    label: 'UNPAID',
  },
 ]




class TransactionForm extends React.Component {
  render() {
    const { classes } = this.props;
    return (

      <div>
         <Paper className={classes.card}>
                <div>
                    <form onSubmit={this.props.onTransactionFormSubmit}>
                       <div className={classes.general}>
                          <TextField
                          id="name"
                          label="Transaction Tittle"
                          className={classes.textField}
                          defaultValue={this.props.title}
                          type="text"
                          margin="normal"
                          onChange={this.props.onTransactionFormTitleChange} />
                          <br/>

                       <TextField
                              id="payer"
                              select
                              label="Payer"
                              className={classes.textField}
                              value={this.props.selectPayerState}
                              onChange={this.props.onTransactionFormPayerChange}
                              SelectProps={{  MenuProps: { className: classes.menu,  }, }}
                              helperText="Please select payer"
                              margin="normal"
                            >
                           {this.props.tenant.map(option => (
                            <MenuItem key={option.account.id} value={option.account.id}>
                           {option.account.firstname}
                            </MenuItem>
                          ))}
                      </TextField>

                         <TextField
                          id="amount_due"
                          label="Amount Due"
                          defaultValue={this.props.amount_due}
                          className={classes.textField}
                          type="text"
                          margin="normal"
                          onChange={this.props.onTransactionFormAmountDueChange} />
                          <br/>

                          <TextField
                          id="amount_paid"
                          label="Amount Paid"
                          defaultValue={this.props.amount_paid}
                          className={classes.textField}
                          type="text"
                          margin="normal"
                          onChange={this.props.onTransactionFormAmountPaidChange} />

                          <br/>

                           <TextField
                              id="transaction_type"
                              select
                              label="Transaction Type"
                              className={classes.textField}
                              value={this.props.selectTransactionTypeState}
                              onChange={this.props.onTransactionFormTransactionTypeChange}
                              SelectProps={{  MenuProps: { className: classes.menu,  }, }}
                              helperText="Please select transaction type"
                              margin="normal"
                            >
                              {transaction_type.map(option => (
                                <MenuItem key={option.value} value={option.value}>
                                  {option.label}
                                </MenuItem>
                              ))}
                      </TextField>


                      <TextField
                      id="transaction_status"
                      select
                      label="Transaction Status"
                      className={classes.textField}
                      value={this.props.selectTransactionStatusState}
                      onChange={this.props.onTransactionFormTransactionChange}
                      SelectProps={{  MenuProps: { className: classes.menu,  }, }}
                      helperText="Please select transaction status"
                      margin="normal"
                    >
                      {transaction_status.map(option => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}

                      </TextField>

                          <br/>

                          <TextField
                          id="date_paid"
                          label="Date Paid"
                          className={classes.textField}
                          defaultValue={this.props.date_paid}
                          type="text"
                          margin="normal"
                          onChange = {this.props.onTransactionFormDatePaidChange} />
                          <br/>

                         <TextField
                          id="Date Due"
                          label="Date Due"
                          className={classes.textField}
                          defaultValue={this.props.date_due}
                          type="text"
                          margin="normal"
                          onChange={this.props.onTransactionFormDateDueChange} />
                          <br/>

                     <TextField
                      id="select-property"
                      select
                      label="Property"
                      className={classes.textField}
                      value={this.props.selectPropertyState}
                      onChange={this.props.onTransactionFormPropertyChange}
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
                     <TextField
                      id="select-unit"
                      select
                      label="Unit"
                      className={classes.textField}
                      value={this.props.selectUnitState}
                      onChange={this.props.onTransactionFormUnitChange}
                      SelectProps={{  MenuProps: { className: classes.menu,  }, }}
                      helperText="Please select unit"
                      margin="normal"
                    >
                      {this.props.unit.map(option => (
                        <MenuItem key={option.id} value={option.id}>
                          {option.name}
                        </MenuItem>
                      ))}

                      </TextField>
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



export default withStyles(styles)(TransactionForm);

