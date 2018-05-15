import _ from 'lodash';

export default (state={formData:{}},action)=>{

    switch(action.type){
      case "GET_MESSAGES":
         return{...state, message:action.payload}
      case 'ON_MESSAGE_FORM_CHANGE':
        return {...state, formData:{...state.formData ,[action.key]:action.value} };
      case 'ADD_MESSAGE':
        if(!action.error){
          return {...state, message:[...state.message, action.payload], formData:{}}
        }
        return {...state, error:action.payload.response.data}
      case 'EDIT_MESSAGE':
         return  {...state,  formData:{}}

      case 'DELETE_MESSAGE':
            const id = action.id;
       return  {...state, message:_.remove(state.message, function(n) { return n.id != id;})}
      default:
       return{...state}
}
}