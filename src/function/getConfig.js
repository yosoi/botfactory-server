const { createUrl } = require("./http/createUrl");
const { get } = require("./http/get");

async function getConfig(instanceId) {
  const url = createUrl("config", instanceId);
  return get(url).then((response) => {
    if (!response.token) {
      throw `No token associated with ${instanceId}.`;
    }
    return response;
  });
}

module.exports = { getConfig };
