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
import '../../../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

import TextField from 'material-ui/TextField';

import Moment from 'react-moment';

import api from '../../../../api'

import {connect} from 'react-redux'
import _ from 'lodash'


const mapStateToProps = (store) => ({
  sto:store,
  formData: store.message.formData,
  tenant_data : store.tenant.tenant,
  agreement : store.agreement.agreement
});


const mapDispatchToProps = (dispatch) => ({
  addMessage: (payload) => dispatch({type:'ADD_MESSAGE', payload:payload }),
  onFormChange: (key, value) => dispatch({ type:"ON_MESSAGE_FORM_CHANGE", key, value}),

  getMessage:(payload) => dispatch({type:'GET_MESSAGES', payload:payload }),
 });


const styles = theme => ({
  card: {
    maxWidth: '90%',
    marginLeft: '5%',
    marginBottom: '2%',
    marginTop: '2%'
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
  },
    title:{
    marginBottom:'5%',
    marginLeft: '10%',
    width: 500
  },
});

class TenantUserMessageSendComponent extends React.Component {
  state = { expanded: false,  };


  componentDidMount(){

       this.props.onFormChange('property', this.props.agreement[0].property)
       this.props.onFormChange('tenant', this.props.agreement[0].tenant)

    }

  componentWillUnmount(){
       const messagePayload = api.Message.all();
       this.props.getMessage(messagePayload)
    }

  onEditorStateChange: Function = (editorState) => {
    this.props.onFormChange('message', draftToHtml(convertToRaw(editorState.getCurrentContent())) )
  };

  onMessageFormTitleChange = (ev) => this.props.onFormChange('tittle', ev.target.value)

   onMessageFormSubmit (){
      const messageData = this.props.formData;
      const payload = api.Message.add(messageData)
      this.props.addMessage(payload)
       console.log(payload)
    }

  handleExpandClick = () => {
    this.setState({ expanded: !this.state.expanded });
  };

  render() {
    const { classes } = this.props;
    const { editorState } = this.state;

    return (
      <div>
        <Card className={classes.card}>
        <ListItem >
            <TextField
              id="message_title"
              label="Message Tittle"
              className={classes.title}
              required
              type="text"
              margin="normal"
              onChange={this.onMessageFormTitleChange}
            />

           <Divider />
        </ListItem>

        <CardContent>

          <div className={classes.editor}>
            <Editor
              spellCheck
              wrapperClassName="demo-wrapper"
              editorClassName="demo-editor"
              onEditorStateChange={this.onEditorStateChange}
            />

            <IconButton color="primary" onClick={() => {this.onMessageFormSubmit()}} className={classes.send} aria-label="Send">
               <SendIcon />
            </IconButton>
          </div>

          </CardContent>
        </Card>
      </div>
    );
  }
}

TenantUserMessageSendComponent = withStyles(styles, {name: 'TenantUserMessageSendComponent'})(TenantUserMessageSendComponent);

export default  connect(mapStateToProps, mapDispatchToProps) (TenantUserMessageSendComponent);
