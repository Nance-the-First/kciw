const consoleUtil = require(`${process.cwd()}/util/console`);
const text = require(`${process.cwd()}/util/string`);

module.exports = async (client) => {
  consoleUtil.success(
    `${client.user.username} is now online! (loaded in ${client.bootTime} ms)\n\n`
  );

  /*======================================================
     Sends a notification to a log channel (if available)
     that the bot has rebooted
  ======================================================*/

  const bot = client.user.username;
  const icon = ":online~1:";
  const servers = text.commatize(client.guilds.cache.size);
  const members = text.commatize(
    client.guilds.cache.reduce((a, b) => a + b.memberCount, 0)
  );
  const commands = client.commands.size;
  const boot = client.bootTime;
  const message = "";
  const embed = {
    title: "reboot",
    color: "#c3abe6",
    description: [
      `**srvrs:** \`${servers}\``,
      `**users:** \`${members}\``,
      `**cmds:** \`${commands}\``,
      `**boot:** \`${boot}ms\``,
    ].join("\n"),
    thumbnail: {
      url:
        "https://images-ext-2.discordapp.net/external/wjlxrj0238j9LnIir08MzfNiMtb0mmwIm-FDcGzUuqA/%3Fwidth%3D1033%26height%3D1074/https/media.discordapp.net/attachments/784644858375438376/839853217369030666/original.gif?width=1032&height=1073",
    },
  };

  await client.channels.cache
    .get(client.config.channels?.logs)
    ?.createWebhook(bot, {
      avatar: client.user.displayAvatarURL({
        format: "png",
        dynamic: true,
        size: 128,
      }),
    })
    .then((webhook) =>
      Promise.all([webhook.send(message, { embeds: [embed] }), webhook])
    )
    .then(([_, webhook]) => webhook.delete())
    .catch(() => {});

  // add more functions on ready  event callback function...

  return;
};