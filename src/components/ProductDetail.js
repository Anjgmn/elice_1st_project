import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export function ProductDetail({ cart, setCart, product }) {
  const { userToken } = localStorage;
  const navigate = useNavigate();
  const { prodId } = useParams();
  const selected = product.filter((item) => item.id === prodId);

  // 장바구니 중복 관련
  const addDup = (id, quantity) => {
    const findDup = cart.filter((item) => item.id === id)[0];
    const index = cart.indexOf(findDup);
    const cartItem = {
      id: selected[0].id,
      name: selected[0].name,
      author: selected[0].author,
      price: selected[0].price,
      imageUrl: selected[0].imageUrl,
      quantity,
    };
    setCart([...cart.slice(0, index), cartItem, ...cart.slice(index + 1)]);
  };

  const handleCart = () => {
    const cartItem = {
      id: selected[0].id,
      name: selected[0].name,
      author: selected[0].author,
      price: selected[0].price,
      imageUrl: selected[0].imageUrl,
      quantity: 1,
    };
    const findDup = cart.find((item) => item.id === cartItem.id);
    if (findDup) {
      addDup(cartItem.id, findDup.quantity + cartItem.quantity);
    } else {
      setCart([...cart, cartItem]);
    }
    localStorage.setItem('cart', JSON.stringify(cart));
  };

  const list = (
    <ProdDetailBox key={selected[0].id}>
      <ProdSlide>
        <ProdInfoImgBox>
          <figure className="prod-info-img">
            <PIIBimg src={selected[0].imageUrl} alt="상품사진" />
          </figure>
        </ProdInfoImgBox>
      </ProdSlide>

      <ProdInfoBox>
        <div className="prod-info-detail">
          <ProdInfoTopBox>
            <p>{selected[0].author}</p>
          </ProdInfoTopBox>

          <ProdInfoTitleBox>
            <p className="prod-info-title">{selected[0].name}</p>
            <PrcWrap>
              <Strong>₩ {selected[0].price}</Strong>
            </PrcWrap>
          </ProdInfoTitleBox>

          <ProdInfoTxt>
            <p>{selected[0].description}</p>
          </ProdInfoTxt>

          <div className="prod-detail-btn">
            <div>
              <CartBtn
                id="cartBtn"
                type="button"
                onClick={() => {
                  handleCart();
                  alert('장바구니에 추가되었습니다.');
                }}
              >
                장바구니 추가
              </CartBtn>
              <BuyBtn
                id="buyBtn"
                type="button"
                onClick={() => {
                  if (!userToken || userToken === 'undefined') {
                    alert('로그인 후 주문이 가능합니다.');
                    navigate('/login');
                    // e.preventDefault();
                  } else {
                    handleCart();
                  }
                }}
              >
                바로 구매
              </BuyBtn>
            </div>
          </div>
        </div>

        {/* <p className="prod-title">{prod.name}</p> */}
      </ProdInfoBox>
    </ProdDetailBox>
  );

  return <div className="main">{list}</div>;
}

const ProdDetailBox = styled.div`
  display: flex;
  flex-direction: row;
`;

const ProdInfoBox = styled.div`
  width: 300px;
  height: 380px;
`;

const ProdInfoTopBox = styled.div`
  width: inherit;
  height: 25px;
  text-align: start;
  padding: 3px;
  border-bottom: solid 1px gray;
`;

const ProdInfoTitleBox = styled.div`
  width: inherit;
  height: 100px;
  font-size: 25px;
  margin-top: 20px;
`;

const PrcWrap = styled.span`
  margin-top: 70px;
`;

const Strong = styled.strong`
  margin-top: 20px;
  font-size: 20px;
`;

const ProdInfoTxt = styled.div`
  width: inherit;
  height: auto;
`;

const CartBtn = styled.button`
  background-color: #ffffff;
  border: solid 2px skyblue;
  border-radius: 8px;
  font-size: 15px;
  width: 130px;
  height: 40px;
  flex-direction: row;
  justify-content: space-evenly;
  margin: 7px;
  margin-top: 230px;
`;

const BuyBtn = styled.button`
  background-color: skyblue;
  border: solid 2px skyblue;
  border-radius: 8px;
  font-size: 15px;
  color: #ffffff;
  width: 130px;
  height: 40px;
  flex-direction: row;
  justify-content: space-evenly;
  margin: 7px;
  margin-top: 230px;
`;

const ProdSlide = styled.div`
  display: flex;
  flex-flow: column nowrap;
  margin-right: 30px;
`;

const ProdInfoImgBox = styled.div`
  width: 400px;
  height: 430px;
  position: relative;
`;

const PIIBimg = styled.img`
  position: absolute;
  width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
