const emojis = require(`${process.cwd()}/emojis`)
const { MessageEmbed } = require("discord.js")


module.exports = {
    name: 'links', // The name of the command
    description: 'boosting perks', // The description of the command (for help text)
    aliases: ['l','li','link'],
    group: 'misc',
   run: async (client, message) => {

        const exampleEmbed = new MessageEmbed()
        .setColor('#36393f')
       
     //   .setURL('https://docs.wickbot.com/v3/commands/moderation/ban')
   
       .setTitle('Links')
       .setDescription([
           `${emojis.console} [**Dashboard**](https://wickbot.com/dashboard) *\`wickbot.com/dashboard\`*`,
           `${emojis.premium} [**Premium**](https://wickbot.com/premium) *\`wickbot.com/premium\`*`,
           `${emojis.vip} [**Vip**](https://r.wickbot.us/viplist) *\`r.wickbot.us/viplist\`*`,
           `${emojis.bughunter} [**Troubleshoot**](https://docs.wickbot.com/v3/troubleshooting) *\`r.wickbot.us/tshoot\`*`,
           `${emojis.docs} [**Docs**](https://docs.wickbot.com/) *\`r.wickbot.us/docs\`*`,
           `${emojis.dsh} [**Website**](https://wickbot.com/) *\`wickbot.com/\`*`,
           `${emojis.dsh} [**Setup**](https://wickbot.com/docs/setup) *\`wickbot.com/docs/setup\`*`,
           `${emojis.dsh} [**Status**](https://wickbot.com/status) *\`wickbot.com/status\`*`

       ])
       //.setDescription('   \n<:dsh:809525643627724801> [**Setup**](https://wickbot.com/docs/setup) *`https://wickbot.com/docs/setup`* \n<:dsh:809525643627724801> [**Status**](https://wickbot.com/status) *`https://wickbot.com/status`*')
        
    
    message.channel.send(exampleEmbed);
    },
};