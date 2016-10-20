export const columnsType = [
  {"displayName": "First Name", "modelName": "firstName", "group": "name"},
  {"displayName": "Last Name", "modelName": "lastName", "group": "name"},
  {"displayName": "Full Name", "modelName": "findName", "group": "name"},
  {"displayName": "Prefix", "modelName": "prefix", "group": "name"},
  {"displayName": "Suffix", "modelName": "suffix", "group": "name"},
  {"displayName": "Zip Code", "modelName": "zipCode", "group": "address"},
  {"displayName": "City", "modelName": "city", "group": "address"},
  {"displayName": "City prefix", "modelName": "cityPrefix", "group": "address"},
  {"displayName": "Street name", "modelName": "streetName", "group": "address"},
  {"displayName": "Street Address", "modelName": "streetAddress", "group": "address"},
  {"displayName": "Secondary Address", "modelName": "secondaryAddress", "group": "address"},
  {"displayName": "Country", "modelName": "country", "group": "address"},
  {"displayName": "State", "modelName": "state", "group": "address"},
  {"displayName": "County", "modelName": "county", "group": "address"},
  {"displayName": "State Abbr", "modelName": "stateAbbr", "group": "address"},
  {"displayName": "Latitude", "modelName": "latitude", "group": "address"},
  {"displayName": "Longitude", "modelName": "longitude", "group": "address"},
  {"displayName": "Phone Number", "modelName": "phoneNumber", "group": "phone"},
  {"displayName": "Phone Number Format", "modelName": "phoneNumberFormat", "group": "phone"},
  {"displayName": "Phone Formats", "modelName": "phoneFormats", "group": "phone"},
  {"displayName": "Email", "modelName": "email", "group": "internet"},
  {"displayName": "User Name", "modelName": "userName", "group": "internet"},
  {"displayName": "Domain Name", "modelName": "domainName", "group": "internet"},
  {"displayName": "Domain Suffix", "modelName": "domainSuffix", "group": "internet"},
  {"displayName": "Ip Address", "modelName": "ip", "group": "internet"},
  {"displayName": "User Agent", "modelName": "userAgent", "group": "internet"},
  {"displayName": "Color", "modelName": "color", "group": "internet"},
  {"displayName": "Password", "modelName": "password", "group": "internet"},
  {"displayName": "Company Name", "modelName": "companyName", "group": "company"},
  {"displayName": "Image", "modelName": "image", "group": "image"},
  {"displayName": "Avatar", "modelName": "avatar", "group": "image"},
  {"displayName": "Animals", "modelName": "animals", "group": "image"},
  {"displayName": "Food", "modelName": "food", "group": "image"},
  {"displayName": "Night Life", "modelName": "nightlife", "group": "image"},
  {"displayName": "Sports", "modelName": "sports", "group": "image"},
  {"displayName": "Fashion", "modelName": "fashion", "group": "image"},
  {"displayName": "Words", "modelName": "words", "group": "lorem"},
  {"displayName": "sentence", "modelName": "sentence", "group": "lorem"},
  {"displayName": "sentences", "modelName": "sentences", "group": "lorem"},
  {"displayName": "paragraph", "modelName": "paragraph", "group": "lorem"},
  {"displayName": "paragraphs", "modelName": "paragraphs", "group": "lorem"},
  {"displayName": "random Number", "modelName": "randomNumber", "group": "helpers"},
  {"displayName": "randomize", "modelName": "randomize", "group": "helpers"},
  {"displayName": "slugify", "modelName": "slugify", "group": "helpers"},
  {"displayName": "past", "modelName": "past", "group": "date"},
  {"displayName": "future", "modelName": "future", "group": "date"},
  {"displayName": "recent", "modelName": "recent", "group": "date"},
  {"displayName": "account", "modelName": "account", "group": "finance"},
  {"displayName": "account Name", "modelName": "accountName", "group": "finance"},
  {"displayName": "mask", "modelName": "mask", "group": "finance"},
  {"displayName": "amount", "modelName": "amount", "group": "finance"},
  {"displayName": "transaction Type", "modelName": "transactionType", "group": "finance"},
  {"displayName": "currencyCode", "modelName": "currencyCode", "group": "finance"},
  {"displayName": "currency Name", "modelName": "currencyName", "group": "finance"},
  {"displayName": "currency Symbol", "modelName": "currencySymbol", "group": "finance"},
  {"displayName": "boolean", "modelName": "bool", "group": "others"},
  {"displayName": "null", "modelName": "null", "group": "others"},
  {"displayName": "relationship (Singilar with Id: userId)", "modelName": "rel", "group": "relationship"}
]

/**
 * Normalize the data for the choices plugin
 * @returns {Array}
 */
export function normalizeForSelect() {
  return columnsType.reduce(( acc, column ) => {
    const group = acc.filter(c => c.label === column.group)[0];
    const co = {value: column.modelName, label: column.displayName};
    // find if we have already have this group if not create
    if( !group ) {
      acc.push({
        label: column.group,
        choices: [co]
      });
    } else {
      group.choices.push(co)
    }

    return acc;
  }, []);
}
