import { CheckCircleFilled } from '@ant-design/icons';
import { Button } from 'antd';
import paymentApi from 'api/paymentApi';
import userApi from 'api/userApi';
import walletApi from 'api/walletApi';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export interface RechargeSuccessProps {}

const RechargeSuccess: React.FunctionComponent<RechargeSuccessProps> = (props) => {
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const sessionId = localStorage.getItem('checkoutSessionId') || '';
      const token = localStorage.getItem('token') || '';
      const res = await paymentApi.checkPaymentStatus(sessionId, token);
      const userDetail = await userApi.getUserDetail(token);
      if (res.status === 'paid') {
        const wallet = await walletApi.getWallet(token).catch(async (error) => {
          await walletApi.createWallet(token, {
            balance: res.amountTotal,
            blockedBalance: 0,
            coin: {
              name: 'SM',
              shortName: 'Sparkminds Coin',
            },
            userId: userDetail.userId,
          });
        });
        if (wallet) {
          await walletApi.updateWalletBalance(token, {
            ...wallet,
            balance: wallet.balance + res.amountTotal,
          });
        }
      }
    })();
  }, []);
  return (
    <div className="container">
      <div className="recharge">
        <p className="recharge__header">Recharge</p>
        <div className="recharge__content">
          <p>
            <CheckCircleFilled style={{ color: '#00F295' }} />
            Successfully recharged
          </p>
          <Button onClick={() => navigate('/')} type="primary" size={'large'} block>
            Home
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RechargeSuccess;
