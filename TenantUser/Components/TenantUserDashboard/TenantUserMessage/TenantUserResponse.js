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

import TenantUserMessageDetailsComponent from './TenantUserMessageDetailsComponent'
import Moment from 'react-moment';

import empty from '../../../../Images/empty.png';

function Transition(props) {
  return <Slide direction="up" {...props} />;
}


const styles = theme => ({
  root: {
    width: '100%',
    marginLeft:'2%',
  },
    img: {
    marginLeft:'15%',
    marginTop:'1%',
    marginBottom:'1%',
  },
 }
 );

 const columnData = [
  { id: '#', numeric: false, disablePadding: true, label: '#' },
  { id: 'Created At', numeric: true, disablePadding: false, label: 'Created At' },
  { id: 'Title', numeric: true, disablePadding: false, label: 'Title' },
  { id: 'Action', numeric: true, disablePadding: false, label: 'Action' },
];


class TenantUserResponse extends React.Component{

    render(){
    const { classes } = this.props;

      if(this.props.response.length == 0) {
        return (
        <img src={empty}  className={classes.img} />
        );
    }

     return(
        <div className='classes.root'>
           <MainTable columnData={columnData} data={this.props.response}>
                {this.props.response.map((n,index) => {
                return (
                  <TableRow hover tabIndex={-1} key={n.id} >
                   <TableCell padding="checkbox">
                    </TableCell>
                    <TableCell padding="none">{index+1}</TableCell>
                     <TableCell numeric><Moment>{this.props.created_at}</Moment></TableCell>
                    <TableCell numeric>{n.tittle }</TableCell>
                   <TableCell numeric>
                        <TenantUserMessageDetailsComponent
                           id = {n.id}
                           created_at={n.created_at}
                           tittle={n.tittle}
                           tenant={n.tenant}
                           property = {n.property}
                           message={n.message}
                           response={n.response}
                           updated_on={n.updated_on}
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


 export default withStyles(styles)(TenantUserResponse)


