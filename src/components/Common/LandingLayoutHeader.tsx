import { ShoppingCartOutlined, UserOutlined } from '@ant-design/icons';
import { Badge, Popover } from 'antd';
import authApi from 'api/authApi';
import merchantApi from 'api/merchantApi';
import userApi from 'api/userApi';
import walletApi from 'api/walletApi';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { CoinIcon } from 'components/Icons/CoinIcon';
import { MainLogo } from 'components/Icons/MainLogo';
import { authActions, selectIsLoggedIn } from 'features/auth/authSlice';
import { UserInformation } from 'models/user/userInformation';
import React, { useCallback, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export interface LandingLayoutHeaderProps {}

export const LandingLayoutHeader: React.FunctionComponent<LandingLayoutHeaderProps> = (props) => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  const dispatch = useAppDispatch();
  const [balance, setBalance] = useState(0);
  const [userDetail, setUserDetail] = useState<UserInformation>();
  const [isMerchant, setIsMerchant] = useState<boolean>(false);
  const isLoggedIn = useAppSelector(selectIsLoggedIn);

  const getUserDetail = useCallback(async () => {
    const res = await userApi.getUserDetail(localStorage.getItem('token') || '');
    if (res) {
      setUserDetail(res);
    }
  }, []);

  useEffect(() => {
    getUserDetail();
    checkIsMerchant();
  }, []);

  useEffect(() => {
    if (isLoggedIn) checkIsMerchant();
  }, [isLoggedIn]);

  const getBalance = useCallback(async () => {
    const token = localStorage.getItem('token') || '';
    const res = await walletApi.getWallet(token);
    if (res) {
      setBalance(res.balance);
    }
  }, []);

  const handlePopover = () => {
    getBalance();
    getUserDetail();
    checkIsMerchant();
  };

  const checkIsMerchant = useCallback(async () => {
    const token = localStorage.getItem('token') || '';
    const res = await merchantApi.checkIsMerchant(token);
    if (res) {
      setIsMerchant(res);
    } else setIsMerchant(res);
  }, []);

  const logout = useCallback(async () => {
    const res = await authApi.logout(localStorage.getItem('token') || '').catch(() => {
      localStorage.removeItem('token');
      navigate('/');
    });
    if (res === 'success') {
      dispatch(authActions.setIsLoggedIn(false));
      localStorage.removeItem('token');
      navigate('/login');
    } else {
      localStorage.removeItem('token');
      navigate('/');
    }
  }, []);

  const content = (
    <>
      <div className="auth-option">
        Balance:{' '}
        <span>
          <CoinIcon /> {balance}
        </span>
      </div>
      <div className="auth-option" onClick={() => navigate('merchant')}>
        <span>Merchant: </span>
        {isMerchant ? (
          <span style={{ color: '#00F295' }}>Registered</span>
        ) : (
          <span style={{ color: '#ccc' }}>Unregistered</span>
        )}
      </div>
      <div className="auth-option" onClick={() => navigate('recharge')}>
        Recharge
      </div>
      <div className="auth-option" onClick={() => navigate('user-detail')}>
        Account Detail
      </div>
      <div className="auth-option" onClick={logout}>
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
              {token && isMerchant && (
                <li>
                  <Link style={{ color: 'white' }} to={'/products'}>
                    Products
                  </Link>
                </li>
              )}
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
                  onVisibleChange={handlePopover}
                  placement="bottomRight"
                  title={<span>{userDetail?.email}</span>}
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
