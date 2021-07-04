/*const { MessageEmbed } = require('discord.js');

module.exports = {
  name: 'suggest',
  aliases: [],
  guildOnly: true,
  group: 'core',
  description: 'suggest something for the server. if you have suggestion for the bot instead please use the feedback command or join our support server',
  clientPermissions: ['EMBED_LINKS', 'ADD_REACTIONS'],
  parameters: ['Suggestion Message'],
  get examples() { return this.name + ' please remove some inactive members... ' },
  run: async (client, message, args) => {

    const embed = new MessageEmbed()
      // .setFooter(``)
      .setColor('#c3abe6');

    if (!args.length) {
      return message.channel.send(
        embed.setAuthor('no message', 'https://cdn.discordapp.com/emojis/767062250279927818.png?v=1')
          .setColor('#c3abe6')
          .setDescription(`**${message.member.displayName}**, please include your **suggestion message**!`)
          .addField('example', '```m!suggest Please remove some inactive members...```')
      );
    };

    const id = client.guildProfiles.get(message.guild.id).suggestChannel;
    const channel = message.guild.channels.cache.get(id);

    if (!channel) {
      return message.channel.send(
        embed.setAuthor('channel not found!', 'https://cdn.discordapp.com/emojis/767062250279927818.png?v=1')
          .setColor('#c3abe6')
          .setDescription([
            `**${message.member.displayName}**, could not find **suggestion channel** for this server!\n`,
            `if you are a server admin, you may set the channel by typing:`,
            `\`${client.config.prefix}setsuggestch <channel ID | channel mention>\``
          ].join('\n'))
      )
    };

    if (!channel.permissionsFor(message.guild.me).has('VIEW_CHANNEL', 'SEND_MESSAGES', 'EMBED_LINKS')) {
      return message.channel.send(
        embed.setAuthor('missing perms', 'https://cdn.discordapp.com/emojis/767062250279927818.png?v=1')
          .setColor('#c3abe6')
          .setDescription([
            `**${message.member.displayName}**, the channel ${channel} does not allow me to post your suggestion there!`,
            `i need to have the following permissions: \`view channel\`, \`send messages\`, and \`embed links\`\n\n`
              `if you are a server admin/mod, please change my permission overwrites on the aformentioned channel.`
          ].join(''))
      );
    };

    return channel.send(
      embed.setTitle(`${message.member.displayName}'s suggestion`)
        .setColor('#c3abe6')
        .setDescription(args.join(' '))
        .setThumbnail(message.author.displayAvatarURL({ format: 'png', dynamic: true }))
        .addField('status', 'under review', true)
    ).then(() => message.react('<:check:797676580943691829>'));
  }
};
*/