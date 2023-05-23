/* eslint-disable */

import axios from 'axios';

import requestUrls from './categoryRequestUrls';
import utils from '../utils';

export class CategoryRepository {
  /**
   * 모든 카테고리를 반환하는 메소드
   * @returns {Promise<{id: string, name: string, productCount: number, description: string}[]>} categories
   */
  async getAllCategories() {
    try {
      const response = await axios.get(requestUrls.GET_ALL_CATEGORIES);

      return utils.extractDataFromResponse(response);
    } catch (error) {
      console.log(error);
    }
  }

  /**
   * 카테고리를 생성하는 메소드
   * @param {{name: string, description: string}} createCategoryRequest
   * @param {string} jwtToken
   * @returns {Promise<{id: string, name: string, productCount: string, description: string}>} createCategoryResponse
   */
  async createCategory(createCategoryRequest, jwtToken) {
    try {
      const response = await axios.post(
        requestUrls.CREATE_CATEGORY,
        createCategoryRequest,
        utils.getAuthorizationHeader(jwtToken),
      );

      return utils.extractDataFromResponse(response);
    } catch (error) {
      console.log(error);
    }
  }

  /**
   * 물품을 수정하는 메소드
   * @param {string} categoryName
   * @param {{name?: string, description?: string}} updateCategoryRequest name, description 중 하나 이상은 무조건 있어야합니다!
   * @param {string} jwtToken
   * @returns {Promise<{id: string, name: string, description: string, productCount: string}>} updateCategoryResponse
   */
  async updateCategory(categoryName, updateCategoryRequest, jwtToken) {
    try {
      const requestUrl = `${requestUrls.UPDATE_CATEGORY}/${categoryName}`;
      const response = await axios.put(
        requestUrl,
        updateCategoryRequest,
        utils.getAuthorizationHeader(jwtToken),
      );

      return utils.extractDataFromResponse(response);
    } catch (error) {
      console.log(error);
    }
  }

  /**
   * 카테고리르 삭제하는 메소드
   * @param {string} categoryName
   * @param {string} jwtToken
   * @returns {Promise<{id: string, name: string, description: string, productCount: string}>} deleteCategoryResponse
   */
  async deleteCategory(categoryName, jwtToken) {
    try {
      const requestUrl = `${requestUrls.DELETE_CATEGORY}/${categoryName}`;
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
