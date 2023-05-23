import React from 'react';
import { Link } from 'react-router-dom';
import '../style/ProductList.css';
import { Side } from './Side';
/*
export const data = [
  {
    id: '1',
    name: '어흐 피곤해!',
    price: 1000,
    desc: '어흐 피곤해! 어흐!!- 어흐으!!!--',
    manu: '무한도전',
    img: '',
    imgDetail: '',
    category: 'student',
  },
  {
    id: '2',
    name: '잠을 자도 피로가 안 풀리냐',
    price: 1000,
    desc: '짜증 아우 잠을 자도 피로가 안풀리냐~ 어후',
    manu: '무한도전',
    img: '',
    imgDetail: '',
    category: 'dieter',
  },
  {
    id: '3',
    name: '뭘봐 지금 모니터보고 일해 지금',
    price: 1000,
    desc: '길사원이 제일 먼저 왔는데요',
    manu: '무한도전',
    img: '',
    imgDetail: '',
    category: 'employee',
  },
  {
    id: '4',
    name: '자네는 누가 뽑았나?',
    price: 1000,
    desc: '누가뽑았나 ?',
    manu: '무한도전',
    img: '',
    imgDetail: '',
    category: 'employee',
  },
  {
    id: '5',
    name: '나이 너무 많이 먹었어',
    price: 1000,
    desc: '슬퍼...',
    manu: '무한도전',
    img: '',
    imgDetail: '',
    category: 'student',
  },
  {
    id: '6',
    name: '퇴근은 글렀네',
    price: 1000,
    desc: '...',
    manu: '무한도전',
    img: '',
    imgDetail: '',
    category: 'employee',
  },
]; */

export function ProductList({ category }) {
  const list = data.map((item) => (
    <Link to="/detail">
      <li key={item.id}>
        <div className="M-img-box">
          <img src={item.image} alt={item.name} />
        </div>
        <div className="M-info-box">
          <p className="title">{item.name}</p>
          <p className="price">₩ {item.price}</p>
        </div>
      </li>
    </Link>
  ));
  return (
    <>
      <Side data={category} />
      <div className="main">
        <ul className="mainPage">{list}</ul>
      </div>
    </>
  );
}
