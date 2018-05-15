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

import TenantDetailsComponent from './TenantDetailsComponent'



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
  { id: 'Firstname', numeric: true, disablePadding: false, label: 'Firstname' },
  { id: 'Lastname', numeric: true, disablePadding: false, label: 'Lastname' },
  { id: 'Phone', numeric: true, disablePadding: false, label: 'Phone' },
  { id: 'Action', numeric: true, disablePadding: false, label: 'Action' },
];


class TenantContactTab extends React.Component{

    render(){
    const { classes } = this.props;

    if(!this.props.tenant) {
        return (
        <CircularIndeterminate />
        );
    }
     return(
        <div className='classes.root'>
           <MainTable columnData={columnData} data={this.props.tenant}>
                {this.props.tenant.map((n,index) => {
                return (
                  <TableRow hover tabIndex={-1} key={n.id} >
                   <TableCell padding="checkbox">
                    </TableCell>
                    <TableCell padding="none">{index+1}</TableCell>
                    <TableCell numeric>{n.account.firstname }</TableCell>
                    <TableCell numeric>{n.account.lastname}</TableCell>
                    <TableCell numeric>{n.account.phone_number}</TableCell>
                    <TableCell numeric>
                    <TenantDetailsComponent
                         id = {n.id}
                         account_id ={n.account.id}
                         firstname = {n.account.firstname}
                         lastname = {n.account.lastname}
                         phone_number = {n.account.phone_number}
                         national_id = {n.account.national_id}
                         email =  {n.account.email}
                         username = {n.account.username}
                         onDeleteTenant={this.props.onDeleteTenant}


                    onTenantFormEmailChange = {this.props.onTenantFormEmailChange }
                    onTenantFormPassChange = {this.props.onTenantFormPassChange }
                    onTenantFormFirstnameChange = {this.props.onTenantFormFirstnameChange }
                    onTenantFormLastnameChange  = {this.props.onTenantFormLastnameChange }
                    onTenantFormNationalIdChange = {this.props.onTenantFormNationalIdChange }
                    onTenantFormPhoneChange= {this.props.onTenantFormPhoneChange }
                    onTenantFormUsernameChange= {this.props.onTenantFormUsernameChange}
                    onTenantFormUsernameChange= {this.props.onTenantFormUsernameChange}
                    onTenantFormSubmit= {this.props.onTenantFormSubmit}

                    setFormDetail = {this.props.setFormDetail}
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

 export default TenantContactTab


