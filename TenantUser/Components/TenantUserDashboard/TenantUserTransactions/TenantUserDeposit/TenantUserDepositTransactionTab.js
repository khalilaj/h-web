import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import keycode from 'keycode';
import Table, {
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TablePagination,
  TableRow,
  TableSortLabel,
} from 'material-ui/Table';
import Slide from 'material-ui/transitions/Slide';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Paper from 'material-ui/Paper';
import Button from 'material-ui/Button';
import Checkbox from 'material-ui/Checkbox';
import IconButton from 'material-ui/IconButton';
import Tooltip from 'material-ui/Tooltip';
import DeleteIcon from 'material-ui-icons/Delete';
import FilterListIcon from 'material-ui-icons/FilterList';

import CircularIndeterminate from '../../../../../Components/Common/CircularIndeterminate'
import MainTable from '../../../../../Components/Common/Table/MainTable'

import TenantUserTransactionDetailsComponent from '../TenantUserTransactionDetailsComponent'



function Transition(props) {
  return <Slide direction="up" {...props} />;
}

const styles = theme => ({
  root: {
    width: '100%',
    marginLeft:'2%',
  },
 }
 );

const columnData = [
  { id: '#', numeric: false, disablePadding: true, label: '#' },
  { id: 'Transaction Title', numeric: true, disablePadding: false, label: 'Transaction Tile' },
  { id: 'Transaction Status', numeric: true, disablePadding: false, label: 'Transaction Status' },
  { id: 'Amount Due', numeric: true, disablePadding: false, label: 'Amount Due' },
  { id: 'Amount Paid', numeric: true, disablePadding: false, label: 'Amount Paid' },
  { id: 'Action', numeric: true, disablePadding: false, label: 'Action' },
];

class TenantUserDepositTransactionTab extends React.Component{

    render(){
    const { classes } = this.props;

    if(!this.props.transaction) {
        return (
        <CircularIndeterminate />
        );
    }
     return(
        <div className='classes.root'>
           <MainTable columnData={columnData} data={this.props.transaction}>
                {this.props.transaction.map((n,index) => {
                return (
                 <TableRow hover tabIndex={-1} key={n.id} >
                   <TableCell padding="checkbox">
                    </TableCell>
                    <TableCell padding="none">{index+1}</TableCell>
                    <TableCell numeric>{n.name}</TableCell>
                    <TableCell numeric>{n.transaction_status}</TableCell>
                    <TableCell numeric>{n.amount_due}</TableCell>
                    <TableCell numeric>{n.amount_paid}</TableCell>
                    <TableCell numeric>
                    <TenantUserTransactionDetailsComponent
                      id = {n.id}
                      name = {n.name}
                      amount_due={n.amount_due}
                      amount_paid ={n.amount_paid}
                      transaction_status = {n.transaction_status}
                      transaction_type = {n.transaction_type}
                      date_due = {n.date_due}
                      date_paid = {n.date_paid}
                      property_id = {n.property}
                      unit_id = {n.unit}
                      payer_id = {n.payer}


                     unit = {this.props.unit}
                     payer = {this.props.payer}
                     property = {this.props.property}
                    />
                 </TableCell>
                  </TableRow>
                );
              }
              )}
           </MainTable>
        </div>

     );
   }
 }

 export default TenantUserDepositTransactionTab


