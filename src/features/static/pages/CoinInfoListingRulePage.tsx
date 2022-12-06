import React from 'react';
import { useTranslation } from 'react-i18next';

interface CoinInfoListingRulePageProps {}

const CoinInfoListingRulePage: React.FunctionComponent<CoinInfoListingRulePageProps> = (props) => {
  const { t } = useTranslation();
  return <>{t('Coin Infos & Listing Rule')}</>;
};

export default CoinInfoListingRulePage;
