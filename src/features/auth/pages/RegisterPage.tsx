import React from 'react';
import { useTranslation } from 'react-i18next';

interface RegisterPageProps {}

const RegisterPage: React.FunctionComponent<RegisterPageProps> = (props) => {
  const { t } = useTranslation();
  return <>{t('Register Page')}</>;
};

export default RegisterPage;
