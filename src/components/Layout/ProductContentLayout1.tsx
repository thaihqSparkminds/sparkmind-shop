import React, { ReactNode } from 'react';

export interface ProductContentLayout1Props {
  mainComponent: ReactNode;
}

export const ProductContentLayout1: React.FunctionComponent<ProductContentLayout1Props> = ({
  mainComponent,
}) => {
  return <div>{mainComponent && <div>Main Component {mainComponent}</div>}</div>;
};
