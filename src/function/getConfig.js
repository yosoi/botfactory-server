const { createUrl } = require("./http/createUrl");
const { get } = require("./http/get");

async function getConfig(instanceId) {
  const url = createUrl("config", instanceId);
  console.log("get config url", url);
  const response = await get(url);
  console.log("get() response", response);
  return get(url);
}

module.exports = { getConfig };
