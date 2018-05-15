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
  marginLeft:"10%",
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
    marginLeft:"10%"
  },
  payer:{
    marginLeft:"22%"
  },
  title:{
    marginLeft:'10%',
    marginBottom:'5%',
    width: 500
  },
  rent:{
  marginTop:'10%',
    },
    tenant:{
    marginLeft:'10%',
    width:500
    },
      text:{
    marginLeft:'30%',
    marginRight: '35%'
  },
    property:{
    marginLeft:"10%",
    width:200
  },
  deposit_amount:{
    marginLeft:"5%",

  },
});


const rent_type = [
 {
    value: 'DY',
    label: 'DAYS',
  },
  {
    value: 'MN',
    label: 'MONTHS',
  },
  {
    label: 'WEEKS',
    value: 'WK',
  },
  {
    label: 'YEARS',
    value: 'YR',
  },

];


class AgreementForm extends React.Component {
  render() {
    const { classes } = this.props;
    const unit = _.filter(this.props.unit, { 'property': this.props.PropertyState });

    return (

          <div>
             <Paper className={classes.card}>
                    <div>
                        <form onSubmit={this.props.onAgreementFormSubmit}>
                            <br />

                        <Typography type="headline" centered className = {classes.text} gutterBottom>
                           Agreement Title
                           <Divider />
                        </Typography>

                       <TextField
                          id="agreement_title"
                          label="Agreement Tittle"
                          className={classes.title}
                          defaultValue={this.props.name}
                          required
                          type="text"
                          margin="normal"
                          onChange={this.props.onAgreementFormTitleChange} />
                          <br/>

                      <Typography type="headline" centered className = {classes.text} gutterBottom>
                           Agreement Details
                           <Divider />
                       </Typography>


                      <TextField
                          id="select-tenant"
                          select
                          required
                          label="Tenant"
                          className={classes.tenant}
                          value={this.props.TenantState}
                          onChange={this.props.onAgreementFormTenantChange}
                          SelectProps={{  MenuProps: { className: classes.menu,  }, }}
                          helperText="Please select tenant"
                          margin="normal"
                        >
                                  {this.props.tenant.map(option => (
                                    <MenuItem key={option.id} value={option.id}>
                                      {option.account.firstname} {option.account.lastname}
                                    </MenuItem>
                                   ))}

                                 </TextField>

                              <br />
                           <div className={classes.general}>
                             <TextField
                              id="select-property"
                              select
                              required
                              label="Property"
                             className={classes.property}
                              value={this.props.PropertyState}
                              onChange={this.props.onAgreementFormPropertyChange}
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
                                  className={classes.textField}
                                  value={this.props.UnitState}
                                  onChange={this.props.onAgreementFormUnitChange}
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
                            <div className={classes.rent}>
                              <Typography type="headline" centered className = {classes.text} gutterBottom>
                               Rent Details
                               <Divider />
                               </Typography>

                               <TextField
                                  id="select-rent-type"
                                  select
                                  required
                                  label="Rent Type"
                                  className={classes.tenant}
                                  value={this.props.RentTypeState}
                                  onChange={this.props.onAgreementFormRentTypeChange}
                                  SelectProps={{  MenuProps: { className: classes.menu,  }, }}
                                  helperText="Please select transaction status if any?"
                                  margin="normal"
                                >
                                 {rent_type.map(option => (
                                            <MenuItem key={option.value} value={option.value}>
                                              {option.label}
                                            </MenuItem>
                                          ))}
                               </TextField>
                                <br />
                              <TextField
                                  id="deposit_amount"
                                  label="Deposit Amount"
                                  inputProps={{ pattern: "[0-9]{1,}", title :" Amount must be entered in the format: '10000'. Up to 20 digits allowed" }}
                                  className={classes.textField}
                                  defaultValue={this.props.deposit_amount}
                                  type="text"
                                  required
                                  margin="normal"
                                  onChange={this.props.onAgreementFormDepositAmountChange} />


                              <TextField
                               id="rent_amount"
                              label="Rent Amount"
                              inputProps={{ pattern: "[0-9]{1,}", title :" Amount must be entered in the format: '10000'. Up to 20 digits allowed" }}
                              defaultValue={this.props.rent_amount}
                              className={classes.textField}
                              type="text"
                              margin="normal"
                              required
                              onChange={this.props.onAgreementFormRentAmountChange} />

                              <TextField
                               id="day_to_pay_rent"
                              label="Rent Day"
                              defaultValue={this.props.day_to_pay_rent}
                              className={classes.textField}
                              type="number"
                              margin="normal"
                              required
                              onChange={this.props.onAgreementFormDayToPayRentChange} />

                             <TextField
                              id="rent_start_date"
                              label="Rent Start Date"
                              defaultValue={this.props.rent_start_date}
                              className={classes.textField}
                              type="date"
                              required
                              margin="normal"
                              InputLabelProps={{
                                  shrink: true,
                              }}
                              onChange={this.props.onAgreementFormRentStartDateChange} />

                            <br/>
                         </div>

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


export default withStyles(styles)(AgreementForm);
