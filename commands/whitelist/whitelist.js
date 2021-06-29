const emojis = require(`${process.cwd()}/emojis`)
const { MessageEmbed } = require("discord.js")

module.exports = {
    name: 'whitelist', // The name of the command
    aliases: ['w'],
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
.setTitle('Whitelist')
.setURL('https://docs.wickbot.com/v3/setup/katemoon#11-whitelist-people')
.addFields(
    {
        name:`${emojis.docs} Spam ${emojis.whitelist}`,
        value: [
            `**Member:** \`w!w @member ?add 1\``,
            `**Channel:** \`w!w #channel ?add 1\``,
            `**Role:** \`w!w @role ?add 1\``,
            `**Category:** \`w!w category-id ?add 1\``,
            `**Webhook:** \`w!w webhook-id ?add 1\``
        ].map(e=> `${emojisEmbed} ${e}`).join('\n')
    },
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
    {
        name:`${emojis.adv} Advert ${emojis.whitelist}`,
        value:[
            `**Member:** \`w!w @member ?add 3\``,
            `**Channel:** \`w!w #channel ?add 3\``,
            `**Role:** \`w!w @role ?add 3\``,
            `**Category:** \`w!w category-id ?add 3\``,
            `**Webhook:** \`w!w webhook-id ?add 3\``
        ].map(e=> `${emojisEmbed} ${e}`).join('\n')
    },
    {
        name:`${emojis.an} Quarantine ${emojis.whitelist}`,
        value: `${emojisEmbed} **Member:** \`w!w @member ?add 4\``,
    },
    {
        name:`${emojis.pings} @here/@everyone ${emojis.whitelist}`,
        value:[
            `**Member:** \`w!w @member ?add 5\``,
            `**Channel:** \`w!w #channel ?add 5\``,
            `**Role:** \`w!w @role ?add 5\``,
            `**Category:** \`w!w category-id ?add 5\``,
            `**Webhook:** \`w!w webhook-id ?add 5\``
        ].map(e=> `${emojisEmbed} ${e}`).join('\n')
    },
    {
        name:`${emojis.console} Dashboard`,
        value:`${emojisEmbed} You can also change your whitelist through the **[dashboard](https://wickbot.com/dashboard)**`
    }
)

message.channel.send(embed)

   }}