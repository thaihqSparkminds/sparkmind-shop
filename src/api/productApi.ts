import { ProductInfo } from 'models/product/productInfo';
import axiosClient from './axiosClient';

const productApi = {
  getAllProduct(): Promise<ProductInfo[]> {
    const url = `/products`;
    return axiosClient.get(url);
  },
};

export default productApi;
