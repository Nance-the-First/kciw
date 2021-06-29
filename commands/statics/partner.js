const { MessageEmbed } = require("discord.js")
const emojis = require(`${process.cwd()}/emojis`)

module.exports = {
    name: 'partner', // The name of the command
    aliases: ['8'],
    clientPermissions: ['EMBED_LINKS'],
    group: 'statics',
    description: 'How to set partner channel',
    usage: '', // Help text to explain how to use the command (if it had any arguments)
    cooldown: { time: 2000 },
   // aliases: 's',
   run: async (client, message, args) => {

    const emojisEmbed = `${emojis.blank} ${emojis.rightDoubleArrow}` 

    const embed = new MessageEmbed()
    .setColor('#36393f')
    .setTitle('8 | Partner Channel')
    .setURL('https://docs.wickbot.com/v3/commands/settings/statics#8-partnering-channels')
    .setDescription([
        `${emojisEmbed} \`w!statics #channel ?add 8\``,
        `${emojis.blank}${emojis.blank}${emojis.alarm} Channel is used for server partnerships this channel is \`Spam/Advert/Ping\` whitelisted`
    ].join("\n"))

   message.channel.send(embed);
}}