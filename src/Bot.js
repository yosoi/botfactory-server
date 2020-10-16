const { getConfig } = require("./function/getConfig");
const { getInstanceId } = require("./function/getInstanceId");
const { getResponse } = require("./function/getResponse");

async function boot() {
  const instanceId = await getInstanceId();
  return getConfig(instanceId).then((config) => {
    return {
      config: config,
      getResponse: (message) => {
        return getResponse(instanceId, config.prefix, message);
      },
    };
  });
}

module.exports = { boot };
