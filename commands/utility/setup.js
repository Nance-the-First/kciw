const { MessageEmbed } = require("discord.js");
const emojis = require(`${process.cwd()}/emojis`)

module.exports = {
  name: "setup", // The name of the command
  clientPermissions: ["EMBED_LINKS"],
  aliases: ["stp"],
  group: "utility",
  description: "Shows the Wick Setup Guide",
  args: false, // Specified that this command doesn't need any data other than the command
  usage: "", // Help text to explain how to use the command (if it had any arguments)
  // aliases: 's',
  run: async (client, message, args) => {
    const embed = new MessageEmbed()
    .setTitle(`Wick Setup Guide`)
    .setDescription(`${emojis.rightDoubleArrow} https://wickbot.com/docs/setup`)
    message.channel.send(embed)
  },
};
