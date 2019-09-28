const contentful = require("contentful");
export const Client = contentful.createClient({
  // This is the space ID. A space is like a project folder in Contentful terms
  space: "lo3yxyyk3sy6",
  // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
  accessToken: "7NX2e5pvhNBSsYVpXrB70QMHi17l7PJLI1xozMcKf1w"
});
