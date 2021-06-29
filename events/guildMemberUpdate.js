const { MessageEmbed } = require('discord.js');
const modifier = require(`${process.cwd()}/util/modifier`);
const moment = require('moment');
const constants = require(`${process.cwd()}/util/constants.js`);

module.exports = async (client, oldMember, newMember, message) => {

    const channel = client.channels.cache.get('830967709822746685');

    if(oldMember.roles.cache.size !== newMember.roles.cache.size) {
        if(!oldMember.roles.cache.has('735031356123250720') && newMember.roles.cache.has('735031356123250720')) {
            channel.send({
                embed: {
                    color:'#c3abe6',
                    description:`<:membercount:831232564357496862> ${newMember} Ty for boosting <3\n<a:boost:822543186371149914> ice now has \`${oldMember.guild.premiumSubscriptionCount}\` boost\n<a:rightArrow:832156410930003979> dm a <@&822160229528895509> member for perks`
                }
            })
        }
    }
}