const { MessageEmbed } = require("discord.js")
const emojis = require(`${process.cwd()}/emojis`)

module.exports = {
    name: 'verificationchannel', // The name of the command
    aliases: ['12'],
    clientPermissions: ['EMBED_LINKS'],
    group: 'statics',
    description: 'How to set a verfication',
    usage: '', // Help text to explain how to use the command (if it had any arguments)
    cooldown: { time: 2000 },
   // aliases: 's',
   run: async (client, message, args) => {

    const emojisEmbed = `${emojis.blank} ${emojis.rightDoubleArrow}` 

    const embed = new MessageEmbed()
    .setColor('#36393f')
    .setTitle('12 | Verifcation Channel')
    .setURL('https://docs.wickbot.com/v3/commands/settings/statics#12-verification-channels')
    .setDescription([
        `${emojisEmbed} \`w!statics #channel ?add 12\``,
        `${emojis.blank}${emojis.blank}${emojis.alarm} Channel is where wick will send its verification captcha`,
        `${emojis.blank}${emojis.blank}${emojis.alarm} Wick will make one once a new member joins after enabling verification`
    ].join("\n"))

   message.channel.send(embed);
}}