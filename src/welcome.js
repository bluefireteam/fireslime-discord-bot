const { getChannelByName, getRandomNumber } = require("./utils")

const getWelcomeMessage = (guildMember, client) => {
  const instruductionChannel = getChannelByName("introduction", client);
  const rulesChannel = getChannelByName("rules", client);
  const whoWeAreChannel = getChannelByName("who-we-are", client);

  const messages = [
    `Welcome ${guildMember} would you mind introducing yourself on ${instruductionChannel}? Also that a look on ${whoWeAreChannel} and ${rulesChannel} to learn about us and this server :)`,
    `Hello ${guildMember}, welcome to the server, for information for this server, please refer to ${whoWeAreChannel} and ${rulesChannel}, also, could you take a moment to introduce yourself on ${instruductionChannel}?`,
    `Welcome ${guildMember}, would you mind introducing yourself on ${instruductionChannel}? To learn about us and this server, take a moment to read the messges on ${whoWeAreChannel} and ${rulesChannel}.`
  ]

  return messages[getRandomNumber(messages.length)];
}

module.exports = {
  createWelcome: client => {
    client.on("guildMemberAdd", guildMember => {
      const channel = getChannelByName("welcome-hall", client);
      channel.send(getWelcomeMessage(guildMember, client));
    });
  }
}