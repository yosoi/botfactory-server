const { createUrl } = require("./http/createUrl");
const { get } = require("./http/get");

function getConfig(instanceId) {
  const url = createUrl("config", instanceId);
  return get(url);
}

module.exports = { getConfig };
