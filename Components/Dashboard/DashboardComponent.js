import React, {Component} from 'react';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';

import DashboardNavigation from './DashboardNavigation'
import CalenderCard from './CalenderCard'


class DashboardComponent extends Component{
    render(){
        return(
    <div>
      <Typography type="display3" gutterBottom>
         Dashboard
      </Typography>
      <Divider />
     <DashboardNavigation />
    </div>
    );
  }
}

export default DashboardComponent

