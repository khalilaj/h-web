import _ from 'lodash';

export default (state={formData:{} , error:'false' }, action)=>{

    switch(action.type){
      case "GET_PROPERTIES":
         return{...state, property:action.payload}

      case 'ON_PROPERTY_FORM_CHANGE':
        return {...state, formData:{...state.formData ,[action.key]:action.value} };

      case 'ADD_PROPERTY':
        if(action.error){
          return {...state, error:'true'}
        }
        return {...state, property:[...state.property, action.payload], error:'false'}

      case 'DELETE_PROPERTY':
            const id = action.id;
       return  {...state, property:_.remove(state.property, function(n) { return n.id != id;})}

      default:
       return{...state}
   }
}
