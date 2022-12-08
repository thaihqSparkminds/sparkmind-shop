import { ShoppingCartOutlined, UserOutlined } from '@ant-design/icons';
import { Popover } from 'antd';
import authApi from 'api/authApi';
import { useAppDispatch } from 'app/hooks';
import { CoinIcon } from 'components/Icons/CoinIcon';
import { MainLogo } from 'components/Icons/MainLogo';
import { authActions } from 'features/auth/authSlice';
import React, { useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export interface LandingLayoutHeaderProps {}

export const LandingLayoutHeader: React.FunctionComponent<LandingLayoutHeaderProps> = (props) => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    logout();
  };

  const logout = useCallback(async () => {
    const res = await authApi.logout(localStorage.getItem('token') || '').catch(() => {
      localStorage.removeItem('token');
      navigate('/');
    });
    if (res === 'success') {
      dispatch(authActions.setIsLoggedIn(false));
      localStorage.removeItem('token');
      navigate('/login');
    }
  }, []);

  const handleRecharge = async () => {
    navigate('recharge');
  };

  const content = (
    <>
      <div className="auth-option">
        Balance: <CoinIcon />
      </div>
      <div className="auth-option" onClick={handleRecharge}>
        Recharge
      </div>
      <div className="auth-option" onClick={() => navigate('/user-detail')}>
        Account Detail
      </div>
      <div className="auth-option" onClick={handleLogout}>
        Log Out
      </div>
    </>
  );

  return (
    <>
      <div className="landing-header">
        <div className="container">
          <div className="landing-header__left-side">
            <MainLogo />
            <ul className="landing-header__nav-links">
              <li>
                <Link style={{ color: 'white' }} to={'/wallet'}>
                  Wallet
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
            {!token ? (
              <>
                <button onClick={() => navigate('login')}>Log In</button>
                <button onClick={() => navigate('register')}>Register</button>
              </>
            ) : (
              <>
                <ShoppingCartOutlined />
                <Popover
                  placement="bottomRight"
                  title={<span>Options</span>}
                  content={content}
                  trigger="click"
                >
                  <UserOutlined />
                </Popover>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
