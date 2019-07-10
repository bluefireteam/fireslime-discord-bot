const fetch = require("node-fetch");

module.exports = {
  flameDoc:message => {
    message.reply(`
Use the following links for Flame Documentation

- Structure: <https://github.com/flame-engine/flame/blob/master/doc/structure.md>
- Audio: <https://github.com/flame-engine/flame/blob/master/doc/audio.md>
- Images/Animations: <https://github.com/flame-engine/flame/blob/master/doc/images.md>
- Text Rendering: <https://github.com/flame-engine/flame/blob/master/doc/text.md>
- Colors and Palette: <https://github.com/flame-engine/flame/blob/master/doc/palette.md>
- Components: <https://github.com/flame-engine/flame/blob/master/doc/components.md>
- The Game Loop: <https://github.com/flame-engine/flame/blob/master/doc/game.md>
- Input: <https://github.com/flame-engine/flame/blob/master/doc/input.md>
- Util: <https://github.com/flame-engine/flame/blob/master/doc/util.md>
  `);
  },
  flameSrc: message => {
    const file = message.content.split(" ").filter(s => s.length)[1];

    const path = `https://raw.githubusercontent.com/flame-engine/flame/master/lib/${file}`;

    fetch(path)
      .then(res => {
        if (res.ok) {
          return res.text()
            .then(fileContent => {
              const content = "Here is the content of " + file + "```dart\n" + fileContent + "\n```";

              if (content.length <= 2000) {
                message.reply(content);
              } else {
                message.reply(`Sorry, but this file it too big and Discord don't let me post it here, please use the following link to see it: <https://github.com/flame-engine/flame/blob/master/lib/${file}>`)
              }
            })
        } else {
          message.reply("I could not find any source for " + file);
        }
      })
      .catch(e => {
        /* eslint-disable no-console */
        console.error(e);
        message.reply("Something weird happened and I could not fetch the source for " + file + " :(");
      })
  }
}
