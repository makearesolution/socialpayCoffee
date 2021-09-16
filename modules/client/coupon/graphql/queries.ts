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

export const couponsQuery = `
query coupons($customerId: String, $status: String, $perPage: Int, $page:Int) {
  coupons(customerId: $customerId, status: $status, perPage: $perPage, page: $page) {
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
      companies {
        primaryName
      }
      promotion {
      title
      imageDir
      mainPrice
      discountPercent
      }
    }
  }
}
`;
