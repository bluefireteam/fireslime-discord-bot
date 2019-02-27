const Discord = require("discord.js")

const client = new Discord.Client()
require("dotenv").config();

/* eslint-disable no-console */
client.on("ready", () => console.log(`Logged in as ${client.user.tag}!`));

client.on("message", message => {
  if (message.content.startsWith("ping")) {
    message.reply("Pong!");
  }
});

client.on("guildMemberAdd", guildMember => {
  /*const channel = client.channels.find(ch => ch.name === "teste");
  channel.send("Oi!");*/
});

client.login(process.env.BOT_TOKEN);