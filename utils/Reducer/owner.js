import _ from 'lodash';

export default (state={formData:{}},action)=>{

    switch(action.type){
      case "GET_OWNERS":
         return{...state, owner:action.payload}
      case 'ON_OWNER_FORM_CHANGE':
        return {...state, formData:{...state.formData ,[action.key]:action.value} };
      case 'ADD_OWNER':
        if(!action.error){
          return {...state, owner:[...state.owner, action.payload]}
        }
        return {...state, error:action.payload.response.data}
      case 'DELETE_OWNER':
            const id = action.id;
            if(action.error){
            return {...state, error:true}
            }
       return  {...state, owner:_.remove(state.owner, function(n) { return n.id != id;})}
      default:
       return{...state}
  }
}