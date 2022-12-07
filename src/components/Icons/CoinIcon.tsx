import { useNavigate } from 'react-router-dom';

export interface CoinIconProps {}

export const CoinIcon = (props: CoinIconProps) => {
  const navigate = useNavigate();
  return (
    <span style={{ verticalAlign: 'middle' }}>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 64 64">
        <g fill="none" fillRule="evenodd">
          <ellipse
            cx="30"
            cy="32"
            fill="#FFDD95"
            stroke="#FFAF40"
            strokeLinecap="round"
            strokeWidth="2"
            rx="26"
            ry="29"
          />
          <path
            stroke="#FFAF40"
            strokeLinecap="square"
            strokeWidth="2"
            d="M24 8L15.9377423 8M23 55L14.9377423 55M19 13L10.9377423 13M16 19L7.93774225 19M18 49L9.93774225 49M14 26L5.93774225 26M14 42L5.93774225 42M13 34L4.93774225 34"
          />
          <ellipse cx="37" cy="32" fill="#FFAF40" rx="26" ry="30" />
          <ellipse
            cx="37"
            cy="32"
            stroke="#FFDD95"
            strokeDasharray="2 7"
            strokeLinecap="round"
            strokeWidth="2"
            rx="19"
            ry="22"
          />
        </g>
      </svg>
    </span>
  );
};
