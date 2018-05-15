import _ from 'lodash';

export default (state={formData:{}},action)=>{

    switch(action.type){
      case "GET_AGREEMENTS":
         return{...state, agreement:action.payload}
      case 'ON_AGREEMENT_FORM_CHANGE':
        return {...state, formData:{...state.formData ,[action.key]:action.value} };
      case 'ADD_AGREEMENT':
          return {...state, agreement:[...state.agreement, action.payload]}
      case 'DELETE_AGREEMENT':
            const id = action.id;
       return  {...state, agreement:_.remove(state.agreement, function(n) { return n.id != id;})}
      default:
       return{...state}
   }
}
