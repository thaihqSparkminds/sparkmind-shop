import React from 'react';
import { useTranslation } from 'react-i18next';

interface VerifyAccountPageProps {}

const VerifyAccountPage: React.FunctionComponent<VerifyAccountPageProps> = (props) => {
  const { t } = useTranslation();
  return <>{t('Verify Account Page')}</>;
};

export default VerifyAccountPage;
