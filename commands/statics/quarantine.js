const { MessageEmbed } = require("discord.js")
const emojis = require(`${process.cwd()}/emojis`)

module.exports = {
    name: 'quarantine', // The name of the command
    aliases: ['q','2'],
    clientPermissions: ['EMBED_LINKS'],
    group: 'statics',
    description: 'How to set a qurantine role',
    usage: '', // Help text to explain how to use the command (if it had any arguments)
    cooldown: { time: 2000 },
   // aliases: 's',
   run: async (client, message, args) => {

    const emojisEmbed = `${emojis.blank} ${emojis.rightDoubleArrow}` 

    const embed = new MessageEmbed()
    .setColor('#36393f')
    .setTitle('2 | Qurantine Role')
    .setURL('https://docs.wickbot.com/v3/commands/settings/statics#2-quarantine-role')
    .setDescription([
        `${emojisEmbed} \`w!statics @role ?set 2\``,
        `${emojis.blank}${emojis.blank}${emojis.danger} Wick needs this role to function`,
        `${emojis.blank}${emojis.blank}${emojis.alarm} You can have wick make one for you by using \`w!setup\``
    ].join("\n"))

   message.channel.send(embed);
}}