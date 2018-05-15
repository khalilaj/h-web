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


import UnitTab from './Unit/UnitTab'
import MessageTab from './Message/MessageTab'
import ReportsComponent from './Reports/ReportsComponent'
import AgreementTab from './Agreement/AgreementTab'
import PropertyDetailsComponent from './PropertyDetailsComponent'
import PropertySettingsMenu from './PropertySettingsMenu'

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


class PropertyTab extends React.Component {
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
    const unit = _.filter(this.props.unit, ['property', this.props.id]);
    const agreement = _.filter(this.props.agreement, ['property', this.props.id]);
    const message = _.filter(this.props.message, ['property', this.props.id]);

    return (
      <div>
        <Button  color="primary" onClick={this.handleClickOpen}>VIEW MORE</Button>
        <Dialog
          fullScreen
          open={this.state.open}
          onRequestClose={this.handleRequestClose}
          transition={Transition}
        >
          <AppBar className={classes.appBar}>
            <Toolbar>
              <IconButton color="contrast" onClick={this.handleRequestClose} aria-label="Close">
                <CloseIcon />
              </IconButton>
              <Typography type="title" color="inherit" className={classes.flex}>
                {this.props.title}
             </Typography>
             <PropertySettingsMenu />
            </Toolbar>
          </AppBar>

     <div>
      <div className={classes.appBarRoot} >
        <AppBar position="static" color="default" color="inherit">
          <Tabs value={value} onChange={this.handleChange}>
            <Tab label="MESSAGES" />
            <Tab label="UNITS" />
            <Tab label="AGREEMENTS" />
            <Tab label="PROPERTY DETAILS"/>
          </Tabs>
        </AppBar>

        {value === 0 &&
        <TabContainer>
          <MessageTab message={message} />
        </TabContainer>}
                                     
        {value === 1 &&
         <TabContainer>
           <UnitTab
            unit={unit}
            onDeleteUnit={this.props.onDeleteUnit}
             />
         </TabContainer>
        }
        {value === 2 &&
         <TabContainer>
           <AgreementTab
            agreement={agreement}
            tenant = {this.props.tenant}
            unit = {this.props.unit}
            onDeleteAgreement={this.props.onDeleteAgreement}
         />
         </TabContainer>
        }
        {value === 3 &&
         <TabContainer>
          <PropertyDetailsComponent
             id = {this.props.id}
             name={this.props.name }
             location={this.props.location}
             year_of_completion={this.props.year_of_completion}
             owner={this.props.owner}
             notes={this.props.notes}
             onDeleteProperty={this.props.onDeleteProperty}
           />
         </TabContainer>
        }

      </div>
    </div>



        </Dialog>
      </div>
    );
  }
}

PropertyTab.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles) (PropertyTab)

