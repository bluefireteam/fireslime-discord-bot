const getChannelByName = (channelName, client) => client.channels.find(ch => ch.name === channelName);

const getRandomNumber = maxValue => Math.floor(Math.random() * maxValue);

module.exports = { getChannelByName, getRandomNumber }