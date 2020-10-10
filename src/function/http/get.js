const axios = require("axios");

function get(url) {
  return axios
    .get(url)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
}

module.exports = { get };
