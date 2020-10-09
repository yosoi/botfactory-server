const AWS = require("aws-sdk");

function getInstanceId() {
  return new Promise((resolve, reject) => {
    var metadata = new AWS.MetadataService();
    metadata.request("/latest/meta-data/instance-id", function (error, data) {
      if (error) {
        console.log(error);
        reject(error);
      }
      console.log(data);
      resolve(data);
    });
  });
}

module.exports = { getInstanceId };
