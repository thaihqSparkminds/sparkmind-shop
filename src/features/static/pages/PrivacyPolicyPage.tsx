import React from 'react';
import { useTranslation } from 'react-i18next';

interface PrivacyPolicyPageProps {}

const PrivacyPolicyPage: React.FunctionComponent<PrivacyPolicyPageProps> = (props) => {
  const { t } = useTranslation();
  return <>{t('Privacy Policy')}</>;
};

export default PrivacyPolicyPage;
