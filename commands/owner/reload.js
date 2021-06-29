module.exports = {
  name: 'reload',
  aliases: ['r'],
  ownerOnly: true,
  group: 'owner',
  hidden: true,
  description: 'reloads a command',
  parameters: ['command name/alias'],
  examples: ['reload anime'],
  run: (client, message, [command]) => {

    if (!command) {
      return message.channel.send({
        embed: {
          color: '#c3abe6',
          description: ('please enter a command name')
        }
      }); //('please enter a command name');
    };

    const { status, err, info } = client.commands.reload(command);

    if (status === 'FAILED') {
      return message.channel.send(err.stack, { code: 'xl' });
    };

    return message.channel.send({
      embed: {
        color: '#c3abe6',
        description: (`<:pass:845125367818616842> reloaded command **${command}**`)
      }
    }); //(`successfully reloaded command **${command}**`);
  }
};
