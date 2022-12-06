import React from 'react';
import { useTranslation } from 'react-i18next';

interface BuySellRulePageProps {}

const BuySellRulePage: React.FunctionComponent<BuySellRulePageProps> = (props) => {
  const { t } = useTranslation();
  return <>{t('Buy & Sell Rule')}</>;
};

export default BuySellRulePage;
