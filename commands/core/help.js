  
const { MessageEmbed } = require('discord.js');
const text = require('../../util/string');
// const constants = require('../../util/constants');
const emojis = require(`${process.cwd()}/emojis`)

module.exports = {
  name: 'help',
  aliases: [ ],
  group: 'core',
  description: 'Displays basic information or a help for a command.',
  clientPermissions: [ 'EMBED_LINKS' ],
  parameters: [ 'Command Name/Alias' ],
  examples: [
    'help joinraid',
    'help permits',
    'help whitelist'
  ],
  run: (client, message, [query]) => {

    if (!query){
      return message.channel.send(
        new MessageEmbed()
        .setColor('#36393f')
        .setTitle(`Help`)
       // .setAuthor(client.user.username, client.user.displayAvatarURL())
        .setDescription(`${emojis.rightSort} All my commands start with the prefix \`${client.prefix}\`.\n${emojis.rightSort} \`${client.prefix}commands\` to see the list of my commands.\n${emojis.rightSort} You can also use \`${client.prefix} help [command]\` to get help on a specific command.`)
      
        .addFields({
          name: `${emojis.blank} links`,
          value: [
            `${emojis.console} [**Dashboard**](https://wickbot.com/dashboard) *\`[wickbot.com/dashboard]\`*`,
            `${emojis.premium} [**Premium**](https://wickbot.com/premium) *\`[wickbot.com/premium]\`*`,
           `${emojis.vip} [**Vip**](https://r.wickbot.us/viplist) *\`[r.wickbot.us/viplist]\`*`,
            `${emojis.bughunter} [**Troubleshoot**](https://docs.wickbot.com/v3/troubleshooting) *\`[r.wickbot.us/tshoot]\`*`,
            `${emojis.docs} [**Docs**](https://docs.wickbot.com/) *\`[r.wickbot.us/docs]\`*`,
            `${emojis.dsh} [**Website**](https://wickbot.com/) *\`[wickbot.com/]\``,
            `${emojis.dsh} [**Setup**](https://wickbot.com/docs/setup) *\`[wickbot.com/docs/setup]\`*`,
            `${emojis.dsh} [**Status**](https://wickbot.com/status) *\`[wickbot.com/status]\`*`
   
          ].join('\n')
        },)
      );
    } else {
      const command = client.commands.get(query.toLowerCase());

      if (!command){
        return message.channel.send({
          embed: {
            color:`#ff1a2a`,
            title: 'Error',
            description: `${emojis.fail} Couldn't find any match for **${query}** in the commands list! `
          }
        });//(`Sorry, I couldn't find any match for **${query}** in the commands list!`);
      };

      return message.channel.send(
        new MessageEmbed()
        .setColor('#36393f')
        .setDescription(`**${command.description}**`)
        .setAuthor(client.prefix + command.name, client.user.displayAvatarURL())
        .addFields([
          { name: 'Aliases', value: `\`${text.joinArray(command.aliases) || '`None`'}\`` , inline: true },
          {
           name: 'Permissions', value: text.joinArray(command.permissions.map(x => x.split('_')
           .map(a => a.charAt(0) + a.slice(1).toLowerCase()).join(' '))) || 'None', inline: true
          },
          { name: 'Parameters', value: text.joinArray(command.parameters) || 'None', inline: true },
          { name: 'Cooldowns', value:` \`${command.cooldown.time / 1000 || 'None'}\``, inline: true},
          { name: '\u200b', value: '\u200b', inline: true },
          { name: 'Examples', value: command.examples.map(x=>`\`${client.prefix}${x}\``)||'None', inline: true},
        ])
      );
    };
  }
};