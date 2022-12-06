import React, { ReactNode } from 'react';

export interface ProductContentLayout2Props {
  mainComponent: ReactNode;
  sidebarComponent1: ReactNode;
  sidebarComponent2: ReactNode;
}

export const ProductContentLayout2: React.FunctionComponent<ProductContentLayout2Props> = ({
  mainComponent,
  sidebarComponent1,
  sidebarComponent2,
}) => {
  return (
    <div>
      {mainComponent && <div>Main Component {mainComponent}</div>}
      {sidebarComponent1 && <div>Sidebar Component 1 {sidebarComponent1}</div>}
      {sidebarComponent2 && <div>Sidebar Component 2 {sidebarComponent2}</div>}
    </div>
  );
};
