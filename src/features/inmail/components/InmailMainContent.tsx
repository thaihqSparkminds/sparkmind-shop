import React from 'react';
import { useTranslation } from 'react-i18next';

interface InmailMainContentProps {}

const InmailMainContent: React.FunctionComponent<InmailMainContentProps> = (props) => {
  const { t } = useTranslation();
  return <>{t('Inmail Main Content')}</>;
};

export default InmailMainContent;
