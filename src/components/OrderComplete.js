import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { OrderStatus } from './Cart';

export function OrderComplete() {
  return (
    <div className="main-noSide">
      <OrderStatus />
      <StyledDiv>
        <StyledP background="#fff">주문이 완료되었습니다. 감사합니다.</StyledP>
        <Link to="/manageAccount/order">
          <StyledP>주문 내역 확인하기</StyledP>
        </Link>
        <Link to="/">
          <StyledP>쇼핑 계속하기</StyledP>
        </Link>
      </StyledDiv>
    </div>
  );
}

const StyledDiv = styled.div`
  width: 50%;
  text-align: center;
  margin: 20% auto;
  padding: 1em;
  border-radius: 5px;
  box-shadow: 2.5px 1px 4px gray;
`;

const StyledP = styled.p`
  width: 80%;
  margin: 1em auto;
  padding: 1em;
  background: ${(props) => props.background || '#e6f213'};
`;
