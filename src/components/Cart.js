import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export function OrderStatus() {
  return (
    <StyledOrderStatus>
      <StyledOSP id="status-cart">장바구니</StyledOSP>
      <StyledOSP id="status-order">주문결제</StyledOSP>
      <StyledOSP id="status-complete">주문완료</StyledOSP>
    </StyledOrderStatus>
  );
}

export function ItemsContainer({ cart, setCart }) {
  // const localCart = JSON.parse(localStorage.cart);
  const modifyQuantity = (type, id, quantity) => {
    const findItem = cart.filter((item) => item.id === id);
    const index = cart.indexOf(findItem[0]);
    const cartItem = {
      id: findItem[0].id,
      name: findItem[0].name,
      imageUrl: findItem[0].imageUrl,
      price: findItem[0].price,
      author: findItem[0].author,
      quantity,
    };
    if (type === 'plus') {
      setCart([...cart.slice(0, index), cartItem, ...cart.slice(index + 1)]);
    } else {
      if (quantity === 0) {
        return;
      }
      setCart([...cart.slice(0, index), cartItem, ...cart.slice(index + 1)]);
    }
  };
  const handleDelete = (id) => {
    window.confirm('해당 건을 삭제하시겠습니까?')
      ? setCart(cart.filter((item) => item.id !== id))
      : false;
  };
  return (
    <StyledItemsContainer>
      <StyledChkbox>
        {/* <input type="checkbox" /> */}
        <button
          type="button"
          onClick={() => {
            if (window.confirm('장바구니 목록을 삭제하시겠습니까?')) {
              if (cart.length === 0) {
                alert('장바구니가 비어있습니다.');
                return false;
              }
              setCart([]);
              localStorage.removeItem('cart');
            }
            return true;
          }}
        >
          전체삭제
        </button>
      </StyledChkbox>
      {cart.map((item) => {
        return (
          <EachItem key={item.id}>
            <ImgWrapper>
              <StyledImg src={item.imageUrl} alt="thumbnail" />
            </ImgWrapper>
            <NpWrapper>
              <CartItemName>{item.name}</CartItemName>
              <CartItemPrice>
                <span>{item.price}</span>
                <span>원</span>
              </CartItemPrice>
            </NpWrapper>
            <QttyWrapper>
              {/* - 버튼 */}
              <QttyButton
                type="button"
                onClick={() => {
                  modifyQuantity('minus', item.id, item.quantity - 1);
                }}
              >
                -
              </QttyButton>

              {/* 수량 표시 부분 */}
              <QttyInput>{item.quantity}</QttyInput>

              {/* + 버튼  */}
              <QttyButton
                type="button"
                onClick={() => {
                  modifyQuantity('plus', item.id, item.quantity + 1);
                }}
              >
                +
              </QttyButton>
            </QttyWrapper>
            <PriceWrapper>
              <span>{item.price * item.quantity}</span>
              <span>원</span>
            </PriceWrapper>
            <BtnDeleteItem
              type="button"
              className="btnDeleteitem"
              onClick={() => {
                handleDelete(item.id);
              }}
            >
              X
            </BtnDeleteItem>
          </EachItem>
        );
      })}
    </StyledItemsContainer>
  );
}

export function CartPayInfo({ next, button, cart }) {
  const navigate = useNavigate();
  const sum = cart.reduce((acc, cur) => {
    return acc + cur.quantity;
  }, 0);
  const sumPrice = cart.reduce((acc, cur) => {
    return acc + cur.quantity * cur.price;
  }, 0);
  const shippingFee = 2500;
  const { userToken } = localStorage;
  const handleButton = (e) => {
    if (sum === 0) {
      alert('장바구니가 비어있습니다.');
      e.preventDefault();
      return false;
    }
    if (!userToken || userToken === 'undefined') {
      alert('로그인 후 주문이 가능합니다.');
      navigate('/login');
      e.preventDefault();
      return false;
    }
    return true;
  };
  return (
    <StyledCartPayInfo>
      <PayTitle>결제정보</PayTitle>
      <PayDetail>
        <PayDetP>
          <span>상품수</span>
          <span>
            <span>{sum}</span>
            <span>개</span>
          </span>
        </PayDetP>
        <PayDetP>
          <span>상품 금액</span>
          <span>
            <span>{sumPrice}</span>
            <span>원</span>
          </span>
        </PayDetP>
        <PayDetP>
          <span>배송비</span>
          <span>
            <span id="deliveryFee">{shippingFee}</span>
            <span>원</span>
          </span>
        </PayDetP>
      </PayDetail>
      <div className="payTotal">
        <PayTotP>
          <span>결제금액</span>
          <span>
            <span>
              <span>{sum === 0 ? 0 : sumPrice + shippingFee}</span>
              <span>원</span>
            </span>
          </span>
        </PayTotP>
      </div>
      <Link to={next}>
        <BtnPurchase
          type="button"
          className="btnPurchase"
          onClick={handleButton}
        >
          {button}
        </BtnPurchase>
      </Link>
    </StyledCartPayInfo>
  );
}

