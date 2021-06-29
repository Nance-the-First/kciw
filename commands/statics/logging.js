const { MessageEmbed } = require("discord.js")
const emojis = require(`${process.cwd()}/emojis`)

module.exports = {
    name: 'logging', // The name of the command
    aliases: ['6'],
    clientPermissions: ['EMBED_LINKS'],
    group: 'statics',
    description: 'How to set logging channel',
    usage: '', // Help text to explain how to use the command (if it had any arguments)
    cooldown: { time: 2000 },
   // aliases: 's',
   run: async (client, message, args) => {

    const emojisEmbed = `${emojis.blank} ${emojis.rightDoubleArrow}` 

    const embed = new MessageEmbed()
    .setColor('#36393f')
    .setTitle('6 | Logging Channel')
    .setURL('https://docs.wickbot.com/v3/commands/settings/statics#6-logging-channel')
    .setDescription([
        `${emojisEmbed} \`w!statics #channel ?set 6\``,
        `${emojis.blank}${emojis.blank}${emojis.danger} This channel is important it lets wick let you know what its doing`,
        `${emojis.blank}${emojis.blank}${emojis.alarm} You can have wick make one for you by using \`w!setup\``
    ].join("\n"))

   message.channel.send(embed);
}}