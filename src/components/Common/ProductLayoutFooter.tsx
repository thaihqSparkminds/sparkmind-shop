import React from 'react';
import { useTranslation } from 'react-i18next';

interface ProductLayoutFooterProps {}

export const ProductLayoutFooter: React.FunctionComponent<ProductLayoutFooterProps> = (props) => {
  const { t } = useTranslation();
  return <>{t('Product Layout Footer')}</>;
};
