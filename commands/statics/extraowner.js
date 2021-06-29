const { MessageEmbed } = require("discord.js")
const emojis = require(`${process.cwd()}/emojis`)

module.exports = {
    name: 'extraowner', // The name of the command
    aliases: ['permit5','eo','11'],
    clientPermissions: ['EMBED_LINKS'],
    group: 'statics',
    description: 'Extra Info for permit 5',
    usage: '', // Help text to explain how to use the command (if it had any arguments)
    cooldown: { time: 2000 },
   // aliases: 's',
   run: async (client, message, args) => {

    const emojisEmbed = `${emojis.blank} ${emojis.rightDoubleArrow}`

    const embed = new MessageEmbed()
    .setColor('#36393f')
    .setTitle('11 | Extra Owner')
    .setURL(`https://docs.wickbot.com/v3/commands/settings/statics#11-extra-owners`)
    .setDescription(`${emojis.rightSmall} To add an extra owner, do \`w!statics extraOwner ?add 11\` where \`extraOwner\` is the \`actual username of the user\` you want to add **extra owners are immune to wick**\n${emojisEmbed} **Ex.** if a user is named \`fnAki\` use the command \`w!s fnaki ?add 11\` to set them as a extra owner`)
    .addFields({
        name:`${emojis.rightDoubleArrow} Extra Info`,
        value: [`${emojis.blank}${emojis.owner} Extra Owners are Server Owners`,
        `${emojisEmbed}They can do anything the actual owner with the crown ${emojis.owner} can do`,
        `${emojis.blank}${emojis.fail}The only thing extra owners can not do is add other extra owners`,`${emojis.alarm} **Extra Owners are immune to wick**`
    ]
    })

    message.channel.send(embed)

   }}