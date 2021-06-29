const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'discordstatus', // The name of the command
    clientPermissions: ['EMBED_LINKS'],
    aliases:['dstatus'],
    group: 'utility',
    description: 'checks discords api status',
    args: false, // Specified that this command doesn't need any data other than the command
    usage: '', // Help text to explain how to use the command (if it had any arguments)
   // aliases: 's',
   run: async (client, message, args) => {


const emojis = {
    "api":'<:webhook:824000910232518706>',
    "cloudflare":'<:joinraid:816722693230559304>',
    "media proxy":'<:verifi:822171507807223848>',
    "push notifications":'<:alarm:809533151277613077>',
    "search":'<:search:829483382894362714>',
    "voice":'<:allowed:829485021546807367>',
    "third-party":'<:sort:822168718380367882>',
    "europe":':flag_eu:',
    "japan":':flag_jp:',
    "south korea":':flag_kr:',
    "sydney":':flag_au:',
    "us central":':flag_us:',
    "us east":':flag_us:',
    "us west":':flag_us:',
    "us south":':flag_us:',
}

const nf = require('node-fetch');
const {components} =  await (await nf('https://srhpyqt94yxb.statuspage.io/api/v2/summary.json')).json()
 // const em = "<:rightSort:809165006477459507>"
const operational = "<:online:829440788856438784>"
const fucked = "<:dnd:829440898261319700>"
await message.channel.send(new MessageEmbed({
title: "Discord Status",
url:"https://discordstatus.com/",
color:'#36393f',
description: components.filter(c=> ["api", "cloudflare", "media proxy", "push notifications","third-party","voice","search"].includes(c.name.toLowerCase()))
.map(c=> emojis[c.name.toLowerCase()] + ` **${c.name.toUpperCase()}:** ${c.status == "operational" ? operational : fucked}`).join("\n"),
fields:[
    {name:'Discord VC Status of Countries', value:components.filter(c=> ["europe","japan","south korea","sydney","us central","us east","us south","us west"].includes(c.name.toLowerCase())).map(c=> emojis[c.name.toLowerCase()] + ` **${c.name.toUpperCase()}:** ${c.status == "operational" ? operational : fucked}`).join("\n")
}
],
}));


    },
}