async function getResponse(apiKey, instanceId, prefix, message) {
  // TODO: filter messages that don't start with prefix
  // TODO: pass message and instance id to a lambda via an api using apikey
  // TODO: use the lambda to decide what command to run based on graphql query of bot commands
  // TODO: run the appropriate command and return the response from the lambda
  return { content: "" };
}

module.exports = { getResponse };
