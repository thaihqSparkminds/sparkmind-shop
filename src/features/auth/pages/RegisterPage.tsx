import React from 'react';
import { Link } from 'react-router-dom';
import { AuthForm } from '../components/AuthForm';

interface RegisterPageProps {}

const initialValue = {
  email: '',
  password: '',
};

const RegisterPage: React.FunctionComponent<RegisterPageProps> = (props) => {
  const onSubmit = (values: any) => {
    console.log('Success:', values);
  };

  return (
    <div className="register">
      <div className="register__header">
        <span>Register</span>
      </div>
      <div className="container">
        <AuthForm initialValue={initialValue} onSubmit={onSubmit} />
      </div>
      <span className="register__nav-link">
        Already have an account? <Link to={'/login'}>Log In</Link>
      </span>
    </div>
  );
};

export default RegisterPage;
