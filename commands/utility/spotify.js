const emojis = require(`${process.cwd()}/emojis`)
const { MessageEmbed } = require('discord.js');

module.exports = {
 name: "spotify",
 group: 'utility',
  //aliases:['s'],
 description: 'shows your spotify status',

 run: async (client, message, args) => {
    let user =
      message.mentions.members.first() ||
      message.guild.members.cache.get(args[0]) ||
      message.guild.members.cache.find(
        (r) =>
          r.user.username.toLowerCase() === args.join(" ").toLocaleLowerCase()
      ) ||
      message.guild.members.cache.find(
        (ro) =>
          ro.displayName.toLowerCase() === args.join(" ").toLocaleLowerCase()
      ) ||
      message.member;

    // if user is not listening to anything

    if (!user.presence.activities.length) {
      const newEmbed = new MessageEmbed()
        .setAuthor(
          user.user.username,
          user.user.displayAvatarURL({ dynamic: true })
        )
        .setColor("#36393f")
        //  .setThumbnail(user.user.displayAvatarURL({ dynamic: true }))
        .setDescription(`${emojis.fail} User is not listening to anything`); // add the emoji
      message.channel.send(newEmbed);
      return undefined;
    }

    // shows spotify status
    user.presence.activities.forEach((activity) => {
      if (
        activity.type === "LISTENING" &&
        activity.name === "Spotify" &&
        activity.assets !== null
      ) {
        let trackIMG = `https://i.scdn.co/image/${activity.assets.largeImage.slice(
          8
        )}`;
        let trackURL = `https://open.spotify.com/track/${activity.syncID}`;

        let trackName = activity.details;
        let trackAuthor = activity.state;
        let trackAlbum = activity.assets.largeText;

        trackAuthor = trackAuthor.replace(/;/g, ",");

        const embed = new MessageEmbed()
          .setAuthor(
            "Spotify track info",
            //  "https://cdn.discordapp.com/emojis/408668371039682560.png"
            "https://cdn.discordapp.com/emojis/408668371039682560.png?v=1"
          )
          .setColor("#36393f")
          .setThumbnail(trackIMG)
          .addField("Song name", `**[${trackName}](${trackURL})**`, true)
          .addField("Album", trackAlbum, true)
          .addField("Author", trackAuthor, false);
        message.channel.send(embed);
      }
    });
  },
};

// Note: it wont work if someone is appearing offline which is annoying