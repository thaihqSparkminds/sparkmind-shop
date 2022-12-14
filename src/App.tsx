import { LandingLayout } from 'components/Layout';
import ForgotPasswordPage from 'features/auth/pages/ForgotPasswordPage';
import LoginPage from 'features/auth/pages/LoginPage';
import RegisterPage from 'features/auth/pages/RegisterPage';
import VerifyAccountPage from 'features/auth/pages/VerifyAccountPage';
import RechargeLayout from 'features/excharge/pages/RechargeLayout';
import LandingPage from 'features/landing/pages/LandingPage';
import MerchantLayout from 'features/merchant/layout/MerchantLayout';
import ProductLayout from 'features/product/layout/ProductLayout';
import AboutUsPage from 'features/static/pages/AboutUsPage';
import AMLCTPFPolicyPage from 'features/static/pages/AMLCTPFPolicyPage';
import BuySellRulePage from 'features/static/pages/BuySellRulePage';
import CoinInfoListingRulePage from 'features/static/pages/CoinInfoListingRulePage';
import NotFoundPage from 'features/static/pages/NotFoundPage';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import PrivacyPolicyPage from './features/static/pages/PrivacyPolicyPage';
import TermsConditionsPage from './features/static/pages/TermsConditionsPage';

export interface AppProps {}

const App: React.FunctionComponent<AppProps> = (props) => {
  return (
    <>
      <Routes>
        <Route path="/*" element={<LandingLayout />}>
          <Route path="" element={<LandingPage />} />
          <Route path="recharge/*" element={<RechargeLayout />} />
          <Route path="merchant/*" element={<MerchantLayout />} />
          <Route path="products/*" element={<ProductLayout />} />
          <Route path="about" element={<AboutUsPage />} />
          <Route path="terms-and-conditions" element={<TermsConditionsPage />} />
          <Route path="privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="buy-and-sell-rule" element={<BuySellRulePage />} />
          <Route path="coin-info-and-listing-rule" element={<CoinInfoListingRulePage />} />
          <Route path="aml-ctpf-policy" element={<AMLCTPFPolicyPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="reset-password" element={<ForgotPasswordPage />} />
          <Route path="verify-account" element={<VerifyAccountPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};

export default App;
