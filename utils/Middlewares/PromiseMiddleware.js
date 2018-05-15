import {isPromise} from '../utils';


const PromiseMiddleware = (store) => (next) => (action) => {
    if ( isPromise(action.payload) ) {
      store.dispatch({ type: 'ASYNC_START', subtype: action.type });
        action.payload.then(
            res => {
                action.payload = res;
                store.dispatch(action);
            },
            error => {
                action.error = true;
                action.payload = error;
                store.dispatch(action);
            }
        );

        return
    }
    next(action);
};

export default PromiseMiddleware;