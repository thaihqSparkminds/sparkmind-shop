import React from 'react';
import { useTranslation } from 'react-i18next';

interface AMLCTPFPolicyPageProps {}

const AMLCTPFPolicyPage: React.FunctionComponent<AMLCTPFPolicyPageProps> = (props) => {
  const { t } = useTranslation();
  return <>{t('AML/CTPF Policy')}</>;
};

export default AMLCTPFPolicyPage;
