const baseUrl = 'http://kdt-ai6-team05.elicecoding.com/api/v1/products';

const requestUrls = {
  GET_ALL_PRODUCTS: `${baseUrl}/all`,
  GET_ONE_PRODUCT: `${baseUrl}`,
  GET_PRODUCTS_OF_CATEGORY: `${baseUrl}/list`,
  CREATE_PRODUCT: `${baseUrl}`,
  UPDATE_PRODUCT: `${baseUrl}`,
  DELETE_PRODUCT: `${baseUrl}`,
};

export default requestUrls;