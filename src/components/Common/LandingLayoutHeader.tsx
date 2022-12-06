import { MainLogo } from 'components/Icons/MainLogo';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export interface LandingLayoutHeaderProps {}

export const LandingLayoutHeader: React.FunctionComponent<LandingLayoutHeaderProps> = (props) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <>
      <div className="landing-header">
        <div className="landing-header__left-side">
          <MainLogo />
          <ul className="landing-header__nav-links">
            <li>
              <Link style={{ color: 'white' }} to={'/product'}>
                Products
              </Link>
            </li>
            <li>
              <Link style={{ color: 'white' }} to={'/about'}>
                About
              </Link>
            </li>
            <li>
              <Link style={{ color: 'white' }} to={'/customer'}>
                Customers
              </Link>
            </li>
            <li>
              <Link style={{ color: 'white' }} to={'/price'}>
                Pricing
              </Link>
            </li>
          </ul>
        </div>
        <div className="landing-header__right-side">
          <button onClick={() => navigate('login')}>Log In</button>
          <button onClick={() => navigate('register')}>Get Started</button>
        </div>
      </div>
    </>
  );
};
