import _ from 'lodash';

export default (state={formData:{user_type:'TN' }},action)=>{

    switch(action.type){
      case "GET_TENANTS":
         return{...state, tenant:action.payload}
      case 'ON_TENANT_FORM_CHANGE':
        return {...state, formData:{...state.formData ,[action.key]:action.value} };
      case 'ADD_TENANT':
        if(!action.error){
            let account = {account:action.payload.user}
          return {...state, tenant:[...state.tenant, account], formData:{user_type:'TN'}}
        }
        return {...state, error:action.payload.response.data}
      case 'DELETE_TENANT':
            const id = action.id;
       return  {...state, tenant:_.remove(state.tenant, function(n) { return n.id != id;})}
      default:
       return{...state}
}
}