import React, { useState } from 'react';
import styled from 'styled-components';
// import { Link } from 'react-router-dom';
import { Repositories, RepositoryNames } from '../../repository/index';

// 회원가입 폼

// 이메일 형식인지 확인 (true 혹은 false 반환)
const validateEmail = (JoinEmail) => {
  return String(JoinEmail)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    );
};

const validateName = (JoinName) => {
  return JoinName.toLowerCase().match(/^[ㄱ-ㅎ|가-힣|a-z|A-Z|0-9|].{1,8}$/);
};
const validatePassword = (JoinPassword) => {
  return JoinPassword.toLowerCase().match(/[a-z0-9].{7,20}$/);
};

export default function AuthForm({ type }) {
  const userRepository = Repositories[RepositoryNames.USER];
  const [JoinEmail, setJoinEmail] = useState('');
  const [JoinName, setJoinName] = useState('');
  const [JoinPassword, setJoinPassword] = useState('');
  const [JoinPhoneNumber, setJoinPhoneNumber] = useState('');
  const [JoinAddress, setJoinAddress] = useState('');

  const isEmailValid = validateEmail(JoinEmail);
  const isNameValid = validateName(JoinName);
  const isPasswordValid = validatePassword(JoinPassword);

  const handleJoinEmail = (e) => {
    setJoinEmail(e.target.value);
  };
  const handleJoinName = (e) => {
    setJoinName(e.target.value);
  };
  const handleJoinPassword = (e) => {
    setJoinPassword(e.target.value);
  };
  const handleJoinPhoneNumber = (e) => {
    setJoinPhoneNumber(e.target.value);
  };
  const handleJoinAddress = (e) => {
    setJoinAddress(e.target.value);
  };

  const JoinBtnClick = () => {
    if (!isEmailValid) {
      alert('이메일 형식이 맞지 않습니다.');
      return false;
    }
    if (!isNameValid) {
      alert('이름은 2글자 이상, 10글자 이하이어야 합니다.');
      return false;
    }
    if (!isPasswordValid) {
      alert('비밀번호는 8글자 이상이어야 합니다.');
      return false;
    }

    return userRepository
      .register({
        email: JoinEmail,
        name: JoinName,
        password: JoinPassword,
        phoneNumber: JoinPhoneNumber,
        address: JoinAddress,
        roles: ['User'],
      })
      .then((data) => {
        if (data !== undefined) {
          alert('정상적으로 회원가입되셨습니다.');
          localStorage.setItem('userToken', data.token);
          document.location.href = '/login';
        } else {
          alert('조건 확인 후 다시 시도해주세요.');
        }
      })
      .catch();
  };

  const textMap = {
    Join: '',
    UserInfo: '',
  };

  //----------------------------------------------------------------
  const [updateAddress, setUpdateAddress] = useState('');
  const [updatePw, setUpdatePw] = useState('');

  const handleUpdateAddress = (e) => {
    setUpdateAddress(e.target.value);
  };
  const handleUpdatePw = (e) => {
    setUpdatePw(e.target.value);
  };

  console.log(updateAddress, updatePw);

  const userRepo = Repositories[RepositoryNames.USER];
  const userToken = localStorage.getItem('userToken');
  // const userInform = userRepo.getProfile(userToken);

  console.userInform;
  const updateProfile = async () => {
    const updateUserRequest = {
      address: updateAddress,
      password: updatePw,
    };
    await userRepo
      .updateUser(updateUserRequest, userToken)
      .then(() => {
        alert('업데이트 완료!');
        document.location.href = '/';
      })
      .catch();
    // window.alert('완료!');
    // history.back();
  };

  //-----------------------------------------------

  const text = textMap[type];
  return (
    <AuthFormBlock>
      <h3>{text}</h3>
      <form className="form">
        <InfoBox>
          {type === 'Join' ? (
            <p className="Info-title">회원가입</p>
          ) : (
            <p className="Info-title">회원정보수정</p>
          )}
        </InfoBox>
        {type === 'Join' ? (
          <>
            <StyledInput
              name="useremail"
              placeholder="이메일을 입력하세요."
              type="email"
              id="emailInput"
              onChange={handleJoinEmail}
            />
            <StyledInput
              name="username"
              placeholder="이름을 입력하세요."
              type="text"
              id="fullNameInput"
              onChange={handleJoinName}
            />
            <StyledInput
              name="password"
              placeholder="비밀번호를 설정하세요."
              type="password"
              id="passwordInput"
              onChange={handleJoinPassword}
            />
            <StyledInput
              name="phoneNumber"
              placeholder="전화번호를 '-'없이 입력하세요."
              type="number"
              id="phoneNumberInput"
              onChange={handleJoinPhoneNumber}
            />
            <StyledInput
              name="userAddress"
              placeholder="주소를 입력해주세요."
              type="text"
              id="addressInput"
              onChange={handleJoinAddress}
            />
          </>
        ) : (
          <>
            <StyledInput
              name="useremail"
              placeholder={localStorage.userEmail}
              type="email"
              id="emailInput"
              // onChange={handleUpdateEmail}
            />
            <StyledInput
              name="username"
              placeholder={localStorage.userName}
              type="text"
              id="fullNameInput"
              // onChange={handleJoinName}
            />
            <StyledInput
              name="password"
              placeholder="새로운 비밀번호를 입력하세요."
              type="password"
              id="passwordInput"
              value={updatePw}
              onChange={handleUpdatePw}
            />
            <StyledInput
              name="phoneNumber"
              placeholder={localStorage.userName}
              type="number"
              id="phoneNumberInput"
              // onChange={handleJoinPhoneNumber}
            />
            <StyledInput
              name="userAddress"
              placeholder={localStorage.userAddress}
              type="text"
              id="addressInput"
              value={updateAddress}
              onChange={handleUpdateAddress}
            />
          </>
        )}

        {type === 'Join' ? (
          <Button type="button" onClick={JoinBtnClick}>
            <P>회원가입</P>
          </Button>
        ) : (
          <Button type="button" onClick={updateProfile}>
            <P>저장하기</P>
          </Button>
        )}
      </form>
    </AuthFormBlock>
  );
}

const AuthFormBlock = styled.div`
  .form {
    width: 400px;
    height: auto;
    display: flex;
    flex-direction: column;
  }
`;

const InfoBox = styled.div`
  .Info-title {
    font-size: 30px;
    font-weight: 650;
    letter-spacing: 2px;
    border: none;
  }
  box-shadow: 6px 6px 10px ligthgray;
  padding: 2rem;
  background: white;
  border-radius: 6px;
  text-align: center;
`;

const StyledInput = styled.input`
  width: 400px;
  height: 45px;
  margin: 20px auto auto auto;
  padding: 15px;
  border-radius: 4px;
  border: none;
  box-shadow: 2px 2px 8px lightgray;
  font-size: 13px;
  &:focus {
    color: $oc-teal-7;
    border-bottom: 1px solid skyblue;
  }
  & + & {
    margin-top: 1rem;
  }
`;

const Button = styled.button`
  width: 300px;
  height: 45px;
  background: deepskyblue;
  border: 1px;
  border-radius: 8px;
  margin: 50px auto auto auto;
`;

const P = styled.p`
  font-size: 15px;
  font-weight: 600;
  color: #ffffff;
  text-align: center;
  padding: 15px;
`;
