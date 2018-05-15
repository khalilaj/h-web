import React from 'react';
import { withStyles } from 'material-ui/styles';

import PropTypes from 'prop-types';
import AppBar from 'material-ui/AppBar';
import Tabs, { Tab } from 'material-ui/Tabs';


import PropertyForm from './PropertyForm'



const styles = theme => ({
  root: {
    width: '100%',
    flexGrow: 1,
    marginTop: "5%"
  },
 }
 );

class AddPropertyComponent extends React.Component{


 render()
   {const { classes } = this.props;

   return(
    <div>
      <div className={classes.root} >
         <PropertyForm
          onPropertyFormSubmit = {this.props.onPropertyFormSubmit}
          onPropertyFormNameChange = {this.props.onPropertyFormNameChange}
          onPropertyFormLocationChange = {this.props.onPropertyFormLocationChange}
          onPropertyFormYearOfCompletionChange = {this.props.onPropertyFormYearOfCompletionChange}
         />
    </div>
  </div>
  );
 }

}


export default withStyles(styles) (AddPropertyComponent)