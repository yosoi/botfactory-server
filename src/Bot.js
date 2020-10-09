const { getApiKey } = require("./function/getApiKey");
const { getConfig } = require("./function/getConfig");
const { getInstanceId } = require("./function/getInstanceId");
const { getResponse } = require("./function/getResponse");

async function boot() {
  const apiKey = await getApiKey();
  console.log(`API KEY: ${apiKey}`);
  const instanceId = await getInstanceId();
  console.log(instanceId);
  const config = await getConfig(apiKey, instanceId);
  console.log(config);
  return {
    config: config,
    getResponse: (message) =>
      getResponse(apiKey, instanceId, config.prefix, message),
  };
}

module.exports = { boot };
