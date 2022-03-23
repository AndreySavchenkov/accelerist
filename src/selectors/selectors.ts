import {RootStateT} from "../redux/store";
import {CompaniesT, CompanyT} from "../redux/companies/companiesSlice";

export const getCompany = (state:RootStateT):CompanyT => state.companies?.companyById;
export const getCompanies = (state:RootStateT):CompaniesT => state.companies.companies;
export const getTotalItems = (state:RootStateT):number => state.companies.meta?.totalItems;
export const getItemCount = (state:RootStateT):number => state.companies.meta?.itemCount;

export const getUserEmail = (state:RootStateT):string => state.login.user.email;

export const getFavoriteCompanies = (state:RootStateT):CompaniesT => state.companies.favoriteCompanies;
export const getFavoriteTotalItems = (state:RootStateT):number => state.companies.favoriteMeta.totalItems;
export const getFavoriteTotalPages = (state:RootStateT):number => state.companies.favoriteMeta.totalPages;
export const getFavoriteItemCount = (state:RootStateT):number => state.companies.favoriteMeta.itemCount;

export const getSuccessful = (state:RootStateT):boolean => state.notifications.successful;
