import axios, { AxiosResponse } from 'axios';

import { GetCompaniesT, GetCompanyT, SignInT, SignUpT } from 'api/types';
import { instance } from 'components/Search/containers/find/SearchFoundPanel';

export const authApi = {
  signIn(email: string, password: string) {
    return axios.post<{ email: string; password: string }, AxiosResponse<SignInT>>(
      'https://accelerist.herokuapp.com/api/v1/auth/sign_in',
      {
        email,
        password,
      },
    );
  },
  signUp(email: string, password: string) {
    return axios.post<{ email: string; password: string }, AxiosResponse<SignUpT>>(
      'https://accelerist.herokuapp.com/api/v1/auth/sign_up',
      {
        email,
        password,
      },
    );
  },
  sendEmail(email: string) {
    return axios.post(
      'https://accelerist.herokuapp.com/api/v1/auth/change_password/send_mail',
      { email },
    );
  },
};

export const companiesApi = {
  getCompanies(currentPage: number): GetCompaniesT {
    return instance.get(`/companies?page=${currentPage}&limit=6`);
  },
  getFavoriteCompanies(currentPage: number): GetCompaniesT {
    return instance.get(`/companies/favorites?page=${currentPage}&limit=6`);
  },
  doLikeCompany(companyId: string): boolean {
    return instance.get(`/companies/${companyId}/like`);
  },
  doDislikeCompany(companyId: string): boolean {
    return instance.get(`/companies/${companyId}/dislike`);
  },
  getCompany(companyId: string): GetCompanyT {
    return instance.get(`/companies/${companyId}`);
  },
};
