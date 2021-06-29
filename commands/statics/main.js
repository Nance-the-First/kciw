const { MessageEmbed } = require("discord.js")
const emojis = require(`${process.cwd()}/emojis`)

module.exports = {
    name: 'main', // The name of the command
    aliases: ['5'],
    clientPermissions: ['EMBED_LINKS'],
    group: 'statics',
    description: 'How to set a mute role',
    usage: '', // Help text to explain how to use the command (if it had any arguments)
    cooldown: { time: 2000 },
   // aliases: 's',
   run: async (client, message, args) => {

    const emojisEmbed = `${emojis.blank} ${emojis.rightDoubleArrow}` 

    const embed = new MessageEmbed()
    .setColor('#36393f')
    .setTitle('5 | Main Role')
    .setURL('https://docs.wickbot.com/v3/commands/settings/statics#5-main-role')
    .setDescription([
        `${emojisEmbed} \`w!statics @role ?add 5\``,
        `${emojis.blank}${emojis.blank}${emojis.alarm} The main role is given upon completing verification and removed when a user gets muted`
    ].join("\n"))

   message.channel.send(embed);
}}