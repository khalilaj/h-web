import _ from 'lodash'

export default (state={formData:{}}, action) => {

  switch (action.type) {
    case 'ON_AUTH_FORM_CHANGE':
      return {...state, formData:{...state.formData ,[action.key]:action.value} };

    case 'LOGIN':
      if(!action.error){
        if (action.payload.user.user_type == 'MN'){
        return {...state, user:action.payload.user };
        }else if(action.payload.user.user_type == 'TN'){
        return {...state, tenant:action.payload.user };
        }
      }
      return {...state};

      case 'LOGOUT':
        return {...state, user: undefined, tenant: undefined, }


    default:
      return {...state};
  }

}
