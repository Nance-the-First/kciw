// load env file (contains important keys)
require('dotenv').config();

const Client = require(`${process.cwd()}/struct/Client`);
const config = require(`${process.cwd()}/config`);
const db = require("quick.db");

const fs = require('fs');
const { MessageEmbed } = require("discord.js")
const moment = require("moment");

const client = new Client(config);


const options = {
  bypass: true,
  log: true,
  paths: [
    'bot',
    'core', 'owner','utility','whitelist','statics','heat','misc'
  ]
};

client.database?.init();

client.loadCommands({ parent: 'commands', ...options });

client.loadEvents({ parent: 'events', ...options });

// client.defineCollections(['discovery', 'economy', 'memes', 'xp']);

// let client listen to process events, setting ignore to true will
// ignore errors and not execute the functions from util/processEvents.js.
// Available process events on https://nodejs.org/api/process.html#process_process_events
client.listentoProcessEvents([
  'unhandledRejection',
  'uncaughtException'
], { ignore: false });

client.login();