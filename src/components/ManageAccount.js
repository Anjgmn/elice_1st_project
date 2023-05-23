import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Button = styled.button`
  display: block;
  margin: 16px 10px;
  color: black;
  font-size: 40px;
  border-radius: 15px;
  border: 2px solid black;
  background-color: white;
  padding: 60px;
  width: 1150px;
  height3: 40px;
`;

export function ManageAccount() {
  return (
    <div className="main-noSide">
      <div>
        <Button>
          <Link to="/manageAccount/order">주문조회</Link>
        </Button>
        <Button>
          <Link to="/manageAccount/userInfo">회원정보관리</Link>
        </Button>
        <Button>
          <Link to="/manageAccount/leave">회원탈퇴</Link>
        </Button>
      </div>
    </div>
  );
}
