import React from 'react';
import { useTranslation } from 'react-i18next';

interface TermsConditionsPageProps {}

const TermsConditionsPage: React.FunctionComponent<TermsConditionsPageProps> = (props) => {
  const { t } = useTranslation();
  return <>{t('Terms & Conditions')}</>;
};

export default TermsConditionsPage;
