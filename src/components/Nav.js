import React, { useState, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import styled from 'styled-components';
import img from '../assets/images/main-logo.JPG';

export const MEMBER_TYPE = {
  VISITOR: 'Visitor',
  MEMBER: 'Member',
  ADMIN: 'Admin',
};

export function Nav({ cart, setCart, isLogin, setIsLogin, isAdmin }) {
  const [mode, setMode] = useState(MEMBER_TYPE.VISITOR);
  useEffect(() => {
    if (isLogin) {
      if (isAdmin) {
        console.log('모드를 관리자로 설정합니다 ...');
        setMode(MEMBER_TYPE.ADMIN);
      } else {
        console.log('모드를 일반 회원으로 설정합니다 ...');
        setMode(MEMBER_TYPE.MEMBER);
      }
    } else {
      setMode(MEMBER_TYPE.VISITOR);
    }
  });

  const handleLogout = () => {
    setIsLogin(false);
    setMode(MEMBER_TYPE.VISITOR);
    localStorage.clear();
    alert('로그아웃 되었습니다.');
    setCart([]);
    window.location.herf = '/';
  };
  // const localCart = JSON.parse(localStorage.cart);
  return (
    <>
      <NavBar>
        <Link to="/">
          <Logobox />
        </Link>

        {mode === MEMBER_TYPE.VISITOR ? (
          <Menu>
            <Link to="/join">회원가입</Link>
            <Link to="/login">로그인</Link>
          </Menu>
        ) : mode === MEMBER_TYPE.MEMBER ? (
          <Menu>
            <Link to="/manageAccount">계정관리</Link>
            <button type="button" className="btnLogout" onClick={handleLogout}>
              로그아웃
            </button>
          </Menu>
        ) : (
          <Menu>
            <div>
              <Link to="/manageAccount">계정관리</Link>
              <Link to="/admin">관리자홈</Link>
            </div>
            <Btn type="button" className="btnLogout" onClick={handleLogout}>
              로그아웃
            </Btn>
          </Menu>
        )}

        <Menu>
          <Link to="/cart">
            장바구니(
            {cart.length >= 1 ? <span>{cart.length}</span> : ''})
          </Link>
          <Link to="/">홈</Link>
        </Menu>
      </NavBar>
      <Outlet />
    </>
  );
}

const NavBar = styled.div`
  width: 100%;
  height: 100px;
  margin: 0 auto;
  padding: 1.5em 1em;
  border-bottom: 1px solid #ddd;
`;

const Logobox = styled.div`
  width: 16em;
  height: 2em;
  display: inline-block;
  background-image: url(${img});
  background-size: cover;
`;

const Menu = styled.div`
  float: right;
  font-size: 1em;
  margin: 0 0.5em;
`;

const Btn = styled.button`
  float: right;
  font-size: 1em;
  margin: 0 0.5em;
`;
