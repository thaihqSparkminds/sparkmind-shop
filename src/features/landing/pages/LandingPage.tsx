import { Button, Card } from 'antd';
import Meta from 'antd/lib/card/Meta';
import productApi from 'api/productApi';
import itemImg from 'assets/images/item.png';
import { ProductInfo } from 'models/product/productInfo';
import React, { useCallback, useState, useEffect } from 'react';

interface LandingPageProps {}

const LandingPage: React.FunctionComponent<LandingPageProps> = (props) => {
  const [productInfo, setProductInfo] = useState<ProductInfo[] | null>(null);

  const getProduct = useCallback(async () => {
    const res = await productApi.getAllProduct();
    if (res) setProductInfo(res);
  }, []);

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div className="container">
      <div className="landing-content">
        <div className="landing-content__header">
          <span>DAILY DISCOVER</span>
        </div>

        <div className="landing__list-items">
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

        {productInfo && (
          <div className="landing__button-container">
            <Button className="landing__button">See More</Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default LandingPage;
