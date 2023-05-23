import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { CartPayInfo, OrderStatus } from './Cart';
import { Repositories, RepositoryNames } from '../repository';

export function ShippingInfo({ cart }) {
  const [userInfo, setUserInfo] = useState({});
  const userRepository = Repositories[RepositoryNames.USER];

  useEffect(() => {
    userRepository
      .getProfile(localStorage.userToken)
      .then((data) => {
        setUserInfo(() => {
          data;
        });
      })
      .catch();
  }, []);

  return (
    <StyledShippingInfo>
      <div>
        <InfoWrapper>
          <Info>이름</Info>
          {/* <span>{userInfo.name}</span> */}
          <input type="text" value={localStorage.userName} />
        </InfoWrapper>
        <InfoWrapper>
          <Info>연락처</Info>
          {/* <span>{userInfo.phoneNumber}</span> */}
          <input type="text" value={localStorage.userPhoneNumber} />
        </InfoWrapper>
        <InfoWrapper>
          <Info>주소</Info>
          {/* <span>{userInfo.address}</span> */}
          <input type="text" value={localStorage.userAddress} />
        </InfoWrapper>
        <InfoWrapper>
          <Info>배송 시 요청사항</Info>
          <select name="ipt_select" className="ipt ipt_select">
            <option value="1-1">배송 시 요청사항을 입력하세요.</option>
            <option value="1-1">1</option>
            <option value="2-1">2</option>
            <option value="3-1">3</option>
          </select>
        </InfoWrapper>
        {/* <button type="button">배송정보 수정하기</button> */}
      </div>
    </StyledShippingInfo>
  );
}

export function Payment({ cart }) {
  const orderRepository = Repositories[RepositoryNames.ORDER];

  const handleButton = () => {
    orderRepository
      .createOrderRequest(
        {
          totalCount: 1,
          totalPrice: 1,
          items: {
            productId: 1,
            name: 1,
            price: 1,
            count: 1,
          },
          orderby: 1,
          orderMessage: 1,
          phoneNumber: 1,
        },
        localStorage.userToken,
      )
      .then((data) => console.log('생성된 주문 정보 : ', data))
      .catch();
    alert('주문 완료');
  };
  return (
    <div className="main-noSide">
      <OrderStatus />
      <PaymentWRapper>
        <ShippingInfo cart={cart} />
        <CartPayInfo
          next="/cart/orderComplete"
          button="결제하기"
          cart={cart}
          handleButton={handleButton}
        />
      </PaymentWRapper>
    </div>
  );
}

const PaymentWRapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  margin: 1em 0;
`;

const StyledShippingInfo = styled.div`
  width: 55%;
  height: auto;
  margin: 1em;
  padding: 1em;
  display: inline-block;
  border-radius: 5px;
  box-shadow: 2.5px 2.5px 4px #aaa;
`;

const InfoWrapper = styled.div`
  margin: 1em 0;
`;

const Info = styled.p`
  display: inline-block;
  width: 30%;
`;
