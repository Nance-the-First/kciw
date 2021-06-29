const { MessageEmbed } = require('discord.js');
const { duration } = require('moment');
const text = require(`${process.cwd()}/util/string`);

module.exports = {
  name: 'ping',
  aliases: ['latency'],
  group: 'bot',
  description: 'Display various pings this bot is connected to.',
  clientPermissions: ['EMBED_LINKS'],
  parameters: [],
  get examples() { return [this.name, ...this.aliases] },
  run: async (client, message) => {

    const prompt = await message.channel.send('Pinging...');

    const roundtrip = Math.abs(prompt.createdTimestamp - message.createdTimestamp).toFixed();
    const update = client.pings.lastUpdatedAt.getTime() + client.pings.timeout - Date.now();

    const embed = new MessageEmbed()
      .setColor('#c3abe6')
      .setTitle(`${client.user.username} status`)
      //  .setAuthor('ping info\n', client.user.displayAvatarURL())
     // .setDescription([
       // 'hover on the link to view more info.',
       // `\nre-evaluates in ${duration(update, 'milliseconds').format(' m [minutes and] s [seconds]')}.`
     //  ].join(' '))
      .addFields(client.pings.handlers.slice(0, 20).map((handler, index) => {
        return {
          name: '\u200b',
          value: [
            `╭═ [**${handler.registry}**](https://discord.com/ '`,
            `${text.truncate(handler.description || '', 200)}')\n${colors(client.pings[handler.name] || roundtrip)}\u2000\u2000\n`,
            `╰═══ ${stylize(client.pings[handler.name] || roundtrip)}`
          ].join('')
        }
      })
      ) // .addField('\u200b', `${response()}`)
    // .setFooter(``);

    return await prompt.edit('', embed).catch(() => null) || message.channel.send(embed);
  }
};

function response() {
  const responses = [
    'i-it\'s not like i wanted to say pong or anything...',
    'pong...',
    'woo! a secret command!',
    'ping! ...i mean **pong!**',
    'does anyone even use this?',
    'at your service!',
    'testing, testing, 1, 2, 3!'
  ];
  return responses[Math.floor(Math.random() * responses.length)];
};

function colors(num) {
  num = parseInt(num);
  if (isNaN(num)) {
    return '<:empty:797660328014905404>'.repeat(5)
  };
  const emojis = [
    '<:lvl1:797660439793762305>',
    '<:lvl2:797660482654830604>',
    '<:lvl3:797660619280613406>',
    '<:lvl4:797660550967590922>',
    '<:lvl5:797660786327289866>'
  ];
  const limits = [1500, 1000, 500, 250];
  return emojis.map((_, i) => {
    if (i === 0) {
      return _;
    } else if (num < limits[i]) {
      return _;
    } else return '<:empty:797660328014905404>';
  }).join('')
};

function stylize(ping) {
  if (ping) {
    ping = ping + ' ms'
  } else {
    ping = 'unavailable'
  };
  return `\`${' '.repeat(11 - ping.length)}${ping}\``
};
