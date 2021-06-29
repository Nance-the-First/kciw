const { MessageEmbed } = require("discord.js")
const emojis = require(`${process.cwd()}/emojis`)

module.exports = {
    name: 'wping', // The name of the command
    aliases: ['w2','wp'],
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
            name:`${emojis.pings} Ping ${emojis.whitelist}`,
            value:[
                `**Member:** \`w!w @member ?add 2\``,
                `**Channel:** \`w!w #channel ?add 2\``,
                `**Role:** \`w!w @role ?add 2\``,
                `**Category:** \`w!w category-id ?add 2\``,
                `**Webhook:** \`w!w webhook-id ?add 2\``
            ].map(e=> `${emojisEmbed} ${e}`).join('\n')
        },
    )

      message.channel.send(embed)
   }}
