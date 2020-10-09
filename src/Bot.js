const { getApiKey } = require("./function/getApiKey");
const { getConfig } = require("./function/getConfig");
const { getInstanceId } = require("./function/getInstanceId");
const { getResponse } = require("./function/getResponse");

async function boot() {
  const apiKey = await getApiKey();
  const instanceId = await getInstanceId();
  const config = await getConfig(apiKey, instanceId);
  return {
    config: config,
    getResponse: (message) =>
      getResponse(apiKey, instanceId, config.prefix, message),
  };
}

module.exports = { boot };
