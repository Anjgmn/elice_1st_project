import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  font-size: 2em;
  color: red;
  margin: 0 auto;
  padding: 30% 0;
  width: 50%;
  height: 100vh;
  vertical-align: middle;
  text-align: center;
`;

export function NotFound() {
  return (
    <div>
      <StyledDiv>😭 페이지를 찾을 수가 없습니다</StyledDiv>
    </div>
  );
}
