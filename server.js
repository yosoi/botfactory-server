const Bot = require("./src/Bot.js");
const Discord = require("discord.js");

Bot.boot()
  .then(({ config, getResponse }) => {
    const client = new Discord.Client();
    client.once("ready", () => {
      console.log("ready");
    });
    client.on("message", (message) => {
      getResponse(message).then((response) => {
        if (response) {
          message.channel.send(response);
          console.log(`responded: ${response}`);
        }
      });
    });
    client.login(config.token);
  })
  .catch((error) => {
    console.log(error);
  });
