const { MessageEmbed } = require("discord.js")
const emojis = require(`${process.cwd()}/emojis`)

module.exports = {
    name: 'trustedAdmin', // The name of the command
    aliases: ['ta','permit4','10'],
    clientPermissions: ['EMBED_LINKS'],
    group: 'statics',
    description: 'Extra Info for permit 4',
    usage: '', // Help text to explain how to use the command (if it had any arguments)
    cooldown: { time: 2000 },
   // aliases: 's',
   run: async (client, message, args) => {

    const emojisEmbed = `${emojis.blank} ${emojis.rightDoubleArrow}`

    const embed = new MessageEmbed()
    .setColor('#36393f')
    .setTitle('10 | Trusted Admin')
    .setURL('https://docs.wickbot.com/v3/commands/settings/statics#10-trusted-admins')
    .setDescription(`${emojis.rightSmall} To add a trusted admin, do \`w!statics trustedAdmin ?add 10\` where \`trustedAdmin\` is the \`actual username of the user\` you want to add **trusted admins are immune to wick** \n${emojisEmbed}if a user is named \`fnAki\` use the command \`w!statics fnaki ?add 10\` to set them as a trusted admin`)
    .addFields({
        name:`${emojis.rightDoubleArrow} Extra Info`,
        value: [
            `${emojis.an} Quarantine/Restore members`,
            `${emojis.whitelist} Change whitelist settings`,
            `${emojis.statics} Change statics (some) settings`,
            `${emojis.nsfw} Lockdown the server`,
            `${emojis.automod} Everything the Moderator/Admin statics can do`,
            `${emojis.verify} Change verification settings`,
            `${emojis.mute} Change heat filters`,
            `${emojis.kick} Change join gate settings`,
            `${emojis.premium}${emojis.joinraid} Change join raid settings`,
            `${emojis.alarm} Trusted Admins are immune to wick`
        ].map(e=> `${emojis.blank} ${e}`).join('\n')
    })

    message.channel.send(embed);
       
   }}
