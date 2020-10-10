const axios = require("axios");

function getConfig(instanceId) {
  // TODO: secure api using key/encryption/something
  const url = `https://ubeacanl07.execute-api.us-east-1.amazonaws.com/dev/${instanceId}/config`;
  return axios
    .get(url)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
}

module.exports = { getConfig };
