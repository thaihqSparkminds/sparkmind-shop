import { ProductContentLayout1 } from 'components/Layout';
import React from 'react';
import InmailMainContent from '../components/InmailMainContent';

interface InmailPageProps {}

const InmailPage: React.FunctionComponent<InmailPageProps> = (props) => {
  return (
    <div>
      <ProductContentLayout1 mainComponent={<InmailMainContent />} />
    </div>
  );
};

export default InmailPage;
