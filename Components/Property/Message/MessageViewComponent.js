import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import classnames from 'classnames';
import Card, { CardHeader, CardMedia, CardContent, CardActions } from 'material-ui/Card';
import Collapse from 'material-ui/transitions/Collapse';
import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';
import red from 'material-ui/colors/red';
import FavoriteIcon from 'material-ui-icons/Favorite';
import ShareIcon from 'material-ui-icons/Share';
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';
import PersonIcon from 'material-ui-icons/Person';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import AssignmentIcon from 'material-ui-icons/Assignment';
import EmailIcon from 'material-ui-icons/Email';
import CloseIcon from 'material-ui-icons/Close';
import SendIcon from 'material-ui-icons/Send';

import { EditorState, convertToRaw, ContentState, convertFromHTML } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import '../../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

import Moment from 'react-moment';

import api from '../../../api'

import {connect} from 'react-redux'
import _ from 'lodash'


const mapStateToProps = (store) => ({
  sto:store,
  formData: store.message.formData,
  tenant_data : store.tenant.tenant
});


const mapDispatchToProps = (dispatch) => ({
  editMessage: (payload) => dispatch({type:'EDIT_MESSAGE', payload:payload }),
  onFormChange: (key, value) => dispatch({ type:"ON_MESSAGE_FORM_CHANGE", key, value}),

  getMessage:(payload) => dispatch({type:'GET_MESSAGES', payload:payload }),
 });


const styles = theme => ({
  card: {
    maxWidth: '90%',
    marginLeft: '5%',
    marginBottom: '2%'
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
  flexGrow: {
    flex: '1 1 auto',
  },
  message: {
    marginLeft:'5%'
  },
  send:{
    float:"right"
  },
  editor:{
    marginBottom:"10%"
  }
});

class MessageViewComponent extends React.Component {
  state = {
            expanded: false,
            editorState: EditorState.createWithContent(
               ContentState.createFromBlockArray(
               convertFromHTML(this.props.response)
              )
            ),
            messageState: EditorState.createWithContent(
               ContentState.createFromBlockArray(
               convertFromHTML(this.props.message)
              )
            ),
          };

  componentDidMount (){
        this.props.onFormChange('message', this.props.message)
        this.props.onFormChange('property',this.props.property)
        this.props.onFormChange ('tittle',this.props.title)
        this.props.onFormChange ('tenant',this.props.tenant)
        this.props.onFormChange ('created_at',this.props.created_at)
    }

  componentWillUnmount(){
       const messagePayload = api.Message.all();
       this.props.getMessage(messagePayload)
    }

  onEditorStateChange: Function = (editorState) => {
    this.setState({  editorState, });
    this.props.onFormChange('response', draftToHtml(convertToRaw(editorState.getCurrentContent())) )
  };

   onMessageFormSubmit (){
      const messageData = this.props.formData;
      const payload = api.Message.edit(this.props.id, messageData)
      this.props.editMessage(payload)
       console.log(payload)
    }

  handleExpandClick = () => {
    this.setState({ expanded: !this.state.expanded });
  };

  render() {
    const { classes } = this.props;
    const { editorState } = this.state;
    const { messageState } = this.state;
    const tenantUser = _.find(this.props.tenant_data, ['id', this.props.tenant]);
    return (
      <div>
        <IconButton color="accent" onClick={this.props.handleRequestClose} aria-label="Close">
          <CloseIcon />
        </IconButton>
        <Card className={classes.card}>
        <ListItem >
           <ListItemIcon>
             <AssignmentIcon />
           </ListItemIcon>
           <ListItemText primary="Title " secondary={this.props.title} />
           <Divider />
        </ListItem>
        <ListItem >
           <ListItemIcon>
            <PersonIcon />
           </ListItemIcon>
           <ListItemText primary="Tenant " secondary={tenantUser.account.firstname + " "+ tenantUser.account.lastname} />
           <Divider />
        </ListItem>
        <ListItem >
           <ListItemIcon>
            <EmailIcon />
           </ListItemIcon>
           <ListItemText primary="Message " />
           <Divider />
        </ListItem>


        <CardContent>
            <Typography component="p" className={classes.message}>
               <Editor
              spellCheck
              editorState={messageState}
              wrapperClassName="demo-wrapper"
              editorClassName="demo-editor"
           />
            </Typography>
            <br/>
          <Typography type="body1" gutterBottom align="right">
              <Moment>{this.props.created_at}</Moment>
            </Typography>
          </CardContent>


          <CardActions disableActionSpacing>
            <div className={classes.flexGrow} />
            <IconButton
              className={classnames(classes.expand, {
                [classes.expandOpen]: this.state.expanded,
              })}
              onClick={this.handleExpandClick}
              aria-expanded={this.state.expanded}
              aria-label="View Response"
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse in={this.state.expanded} transitionDuration="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>
                 <div className={classes.editor}>
                    <Editor
                      spellCheck
                      editorState={editorState}
                      wrapperClassName="demo-wrapper"
                      editorClassName="demo-editor"
                      onEditorStateChange={this.onEditorStateChange}
                    />
                   <IconButton color="primary" onClick={() => {this.onMessageFormSubmit()}} className={classes.send} aria-label="Close">
                      <SendIcon />
                   </IconButton>
                 </div>
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
      </div>
    );
  }
}

MessageViewComponent = withStyles(styles, {name: 'MessageViewComponent'})(MessageViewComponent);

export default  connect(mapStateToProps, mapDispatchToProps) (MessageViewComponent);
