import _ from 'lodash';

export default (state={formData:{}},action)=>{

    switch(action.type){
      case "GET_TRANSACTIONS":
         return{...state, transaction:action.payload}
      case 'ON_TRANSACTION_FORM_CHANGE':
        return {...state, formData:{...state.formData ,[action.key]:action.value} };
      case 'ADD_TRANSACTION':
        if(!action.error){
          return {...state, transaction:[...state.transaction, action.payload]}
        }
        return {...state, error:action.payload.response.data}
      case 'DELETE_TRANSACTION':
            const id = action.id;
       return  {...state, transaction:_.remove(state.transaction, function(n) { return n.id != id;})}
      default:
       return{...state}
}
}
