import React from 'react';
import styled from 'styled-components';

export function AdminOrder() {
  const data = [
    {
      id: 'any_order',
      date: '2023-02-05',
      name: '김김김',
      totalCount: 13,
      totalPrice: 13000,
      items: [
        {
          id: 'item1',
          name: 'itemName1',
          price: 1000,
          count: 3,
        },
        {
          id: 'item2',
          name: 'itemName2',
          price: 1000,
          count: 5,
        },
        {
          id: 'item3',
          name: 'itemName3',
          price: 1000,
          count: 5,
        },
      ],
      shipping: '배송준비',
    },
    {
      id: 'any_order',
      date: '2023-02-05',
      name: '이이이',
      totalCount: 13,
      totalPrice: 13000,
      items: [
        {
          id: 'item1',
          name: 'itemName1',
          price: 1000,
          count: 3,
        },
        {
          id: 'item2',
          name: 'itemName2',
          price: 1000,
          count: 5,
        },
        {
          id: 'item3',
          name: 'itemName3',
          price: 1000,
          count: 5,
        },
      ],
      shipping: '배송준비',
    },
    {
      id: 'any_order',
      date: '2023-02-05',
      name: '박박박',
      totalCount: 13,
      totalPrice: 13000,
      items: [
        {
          id: 'item1',
          name: 'itemName1',
          price: 1000,
          count: 3,
        },
        {
          id: 'item2',
          name: 'itemName2',
          price: 1000,
          count: 5,
        },
        {
          id: 'item3',
          name: 'itemName3',
          price: 1000,
          count: 5,
        },
      ],
      shipping: '배송준비',
    },
  ];
  /* const itemsList = data.map((item) => {
    return `${itemname}/${item.count}개`;
  }); */

  const list = data.map((item) => (
    <OrderTableRow>
      <OrderTableCell width="10%">{item.date}</OrderTableCell>
      <OrderTableCell width="10%">{item.name}</OrderTableCell>
      <OrderTableCell width="50%">
        {item.items[0].name} / {item.items[0].count} 개, {item.items[1].name} /{' '}
        {item.items[1].count} 개, {item.items[2].name} / {item.items[2].count}{' '}
        개
      </OrderTableCell>
      <OrderTableCell width="15%">{item.totalPrice}</OrderTableCell>
      <OrderTableCell width="15%">{item.shipping}</OrderTableCell>
    </OrderTableRow>
  ));
  return (
    <div className="main-noSide">
      <Title>모든 주문을 관리합니다.</Title>
      <OrderList>
        <OrderTableRow>
          <OrderTableCell width="10%">주문일자</OrderTableCell>
          <OrderTableCell width="10%">이름</OrderTableCell>
          <OrderTableCell width="50%">주문내용</OrderTableCell>
          <OrderTableCell width="15%">결제금액</OrderTableCell>
          <OrderTableCell width="15%">배송현황</OrderTableCell>
        </OrderTableRow>
        {list}
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
