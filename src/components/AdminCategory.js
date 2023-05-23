/* eslint-disable indent */
import React, { useState } from 'react';
import styled from 'styled-components';
import { Repositories, RepositoryNames } from '../repository';

export function AdminCategory() {
  const [delCat, setDelCat] = useState('');
  const [newCat, setNewCat] = useState('');
  const [newCatDesc, setNewCatDesc] = useState('');
  const catRepository = Repositories[RepositoryNames.CATEGORY];
  const handleClick = () => {
    catRepository
      .createCategory(
        { name: newCat, description: newCatDesc },
        localStorage.userToken,
      )
      .then((res) => console.log('다음 카테고리가 추가되었습니다 : ', res))
      .catch();
  };
  const handleDelete = () => {
    catRepository
      .deleteCategory(delCat, localStorage.userToken)
      .then((data) => {
        if (data === undefined) {
          alert('등록된 카테고리명이 아닙니다.');
          return false;
        }
        alert('삭제되었습니다.');
        window.location.href = '/';
        return true;
      })
      .catch();
  };

  return (
    <AuthFormBlock>
      <ACWrapper>
        <h2>카테고리 등록하기</h2>
        <StyledInput
          value={newCat}
          onChange={(e) => {
            setNewCat(e.target.value);
          }}
          placeholder="카테고리를 등록하세요."
          type="text"
        />
        <StyledInput
          value={newCatDesc}
          onChange={(e) => {
            setNewCatDesc(e.target.value);
          }}
          placeholder="카테고리 설명 ex)직장인 특화 밈"
          type="text"
        />
        <Button type="button" onClick={handleClick}>
          등록하기
        </Button>
      </ACWrapper>
      <ACWrapper>
        <h2>카테고리 삭제</h2>
        <StyledInput
          value={delCat}
          onChange={(e) => {
            setDelCat(e.target.value);
          }}
          placeholder="삭제할 카테고리명을 입력하세요."
          type="text"
        />
        <Button type="button" onClick={handleDelete}>
          삭제하기
        </Button>
      </ACWrapper>
    </AuthFormBlock>
  );
}

const AuthFormBlock = styled.div`
  width: 80%;
  height: auto;
  margin: 0 auto;
`;

const ACWrapper = styled.div`
  margin: 3em;
  display: inline-block;
  width: 35%;
`;
const StyledInput = styled.input`
  width: 90%;
  height: 3em;
  margin: 20px;
  padding: 15px;
  border-radius: 4px;
  border: none;
  box-shadow: 2px 2px 8px lightgray;
  font-size: 13px;
  }
`;

const Button = styled.button`
  width: 300px;
  height: 45px;
  background: deepskyblue;
  border: none;
  border-radius: 8px;
  margin-top: 50px;
  font-size: 20px;
  color: #ffffff;
  text-align: center;
  padding: 10px;
`;
