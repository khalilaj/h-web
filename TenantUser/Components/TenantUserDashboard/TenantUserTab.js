import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import Dialog from 'material-ui/Dialog';
import List, { ListItem, ListItemText } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';
import CloseIcon from 'material-ui-icons/Close';
import Slide from 'material-ui/transitions/Slide';
import classNames from 'classnames';
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
import Paper from 'material-ui/Paper';
import Checkbox from 'material-ui/Checkbox';
import Tooltip from 'material-ui/Tooltip';
import DeleteIcon from 'material-ui-icons/Delete';
import FilterListIcon from 'material-ui-icons/FilterList';
import Tabs, { Tab } from 'material-ui/Tabs';

import TenantUserMessageTab from './TenantUserMessage/TenantUserMessageTab'
import TenantUserAgreementTab from './TenantUserAgreement/TenantUserAgreementTab'
import TenantUserTransactionTab from './TenantUserTransactions/TenantUserTransactionTab'
import _ from 'lodash';


function TabContainer(props) {
  return <div>{props.children}</div>;
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};


const styles = {
  appBarRoot: {
    width: '100%',
  },
  appBar: {
    position: 'relative',
  },
  flex: {
    flex: 1,
  },
  root: {
    width: '100%',
    marginLeft:'2%',
  },
};

function Transition(props) {
  return <Slide direction="up" {...props} />;
}


class TenantUserTab extends React.Component {
  state = {
    open: false,
    value: 0,
  };
  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleRequestClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    const message = _.filter(this.props.message, [this.props.id]);

    return (
      <div className={classes.appBarRoot} >
        <AppBar position="static" color="default" color="inherit">
          <Tabs value={value} onChange={this.handleChange}>
            <Tab label="MESSAGES" />
            <Tab label="TRANSACTIONS" />
            <Tab label="AGREEMENT" />
          </Tabs>
        </AppBar>

        {value === 0 &&
        <TabContainer>
          <TenantUserMessageTab message={message}  />
        </TabContainer>}
                                     
        {value === 1 &&
         <TabContainer>
           <TenantUserTransactionTab   />
         </TabContainer>
        }

        {value === 2 &&
         <TabContainer>
           <TenantUserAgreementTab  />
         </TabContainer>
        }

      </div>
    );
  }
}



export default withStyles(styles) (TenantUserTab)

