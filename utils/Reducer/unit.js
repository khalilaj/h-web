import _ from 'lodash';

export default (state={formData:{status: false}},action)=>{

    switch(action.type){
      case "GET_UNITS":
         return{...state, unit:action.payload}
      case 'ON_UNIT_FORM_CHANGE':
        return {...state, formData:{...state.formData ,[action.key]:action.value} };
      case 'ADD_UNIT':
        if(!action.error){
          return {...state, unit:[...state.unit, action.payload]}
        }
        return {...state, error:action.payload.response.data}
      case 'DELETE_UNIT':
            const id = action.id;
       return  {...state, unit:_.remove(state.unit, function(n) { return n.id != id;})}
      default:
       return{...state}
   }
}
