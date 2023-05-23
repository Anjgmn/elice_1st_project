import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export function Admin() {
  return (
    <div className="main-noSide">
      <Link to="/admin/member">
        <ButtonDiv>전체 회원 조회</ButtonDiv>
      </Link>
      <Link to="/admin/order">
        <ButtonDiv>전체 주문 조회</ButtonDiv>
      </Link>
      <Link to="/admin/product">
        <ButtonDiv>새 상품 등록</ButtonDiv>
      </Link>
      <Link to="/admin/category">
        <ButtonDiv>카테고리 등록/삭제</ButtonDiv>
      </Link>
    </div>
  );
}

const ButtonDiv = styled.div`
  border: 1px solid;
  text-align: center;
  width: 90%;
  height: 3em;
  line-height: 3em;
  font-size: 2em;
  margin: 1em auto;
  border-radius: 5px;
`;
