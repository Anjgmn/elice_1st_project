import React from 'react';
import styled from 'styled-components';

export function AdminMember() {
  const data = [
    {
      id: '0', // id 예시인 '123qwe'에 따라 문자열로 설정.
      email: 'a@a.com',
      name: '김김김',
      address: '서울시 서울구 서울동',
      phoneNumber: '010-0000-0000',
      roles: ['User'],
    },
    {
      id: '1',
      email: 'b@b.com',
      name: '이이이',
      address: '경기도 경기시 경기동',
      phoneNumber: '010-1111-1111',
      roles: ['User', 'Admin'],
    },
    {
      id: '2',
      email: 'c@c.com',
      name: '박박박',
      address: '강원도 강원시 강원동',
      phoneNumber: '010-2222-2222',
      roles: ['User'],
    },
  ];
  const list = data.map((item) => (
    <MberTableRow>
      <MberTableCell width="3%">
        <input type="checkbox" name="select-this" />
      </MberTableCell>
      <MberTableCell width="22%">{item.email}</MberTableCell>
      <MberTableCell width="10%">{item.name}</MberTableCell>
      <MberTableCell width="40%">{item.address}</MberTableCell>
      <MberTableCell width="15%">{item.phoneNumber}</MberTableCell>
      <MberTableCell width="10%">
        {item.roles.length === 1 ? '일반회원' : '관리자'}
      </MberTableCell>
    </MberTableRow>
  ));
  /* const [checkItems, setCheckItems] = useState([]);
  const handleAllCheck = (checked) => {
    if (checked) {
      const selectedMembers = [];
      data.forEach((item) => selectedMembers.push(item.id));
      setCheckItems(selectedMembers);
    } else {
      setCheckItems([]);
    }
  }; */
  return (
    <div className="main-noSide">
      <Title>모든 회원 정보 조회</Title>
      <MberList>
        <MberTableRow>
          <MberTableCell width="3%">
            <input type="checkbox" name="select-all" />
            {/* <input
              type="checkbox"
              name="select-all"
              onChange={(e) => handleAllCheck(e.target.checked)}
              checked={checkItems.length === data.length}
            /> */}
          </MberTableCell>
          <MberTableCell width="22%">이메일</MberTableCell>
          <MberTableCell width="10%">이름</MberTableCell>
          <MberTableCell width="40%">주소</MberTableCell>
          <MberTableCell width="15%">연락처</MberTableCell>
          <MberTableCell width="10%">등급</MberTableCell>
        </MberTableRow>
        {list}
      </MberList>
    </div>
  );
}

const Title = styled.p`
  font-size: 1.5rem;
  padding: 0.5em;
  border-bottom: 1px solid black;
`;

const MberList = styled.div`
  width: 90%;
  margin: 1em auto;
  // border: 1px solid;
  text-align: center;
`;

const MberTableRow = styled.div`
  border-bottom: 1px solid;
  width: 100%;
  height: 2em;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const MberTableCell = styled.p`
  display: inline-block;
  width: ${(props) => props.width};
  height: 2em;
  line-height: 2em;
`;
