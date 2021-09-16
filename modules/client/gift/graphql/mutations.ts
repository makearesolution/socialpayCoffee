const couponsAdd = `
  mutation couponsAdd($dataId: String) {
    couponsAdd(dataId: $dataId) {
      createdAt
      status
      couponCode
      responseMessage
      promotionCor {
        promotion {
          title
          imageDir
        }
        companies {
          primaryName
        }
      }
    }
  }
`;

export default { couponsAdd };
