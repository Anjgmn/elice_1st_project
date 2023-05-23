/* eslint-disable */
import axios from 'axios';

import requestUrls from './orderRequestUrls';
import utils from '../utils';

class OrderRepository {
  /**
   * jwtToken에 대응하는 유저의 모든 주문을 조회하는 메소드
   * @param {string} jwtToken
   * @returns {Promise<{id: string, totalCount: number, totalPrice: number, status: string, orderBy: string, orderedAt: string, items: {productId: string, name: string, price: number, count: number}[]}[]>} orders
   */
  async getUserOrders(jwtToken) {
    try {
      const response = await axios.get(
        requestUrls.GET_ORDERS_OF_USER,
        utils.getAuthorizationHeader(jwtToken)
      );

      return utils.extractDataFromResponse(response);
    } catch (error) {
      console.log(error);
    }
  }

  /**
   * jwtToken에 대응하는 유저의 모든 주문을 조회하는 메소드
   * @param {string} jwtToken
   * @returns {Promise<{id: string, totalCount: number, totalPrice: number, status: string, orderBy: string, orderedAt: string, items: {productId: string, name: string, price: number, count: number}[]}[]>} orders
   */
  async getAllOrders(jwtToken) {
    try {
      const response = await axios.get(
        requestUrls.GET_ALL_ORDERS,
        utils.getAuthorizationHeader(jwtToken)
      );

      return utils.extractDataFromResponse(response);
    } catch (error) {
      console.log(error);
    }
  }

  /**
   * 준비중인 주문을 취소하는 메소드
   * @param {string} orderId
   * @param {string} jwtToken
   * @returns {Promise<{id: string, totalCount: number, totalPrice: number, status: string, orderBy: string, orderedAt: string, items: {productId: string, name: string, price: number, count: number}[]}>} cancelOrderResponse
   */
  async cancelOrder(orderId, jwtToken) {
    try {
      const requestUrl = utils.getRequestUrlWithQueryParams(
        requestUrls.CANCEL_ORDER,
        { id: orderId }
      );

      const response = await axios.put(
        requestUrl,
        null,
        utils.getAuthorizationHeader(jwtToken)
      );

      return utils.extractDataFromResponse(response);
    } catch (error) {
      console.log(error);
    }
  }

  /**
   * order를 삭제하는 메소드. 관리자 권한이 필요합니다.
   * @param {string} orderId
   * @param {string} jwtToken
   * @returns {Promise<{id: string, totalCount: number, totalPrice: number, status: string, orderBy: string, orderedAt: string, items: {productId: string, name: string, price: number, count: number}[]}>} deleteOrderResponse
   */
  async deleteOrder(orderId, jwtToken) {
    try {
      const requestUrl = `${requestUrls.DELETE_ORDER}/${orderId}`;

      const response = await axios.delete(
        requestUrl,
        utils.getAuthorizationHeader(jwtToken)
      );

      return utils.extractDataFromResponse(response);
    } catch (error) {
      console.log(error);
    }
  }

  /**
   * 주문의 상태를 변경하는 메소드
   * @param {string} orderId
   * @param {string} status 변경할 status 정보. Status VO에서 가져와야한다
   * @param {string} jwtToken
   * @returns {Promise<{id: string, totalCount: number, totalPrice: number, status: string, orderBy: string, orderedAt: string, items: {productId: string, name: string, price: number, count: number}[]}>} changeStatusResponse
   */
  async changeStatus(orderId, status, jwtToken) {
    try {
      const requestUrl = utils.getRequestUrlWithQueryParams(
        requestUrls.CHANGE_STATUS,
        { id: orderId }
      );

      const response = await axios.put(
        requestUrl,
        { status },
        utils.getAuthorizationHeader(jwtToken)
      );

      return utils.extractDataFromResponse(response);
    } catch (error) {
      console.log(error);
    }
  }

  /**
   * order를 생성하는 메소드
   * @param {{totalCount: number, totalPrice: number, items: {productId: string, name: string, price: number, count: number}[], orderBy: string, orderMessage: string, phoneNumber: string}} createOrderRequest 
   * @param {*} jwtToken 
   * @returns {Promise<{id: string, totalCount: number, totalPrice: number, status: string, orderBy: string, orderedAt: string, items: {productId: string, name: string, price: number, count: number}[]}>} createOrderResponse
   */
  async createOrder(createOrderRequest, jwtToken) {
    try {
      const response = await axios.post(
        requestUrls.CREATE_ORDER,
        createOrderRequest,
        utils.getAuthorizationHeader(jwtToken)
      );

      return utils.extractDataFromResponse(response);
    } catch (error) {
      console.log(error);
    }
  }
}

export default OrderRepository;