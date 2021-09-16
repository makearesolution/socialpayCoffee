export const getCustomer = `
  query getCustomer($token: String!) {
    getCustomer(token: $token) {
      _id
      email
      firstName
      lastName
      erxesCustomerId
    }
  }
`;

export const promotionPullDatas = `
  query promotionsPullDatas($customerId: String){
    promotionPullDatas(customerId: $customerId) {    
      _id
      amount
      status
      merchantCode
      customerId
      updatedDate
      companyName
      responseMessage
      customer {
      primaryEmail
      }
      promotionCorCount
    }
  }
`;
