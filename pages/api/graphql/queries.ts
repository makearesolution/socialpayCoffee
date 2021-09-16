const knowledgeBaseTopicDetail = `
  query knowledgeBaseTopicDetail($_id: String!) {
    knowledgeBaseTopicDetail(_id: $_id) {
      _id
      title
      description
      color
      backgroundImage
      languageCode
      categories {
        _id
        title
        description
        icon
        numOfArticles
        authors {
          details {
            fullName
            avatar
          }
        }
      }
    }
  }
`;

export const fieldsGroup = `
  query clientPortalFieldsGroup($contentType: String, $name: String!) {
    clientPortalFieldsGroup(contentType: $contentType, name: $name) {
      _id

      fields {
        _id
        text
        type
      }
    }
  }
`;

export default { knowledgeBaseTopicDetail };
