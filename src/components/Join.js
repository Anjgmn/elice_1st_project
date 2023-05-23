import React from 'react';
import AuthTemplate from './Auth/AuthTemplate';
import AuthForm from './Auth/AuthForm';

export function Join() {
  return (
    <div className="main-noSide">
      <AuthTemplate>
        <AuthForm type="Join" />
      </AuthTemplate>
    </div>
  );
}
