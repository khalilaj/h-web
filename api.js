import axios from 'axios';


const BaseUrl = 'http://127.0.0.1:8000/';
const LoginUrl = 'login/';
const RegisterUrl = 'register';

const TenantUrl = 'tenant/';
const TenantEditUrl = 'user/';
const TenantAddUrl = 'register/';
const OwnerUrl = 'owner/';
const PropertyUrl = 'property/'
const UnitUrl = 'unit/';
const AgreementUrl = 'agreement/';
const RentUrl = 'rent/';
const MessageUrl = 'message/';
const ServiceChargeUrl = 'serviceCharge/';
const TransactionUrl = 'transaction/';
const CommentUrl = 'comment/';


const instance = axios.create({
    baseURL: BaseUrl
})

let token = null;


function handleResponse(res) {
    return res.data
};

const req = (method, url, data={}) => {
  if (token) {
    instance.defaults.headers.Authorization = `Token ${token}`;
    }

  switch (method.toLowerCase()) {
    case "get":
      return instance.get(url).then(handleResponse);
    case "post":
      return instance.post(url,data).then(handleResponse);
    case "put":
      return instance.put(url,data).then(handleResponse);
    case "delete":
      return instance.delete(url,data).then(handleResponse);
    default:
      return instance.get(url).then(handleResponse);
  }
}

const requests = {
    get: (url) =>  req('GET', url),
    post: (url,data) => req("POST", url, data),
    put: (url,data) => req("PUT", url, data),
    delete: (url,data) => req("DELETE", url, data)
};

const Auth = {
    current: () => requests.get('user/'),
    login: (data) => requests.post(LoginUrl, data),
};

const Tenant = {
  all: () => requests.get(TenantUrl),
  add: (data) => requests.post(TenantAddUrl, data),
  edit: (tenID,data) => requests.put(TenantEditUrl +`${tenID}`, data),
  delete: (tenID, data) => requests.delete(TenantUrl +`${tenID}`, data)
}

const Owner = {
  all: () => requests.get(OwnerUrl),
  add: (data) => requests.post(OwnerUrl, data),
  edit: (ownerID,data) => requests.put(OwnerUrl +`${ownerID}`, data),
  delete: (ownerID, data) => requests.delete(OwnerUrl +`${ownerID}`, data)
}

const Transaction = {
  all: () => requests.get(TransactionUrl),
  add: (data) => requests.post(TransactionUrl, data),
  edit: (transId,data) => requests.put(TransactionUrl+`${transId}`, data),
  delete: (transId, data) => requests.delete(TransactionUrl +`${transId}`, data)
}

const Property = {
  all: () => requests.get(PropertyUrl),
  add: (data) => requests.post(PropertyUrl, data),
  edit: (propId,data) => requests.put(PropertyUrl+`${propId}`, data),
  delete: (propId, data) => requests.delete(PropertyUrl +`${propId}`, data)
}
const Unit = {
  all: () => requests.get(UnitUrl),
  add: (data) => requests.post(UnitUrl, data),
  edit: (unitId,data) => requests.put(UnitUrl+`${unitId}`, data),
  delete: (unitId, data) => requests.delete(UnitUrl +`${unitId}`, data)
}

const Agreement = {
  all: () => requests.get(AgreementUrl),
  add: (data) => requests.post(AgreementUrl, data),
  edit: (agreeId,data) => requests.put(AgreementUrl+`${agreeId}`, data),
  delete: (agreeId, data) => requests.delete(AgreementUrl +`${agreeId}`, data)
}

const Message = {
  all: () => requests.get(MessageUrl),
  add: (data) => requests.post(MessageUrl, data),
  edit: (msgId,data) => requests.put(MessageUrl+`${msgId}`, data),
  delete: (msgId, data) => requests.delete(MessageUrl +`${msgId}`, data)
}

export default {
    Auth,
    Tenant,
    Property,
    Unit,
    Owner,
    Transaction,
    Agreement,
    Message,
    setToken: token_ => token = token_
}

