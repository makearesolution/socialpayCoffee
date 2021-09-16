const couponsEdit = `
    mutation couponsEdit($_id: String!, $status: String, $updatedCustomer: String){
        couponsEdit(_id: $_id, status: $status, updatedCustomer: $updatedCustomer) {
            _id
            couponCode
            status
            updatedDate
            responseMessage
            updatedCustomer {
                _id
                lastName
                firstName
            }
        }
    }
`;

export default { couponsEdit };
