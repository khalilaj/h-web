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

import CircularIndeterminate from '../../../../Components/Common/CircularIndeterminate'
import MainTable from '../../../../Components/Common/Table/MainTable'

import TenantUserAgreementDetailsComponent from './TenantUserAgreementDetailsComponent'
import _ from 'lodash';
import {connect} from 'react-redux'
import api from '../../../../api'


const mapStateToProps = (store) => ({
  sto:store,
  agreement : store.agreement.agreement,
  tenant: store.tenant.tenant,
  property: store.property.property,
  unit: store.unit.unit,
});


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
  { id: 'Title', numeric: true, disablePadding: false, label: '  Title' },
  { id: 'Rent Start Date', numeric: true, disablePadding: false, label: 'Rent Start Date' },
  { id: 'Rent Amount', numeric: true, disablePadding: false, label: 'Rent Amount' },
  { id: 'Action', numeric: true, disablePadding: false, label: 'Action' },
];



class TenantUserAgreementTab extends React.Component{


    render(){
    const { classes } = this.props;
      if(!this.props.agreement) {
        return (
        <CircularIndeterminate />
        );
    }
     return(
        <div className='classes.root'>
           <MainTable columnData={columnData} data={this.props.agreement}>
                {this.props.agreement.map((n,index) => {
                return (
                  <TableRow hover tabIndex={-1} key={n.id} >
                   <TableCell padding="checkbox">
                    </TableCell>
                    <TableCell padding="none">{index+1}</TableCell>
                    <TableCell numeric>{n.tittle }</TableCell>
                    <TableCell numeric>{n.rent_start_date}</TableCell>
                    <TableCell numeric>{n.rent_amount}</TableCell>
                    <TableCell numeric>
                        <TenantUserAgreementDetailsComponent
                           id = {n.id}
                           tittle={n.tittle}
                           description={n.description}
                           deposit_amount={n.deposit_amount}
                           rent_amount={n.rent_amount}
                           rent_payment_type={n.rent_payment_type}
                           rent_start_date={n.rent_start_date}
                           day_to_pay_rent={n.day_to_pay_rent}

                           prop_id = {n.property}
                           tenant_id={n.tenant}
                           unit_id={n.unit}

                           property = {this.props.property}
                           tenant = {this.props.tenant}
                           unit = {this.props.unit}
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



TenantUserAgreementTab = withStyles(styles, {name: 'TenantUserAgreementTab'})(TenantUserAgreementTab);

export default  connect(mapStateToProps, ({})) (TenantUserAgreementTab);

