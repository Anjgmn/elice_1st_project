const baseUrl = 'http://kdt-ai6-team05.elicecoding.com/api/v1/orders';

const requestUrls = {
  GET_ORDERS_OF_USER: `${baseUrl}/user`,
  GET_ALL_ORDERS: `${baseUrl}/admin`,
  CANCEL_ORDER: `${baseUrl}/cancel`,
  DELETE_ORDER: `${baseUrl}`,
  CHANGE_STATUS: `${baseUrl}/status`,
  CREATE_ORDER: `${baseUrl}`,
};

export default requestUrls;
