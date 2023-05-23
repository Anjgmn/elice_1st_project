/* eslint-disable */
import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Repositories, RepositoryNames } from '../repository';

const Title = styled.h1`
  font-size: 40px;
  margin-top: 70px;
  margin-bottom: 60px;
  position: center;
`;

const Box = styled.div`
  font-size: 15px;
  margin-top: 25px;
  margin-bottom: 15px;
`;

const Button = styled.button`
  display: inlin-block;
  color: white;
  font-size: 25px;
  border-radius: 15px;
  border: 2px solid;
  background-color: #56b2fe;
  padding: 30px;
  margin: 16px 10px;
  margin-top: 300px;
  width: 230px;
`;
export const MEMBER_TYPE = {
  VISITOR: 'Visitor',
  MEMBER: 'Member',
  ADMIN: 'Admin',
};

export function Leave() {
  const [mode, setMode] = useState(MEMBER_TYPE.VISITOR);

  const useConfirm = ( message = null, onConfirm, onCancel) => {
    if (!onConfirm || typeof onConfirm !== 'function') {
      return;
    }
    if (onCancel && typeof onCancel !== 'function') {
      return;
    }

    const confirmAction = () => {
      if (window.confirm(message)) {
        onConfirm();
      } else {
        onCancel();
      }
    };

    return confirmAction;
  };
  const deleteConfirm = async () => {
    const userRepo = Repositories[RepositoryNames.USER];
    const userToken = localStorage.getItem('userToken');
    await userRepo.deleteUser(userToken);
    // setIsLogin(false);
    setMode(MEMBER_TYPE.VISITOR);
    localStorage.clear();

    window.alert('완료!');
    window.location.href = ' / ';
  };
  const cancelConfirm = () => {
    history.back();
  };
  const confirmDelete = useConfirm(
    '정말 탈퇴하시겠습니까?',
    deleteConfirm,
    cancelConfirm,
  );
  // const onclickHandler = () => alert('탈퇴가 완료되었습니다.');
  return (
    <div className="main-noSide">
      <Title>회원탈퇴</Title>
      <Box>
        ✓ 탈퇴시 고객 정보가 삭제되며 상품권 구매 내역 확인, 이벤트 참여가
        불가합니다.
      </Box>
      <Box>
        ✓ 사용하고 계신 아이디는 탈퇴할 경우 재사용 및 복구가 불가능합니다.
      </Box>
      <Box>
        ✓ 탈퇴하신 아이디로는 다시 회원가입을 하실 수 없습니다.(다른 아이디로
        가입)
      </Box>
      <Button>
        <Link to="/">취소</Link>
      </Button>
      <Button onClick={confirmDelete}>탈퇴하기</Button>
    </div>
  );
}
