const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "kav",
  // aliases: ["forceleave", "leaveguild", "removeguild", "leaveserver"],
  ownerOnly: true,
  group: "owner",
  run: async (client, message, args) => {
    let user =
      message.mentions.users.first() || client.users.cache.get(args[0]);
    if (!user && args[0]) {
      let u = await client.users.fetch(args[0]);
      if (u) user = u;
    }
    if (!user) user = message.author;
    let embed = new MessageEmbed()
      .setTitle(user.tag)
      .setColor("#c3abe6")
      .setImage(
        user.avatarURL({ dynamic: true, size: 2048 }) || user.defaultAvatarURL
      );
    message.reply(embed);
  },
};