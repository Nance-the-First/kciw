const { MessageEmbed } = require("discord.js");
const Discord = require("discord.js");
const db = require("quick.db");
const emojis = require(`${process.cwd()}/emojis`)
// const config = require("../config.json");

module.exports = {
    name: 'blacklist',
    aliases: ['bl'],
  //   ownerOnly: true,
    modOnly: true,
    group: 'owner',
    hidden: true,
  
    description: 'evaluate arbitrary Javascript',
    parameters: ['Javascript Code'],
    get examples() { return [this.name + ' 1 + 1']; },
    run: async (client, message, args) => {
            if (!args[0])
              return message.channel.send(
                new Discord.MessageEmbed()
                  .setDescription("who do u want to blacklist")
                  .setColor("RED")
              );
            const tobefucked = args[0];
            const user0 = await client.users.fetch(tobefucked);
            let name;
            if (user0) name = user0.tag;
        
            if (db.get(`${tobefucked}_analfucked`)) {
              let unFuckLog = new Discord.MessageEmbed()
    
                .setDescription(`${emojis.check} Unblacklisted \`${name}\``)
                .setColor('#36393f')


        
               message.channel.send(unFuckLog);
              db.delete(`${tobefucked}_analfucked`);
              return;

            }
            db.set(`${tobefucked}_analfucked`, true);
            let fuckLog = new Discord.MessageEmbed()
             // .setTitle(`\`${message.author.tag}\` fucked \`${name}\``)
              .setDescription(`${emojis.check} \`${name}\` was blacklisted`)
        
            message.channel.send(fuckLog);
          }
        }