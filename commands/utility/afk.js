const { MessageEmbed } = require('discord.js');
const db = require('quick.db')

module.exports = {
  name: 'afk',
  aliases: ['gtg'],
  clientPermissions: ['EMBED_LINKS'],
  group: 'utility',
  description: 'shows avatar of the provided user, or yourself',
  cooldown: {
    time: 1000,
    message: 'you are going too fast! please slow down to avoid getting ratelimited.',
  },
  parameters: ['User Mention / ID'],
  get examples() { [this.name, ...this.aliases].map(x => x + ' @user') },
  run: async (client, message, args) => {
        if (message.member.roles.cache.some(r => ["Team", "Support", "Moderator"].includes(r.name))) {

    const status = new db.table("AFKs");
    let afkFetch = await status.fetch(message.author.id);
    const embed = new MessageEmbed().setColor('#36393f')
    db.set(`${message.author.id}-afkSet`, Date.now());
 
    if (!afkFetch) {

        //embed.setTitle(`**${message.author.tag}** now afk.`)
        embed.setDescription(`<:check:809847958878552164> ${message.author}, You are now **AFK.**\n<:statics:822174129116676096> Members, upon pinging you will be notified of it!\n<:docs:818565890021785600> **Reason:** ${args.join(" ").replace(/`/g, "") ? args.join(" ").replace(/`/g, "") : "<:fail:809847979368120470> **[Not stated]**"}`)
        embed.setColor('#36393f')
        //  embed.setThumbnail(`https://media.discordapp.net/attachments/739760105431760978/792293033189179392/ezgif.com-gif-maker_2.gif`)
        status.set(message.author.id, args.join(" ") || "<:fail:809847979368120470> **[Not stated]**");
    } else {
        embed.setColor('#36393f')
        embed.setDescription(`How good to see you again so soon, Mr. ${message.member.displayName}`);
        status.delete(message.author.id);
    }

    message.channel.send(embed)
}else return;
  }
 }