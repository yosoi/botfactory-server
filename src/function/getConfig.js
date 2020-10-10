const axios = require("axios");

function getConfig(instanceId) {
  // TODO: secure api using key/encryption/something
  const url = `https://ubeacanl07.execute-api.us-east-1.amazonaws.com/dev/${instanceId}/config`;
  axios
    .get(url)
    .then((response) => {
      console.log(response);
      // TODO: get message prefix and bot token from API using instanceId
      return {
        prefix: "",
        token: "",
      };
    })
    .catch((error) => {
      console.log(error);
    });
}

module.exports = { getConfig };
