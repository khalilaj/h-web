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

import _ from 'lodash';
import TenantUserMessages from './TenantUserMessages'
import TenantUserResponse from './TenantUserResponse'

import TenantUserMessageSendComponent from './TenantUserMessageSendComponent'

import api from '../../../../api'

import {connect} from 'react-redux'

const mapStateToProps = (store) => ({
  sto:store,
  message: store.message.message,
});


const mapDispatchToProps = (dispatch) => ({
  getMessage:(payload) => dispatch({type:'GET_MESSAGES', payload:payload }),
 });



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


class TenantUserMessageTab extends React.Component {
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

  componentDidMount(){
       const payload = api.Message.all();
       this.props.getMessage(payload)
  }


  render() {
    const { classes } = this.props;
    const { value } = this.state;
    const response = _.filter(this.props.message, function(o) { return o.response });
    const unResponded = _.filter(this.props.message, function(o) {
        if(o.response == ""){
        return o
         }
      });
    return (
     <div>

          <Tabs value={value} centered onChange={this.handleChange}>
            <Tab label="REQUESTS" />
            <Tab label="RESPONDED" />
            <Tab label="SEND REQUEST" />
          </Tabs>


        {value === 0 &&
        <TabContainer>
          <TenantUserMessages message={unResponded} />
        </TabContainer>}

        {value === 1 &&
         <TabContainer>
            <TenantUserResponse response={response} />
         </TabContainer>
        }

        {value === 2 &&
         <TabContainer>
            <TenantUserMessageSendComponent response={response} />
         </TabContainer>
        }

      </div>
    );
  }
}

TenantUserMessageTab = withStyles(styles, {name: 'TenantUserMessageTab'})(TenantUserMessageTab);

export default  connect(mapStateToProps, mapDispatchToProps) (TenantUserMessageTab);

