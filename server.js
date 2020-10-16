const Bot = require("./src/Bot.js");
const Discord = require("discord.js");

Bot.boot().then((bot) => {
  if (!bot.config.token) {
    throw "Unable to find token for this bot.";
  }
  const client = new Discord.Client();
  client.once("ready", () => {
    console.log("ready");
  });
  client.on("message", (message) => {
    bot.getResponse(message).then((response) => {
      message.channel.send(response.content);
    });
  });
  client.login(bot.config.token);
});
