const emojis = require(`${process.cwd()}/emojis`)
const { MessageEmbed } = require("discord.js")


module.exports = {
    name: 'boost', // The name of the command
    description: 'boosting perks', // The description of the command (for help text)
    aliases: ['b'],
    group: 'misc',
   run: async (client, message) => {

    const emojisEmbed = `${emojis.blank} ${emojis.rightDoubleArrow}`

        const exampleEmbed = new MessageEmbed()
        .setColor('#36393f')
       
     //   .setURL('https://docs.wickbot.com/v3/commands/moderation/ban')
   
        .addFields(
            { name: `${emojis.boost} Boost Perks`, value: `${emojisEmbed} If you boost the server you will be able to redeem a 15% off coupon on the payment panel and also a <@&613791938335735818> role which is hoisted directly below the staff roles!.` },
            { name: `${emojis.danger} Disclaimer`, value: `${emojisEmbed} We do reserve the right to charge that 15% if you remove your boost before a months time/95% of the time. ` },

        )
        
    
    message.channel.send(exampleEmbed);
    },
};
