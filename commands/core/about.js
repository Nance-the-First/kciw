const { MessageEmbed } = require('discord.js')

module.exports = {
    name: 'about',
    aliases: ['botinfo'],
    group: 'core',
    description: 'displays basic information or a help for a command',
    clientPermissions: ['EMBED_LINKS'],
    parameters: ['Command Name/Alias'],
    run: (client, message, [query]) => {

  const newEmbed = new MessageEmbed()
   .setTitle('bot info')
   .setURL('https://kaies.carrd.co/')
   // .setThumbnail(message.guild.iconURL({ dynamic: true }))
   .setColor('#c3abe6')
   .setFooter(' © vile. all rights reserved.')
   .setDescription('<:blank:832304975371173929> **abt+**\n <@790871036219621447> bot is coded by <@!505279473722327040> and <@!737913175697129582> for the server **[ice](https://discord.com/invite/hangout)**');

  message.channel.send(newEmbed);
 }
};