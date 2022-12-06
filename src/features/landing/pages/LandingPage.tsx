import React from 'react';
import { useTranslation } from 'react-i18next';

interface LandingPageProps {}

const LandingPage: React.FunctionComponent<LandingPageProps> = (props) => {
  const { t } = useTranslation();
  return (
    <>
      <div className="landing">
        <div className="landing_left-side">
          <h1 className="landing__title">One live stream. 30+ destinations.</h1>
          <span className="landing__desc">
            Multistream & reach your audience, wherever they are.
          </span>
          <div className="landing__login-option-container">
            <div className="landing__login-option">Continue with Google</div>
            <div className="landing__login-option">Continue with Facebook</div>
          </div>
          <span>Or sign up with email</span>
        </div>
        <div className="landing_right-side"></div>
      </div>
    </>
  );
};

export default LandingPage;
