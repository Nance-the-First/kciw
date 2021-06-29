const { MessageEmbed } = require('discord.js');

function check(message, command) {
  const reasons = [];
  //const guildProfile = message.client.guildProfiles.get(message.guild?.id);

  if (command.guildOnly) {
    if (message.channel.type === 'dm') {
      reasons.push([
        '**command is unavailable on DM**',
        'this command can only be used inside servers.'
      ].join(' - '));
    } else {
      // Do nothing..
    };
  };

  if (message.channel.type !== 'dm') {
    if (command.ownerOnly) {
      if (!message.client.owners.includes(message.author.id)) {
        reasons.push([
          '**Limited to Devs**',
         // "this command can only be used by my developers. refrain from spamming /this command or you will be banned from using vile's commands."
        ].join(''));
      } else {
        // Do nothing..
      };
    };
    if (command.modOnly) {
      if (!message.member.roles.cache.some(r => ["Team","Moderator"].includes(r.name))){
        reasons.push([
          '**Limited to Mods**',
         // "this command can only be used by my developers. refrain from spamming /this command or you will be banned from using vile's commands."
        ].join(''));
      } else {
        // Do nothing..
      };
    };
    if (command.supportOnly) {
      if (!message.member.roles.cache.some(r => ["Team","Moderator","Support","Trial Support"].includes(r.name))){
      return;
      } else {
        // Do nothing..
      };
    };
    if (Array.isArray(command.permissions)) {
      if (!message.channel.permissionsFor(message.member).has(command.permissions)) {
        reasons.push([
          '**No Necessary Permissions (User)** - ',
          'you need the following permission(s):\n\u2000\u2000- ',
          Object.entries(message.channel.permissionsFor(message.member).serialize())
            .filter(p => command.permissions.includes(p[0]) && !p[1])
            .flatMap(c => c[0].split('_').map(x => x.charAt(0) + x.toLowerCase().slice(1)).join(' '))
            .join('\n\u2000\u2000- ')
        ].join(''))
      } else {
        // Do nothing..
      };
    };
    if (Array.isArray(command.clientPermissions)) {
      if (!message.channel.permissionsFor(message.guild.me).has(command.clientPermissions)) {
        reasons.push([
          '**No Necessary permissions (vile)** - ',
          'i need the following permission(s):\n\u2000\u2000- ',
          Object.entries(message.channel.permissionsFor(message.guild.me).serialize())
            .filter(p => command.clientPermissions.includes(p[0]) && !p[1])
            .flatMap(c => c[0].split('_').map(x => x.charAt(0) + x.toLowerCase().slice(1)).join(' '))
            .join('\n\u2000\u2000- ')
        ].join(''))
      } else {
        // Do nothing..
      };
    };
  };

  if (command.requiresDatabase) {
    if (!message.client.database?.connected) {
      reasons.push([
        '**cannot connect to database**',
        'this command requires a database connection.'
      ].join(' - '))
    };
  };

  const embed = new MessageEmbed()
    //.setAuthor('command execution blocked!')
    .setColor('#ff1a2a')
    .setDescription(`${reasons.map(reason => '' + reason).join('\n')}`);

  return { accept: !reasons.length, embed };
};

module.exports = { check };
