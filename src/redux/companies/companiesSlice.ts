import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export type CompanyT = {
    id: string,
    zoomInfoId: null,
    name: string,
    logo: null,
    ticker: string,
    parentCompany: null,
    phone: string,
    fax: string,
    website: string,
    city: string,
    street: string,
    state: string,
    zipCode: string,
    country: string,
    continent: null,
    productsBrandDescription: null,
    descriptionList: string,
    revenueRange: string,
    employeeRange: string,
    twitterHandle: null,
    socialMediaUrls: null,
    competitors: null,
    subUnitIndustries: null,
    primaryIndustry: [
        string
    ],
    industries: null,
    revenue: string,
    employeeCount: number,
    annualContributions: null,
    cashContributions: null,
    inKindContributions: null,
    employeeContributions: null,
    parentId: null,
    parentName: null,
    type: null,
    sdgGoals: [],
    genders: null,
    income: null,
    age: null,
    ethnicity: null,
    nonprofit: null,
    purchase: null,
    affiliation: null,
    brands: null,
    interests: null,
    typesOfInvestment: null,
    errorLoadZoomInfo: null,
    charitablePartners: [],
    statusZoomInfo: string,
    loadZoomInfoDate: null,
    score: number,
    errorLoadZoomInfoDate: null,
    partnershipLink: null,
    employeeEngagementOpportunities: true,
    similarCompanies: [
        string
    ],
    contacts: [],
    crsFocus: [],
    favoriteCompanies: [],
    like: boolean
}
export type CompaniesT = CompanyT[]
export type MetaT = {
    currentPage: string
    itemCount: number
    itemsPerPage: string
    totalItems: number
    totalPages: number
}

type InitialStateT = {
    companies: CompaniesT,
    meta: MetaT,
    favoriteCompanies: CompaniesT,
    favoriteMeta: MetaT,
    companyById: CompanyT
}

const initialState = {} as InitialStateT

const companiesSlice = createSlice({
    name: 'companies',
    initialState,
    reducers: {
        getCompanies(state, action: PayloadAction<{ companies: CompaniesT, meta: MetaT }>) {
            state.companies = action.payload.companies
            state.meta = action.payload.meta
        },
        getFavoriteCompanies(state, action: PayloadAction<{ companies: CompaniesT, meta: MetaT }>) {
            state.favoriteCompanies = action.payload.companies
            state.favoriteMeta = action.payload.meta
        },
        doLikeCompany(state, action: PayloadAction<{ companyId: string }>) {
            const findCompany = state.companies.find(item => item.id === action.payload.companyId)
            if(findCompany){
                findCompany.like = true
            }
        },
        doDislikeCompany(state, action: PayloadAction<{ companyId: string }>) {
            const findCompany = state.companies.find(item => item.id === action.payload.companyId)
            if(findCompany){
                findCompany.like = false
            }
        },
        getCompanyById(state,action: PayloadAction<{company: CompanyT}>){
            state.companyById = action.payload.company
        }
    }
})


export const {getCompanies, getFavoriteCompanies,doLikeCompany,doDislikeCompany,getCompanyById} = companiesSlice.actions
export default companiesSlice.reducer