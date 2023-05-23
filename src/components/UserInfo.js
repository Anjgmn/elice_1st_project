import React from 'react';
import AuthTemplate from './Auth/AuthTemplate';
import AuthForm from './Auth/AuthForm';

export function UserInfo() {
  return (
    <div className="main-noSide">
      <AuthTemplate>
        <AuthForm type="UserInfo" />
      </AuthTemplate>
    </div>
  );
}
