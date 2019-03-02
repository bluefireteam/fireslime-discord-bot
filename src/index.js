const Discord = require("discord.js")
const { createWelcome }  = require("./welcome")
const { createCommands } = require("./commands")

const client = new Discord.Client()

/* eslint-disable no-console */
client.on("ready", () => console.log(`Logged in as ${client.user.tag}!`));

createWelcome(client);
createCommands(client);

require("dotenv").config();
client.login(process.env.BOT_TOKEN);