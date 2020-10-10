const axios = require("axios");

function post(data, url) {
  return axios
    .post(url, data)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
}

module.exports = { post };
