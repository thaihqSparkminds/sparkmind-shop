import React from 'react';
import { useTranslation } from 'react-i18next';
import { ProductContentLayout1 } from 'components/Layout';

interface SettingPageProps {}

const SettingPage: React.FunctionComponent<SettingPageProps> = (props) => {
  const { t } = useTranslation();
  return (
    <>
      <ProductContentLayout1 mainComponent={<>{t('Setting Page')}</>} />
    </>
  );
};

export default SettingPage;
