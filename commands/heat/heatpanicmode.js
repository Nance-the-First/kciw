const { MessageEmbed } = require("discord.js");
const emojis = require(`${process.cwd()}/emojis`)
// const config = require("../config.json");

module.exports = {
    name: 'heatpanicmode',
    aliases: ['hpm'],
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
        .setTitle('Heat Panic Mode')
        .setURL('https://docs.wickbot.com/v3/commands/settings/heat#9-heat-panic-mode')
        .addFields(
            {
                name:`${emojis.premium} Status`,
                value:[
                    `${check} On \`w!heat 9a ?on\``,
                    `${fail} Off \`w!heat 9a ?off\``
                ].join('\n')
            },
            {
                name:`${emojis.premium} Trigger`,
                value:[
                    `${emojisEmbed} \`w!heat X ?set 9b\``,
                    `${blankSort} Where \`X\` is the number of people you want before wick triggers heat panic mode`
                ].join('\n')
            },
            {
                name:`${emojis.premium} Panic Duration`,
                value:[
                    `${emojisEmbed} \`w!heat X ?set 9c\``,
                    `${blankSort} Where \`X\` is the amount of time you want panic mode to last for`
                ].join('\n')
            }
        )

        message.channel.send(embed)
    
    
    }}