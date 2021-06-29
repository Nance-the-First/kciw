const { MessageEmbed } = require("discord.js")
const emojis = require(`${process.cwd()}/emojis`)

module.exports = {
    name: 'mainchannel', // The name of the command
    aliases: ['9'],
    clientPermissions: ['EMBED_LINKS'],
    group: 'statics',
    description: 'How to set a main channel',
    usage: '', // Help text to explain how to use the command (if it had any arguments)
    cooldown: { time: 2000 },
   // aliases: 's',
   run: async (client, message, args) => {

    const emojisEmbed = `${emojis.blank} ${emojis.rightDoubleArrow}` 

    const embed = new MessageEmbed()
    .setColor('#36393f')
    .setTitle('9 | Main Channel')
    .setURL('https://docs.wickbot.com/v3/commands/settings/statics#9-main-channel')
    .setDescription([
        `${emojisEmbed} \`w!statics #channel ?add 9\``,
        `${emojis.blank}${emojis.blank}${emojis.alarm} Channel is used for inactive heat filter which is a premium feature`
    ].join("\n"))

   message.channel.send(embed);
}}