import React from 'react';
import { useTranslation } from 'react-i18next';

interface AboutUsPageProps {}

const AboutUsPage: React.FunctionComponent<AboutUsPageProps> = (props) => {
  const { t } = useTranslation();
  return <>{t('About Us')}</>;
};

export default AboutUsPage;
