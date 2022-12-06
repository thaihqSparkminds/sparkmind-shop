import React from 'react';
import { useTranslation } from 'react-i18next';

interface ForgotPasswordPageProps {}

const ForgotPasswordPage: React.FunctionComponent<ForgotPasswordPageProps> = (props) => {
  const { t } = useTranslation();
  return <>{t('Forgot Password Page')}</>;
};

export default ForgotPasswordPage;
