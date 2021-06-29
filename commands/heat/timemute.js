const { MessageEmbed } = require("discord.js");
const emojis = require(`${process.cwd()}/emojis`)
// const config = require("../config.json");

module.exports = {
    name: 'timemute',
    aliases: ['timemutes','tm'],
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
        .setTitle('Timed Mutes')
        .setURL('https://docs.wickbot.com/v3/commands/settings/heat#7-timed-mutes')
        .addFields(
            {
                name:`${emojis.rightSort} Status`,
                value:[
                    `${check} On \`w!heat 7a ?on\``,
                    `${fail} Off \`w!heat 7a ?on\``
            ].join('\n')
            },
            {
                name:`${emojis.rightSort} Regular Strike Mute Duration`,
                value:[
                    `${emojisEmbed} \`w!heat X ?set 7b\``,
                    `${blankSort} Where \`X\` is the duration you want`
                ].join('\n')
            },
            {
                name: `${emojis.rightSort} CAP Strike Mute Duration`,
                value: [
                    `${emojisEmbed} \`w!heat X ?set 7c\``,
                    `${blankSort} Where \`X\` is the duration you want`
                ].join('\n')
            },
            {
                name:`${emojis.premium} Multiplier Status`,
                value: [
                    `${check} On \`w!heat 7d ?on\``,
                    `${fail} Off \`w!heat 7d ?off\``
                ].join('\n')
            },
            {
                name:`${emojis.premium} Multiplier Percentage`,
                value:[
                    `${emojisEmbed} \`w!heat X ?set 7e\``,
                    `${blankSort} Where \`X\` is the multiplier percent you want`
                ].join('\n')
            },
            {
                name:`${emojis.rightSort} Reset Heat On Mute`,
                value:[
                    `${check} On \`w!heat 8 ?on\``,
                    `${fail} Off \`w!heat 8 ?off\``
                ].join('\n')
            }
        )


        message.channel.send(embed)

    }}