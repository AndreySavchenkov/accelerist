import {createSlice, PayloadAction} from "@reduxjs/toolkit";

type Company = {
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
type Companies = Company[]

type InitialState = {
    companies: Companies
}

const initialState = {} as InitialState

const companiesSlice = createSlice({
    name: 'companies',
    initialState,
    reducers: {
        getCompanies(state, action: PayloadAction<{ companies: Companies }>) {
            state.companies = action.payload.companies
        },
    }
})


export const {getCompanies} = companiesSlice.actions
export default companiesSlice.reducer