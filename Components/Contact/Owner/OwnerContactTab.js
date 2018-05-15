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

import CircularIndeterminate from '../../Common/CircularIndeterminate'
import MainTable from '../../Common/Table/MainTable'

import OwnerDetailsComponent from './OwnerDetailsComponent'



function Transition(props) {
  return <Slide direction="up" {...props} />;
}

const styles = theme => ({
  root: {
    marginTop: "2%",
    width: '100%',
    marginLeft:'2%',
  },
 }
 );

const columnData = [
  { id: '#', numeric: false, disablePadding: true, label: '#' },
  { id: 'Firstname', numeric: true, disablePadding: false, label: 'Firstname' },
  { id: 'Lastname', numeric: true, disablePadding: false, label: 'Lastname' },
  { id: 'Phone', numeric: true, disablePadding: false, label: 'Phone' },
  { id: 'Action', numeric: true, disablePadding: false, label: 'Action' },
];


class OwnerContactTab extends React.Component{

    render(){
    const { classes } = this.props;

    if(!this.props.owner) {
        return (
        <CircularIndeterminate />
        );

    }

     return(
        <div className='classes.root'>
           <MainTable columnData={columnData} data={this.props.owner}>
                {this.props.owner.map((n,index) => {
                return (
                  <TableRow hover tabIndex={-1} key={n.id} >
                   <TableCell padding="checkbox">
                    </TableCell>
                    <TableCell padding="none">{index+1}</TableCell>
                    <TableCell numeric>{n.firstname}</TableCell>
                    <TableCell numeric>{n.lastname}</TableCell>
                    <TableCell numeric>{n.phone_number}</TableCell>
                    <TableCell numeric>
                    <OwnerDetailsComponent
                     id={n.id}
                     firstname = {n.firstname}
                     lastname = {n.lastname}
                     phone_number = {n.phone_number}
                     national_id = {n.national_id}
                     email =  {n.email}
                     property_id = {n.property}

                   property = {this.props.property}
                   selectState = {this.props.selectState}

                   onOwnerFormEmailChange = {this.props.onOwnerFormEmailChange }
                   onOwnerFormFirstnameChange = {this.props.onOwnerFormFirstnameChange }
                   onOwnerFormLastnameChange  = {this.props.onOwnerFormLastnameChange }
                   onOwnerFormNationalIdChange = {this.props.onOwnerFormNationalIdChange }
                   onOwnerFormPhoneChange= {this.props.onOwnerFormPhoneChange }
                   onOwnerFormSubmit= {this.props.onOwnerFormSubmit }
                   onOwnerFormPropertyChange = {this.props.onOwnerFormPropertyChange}
                   onOwnerFormPropertyChange = {this.props.onOwnerFormPropertyChange}

                     onDeleteOwner={this.props.onDeleteOwner}
                     /></TableCell>
                  </TableRow>
                );
              }
              )}
           </MainTable>
        </div>

     );
   }
 }

 export default OwnerContactTab


