const { MessageEmbed } = require('discord.js');


module.exports = {
  name: 'avatar',
  aliases: ['av', 'pfp', 'displayprofile'],
  clientPermissions: ['EMBED_LINKS'],
  group: 'utility',
  description: 'shows avatar of the provided user, or yourself',
  cooldown: {
    time: 1000,
    message: 'you are going too fast! please slow down to avoid getting ratelimited.',
  },
  parameters: ['User Mention / ID'],
  get examples() { [this.name, ...this.aliases].map(x => x + ' @user') },
  run: async (client, message, args) => {
    let user =
      message.mentions.users.first() || client.users.cache.get(args[0]);
    if (!user && args[0]) {
      let u = await client.users.fetch(args[0]);
      if (u) user = u;
    }
    if (!user) user = message.author;
    let embed = new MessageEmbed()
       .setTitle(`${user.tag}`)
      .setColor("#36393f")
      .setImage(
        user.avatarURL({ dynamic: true, size: 2048 }) || user.defaultAvatarURL
      );
    message.reply(embed);
  },
};