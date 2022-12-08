import { AuthInformation, LoginResponseInformation } from 'models';
import axiosClient, { config } from './axiosClient';


const authApi = {
  login(body: AuthInformation): Promise<LoginResponseInformation> {
    const url = `/auth/login`;
    return axiosClient.post(url, body);
  },
  register(body: AuthInformation): Promise<AuthInformation> {
    const url = `/auth/signup`;
    return axiosClient.post(url, body);
  },
  logout(token: string): Promise<String> {
    const url = `/auth/logout`;
    return axiosClient.post(url, {}, config(token));
  },
};

export default authApi;
