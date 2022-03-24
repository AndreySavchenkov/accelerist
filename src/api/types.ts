export type SignInT = {
    "accessToken": string,
    "user": {
        "id": string,
        "email": string,
        "firstName": null | any,
        "lastName": null | any,
        "isAuthorized": boolean,
        "imported": boolean,
        "teamId": string,
        "role": string,
        "linkedinLink": null | any,
        "isReceivingNotifications": boolean,
        "avatarKey": null | any,
        "loggedInAt": string,
        "createdAt": string,
        "updatedAt": string,
        "deletedAt": null | any
    }
}

export type SignUpT = {
    "accessToken": string,
    "user": {
        "email": string,
        "password": string,
        "isAuthorized": boolean,
        "deletedAt": null | any,
        "firstName": null | any,
        "lastName": null | any,
        "teamId": null | any,
        "linkedinLink": null | any,
        "avatarKey": null | any,
        "loggedInAt": null | any,
        "id": string,
        "imported": boolean,
        "role": string,
        "isReceivingNotifications": boolean,
        "createdAt": string,
        "updatedAt": string
    }
}

type CompanyT = {
    id: string,
    zoomInfoId: null | any,
    name: string,
    logo: null | any,
    ticker: null | any,
    "parentCompany": null | any,
    phone: string,
    fax: string,
    website: string,
    city: string,
    street: string,
    state: string,
    zipCode: string,
    country: string,
    continent: null | any,
    productsBrandDescription: null | any,
    descriptionList: string,
    revenueRange: string,
    employeeRange: string,
    twitterHandle: null | any,
    socialMediaUrls: null | any,
    competitors: null | any,
    subUnitIndustries: null | any,
    primaryIndustry: string[],
    industries: null | any,
    revenue: string,
    employeeCount: number,
    annualContributions: null | any,
    cashContributions: null | any,
    inKindContributions: null | any,
    employeeContributions: null | any,
    parentId: string,
    parentName: null | any,
    type: null | any,
    sdgGoals: any[],
    genders: null | any,
    income: null | any,
    age: null | any,
    ethnicity: null | any,
    nonprofit: null | any,
    purchase: null | any,
    affiliation: null | any,
    brands: null | any,
    interests: null | any,
    typesOfInvestment: null | any,
    errorLoadZoomInfo: null | any,
    charitablePartners: any[],
    statusZoomInfo: string,
    loadZoomInfoDate: null | any,
    errorLoadZoomInfoDate: null | any,
    partnershipLink: null | any,
    employeeEngagementOpportunities: boolean,
    similarCompanies: string[],
    contacts: any[],
    crsFocus: any[],
    favoriteCompanies: [
        {
            id: string,
            companyId: string,
            userId: string
        }
    ],
    like: boolean
}

export type GetCompanyT = CompanyT

export type GetCompaniesT = {
    items: CompanyT[],
    meta: {
        totalItems: number,
        itemCount: number,
        itemsPerPage: string,
        totalPages: number,
        currentPage: string
    }
}


