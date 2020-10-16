const axios = require("axios");

function get(url) {
  return axios
    .get(url)
    .then((response) => {
      console.log(response);
      return "";
    });
}

module.exports = { get };
