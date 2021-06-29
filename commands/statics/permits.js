const { MessageEmbed } = require("discord.js")
const emojis = require(`${process.cwd()}/emojis`)

module.exports = {
    name: 'permits', // The name of the command
    aliases: ['permits','perm','p'],
    clientPermissions: ['EMBED_LINKS'],
    group: 'statics',
    description: 'shows all permits',
    usage: '', // Help text to explain how to use the command (if it had any arguments)
    cooldown: { time: 2000 },
   // aliases: 's',
   run: async (client, message, args) => {

    const emojisEmbed = `${emojis.blank} ${emojis.rightDoubleArrow}`

const permitEmbed = new MessageEmbed()
.setColor('#36393f')
.setTitle('Permits')
.setURL('https://discordapp.com/channels/536277067310956565/536288784422141988/798665200928686100')
.addFields(
    {
        name:`${emojis.danger} Permit 5 | Extra Owner`,
        value: [
            `${emojis.rightSmall} To add an extra owner, do \`w!statics extraOwner ?add 11\` where \`extraOwner\` is the \`actual username of the user\` you want to add **extra owners are immune to wick**`,
            `${emojisEmbed} **Ex.** if a user is named \`fnAki\` use the command \`w!statics fnaki ?add 11\` to set them as a extra owner`
        ].join('\n')
    },
    {
        name:`${emojis.danger} Permit 4 | Trusted Admin`,
        value:[`${emojis.rightSmall} To add a trusted admin, do \`w!statics trustedAdmin ?add 10\` where \`trustedAdmin\` is the \`actual username of the user\` you want to add **trusted admins are immune to wick**`,
        `${emojisEmbed}if a user is named \`fnAki\` use the command \`w!statics fnaki ?add 10\` to set them as a trusted admin`
    ].join('\n')
    },
    {
        name:`${emojis.rightSort} Permit 3 | Admin`,
        value: [
            `${emojis.blank}${emojis.rightSmall} Make a role for your admins and then do \`w!statics AdminRole ?add 3\` where \`AdminRole\` is the actual name of the role you made **admins are immune to heat filters**`,
            `${emojis.blank}${emojisEmbed} **Ex.** if a role called \`admin\` is the name of your admin role, use the command \`w!statics admins ?add 3\` to set admins as a wick admin role`
        ].join('\n')
    },
    {
        name:`${emojis.rightSort} Permit 2 | Moderators`,
        value:[
            `${emojis.blank}${emojis.rightSmall} Make a role for your mods and then do \`w!statics ModRole ?add 4\` where \`ModeratorRole\` is the \`actual name of the role\` you made. **mods are immune to heat filters**`,
            `${emojis.blank}${emojisEmbed} **Ex.** if a role called \`mods\` is the name of your moderator role, use the command \`w!statics mods ?add 4\` to set Mods as a wick moderator role`
        ].join('\n')
    },
    {
        name:`${emojis.rightSort} Misc`,
        value:[`${emojis.blank}${emojis.console} [**Dashboard**](https://wickbot.com/dashboard) *\`[wickbot.com/dashboard]\`*`,
        `${emojis.blank}${emojis.rightSmall} Use the command \`${client.prefix}staffperms\` to find out what each permit does`
    ].join('\n')
    }
)

message.channel.send(permitEmbed)

   }}

