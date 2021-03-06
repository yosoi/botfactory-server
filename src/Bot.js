const { getConfig } = require("./function/getConfig");
const { getInstanceId } = require("./function/getInstanceId");
const { getResponse } = require("./function/getResponse");

async function boot() {
  const instanceId = await getInstanceId();
  const config = await getConfig(instanceId);
  return {
    config: config,
    getResponse: async (message) => {
      return await getResponse(instanceId, config.prefix, message);
    },
  };
}

module.exports = { boot };
