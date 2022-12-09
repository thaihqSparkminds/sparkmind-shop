import { Button, Card, Form, Input, Modal } from 'antd';
import Meta from 'antd/lib/card/Meta';
import merchantApi from 'api/merchantApi';
import productApi from 'api/productApi';
import { ProductInfo } from 'models/product/productInfo';
import React, { useCallback, useEffect, useState } from 'react';

interface ProductPageProps {}

const formField = {
  name: 'name',
  description: 'description',
  images: 'images',
  price: 'price',
  category: 'category',
};

const ProductPage: React.FunctionComponent<ProductPageProps> = (props) => {
  const [productInfo, setProductInfo] = useState<ProductInfo[] | null>(null);
  const [openModal, setOpenModal] = useState(false);

  const getProduct = useCallback(async () => {
    const res = await productApi.getAllPrivateProduct(localStorage.getItem('token') || '');
    if (res) setProductInfo(res);
  }, []);

  useEffect(() => {
    getProduct();
  }, []);

  const handleToggleModal = () => {
    setOpenModal(true);
  };

  const handleCreate = (data: ProductInfo) => {
    createProduct(data);
  };

  const createProduct = useCallback(async (data: ProductInfo) => {
    const token = localStorage.getItem('token') || '';
    const merchant = await merchantApi.getMerchant(token);
    console.log(merchant);
    const res = await productApi.createProduct(token, {
      ...data,
      images: [data.images[0]],
      merchantId: Number(merchant.id),
    });
    if (res) {
      setOpenModal(false);
      getProduct();
    }
  }, []);

  return (
    <div className="container">
      <div className="product-content">
        <div className="product-content__header">
          <span>LIST PRODUCT</span>
        </div>

        <div className="product__button-container">
          <Button
            type={'primary'}
            onClick={handleToggleModal}
            danger
            size={'large'}
            className="product__create-btn"
          >
            Create Product
          </Button>
        </div>

        <div className="product__list-items">
          {productInfo &&
            productInfo.map((e, i) => (
              <Card
                hoverable
                style={{ width: 190 }}
                cover={<img alt="example" src={e.images[0]} />}
              >
                <Meta title={e.name} description={e.price} />
              </Card>
            ))}
        </div>

        <Modal
          visible={openModal}
          onOk={() => setOpenModal(false)}
          onCancel={() => setOpenModal(false)}
          footer={null}
        >
          <h1>Create product</h1>
          <Form
            name="recharge"
            initialValues={{}}
            layout="vertical"
            onFinish={handleCreate}
            autoComplete="off"
            className="product__form"
          >
            {Object.values(formField).map((e, i) => (
              <Form.Item
                label={e}
                name={Object.keys(formField)[i]}
                rules={[{ required: true, message: `${e} is required` }]}
              >
                <Input />
              </Form.Item>
            ))}

            <Form.Item>
              <Button type="primary" size={'large'} block danger htmlType="submit">
                Create
              </Button>
            </Form.Item>
          </Form>
        </Modal>

        {/* {productInfo && (
          <div className="product__button-container">
            <Button className="product__button">See More</Button>
          </div>
        )} */}
      </div>
    </div>
  );
};

export default ProductPage;
