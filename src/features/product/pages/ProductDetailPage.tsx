import { Button, InputNumber } from 'antd';
import orderApi from 'api/orderApi';
import productApi from 'api/productApi';
import walletApi from 'api/walletApi';
import Breadcrumb from 'components/Common/breadcrumb';
import { ModalComponent } from 'components/Common/ModalComponent';
import { OrderInformation } from 'models/order/OrderInformation';
import { ProductInfo } from 'models/product/productInfo';
import { WalletInformation } from 'models/wallet/walletInformation';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';

interface ProductDetailPageProps {}

const ProductDetailPage: React.FunctionComponent<ProductDetailPageProps> = (props) => {
  const [productDetail, setProductDetail] = useState<ProductInfo>();
  const token = useRef(localStorage.getItem('token')).current || '';
  const [quantity, setQuantity] = useState<number>(1);
  const [orderInfo, setOrderInfo] = useState<OrderInformation>();
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [walletInfo, setWalletInfo] = useState<WalletInformation>();
  const [isEnoughBalance, setIsEnoughBalance] = useState<boolean>();
  const locate = useLocation();

  useEffect(() => {
    const productId = Number(locate.pathname.split('/')[2]);
    getProductDetail(productId);
  }, []);
  const getProductDetail = useCallback(async (id: number) => {
    const res = await productApi.getProduct(token, id);
    if (res) {
      setProductDetail(res);
    }
  }, []);

  const handleBuy = () => {
    setOpenModal(true);
  };

  useEffect(() => {
    getWalletInfo();
  }, []);

  const getWalletInfo = useCallback(async () => {
    const res = await walletApi.getWallet(token);
    if (res) {
      setWalletInfo(res);
    }
  }, []);

  const createOrder = useCallback(async () => {
    const res = await orderApi.createOrder(token, {
      merchantId: productDetail?.merchantId || -1,
      currency: 'usd',
      productInformation: {
        productId: productDetail?.id || -1,
        quantity: quantity,
      },
    });

    if (res) {
      setOrderInfo(res);
      console.log();
    }
  }, []);

  const onChangeNumber = (value: number) => {
    setQuantity(value);
  };

  return (
    <div className="container">
      <div className="product-detail">
        <Breadcrumb />
        {productDetail && (
          <div className="product-detail__container">
            <div className="product-detail__left-side">
              <div className="product-detail__img-container">
                <img src={productDetail.images[0]} alt="photo" />
              </div>
            </div>

            <div className="product-detail__right-side">
              <div className="product-detail__content">
                <div className="product-detail__title">{productDetail.name}</div>
                <div className="product-detail__description">{productDetail.description}</div>
              </div>
              <InputNumber min={1} max={100} defaultValue={1} onChange={onChangeNumber} />
              <div className="product-detail__options">
                {/* <Button type={'default'} size={'large'} danger>
                  Add to cart
                </Button> */}
                <Button onClick={handleBuy} type={'primary'} size={'large'} danger>
                  Buy Now
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
      <ModalComponent
        openModal={openModal}
        title={'Buy Product'}
        onOk={createOrder}
        setOpenModal={setOpenModal}
        description={'Confirm to buy this product?'}
      />
    </div>
  );
};

export default ProductDetailPage;