export function Cart({
  cart,
  setCart,
  handleDelete,
  modifyQuantity,
  handleButton,
}) {
  return (
    <div className="main-noSide">
      <OrderStatus />
      <CartWrapper>
        <ItemsContainer
          cart={cart}
          setCart={setCart}
          handleDelete={handleDelete}
          modifyQuantity={modifyQuantity}
        />
        <CartPayInfo
          next="/cart/payment"
          button="주문하기"
          cart={cart}
          handleButton={handleButton}
        />
      </CartWrapper>
    </div>
  );
}

// 쉼표를 추가함 (5000 => 5,000)
export const addCommas = (n) => {
  return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

const StyledOrderStatus = styled.div`
  border-bottom: 1px solid black;
  padding-bottom: 0.5em;
  display: block;
  width: 100%;
  height: auto;
`;

const StyledOSP = styled.p`
  display: inline-block;
  &:first-child::after,
  &:nth-child(2)::after {
    content: '>';
    display: inline-block;
    margin: 0 1em;
  }
`;

const CartWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  margin: 1em 0;
`;

const StyledItemsContainer = styled.div`
  width: 55%;
  height: auto;
  margin: 1em;
  padding: 1em;
  display: inline-block;
  border-radius: 5px;
  box-shadow: 2.5px 2.5px 4px gray;
`;

const StyledChkbox = styled.div`
  width: 100%;
  padding-bottom: 0.4em;
  border-bottom: 1px solid black;
`;

const EachItem = styled.div`
  width: 100%;
  height: auto;
  margin: 1em auto;
  padding: 1em 0.5em;
  border: 1px solid black;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const ImgWrapper = styled.div`
  width: 12em;
  height: auto;
  font-size: 0.5em;
`;

const StyledImg = styled.img`
  width: 100%;
  height: auto;
`;

const NpWrapper = styled.div`
  width: 11em;
  height: 80px;
`;

const CartItemName = styled.p`
  font-size: auto;
  margin: 1em 0;
`;

const CartItemPrice = styled.p`
  margin: 0.5em 0;
  font-size: 0.9rem;
`;

const QttyWrapper = styled.div`
  width: 4em;
  height: auto;
`;

const QttyInput = styled.span`
  width: 30px;
  text-align: center;
`;

const QttyButton = styled.button`
  display: inline-block;
  width: 1.5em;
  height: 1.5em;
`;

const PriceWrapper = styled.div`
  width: 5em;
  height: auto;
  font-size: 0.9em;
`;

const BtnDeleteItem = styled.button`
  width: auto;
  height: 1.5em;
  font-size: 0.9em;
  padding: 0;
`;

const StyledCartPayInfo = styled.div`
  width: 35%;
  height: 410px;
  padding: 1em;
  margin: 1em;
  box-shadow: 2.5px 2.5px 4px gray;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const PayTitle = styled.p`
  font-size: 1.5em;
`;

const PayDetail = styled.div`
  height: auto;
  padding: 2em 1em;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
`;

const PayDetP = styled.p`
  margin: 0.5em 0;
  display: flex;
  justify-content: space-between;
`;

const PayTotP = styled.p`
  padding: 0.6em;
  font-size: 1.5em;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
`;

const BtnPurchase = styled.button`
  text-align: center;
  color: #fff;
  background-color: #3e8ed0;
  display: block;
  width: 85%;
  height: 2.5em;
  margin: 1em auto;
  font-size: 1.2em;
  font-weight: bold;
  border-radius: 5px;
  border: none;
  padding: 0.5em;
`;
