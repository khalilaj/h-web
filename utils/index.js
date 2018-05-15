export const isPromise = v =>  v && typeof v.then === 'function';

export const isValidEmail = email => email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);

export const has = Object.prototype.hasOwnProperty;