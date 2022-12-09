import { ProductInfo } from 'models/product/productInfo';
import axiosClient, { config } from './axiosClient';

const productApi = {
  getAllProduct(token: string): Promise<ProductInfo[]> {
    const url = `/products`;
    return axiosClient.get(url, config(token));
  },
  getAllPrivateProduct(token: string): Promise<ProductInfo[]> {
    const url = `/products/private`;
    return axiosClient.get(url, config(token));
  },
  createProduct(token: string, data: ProductInfo): Promise<ProductInfo> {
    const url = `/products`;
    return axiosClient.post(url, data, config(token));
  },
};

export default productApi;
