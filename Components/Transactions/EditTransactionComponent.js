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

import DatePicker from 'react-datepicker';
import _ from 'lodash';


const styles = theme => ({
  card: {
    marginTop:'2%',
    marginLeft:'25%',
    marginRight:'20%',
    marginBottom:"10%",
    width:"50%"
  },
  textField: {
  marginLeft:"15%",
  width:200

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
  property:{
    marginLeft:"15%",
    width:200
  },
  payer:{
    marginLeft:"15%",
    width:200
  },
  date_due:{
    marginLeft:'15%',
    width: 200
  },
  title:{
    marginLeft:'15%',
    marginBottom:'5%',
    width: 500
  },
  amount_paid:{
    marginLeft:'5%',
  },
  date_paid:{
    marginLeft:'15%',
    width: 200
  },
  status:{
    marginLeft:'15%',
    width: 200
  },
  payment:{
    marginTop:'5%',
  },
  text:{
    marginLeft:'30%',
    marginRight: '35%'
  }
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


class EditTransactionComponent extends React.Component {
  render() {
    const { classes } = this.props;
    const unit = _.filter(this.props.unit, { 'property': this.props.PropertyState });

    return (

      <div>
         <Paper className={classes.card}>
                <div>
                    <form onSubmit={this.props.onTransactionFormSubmit}>
                        <br/>
                         <Typography type="headline" centered className = {classes.text} gutterBottom>
                               Transaction Title
                               <Divider />
                            </Typography>

                          <TextField
                          id="name"
                          label="Transaction Tittle"
                          required
                          className={classes.title}
                          defaultValue={this.props.name}
                          type="text"
                          margin="normal"
                          onChange={this.props.onTransactionFormTitleChange} />
                          <br/>
                          <br/>

                            <Typography type="headline" centered className = {classes.text} gutterBottom>
                               Transaction Details
                               <Divider />
                            </Typography>

                          <TextField
                              id="amount_due"
                              label="Amount Due"
                              required
                              inputProps={{ pattern: "[0-9]{1,}", title :" Amount must be entered in the format: '10000'. Up to 20 digits allowed" }}
                              defaultValue={this.props.amount_due}
                              className={classes.textField}
                              type="text"
                              margin="normal"
                              onChange={this.props.onTransactionFormAmountDueChange} />


                          <TextField
                           id="amount_paid"
                          label="Amount Paid"
                          required
                          inputProps={{ pattern: "[0-9]{1,}", title :" Amount must be entered in the format: '10000'. Up to 20 digits allowed" }}
                          defaultValue={this.props.amount_paid}
                          className={classes.textField}
                          type="text"
                          margin="normal"
                          onChange={this.props.onTransactionFormAmountPaidChange} />

                          <br/>
                          <br/>

                         <TextField
                          id="select-transaction type"
                          select
                          required
                          label="Transaction Type"
                          className={classes.textField}
                          value={this.props.TransactionTypeState}
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
                      id="select-transaction-status"
                      select
                      required
                      label="Transaction Status"
                      className={classes.status}
                      value={this.props.TransactionStatusState}
                      onChange={this.props.onTransactionFormTransactionStatusChange}
                      SelectProps={{  MenuProps: { className: classes.menu,  }, }}
                      helperText="Please select transaction status if any?"
                      margin="normal"
                    >
                     {transaction_status.map(option => (
                                <MenuItem key={option.value} value={option.value}>
                                  {option.label}
                                </MenuItem>
                              ))}
                      </TextField>

                        <br />


                         <TextField
                          id="Date Due"
                          label="Date Due"
                          required
                          className={classes.date_due}
                          defaultValue={this.props.date_due}
                          type="date"
                          margin="normal"
                          InputLabelProps={{
                              shrink: true,
                          }}
                          onChange={this.props.onTransactionFormDateDueChange}
                           />


                          <TextField
                          id="date_paid"
                          label="Date Paid"
                          required
                          className={classes.date_paid}
                          defaultValue={this.props.date_paid}
                          type="date"
                          margin="normal"
                          InputLabelProps={{
                              shrink: true,
                          }}
                          onChange={this.props.onTransactionFormDatePaidChange} />


                           <br />


                    <div className={classes.payment}>

                     <Typography type="headline" centered className = {classes.text} gutterBottom>
                               Payment Details
                               <Divider />
                            </Typography>


                      <TextField
                          id="select-property"
                          select
                          label="Property"
                          required
                         className={classes.property}
                          value={this.props.PropertyState}
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


                      <TextField
                      id="select-unit"
                      select
                      required
                      label="Unit"
                      className={classes.date_due}
                      value={this.props.UnitState}
                      onChange={this.props.onTransactionFormUnitChange}
                      SelectProps={{  MenuProps: { className: classes.menu,  }, }}
                      helperText="Please select unit if any?"
                      margin="normal"
                    >
                      {unit.map(option => (
                        <MenuItem key={option.id} value={option.id}>
                          {option.name}
                        </MenuItem>
                      ))}

                      </TextField>

                    <br />
                      <TextField
                      id="select-payer"
                      select
                      required
                      label="Payer"
                      className={classes.payer}
                      value={this.props.PayerState}
                      onChange={this.props.onTransactionFormPayerChange}
                      SelectProps={{  MenuProps: { className: classes.menu,  }, }}
                      helperText="Please select payer"
                      margin="normal"
                    >
                      {this.props.payer.map(option => (
                        <MenuItem key={option.id} value={option.id}>
                          {option.account.firstname} {option.account.lastname}
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


export default withStyles(styles)(EditTransactionComponent);
