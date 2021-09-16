export const getCompanies = `
  query clientPortalGetCompanies($page: Int, $perPage: Int) {
    clientPortalGetCompanies(page: $page, perPage: $perPage) {
      _id
      primaryName
      createdAt
      avatar
      website
    }
  }
`;
export const promotionCorsQuery = `
query promotionCors($perPage: Int, $page: Int, $companyId: String) {
  promotionCors(perPage: $perPage, page: $page, companyId: $companyId) {
    _id
    createdAt    
    promotion {      
      title
      mainPrice
      discountPercent
      startDate
      endDate 
      imageDir   
    }
    coupon {
      _id
      couponCode     
      status
      createdAt
      }
    couponNew {
      couponCode
      status
    }
    couponUsed {
      couponCode
      status
    }
    companyId    
    companies {
      _id
      primaryEmail
    }
  }
}
`;

export const getPluginCompanies = `
  query getPluginCompanies($listCompanyId: String, $listParentCompanyId: String, $page: Int, $perPage: Int ) {
    getPluginCompanies(listCompanyId: $listCompanyId, listParentCompanyId: $listParentCompanyId, page: $page, perPage: $perPage){
      _id
      avatar
      code
      primaryName
      parentCompanyId
      parentCompanyName
      description
      timeTable
      address
      banner
      facebook
      twitter
      youtube
      website
      phones
      primaryEmail
    }
  }
`;
export const getPluginParentCompanies = `
query getPluginParentCompanies{
  getPluginParentCompanies {
    parentCompanyId
    parentCompanyName
  }
  }
`;
