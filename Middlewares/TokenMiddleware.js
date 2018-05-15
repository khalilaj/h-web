import api from '../api';

const TokenMiddleware = (store) => next => (action) => {

    if (action.type === 'LOGIN'){
        if (!action.error) {
            window.localStorage.setItem('Token',action.payload.user.token);
            api.setToken(action.payload.user.token);
        }

    } else if (action.type === 'LOGOUT') {
        window.localStorage.removeItem('Token');
        api.setToken(null);
    }
    
    next(action);
};

export default TokenMiddleware