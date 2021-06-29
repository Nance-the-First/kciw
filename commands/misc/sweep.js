const emojis = require(`${process.cwd()}/emojis`)
const { MessageEmbed } = require("discord.js")


module.exports = {
    name: 'sweep', // The name of the command
    description: 'boosting perks', // The description of the command (for help text)
    aliases: ['scan'],
    group: 'misc',
   run: async (client, message) => {

    const emojisEmbed = `${emojis.blank} ${emojis.rightDoubleArrow}`

        const exampleEmbed = new MessageEmbed()
        .setColor('#36393f')
        .setTitle('Server Sweep')
        .setURL('https://wickbot.com/dashboard')

        .addFields(
            { name: `${emojis.console} Sweep`, value: `${emojisEmbed} Want to see how safe your server really is? Head over to the **[Dashboard](https://wickbot.com/dashboard)** and click magnify icon to have wick sweep your server` },

        )
   
       .setImage('https://cdn.discordapp.com/attachments/809410819803709447/809861172068352000/a.gif')
    
    
    message.channel.send(exampleEmbed);
    },
};