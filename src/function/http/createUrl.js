function createUrl(endpoint, id) {
  return `https://ubeacanl07.execute-api.us-east-1.amazonaws.com/dev/${id}/${endpoint}`;
}

module.exports = { createUrl };
