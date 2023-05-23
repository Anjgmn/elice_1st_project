/* eslint-disable */

import axios from 'axios';

import requestUrls from './productRequestUrls';
import utils from '../utils';

export class ProductRepository {
  /**
   * 모든 물품을 가져오는 메소드
   * @returns {Promise<{id: string, name: string, price: string, description: string, author: string, imageUrl: string}[]>}
   */
  async getAllProducts() {
    try {
      const response = await axios.get(requestUrls.GET_ALL_PRODUCTS);

      return utils.extractDataFromResponse(response);
    } catch (error) {
      console.log(error);
    }
  }

  /**
   * productId에 해당하는 물품을 가져오는 메소드
   * @param {string} productId 물품의 id
   * @returns {Promise<{id: string, name: string, price: string, description: string, detailDescription: string, author: string, imageUrl: string, category: string}>} productResponse
   */
  async getOneProduct(productId) {
    try {
      const response = await axios.get(
        `${requestUrls.GET_ONE_PRODUCT}?id=${productId}`,
      );

      return utils.extractDataFromResponse(response);
    } catch (error) {
      console.log(error);
    }
  }

  /**
   * 물품을 카테고리별로 페이지네이션 방식으로 가져오는 메소드
   * @param {{categoryId: string, page: number, limit: number}} getProductRequest
   * @returns {Promise<{totalPage: number, totalCount: number, data: {id: string, name: string, price: string, description: string, author: string, imageUrl: string}[], page: number, count: number}>} productPaginatedResponse
   */
  async getProductListByCategoryId(getProductRequest) {
    try {
      const { categoryId, page, limit } = getProductRequest;
      const requestUrl = `${requestUrls.GET_PRODUCTS_OF_CATEGORY}?categoryId=${categoryId}&page=${page}&limit=${limit}`;

      const response = await axios.get(requestUrl);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }

  /**
   * 물품을 생성하는 메소드
   * @param {{name: string, price: number, description: string, detailDescription: string, author: string, imageUrl: string, category: string}} createProductRequest
   * @param {string} jwtToken
   * @returns {Promise<{id: string, name: string, price: string, description: string, detailDescription: string, author: string, imageUrl: string, category: string}>} createProductResponse
   */
  async createProduct(createProductRequest, jwtToken) {
    try {
      const response = await axios.post(
        requestUrls.CREATE_PRODUCT,
        createProductRequest,
        utils.getAuthorizationHeader(jwtToken),
      );

      return utils.extractDataFromResponse(response);
    } catch (error) {
      console.log(error);
    }
  }

  /**
   * 물품을 수정하는 메소드
   * @param {{name: string, price: number, description: string, detailDescription: string, imageUrl: string}} updateProductRequest
   * @param {string} jwtToken
   * @returns {Promise<{id: string, name: string, price: string, description: string, detailDescription: string, author: string, imageUrl: string, category: string}>} updateProductResponse
   */
  async updateProduct(productId, updateProductRequest, jwtToken) {
    try {
      const requestUrl = `${requestUrls.UPDATE_PRODUCT}/${productId}`;
      const response = await axios.put(
        requestUrl,
        updateProductRequest,
        utils.getAuthorizationHeader(jwtToken),
      );

      return utils.extractDataFromResponse(response);
    } catch (error) {
      console.log(error);
    }
  }

  /**
   * productId에 해당하는 물품을 제거하는 메소드
   * @param {string} productId 물품의 id
   * @param {string} jwtToken 관리자 권한의 jwt token
   * @returns {Promise<{id: string, name: string, price: string, description: string, detailDescription: string, author: string, imageUrl: string, category: string}>} deleteProductResponse
   */
  async deleteProduct(productId, jwtToken) {
    try {
      const requestUrl = `${requestUrls.DELETE_PRODUCT}/${productId}`;
      const response = await axios.delete(
        requestUrl,
        utils.getAuthorizationHeader(jwtToken),
      );

      return utils.extractDataFromResponse(response);
    } catch (error) {
      console.log(error);
    }
  }
}
