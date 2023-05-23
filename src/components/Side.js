import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export function Side({ data }) {
  const list = data.map((item) => (
    <StyledLi key={item.id}>
      <Link to={`/category/${item.id}`}>{item.name}</Link>
    </StyledLi>
  ));
  return (
    <SideBar>
      <ul>{list}</ul>
    </SideBar>
  );
}

const SideBar = styled.div`
  width: 20%;
  height: auto;
  min-height: 100vh;
  border-right: 1px solid #ddd;
  font-size: 2em;
  display: inline-block;
`;

const StyledLi = styled.li`
  width: 80%;
  margin: 1em 0.6em;
`;
