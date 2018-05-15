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
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Paper from 'material-ui/Paper';
import Checkbox from 'material-ui/Checkbox';
import IconButton from 'material-ui/IconButton';
import Tooltip from 'material-ui/Tooltip';
import DeleteIcon from 'material-ui-icons/Delete';
import FilterListIcon from 'material-ui-icons/FilterList';


class EnhancedTableHead extends React.Component {

  static propTypes = {
    numSelected: PropTypes.number.isRequired,
    order: PropTypes.string.isRequired,
    rowCount: PropTypes.number.isRequired,
  };



  render() {
    const { order, numSelected, rowCount } = this.props;

    return (
      <TableHead>
        <TableRow>
          <TableCell padding="checkbox" />
          {this.props.columnData.map(column => {
            return (
              <TableCell key={column.id} numeric={column.numeric} padding={column.disablePadding ? 'none' : 'default'} >
                <Tooltip title="Sort" placement={column.numeric ? 'bottom-end' : 'bottom-start'} enterDelay={300} >
                  <TableSortLabel >
                    {column.label}
                  </TableSortLabel>
                </Tooltip>
              </TableCell>
            );
          }, this)}
        </TableRow>
      </TableHead>
    );
  }
}

export default EnhancedTableHead
