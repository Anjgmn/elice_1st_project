import React from 'react';
import styled from 'styled-components';

/**
 * 주문 메인 메시지로 출력할 문자열을 반환하는 함수
 * @param {string} productName 물품의 개수
 * @param {number} productCount 주어진 아이템에 대한 개수
 * @param {number} totalCount 주문한 아이템의 총 개수
 * @returns {string} orderContent
 */
function getOrderContent(productName, productCount, totalCount) {
  if (productCount === totalCount) {
    return `${productName} ${productCount}개`;
  }

  return `${productName} ${productCount}개 외 ${totalCount - productCount}`;
}

export function PersonalOrder({ orders }) {
  // userName from authentacation
  const { userName } = localStorage;

  const orderInfoList = orders?.map((order) => {
    const { name, count } = order.items[0];
    const orderContent = getOrderContent(name, count, order.totalCount);

    // order infos
    const { orderedAt, orderBy, totalPrice, status } = order;

    return (
      <OrderTableRow key={order.id}>
        <OrderTableCell width="15%">{orderedAt}</OrderTableCell>
        <OrderTableCell width="10%">{orderBy}</OrderTableCell>
        <OrderTableCell width="45%">{orderContent}</OrderTableCell>
        <OrderTableCell width="15%">{totalPrice}</OrderTableCell>
        <OrderTableCell width="15%">{status}</OrderTableCell>
      </OrderTableRow>
    );
  });
  return (
    <div className="main-noSide">
      <Title>{userName}님의 주문 내역입니다.</Title>
      <OrderList>
        <OrderTableRow>
          <OrderTableCell width="15%">주문일자</OrderTableCell>
          <OrderTableCell width="10%">이름</OrderTableCell>
          <OrderTableCell width="45%">주문내용</OrderTableCell>
          <OrderTableCell width="15%">결제금액</OrderTableCell>
          <OrderTableCell width="15%">배송현황</OrderTableCell>
        </OrderTableRow>
        {orderInfoList}
      </OrderList>
    </div>
  );
}

const Title = styled.p`
  font-size: 1.5rem;
  padding: 0.5em;
  border-bottom: 1px solid black;
`;

const OrderList = styled.div`
  width: 90%;
  margin: 1em auto;
  // border: 1px solid;
  text-align: center;
`;

const OrderTableRow = styled.div`
  border-bottom: 1px solid;
  width: 100%;
  height: 2em;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const OrderTableCell = styled.p`
  display: inline-block;
  width: ${(props) => props.width};
  height: 2em;
  line-height: 2em;
`;
