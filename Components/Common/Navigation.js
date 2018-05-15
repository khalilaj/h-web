import React from 'react';

import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import ButtonBase from 'material-ui/ButtonBase';
import Typography from 'material-ui/Typography';

const styles = theme => ({
  root: {
    marginTop: "5%",
    display: 'flex',
    flexWrap: 'wrap',
    minWidth: 500,
    width: '100%',
    marginLeft:'5%',
    marginRight:'5%',
    marginBottom:'5%',
  },
  tiles: {
    position: 'relative',
    height: 200,
    '&:hover': {
      zIndex: 1,
    },
    '&:hover $tilesBackdrop': {
      opacity: 0.15,
    },
    '&:hover $tilesMarked': {
      opacity: 0,
    },
    '&:hover $tilesTitle': {
      border: '4px solid currentColor',
    },
  },
  tilesButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  },
  tilesSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  },
  tilesBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    background: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
  },
  tilesTitle: {
    position: 'relative',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 4}px ${theme.spacing.unit + 6}px`,
  },
  tilesMarked: {
    height: 3,
    width: 18,
    background: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
});

const tiles = [
  {
    title: 'Siwaka Plaza',
    width: '30%',
  },
  {
    title: 'Royal Building',
    width: '30%',
  },
  {
    title: 'Huduma',
    width: '30%',
  },  {
    title: 'Madaraka Plaza',
    width: '30%',
  },
  {
    title: 'Central Building',
    width: '30%',
  },
  {
    title: 'Strathmore',
    width: '30%',
  },
];

class PropertyNavigation extends React.Component {
render(){
  const { classes } = this.props;
  console.log(this.props.property)
  return (
    <div className={classes.root}>
      {tiles.map(tiles => (
        <ButtonBase
          onClick={this.props.OpenProperty}
          focusRipple
          key={tiles.title}
          className={classes.tiles}
          style={{
            width: tiles.width,
          }}
        >
          <div className={classes.tilesSrc}  />
          <div className={classes.tilesBackdrop} />
          <div className={classes.tilesButton}>
            <Typography
              component="h3"
              type="subheading"
              color="inherit"
              className={classes.tilesTitle}
            >
              {tiles.title}
              <div className={classes.tilesMarked} />
            </Typography>
          </div>
        </ButtonBase>
      ))}
    </div>
  );
 }
}
PropertyNavigation.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PropertyNavigation);