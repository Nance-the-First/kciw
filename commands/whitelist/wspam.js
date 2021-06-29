const { MessageEmbed } = require("discord.js")
const emojis = require(`${process.cwd()}/emojis`)

module.exports = {
    name: 'spam', // The name of the command
    aliases: ['w1','ws'],
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
            name:`${emojis.whitelist} Spam`,
            value: [
                `**Member:** \`w!w @member ?add 1\``,
            `**Channel:** \`w!w #channel ?add 1\``,
            `**Role:** \`w!w @role ?add 1\``,
            `**Category:** \`w!w category-id ?add 1\``,
            `**Webhook:** \`w!w webhook-id ?add 1\``
            ].map(e=> `${emojisEmbed} ${e}`).join('\n')
        }
    )

      message.channel.send(embed)
   }}
