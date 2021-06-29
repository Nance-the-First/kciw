const { MessageEmbed } = require("discord.js")
const emojis = require(`${process.cwd()}/emojis`)

module.exports = {
    name: 'moderators', // The name of the command
    aliases: ['permit2','mod','4'],
    clientPermissions: ['EMBED_LINKS'],
    group: 'statics',
    description: 'Extra Info for permit 2',
    usage: '', // Help text to explain how to use the command (if it had any arguments)
    cooldown: { time: 2000 },
   // aliases: 's',
   run: async (client, message, args) => {

    
    const emojisEmbed = `${emojis.blank} ${emojis.rightDoubleArrow}`

    const embed = new MessageEmbed()
    .setColor('#36393f')
    .setTitle('4 | Moderators')
    .setURL('https://docs.wickbot.com/v3/commands/settings/statics#4-moderator-role')
    .setDescription([
        `${emojis.blank}${emojis.rightSmall} Make a role for your mods and then do \`w!statics ModRole ?add 4\` where \`ModeratorRole\` is the \`actual name of the role\` you made. **mods are immune to heat filters**`,
        `${emojis.blank}${emojisEmbed} **Ex.** if a role called \`mods\` is the name of your moderator role, use the command \`w!statics mods ?add 4\` to set Mods as a wick moderator role`
    ].join('\n'))
    .addFields({
        name:`${emojis.rightDoubleArrow} Extra Info`,
        value: [
            `${emojis.kick} Kick members`,
            `${emojis.mute} Mute/unmute members`,
            `${emojis.warn} Warn members`,
            `${emojis.delete} Purge messages`,
            `${emojis.invites} Use the activity command *\`[w!activity]\`*`,
            `${emojis.dsh} View & edit cases`,
            `${emojis.docs} View info of other users`
        ].map(e=> `${emojis.blank} ${e}`).join('\n')
    })

message.channel.send(embed)
       
   }}