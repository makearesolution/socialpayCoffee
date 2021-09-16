/*
 * Mongoose field options wrapper
 */
export const field = (options) => {
  const { optional } = options;

  if (!optional) {
    options.required = true;
    options.validate = /\S+/;
  }

  return options;
};

export const schemaWrapper = (schema) => {
  schema.add({ scopeBrandIds: [String] });

  return schema;
};
