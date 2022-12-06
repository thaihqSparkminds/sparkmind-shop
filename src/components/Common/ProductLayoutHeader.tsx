import React from 'react';
import { useTranslation } from 'react-i18next';

interface ProductLayoutHeaderProps {}

export const ProductLayoutHeader: React.FunctionComponent<ProductLayoutHeaderProps> = (props) => {
  const { t } = useTranslation();
  return <>{t('Product Layout Header')}</>;
};
