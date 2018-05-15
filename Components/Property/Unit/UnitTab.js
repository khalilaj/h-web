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

import UnitDetailsComponent from './UnitDetailsComponent'


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
  { id: '# Beds', numeric: true, disablePadding: false, label: '# Beds' },
  { id: '# Bathroom', numeric: true, disablePadding: false, label: '# Bathroom' },
  { id: 'Action', numeric: true, disablePadding: false, label: 'Action' },
];



class UnitTab extends React.Component{

    render(){
    const { classes } = this.props;

      if(!this.props.unit) {
        return (
        <CircularIndeterminate />
        );
    }
     return(
        <div className='classes.root'>
           <MainTable columnData={columnData} data={this.props.unit}>
                {this.props.unit.map((n,index) => {
                return (
                  <TableRow hover tabIndex={-1} key={n.id} >
                   <TableCell padding="checkbox">
                    </TableCell>
                    <TableCell padding="none">{index+1}</TableCell>
                    <TableCell numeric>{n.name }</TableCell>
                    <TableCell numeric>{n.no_of_bed}</TableCell>
                    <TableCell numeric>{n.no_of_bathroom}</TableCell>
                    <TableCell numeric>
                        <UnitDetailsComponent
                           id = {n.id}
                           name={n.name}
                           no_of_bed={n.no_of_bed}
                           status={n.status}
                           no_of_bathroom={n.no_of_bathroom}
                           prop_id = {n.property}

                           onDeleteUnit={this.props.onDeleteUnit}
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

 export default UnitTab


