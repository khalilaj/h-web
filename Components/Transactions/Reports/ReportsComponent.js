import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Slide from 'material-ui/transitions/Slide'
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';

import AppDialog from '../../Common/AppDialog'

import ReportsList from './ReportsList'

import LineGraph from './Charts/LineGraph'
import BarGraph from './Charts/BarGraph'
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
  state = {
    OpenLineGraph: false,
    OpenPieChart: false,
    OpenBarGraph: false,
  };
  handleLineGraphClickOpen = () => {this.setState({ OpenLineGraph: true })};
  handleLineGraphRequestClose = () => {this.setState({ OpenLineGraph: false })};

  handlePieChartClickOpen = () => {this.setState({ OpenPieChart: true })};
  handlePieChartRequestClose = () => {this.setState({ OpenPieChart: false })};

  handleBarGraphClickOpen = () => {this.setState({ OpenBarGraph: true })};
  handleBarGraphRequestClose = () => {this.setState({ OpenBarGraph: false })};


  alert = () => {console.log("hello")};

render(){
const { classes } = this.props;
console.table(this.prop);
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
             title="LINE GRAPH"
             open={this.state.OpenLineGraph}
             onHandleRequestClose ={this.handleLineGraphRequestClose}
             handleLineGraphRequestClose = {this.handleLineGraphRequestClose}
           >
            <LineGraph
             unit={this.props.unit}
             rent={this.props.rent}
             maintenance = {this.props.maintenance}
             serviceCharge = {this.props.serviceCharge}/>
           </AppDialog>

           <AppDialog
             title="PIE CHART"
             open={this.state.OpenPieChart}
             onHandleRequestClose ={this.handlePieChartRequestClose}
             onHandleClickOpen={this.handlePieChartClickOpen} >
               <PieGraph
                 unit={this.props.unit}
                 rent={this.props.rent}
                 maintenance = {this.props.maintenance}
                 serviceCharge = {this.props.serviceCharge}
              />
           </AppDialog>

           <AppDialog
             title="BAR GRAPH"
             open={this.state.OpenBarGraph}
             onHandleRequestClose ={this.handleBarGraphRequestClose}
             onHandleClickOpen={this.handleBarGraphClickOpen} >
               <BarGraph
                unit={this.props.unit}
                 rent={this.props.rent}
                 maintenance = {this.props.maintenance}
                 serviceCharge = {this.props.serviceCharge}
               />
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