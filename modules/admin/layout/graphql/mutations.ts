export const csEditRequestsAddMutation = `
    mutation csEditRequestsAdd($companyId: String, $timeTable: String, $address: String, $description: String, $createdCustomer: String, $phone: String, $email: String, $web: String, $facebook: String){
        csEditRequestsAdd(companyId: $companyId, timeTable: $timeTable, address: $address, description: $description, createdCustomer: $createdCustomer, phone: $phone, email: $email, web: $web, facebook: $facebook){
            _id
            responseMessage
        }
    }
`;
