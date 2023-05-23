import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { Repositories, RepositoryNames } from '../repository';

export function Category({ product, setProduct }) {
  const { catId } = useParams();

  // 상품 목록
  const prodRepository = Repositories[RepositoryNames.PRODUCT];
  useEffect(() => {
    prodRepository
      .getAllProducts()
      .then((res) => {
        console.log('상품 id 조회 결과 : ', res);
        setProduct(res);
      })
      .catch();
  }, []);

  const list = product.filter((item) =>
    catId === '63e501800952a8d1c7eb0189' ? item : item.category === catId,
  );
  const list2 = list.map((item) => (
    <Link to={`/category/${item.category}/${item.id}`} key={item.id}>
      <li>
        <MImgBox>
          <MImgBoximg src={item.imageUrl} alt={item.name} />
        </MImgBox>
        <div className="M-info-box">
          <MInfoTitle>{item.name}</MInfoTitle>
          <MInfoPrice>₩ {item.price}</MInfoPrice>
        </div>
      </li>
    </Link>
  ));
  return (
    <div className="main">
      <MainPage>
        {list2.length === 0 ? <li>등록된 상품이 없습니다.</li> : list2}
      </MainPage>
    </div>
  );
}

const MainPage = styled.ul`
  margin: 20px 20px 20px 20px;
  display: flex;
  justify-content: space-evenly;
  align-items: stretch;
  flex-direction: row;
  flex-flow: row wrap;
`;

const MImgBox = styled.div`
  width: 250px;
  height: 170px;
  margin-bottom: 1em;
  position: relative;
`;

const MImgBoximg = styled.img`
  position: absolute;
  width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const MInfoTitle = styled.p`
  font-size: 17px;
  width: 250px;
  height: auto;
  display: flex;
  margin: 0 0 15px 0;
`;

const MInfoPrice = styled.p`
  font-size: 15px;
  font-weight: 650;
  width: 250px;
  height: auto;
  display: flex;
  margin: 0 0 15px 0;
`;
