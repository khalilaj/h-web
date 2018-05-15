import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import List, { ListItem, ListItemText } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import EmailIcon from 'material-ui-icons/Email';
import AssessmentIcon from 'material-ui-icons/Assessment';
import TimelineIcon from 'material-ui-icons/Timeline';
import PieChartIcon from 'material-ui-icons/PieChart';



const styles = theme => ({
  root: {
    width: '40%',
    float:"left",
    marginLeft:"30%",
    marginTop:"2%",
    background: theme.palette.background.paper,
  },
  list:{
  marginLeft:"10%"
  }
});

function ReportsList(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <List>
        <ListItem button onClick={props.onHandleLineGraphClickOpen}>
          <Avatar>
            <TimelineIcon />
          </Avatar>
          <ListItemText primary="LINE GRAPH"  />
        </ListItem>

        <ListItem button onClick={props.onHandleBarGraphClickOpen} >
          <Avatar>
            <AssessmentIcon />
          </Avatar>
          <ListItemText primary="BAR GRAPH"  />
        </ListItem>

       <ListItem button onClick={props.onHandlePieChartClickOpen}>
          <Avatar>
            <PieChartIcon />
          </Avatar>
          <ListItemText primary="PIE CHART"  />
        </ListItem>

      </List>
    </div>
  );
}

ReportsList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ReportsList);