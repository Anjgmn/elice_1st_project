import React from 'react';
import styled from 'styled-components';

// 회원가입 페이지의 레이아웃을 담당하는 컴포넌트

export default function AuthTemplate({ children }) {
  return <AuthTemplateBlock>{children}</AuthTemplateBlock>;
}

const AuthTemplateBlock = styled.div`
  position: absolute;
  left: 0;
  top: 100px;
  bottom: 0;
  right: 0;
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
