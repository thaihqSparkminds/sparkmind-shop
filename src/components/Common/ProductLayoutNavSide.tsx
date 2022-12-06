import React from 'react';
import { useTranslation } from 'react-i18next';

interface ProductLayoutNavSideProps {}

export const ProductLayoutNavSide: React.FunctionComponent<ProductLayoutNavSideProps> = (props) => {
  const { t } = useTranslation();
  return <>{t('Product Layout Nav Side Left')}</>;
};
