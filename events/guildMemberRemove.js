/*
const { MessageEmbed } = require('discord.js');
const modifier = require(`${process.cwd()}/util/modifier`);

module.exports = async (client, member) => {

  const guildProfile = client.guildProfiles.get(member.guild.id);

  if (!guildProfile.greeter.leaving.isEnabled) {
    return;
  } else if (!guildProfile.greeter.leaving.channel) {
    return;
  } else if (!member.guild.channels.cache.get(guildProfile.greeter.leaving.channel)) {
    return;
  } else {
    // Do nothing..
  };

  const leaving = guildProfile.greeter.leaving;
  const type = leaving.type === 'msg' && !leaving.message ? 'default' : leaving.type;

  if (type === 'default') {
    return client.channels.cache.get(guildProfile.greeter.leaving.channel).send(
      new MessageEmbed()
        .setColor('#c3abe6')
        .setTitle(`${member.user.tag} has left our server!`)
        .setThumbnail(member.user.displayAvatarURL({ format: 'png', dynamic: true }))
        .setDescription(`Byebye ${member}!! Sad to see you go!\n\nWe are back to **${member.guild.memberCount - 1}** members!`)
      // .setFooter(`i`)
    );
  };

  if (type === 'msg') {
    const message = await modifier.modify(guildProfile.greeter.leaving.message, member)
    return client.channels.cache.get(guildProfile.greeter.leaving.channel).send(message);
  };

  return client.channels.cache.get(guildProfile.greeter.leaving.channel).send(
    new MessageEmbed(
      JSON.parse(
        await modifier.modify(JSON.stringify(guildProfile.greeter.leaving.embed), member)))
  );
};
*/

const { MessageEmbed } = require('discord.js');

module.exports = async (guildMemberRemove, member) => {// this event gets triggered when a new member leaves the server!
  // Firstly we need to define a channel
  // either using .get or .find, in this case im going to use .get()
  //const Channel = member.guild.channels.cache.get('844484521718186014') //insert channel id that you want to send to
  //making embed
  const embed = new MessageEmbed()
      .setColor('#fc7272')
      // .setTitle('A member left the server :(')
      .setDescription(`\`${member.user.tag}\` has left ${member.guild.name}\n**User id:** \`${member.user.id}\``)
      .setThumbnail(`${member.user.avatarURL({dynamic: true})}`)
    //  .setFooter(`User id: ${member.user.id}`)
  // sends a message to the channel
  const welcomeChannel = member.guild.channels.cache.find(channel => channel.id === '844484521718186014');
  if(welcomeChannel) {
      welcomeChannel.send(embed).catch(err => console.log(err));
  }
}