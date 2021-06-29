const { MessageEmbed } = require("discord.js");
const emojis = require(`${process.cwd()}/emojis`)
// const config = require("../config.json");

module.exports = {
    name: 'heat',
   // aliases: ['permit3','3'],
    clientPermissions: ['EMBED_LINKS'],
    group: 'heat',
    description: 'heat info',
    usage: '', // Help text to explain how to use the command (if it had any arguments)
    cooldown: { time: 2000 },

    run: async (client, message, args) => {
        
        const emojisEmbed = `${emojis.blank} ${emojis.rightDoubleArrow}`
        const check = `${emojis.blank}${emojis.check}`
        const fail = `${emojis.blank}${emojis.fail}`
        const blankSort = `${emojis.blank}${emojis.blank}${emojis.rightSmall}`

        const embed = new MessageEmbed()
        .setColor('#36393f')
        .setTitle('Heat')
        .setURL('https://docs.wickbot.com/v3/commands/settings/heat')
        .addFields(
            {
                name:`${emojis.rightSort} Status`,
                value:[
                    `${check} On \`w!heat 1 ?on\` \n${fail} Off \`w!heat 1 ?off\``
                ].join('\n')
            },
            {
                name:`${emojis.rightSort} Spam Filters`,
                value:[
                    `${check} On \`w!heat 2 ?on\` \n${fail} Off \`w!heat 2 ?off\``
                ].join('\n')
            },
            {
                name:`${emojis.premium} Max Heat Percentage`,
                value:[
                    `${emojisEmbed} \`w!heat X ?set 3\` \n${blankSort} Where \`X\` is the max heat percentage you want`
                ].join('\n')
            },
            {
                name:`${emojis.rightSort} Heat Degradation`,
                value:[
                    `${emojisEmbed} \`w!heat X ?set 4\``,
                    `${blankSort} Where \`X\` is the heat degradation you want`
                ].join('\n')
            },
            {
                name:`${emojis.rightSort} Strike CAP`,
                value:[
                    `${emojisEmbed} \`w!heat X ?set 5\``,
                    `${blankSort} Where \`X\` is the strike cap you want`
                ].join('\n')
            },
            {
                name:`${emojis.rightSort} Webhook Coverage`,
                value:[
                    `${check} \`On w!heat 6 ?on\``,
                    `${fail} Off \`w!heat 6 ?off\``,
                    `${emojis.blank}${emojis.blank}${emojis.danger} Should always be on`
                ].join('\n')
            }
        )

        message.channel.send(embed)

    }}