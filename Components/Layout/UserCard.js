import React from 'react';

import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardHeader, } from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';
import red from 'material-ui/colors/red';

const styles = theme => ({
  card: {
    width:'100%',
    marginRight:'2%',
  },
  avatar: {
    backgroundColor: red[500],
    alignCenter: 'true',
  },

});

class UserCard extends React.Component {
  state = { expanded: false };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Card className={classes.card}>

          <CardHeader
            avatar={
              <Avatar aria-label="Recipe" className={classes.avatar}>
                A
              </Avatar>
              }
              title={this.props.user.firstname}
              subheader={this.props.user.email}
             />
        </Card>
      </div>
    );
  }
}

UserCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(UserCard);
