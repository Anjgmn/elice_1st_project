import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Repositories, RepositoryNames } from '../repository';
import img from '../assets/images/main-logo2.png';

export function Login() {
  const navigate = useNavigate();
  const userRepository = Repositories[RepositoryNames.USER];
  const [inputEmail, setInputEmail] = useState('');
  const [inputPw, setInputPw] = useState('');
  const handleInputEmail = (e) => {
    setInputEmail(e.target.value);
  };
  const handleInputPw = (e) => {
    setInputPw(e.target.value);
  };
  const handleClickButton = () => {
    userRepository
      .userLogin({ email: inputEmail, password: inputPw })
      .then((data) => {
        if (data !== undefined) {
          alert('로그인 성공. 홈으로 이동합니다.');
          localStorage.setItem('userToken', data.token);
          document.location.href = '/';
        } else {
          alert('가입된 회원이 아닙니다.');
        }
      })
      .catch();
  };

  return (
    <div className="main-noSide">
      <MainWrapper>
        <LogoBox />
        <MainLogin>
          <MainLoginH2>로그인</MainLoginH2>
          <MainLoginP>
            회원 로그인을 하시면 각종 혜택 및 정보를 제공 받으실 수 있습니다.
          </MainLoginP>
          <TextInput
            type="text"
            value={inputEmail}
            onChange={handleInputEmail}
          />
          <TextInput type="password" value={inputPw} onChange={handleInputPw} />
          <StyledBtn type="button" onClick={handleClickButton}>
            로그인
          </StyledBtn>
          <StyledBtn
            type="button"
            onClick={() => {
              navigate('/join');
            }}
          >
            회원가입
          </StyledBtn>
        </MainLogin>
      </MainWrapper>
    </div>
  );
}

const MainWrapper = styled.div`
  display: flex;
  width: 80%;
  margin: 3em auto;
`;

const MainLogin = styled.div`
  width: 50%;
  display: inline-block;
`;

const MainLoginP = styled.p`
  font-size: 15px;
  margin-top: 35px;
  margin-bottom: 35px;
`;

const MainLoginH2 = styled.h2`
  font-size: 20px;
  margin-top: 35px;
  margin-bottom: 35px;
`;

const LogoBox = styled.div`
  width: 50%;
  display: inline-block;
  background-image: url(${img});
  background-repeat: no-repeat;
  background-size: 70%;
`;

const TextInput = styled.input`
  margin: 1.2em auto;
  display: block;
  font-size: 20px;
  border: 1px solid black;
  width: 90%;
  height: 2.5em;
  border-radius: 5px;
  padding-left: 1em;
`;

const StyledBtn = styled.button`
  display: block;
  margin: 20px auto;
  width: 90%;
  height: 2em;
  background: #56b2fe;
  border: none;
  font-size: 20px;
  color: #ffffff;
  display: block;
  border-radius: 5px;
`;
