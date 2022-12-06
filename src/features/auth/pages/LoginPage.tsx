import React from 'react';
import { useTranslation } from 'react-i18next';

interface LoginPageProps {}

const LoginPage: React.FunctionComponent<LoginPageProps> = (props) => {
  const { t } = useTranslation();
  return <>{t('Login Page')}</>;
};

export default LoginPage;
