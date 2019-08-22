const permittedRoles = ["FlameUser", "AudioPlayersUser", "FireslimeGamer"];

module.exports = {
  roles: message => {
    message.reply(`
To assign yourself a role, type !set-role [role-name]

Available roles:

 - FlameUser: If you are here because you are using Flame on your project
 - AudioPlayersUser: If you are here because you are using AudioPlayers on your project
 - FireslimeGamer: If you are here because of our games
    `);
  },
  addRole: message => {
    const roleName = message.content.split(" ").filter(s => s.length)[1];

    const role = message.guild.roles.find("name", roleName);

    if (!role) {
      message.reply(`Can't find role "${roleName}"`);
    } else if (permittedRoles.indexOf(roleName) == -1) {
      message.reply(`You can't assing yourself the role "${roleName}"`);
    } else {
      message.member.addRole(role)
        .then(() => {
          message.reply("Your role is set!");
        })
        .catch(err => {
          message.reply("Sorry, I could not set your role, contact a Fireslime.");
          /* eslint-disable no-console */
          console.error(err);
        });
    }
  }
}
