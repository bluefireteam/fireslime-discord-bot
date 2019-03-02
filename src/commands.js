module.exports = { 
  createCommands: client => {
    client.on("message", message => {
        if (message.content.startsWith("ping")) {
          message.reply("Pong!");
        }
      });
  }
}