import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { CompaniesT, CompanyT, MetaT } from 'redux/companies/type';

type InitialStateT = {
  companies: CompaniesT;
  meta: MetaT;
  favoriteCompanies: CompaniesT;
  favoriteMeta: MetaT;
  companyById: CompanyT;
};

const initialState = {} as InitialStateT;

const companiesSlice = createSlice({
  name: 'companies',
  initialState,
  reducers: {
    getCompanies(state, action: PayloadAction<{ companies: CompaniesT; meta: MetaT }>) {
      state.companies = action.payload.companies;
      state.meta = action.payload.meta;
    },
    getFavoriteCompanies(
      state,
      action: PayloadAction<{ companies: CompaniesT; meta: MetaT }>,
    ) {
      state.favoriteCompanies = action.payload.companies;
      state.favoriteMeta = action.payload.meta;
    },
    doLikeCompany(state, action: PayloadAction<{ companyId: string }>) {
      const findCompany = state.companies.find(
        item => item.id === action.payload.companyId,
      );
      if (findCompany) {
        findCompany.like = true;
      }
    },
    doDislikeCompany(state, action: PayloadAction<{ companyId: string }>) {
      const findCompany = state.companies.find(
        item => item.id === action.payload.companyId,
      );
      if (findCompany) {
        findCompany.like = false;
      }
    },
    getCompanyById(state, action: PayloadAction<{ company: CompanyT }>) {
      state.companyById = action.payload.company;
    },
  },
});

export const {
  getCompanies,
  getFavoriteCompanies,
  doLikeCompany,
  doDislikeCompany,
  getCompanyById,
} = companiesSlice.actions;
export default companiesSlice.reducer;
