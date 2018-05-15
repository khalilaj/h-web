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

import CircularIndeterminate from '../Common/CircularIndeterminate'
import MainTable from '../Common/Table/MainTable'

import PropertyTab from './PropertyTab'



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
  { id: 'Name', numeric: true, disablePadding: false, label: '  Name' },
  { id: 'Location', numeric: true, disablePadding: false, label: 'Location' },
  { id: 'Year of Completion', numeric: true, disablePadding: false, label: 'Year of Completion' },
  { id: 'Action', numeric: true, disablePadding: false, label: 'Action' },
];


class PropertyComponent extends React.Component{
    render(){
    const { classes } = this.props;

    if(!this.props.property) {
        return (
        <CircularIndeterminate />
        );
    }
     return(
        <div className='classes.root'>
           <MainTable columnData={columnData} data={this.props.property}>
                {this.props.property.map((n,index) => {
                return (
                  <TableRow hover tabIndex={-1} key={n.id} >
                   <TableCell padding="checkbox">
                    </TableCell>
                    <TableCell padding="none">{index+1}</TableCell>
                    <TableCell numeric>{n.name }</TableCell>
                    <TableCell numeric>{n.location}</TableCell>
                    <TableCell numeric>{n.year_of_completion}</TableCell>
                    <TableCell numeric>
                    <PropertyTab
                     agreement ={this.props.agreement}
                     unit={this.props.unit}
                     message={this.props.message}
                     owner={this.props.owner}
                     tenant = {this.props.tenant}

                     id={n.id}
                     title={(n.name)}
                     name={n.name }
                     location={n.location}
                     year_of_completion={n.year_of_completion}


                    onDeleteUnit={this.props.onDeleteUnit}
                    onDeleteProperty={this.props.onDeleteProperty}
                    onDeleteAgreement={this.props.onDeleteAgreement}
                    onDeleteMessage={this.props.onDeleteMessage}

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

 export default PropertyComponent


