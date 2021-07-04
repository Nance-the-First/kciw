const { MessageEmbed } = require("discord.js");
const config = require(`${process.cwd()}/config.js`);
module.exports = {
  name: "suggest", // The name of the command
  description: "Suggest something for Wick!", // The description of the command (for help text)
  // aliases: ['ab'],
  args: false, // Specified that this command doesn't need any data other than the command
  usage: "", // Help text to explain how to use the command (if it had any arguments)
  // aliases: 's',

  execute: async function (message, args, Discord) {
    const member = message.member;
    const mrole = message.guild.roles.cache.find((r) =>
      r.name.toLowerCase().startsWith("mute")
    );
    if (!config.suggestions.on) {
      return;
    }
    if (member.roles && member.roles.cache && mrole) {
      if (member.roles.cache.has(mrole.id)) {
        return message.channel.send({
          embed: {
            description:
              "<:fail:809847979368120470> You seem to be muted! Muted members **cannot** submit suggestions!",
          },
        });
      }
    }
    const suggestionQuery = args.join(" ");
    if (!suggestionQuery)
      return message.channel.send({
        embed: {
          description: "<:fail:809847979368120470> Please suggest something",
        },
      });

    const embed = new MessageEmbed()
      .setTitle(`A new suggestion by ${message.author.tag}`)
      .setDescription(`<:blank:809168046052474881> ${suggestionQuery}`)
      .setTimestamp(Date.now())
      .setThumbnail(member.user.displayAvatarURL({ dynamic: false, size: 64 }))
      .addField(
        "<:rightSort:809165006477459507> Status:",
        "<:blank:809168046052474881> <:purge:812024610363146270> This suggestion is still waiting for an official answer!"
      );

    message.channel.send({
      embed: {
        color: "#36393f",
        description: "<:check:809847958878552164> Suggestion submitted",
      },
    });
    message.guild.channels.cache
      .get(config.suggestions.channel)
      .send(embed)
      .then((m) => {
        m.react("809847958878552164");
        m.react("809847979368120470");
      });
  },
};
