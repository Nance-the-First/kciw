const { MessageEmbed } = require('discord.js');
const text = require(`${process.cwd()}/util/string`);
module.exports = {
  name: 'commands',
  aliases: ['cmd', 'command',],
  group: 'core',
  description: 'Sends a list of all commands from each specific command groups',
  clientPermissions: ['EMBED_LINKS'],
  parameters: [],

  get examples() { return [this.name, ...this.aliases]; },
  run: (client, message) => {

    const fields = [];

    for (const group of Object.keys(client.commands.groups).filter(g => g !== 'unspecified')) {
      fields.push({
        name: group.charAt(0).toLowerCase() + group.slice(1).toLowerCase(), inline: true,
        value: text.joinArray(client.commands.groups.get(group).map(x => `\`${x.name}\``))
      });
    };

    if (client.commands.groups.get('unspecified').size) {
      fields.push({
        name: 'unspecified', inline: true,
        value: text.joinArray(client.commands.groups.get('unspecified').map(x => `\`${x.name}\``))
      });
    };

    return message.channel.send(
      new MessageEmbed()
        .setColor('#c3abe6')
        .addFields(fields.sort((A, B) => B.value.length - A.value.length))
        .setAuthor('vile\'s full list of commands!')
        // .setFooter(`command List | \©️${new Date().getFullYear()} vile`)
        .setDescription([
          `you may get the full detail of each command by typing \`${client.prefix}help <command>\``,
          // 'alternitavely, you may check out https://vile/docs/commands for full command details'
        ].join('\n'))
    );
  }
};
