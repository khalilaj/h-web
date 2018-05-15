import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Slide from 'material-ui/transitions/Slide'
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';

import AppDialog from '../../Common/AppDialog'

import ReportsList from './ReportsList'

import PieGraph from './Charts/PieGraph'

const styles = theme => ({

  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
content: {
    backgroundColor: theme.palette.background.default,
    width: '100%',
}
});

class MainDrawer extends React.Component {
  state = {  OpenPieChart: false, }

  handlePieChartClickOpen = () => {this.setState({ OpenPieChart: true })};
  handlePieChartRequestClose = () => {this.setState({ OpenPieChart: false })};


render(){
const { classes } = this.props;
  return (
      <div className={classes.root}>
         <main className={classes.content}>
          <div  >
           <ReportsList
            onHandleLineGraphClickOpen={this.handleLineGraphClickOpen}
            onHandlePieChartClickOpen={this.handlePieChartClickOpen}
            onHandleBarGraphClickOpen={this.handleBarGraphClickOpen}
           />

           <AppDialog
             title="PIE CHART"
             open={this.state.OpenPieChart}
             onHandleRequestClose ={this.handlePieChartRequestClose}
             onHandleClickOpen={this.handlePieChartClickOpen} >
               <PieGraph  unit={this.props.unit} />
           </AppDialog>

         </div>
         </main>
      </div>
  );
}
}

MainDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MainDrawer);