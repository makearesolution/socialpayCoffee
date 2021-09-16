const couponsQuery = `
query coupons($couponCode: String, $companyId: String) {
  coupons(couponCode: $couponCode, companyId: $companyId) {
    _id
    couponCode
    status
    createdAt
    customerId
    customer {
      lastName
      firstName
    }
    promotionCorId
    updatedCustomer{
      email
    }
    promotionCor {
      couponLimit
      promotion {
      title
      mainPrice
      discountPercent
      imageDir
      startDate
      endDate
      }
    }
  }
}
`;

const checkCustomer = `
  query checkCustomer($token: String!) {
    checkCustomer(token: $token) {
      _id
      email
      firstName
      lastName
      erxesCustomerId
    }
  }
`;

const promotionCorsQuery = `
query promotionCors($perPage: Int, $page: Int, $customerId: String) {
  promotionCors(perPage: $perPage, page: $page, customerId: $customerId) {
    _id
    createdAt
    couponLimit  
    promotion {      
      title
      mainPrice
      discountPercent
      startDate
      endDate
      promoStatus
      imageDir  
    }
    coupon {
      _id
      couponCode     
      status
      createdAt
      }
    couponNew {
      _id
    }
    couponUsed {
      _id
      couponCode
        status
        customerId
        updatedDate
        customer{
          firstName
          lastName
        }
        updatedCustomer{
          firstName
        }
    }
    companyId    
    companies {
      _id
      primaryEmail
    }
  }
}
`;

const currentUser = `
  query currentUser {
    currentUser {
      _id
      email
      firstName
      lastName
      isOwner
      type
      companyName
      companyRegistrationNumber
      phone
    }
  }
`;

export default { couponsQuery, promotionCorsQuery, checkCustomer, currentUser };
