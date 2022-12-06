import { Button, Card } from 'antd';
import Meta from 'antd/lib/card/Meta';
import itemImg from 'assets/images/item.png';
import React from 'react';

interface LandingPageProps {}

const LandingPage: React.FunctionComponent<LandingPageProps> = (props) => {
  return (
    <div className="container">
      <div className="landing-content">
        <div className="landing-content__header">
          <span>DAILY DISCOVER</span>
        </div>

        <div className="landing__list-items">
          {Array.from(Array(14), (_, index) => index + 1).map(() => (
            <Card hoverable style={{ width: 190 }} cover={<img alt="example" src={itemImg} />}>
              <Meta title="Europe Street beat" description="www.instagram.com" />
            </Card>
          ))}
        </div>
        <div className="landing__button-container">
          <Button className="landing__button">See More</Button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
