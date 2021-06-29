const { MessageEmbed } = require("discord.js")
const emojis = require(`${process.cwd()}/emojis`)

module.exports = {
    name: 'wqurantine', // The name of the command
    aliases: ['w4','wq'],
    clientPermissions: ['EMBED_LINKS'],
    group: 'whitelist',
    description: 'shows whitelist',
    usage: '', // Help text to explain how to use the command (if it had any arguments)
    cooldown: { time: 2000 },
   // aliases: 's',
   run: async (client, message, args) => {

    const emojisEmbed = `${emojis.blank} ${emojis.rightDoubleArrow}`

    const embed = new MessageEmbed()
    .setColor('#36393f')
  //   .setTitle(`${emojis.whitelist} Spam Whitelist`)
    .addFields(
        {
            name:`${emojis.an} Quarantine ${emojis.whitelist}`,
            value: `${emojisEmbed} **Member:** \`w!w @member ?add 4\``,
        },
    )

      message.channel.send(embed)
   }}
