const { MessageEmbed } = require("discord.js")
const emojis = require(`${process.cwd()}/emojis`)

module.exports = {
    name: 'admin', // The name of the command
    aliases: ['permit3','3'],
    clientPermissions: ['EMBED_LINKS'],
    group: 'statics',
    description: 'Extra Info for permit 3',
    usage: '', // Help text to explain how to use the command (if it had any arguments)
    cooldown: { time: 2000 },
   // aliases: 's',
   run: async (client, message, args) => {

    const emojisEmbed = `${emojis.blank} ${emojis.rightDoubleArrow}`

    const embed = new MessageEmbed()
    .setColor('#36393f')
    .setTitle(`3 | Admin`)
    .setURL(`https://docs.wickbot.com/v3/commands/settings/statics#3-admin-role`)
    .setDescription([
        `${emojis.blank}${emojis.rightSmall} Make a role for your admins and then do \`w!statics AdminRole ?add 3\` where \`AdminRole\` is the actual name of the role you made **admins are immune to heat filters**`,
        `${emojis.blank}${emojisEmbed} **Ex.** if a role called \`admin\` is the name of your admin role, use the command \`w!statics admins ?add 3\` to set admins as a wick admin role`
    ].join('\n'))
    .addFields(
        {
            name:`${emojis.rightDoubleArrow} Extra Info`,
            value:[
                `${emojis.ban} Ban members`,
                `${emojis.delete} Purge messages`,
                `${emojis.check} Unban members`,
                `${emojis.automod} Everything moderators can do`
            ].map(e=> `${emojis.blank} ${e}`).join('\n')
        }
    )
    message.channel.send(embed);
       
   }}
   