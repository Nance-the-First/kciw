
// const experience = require(`${process.cwd()}/util/xp`);
const db = require("quick.db");
const { MessageEmbed } = require("discord.js")
const emojis = require(`${process.cwd()}/emojis`)

module.exports = async (client, message) => {

  //*=================WELCOME TO THE  MESSAGE EVENT===============*/
  // This function everytime the bot receives a message payload from discord
  //*=============================================================*/
  if (
    db.get(`${message.author.id}_analfucked`) == true &&
    !db.has(`momr.${message.author.id}`)
  )
    return;


  // Ignore messages from botusers
  if (message.author.bot) {
    return;
  };


  const { executed, reason } = client.commands.handle(message);

  const execute = Boolean(!['PERMISSION', 'TERMINATED', 'COOLDOWN'].includes(reason));

  let afk = new db.table("AFKs"),
  authorStatus = await afk.fetch(message.author.id),
  mentioned = message.mentions.members.first();

if (authorStatus) {
  const embed = new MessageEmbed()
    .setColor(`#36393f`)
   .setAuthor(`${message.author.username} is no longer afk`,`${message.author.avatarURL({dynamic: true})}`)
  message.channel.send(embed).then(msg => {
    msg.delete({ timeout: 3000 })
  });
  afk.delete(message.author.id);
}

if (mentioned) {
  let reason = await afk.fetch(mentioned.id);

  if (reason) {
    const embed = new MessageEmbed()
      .setColor("#36393f")
      .setAuthor(`${mentioned.user.username} is afk`,`${mentioned.user.avatarURL({dynamic: true})}`)
      .setDescription(`${emojis.docs} ${reason}`);
    message.channel.send(embed).then(msg => {
      msg.delete({ timeout: 3000 })
    });
  }

}

  return;
};
