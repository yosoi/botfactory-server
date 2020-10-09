const AWS = require("aws-sdk");

const metadataService = new AWS.MetadataService();

function getInstanceId() {
  return metadataService
    .request("/latest/meta-data/instance-id")
    .promise()
    .then((data) => {
      console.log(data);
      return "beep boop";
    });
}

module.exports = { getInstanceId };
