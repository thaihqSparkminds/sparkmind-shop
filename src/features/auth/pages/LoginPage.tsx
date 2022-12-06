import React from 'react';
import { Link } from 'react-router-dom';
import { AuthForm } from '../components/AuthForm';

interface LoginPageProps {}

const initialValue = {
  email: '',
  password: '',
};

const LoginPage: React.FunctionComponent<LoginPageProps> = (props) => {
  const onSubmit = (values: any) => {
    console.log('Success:', values);
  };

  return (
    <div className="login">
      <div className="login__header">
        <span>Login</span>
      </div>
      <div className="container">
        <AuthForm initialValue={initialValue} onSubmit={onSubmit} />
      </div>
      <span className="login__nav-link">
        <Link to={'/register'}>Create a Sparkminds account</Link>
      </span>
    </div>
  );
};

export default LoginPage;
