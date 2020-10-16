const { createUrl } = require("./http/createUrl");
const { post } = require("./http/post");

function getResponse(instanceId, prefix, message) {
  if (!message.content.startsWith(prefix) || message.author.bot) {
    return;
  }
  const url = createUrl("response", instanceId);
  return post({ message: message, prefix: prefix }, url);
}

module.exports = { getResponse };
