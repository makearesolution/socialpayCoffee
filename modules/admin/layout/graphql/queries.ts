export const clientPortalGetConfig = `
  query clientPortalGetConfig($_id: String!) {
    clientPortalGetConfig(_id: $_id) {
      _id
      name
      description
      logo
      icon
      url
      knowledgeBaseLabel
      knowledgeBaseTopicId
      taskLabel
      taskPublicPipelineId
      taskStageId
      ticketLabel
      ticketStageId
      styles {
        bodyColor
        headerColor
        footerColor
        helpColor
        backgroundColor
        activeTabColor
        baseColor
        headingColor
        linkColor
        linkHoverColor
        baseFont
        headingFont
        dividerColor
        primaryBtnColor
        secondaryBtnColor
      }

      advanced {
        authAllow
        permission
        viewTicket
      }
    }
  }
`;

export const promotionCorsQuery = `
query promotionCors($customerId: String) {
  promotionCors(customerId: $customerId) {
    companyId
  }
}
`;

export const getPluginCompanies = `
  query getPluginCompanies($listCompanyId: String) {
    getPluginCompanies(listCompanyId: $listCompanyId){
      _id
      avatar
      code
      primaryName
      parentCompanyId
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
