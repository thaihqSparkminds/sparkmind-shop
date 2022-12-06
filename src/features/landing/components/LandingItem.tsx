import React from 'react';

interface LandingItemProps {
  image: string;
  description: string;
  price: number;
}

const LandingItem: React.FunctionComponent<LandingItemProps> = (props) => {
  const { image, description, price } = props;
  return (
    <div className="landing-item">
      <div className="img-container">
        <img src={image} alt="" />
      </div>
      <span className="item-description">{description}</span>
      <span className="item-price">{price}</span>
    </div>
  );
};

export default LandingItem;
