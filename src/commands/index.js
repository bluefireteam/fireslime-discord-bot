const { flameSrc, flameDoc } = require("./flame");
const { roles, addRole } = require("./roles");

const shouldInterceptMessage = (prefix, channel, message) => {
  if (message.content.startsWith(prefix)) {
    return (message.channel.name === "bot-debug" || message.channel.name === channel);
  }

  return false;
}

module.exports = {
  createCommands: client => {
    client.on("message", message => {
        if (message.content.startsWith("ping")) {
          message.reply("Pong!");
        } else if (message.content.toLowerCase().includes("good bot")) {
          message.reply("Thanks master!");
        } else if (message.content.toLowerCase().includes("thanks asimov")) {
          message.reply("I live to serve Fireslime!");
        } else if (shouldInterceptMessage("!doc", "flame", message)) {
          flameDoc(message);
        } else if (shouldInterceptMessage("!src", "flame", message)) {
          flameSrc(message);
        } else if (shouldInterceptMessage("!role", "roles", message)) {
          roles(message);
        } else if (shouldInterceptMessage("!set-role", "roles", message)) {
          addRole(message);
        }
      });
  }
}

