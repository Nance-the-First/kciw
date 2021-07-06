const { MessageEmbed } = require("discord.js");
const emojis = require(`${process.cwd()}/emojis`)
// const config = require("../config.json");

module.exports = {
    name: 'capstrike',
    aliases: ['cap', 'capstrikemute', 'strikecaps', 'strikecap', 'strikes', 'strike'],
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
        .setTitle('CAP Strikes')
        .setURL('https://docs.wickbot.com/v3/commands/settings/heat#5-strikes-cap')
        .addFields(
            
            {
                name:`${emojis.mute} Explanation of Strike Caps`,
                value:[
                    `${blankSort} When a user triggers the heat system, Wick will silence them for a set period of time, if the user triggers the heat system \`X\` times, they will be silenced for a longer period (or will be permanently muted) and that \`X\` represents the Strikes CAP. Users will be receiving the final punishment when they hit the CAP`
                ].join('\n')
            },
            {
                name:`${emojis.docs} Example:`,
                value:[
                    `${blankSort} When a user triggers the heat system, Wick will silence them for a set period of time, if the user triggers the heat system \`X\` times, they will be silenced for a longer period (or will be permanently muted) and that \`X\` represents the Strikes CAP. Users will be receiving the final punishment when they hit the CAP\n${emojis.blank}${emojis.rightsmall} **When a user hits the CAP strike, wick will give them a higher mute duration and will also purge a user's messages.**`
                ].join('\n')
            },
        )

        message.channel.send(embed)
    
    
    }}
