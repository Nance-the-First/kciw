
const settings = {

  client: {
    presence: {
      status: 'dnd',
      activity: {
        name: 'vhelp',
        type: 'PLAYING',
      }
    }
  },

  prefix: '.',

  channels: { debug: '840013926867271711', uploads: '840013926867271711', logs: '840013926867271711' },


  database: { 
    enable: false,
    connector: null,
    uri: process.env.MONGO_URI,
    config: {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      autoIndex: false,
      poolSize: 5,
      connectTimeoutMS: 10000,
      family: 4
    }
  },

  // Array of owners recognized by the bot. ID here will be given access to
  // owner based commands.
  owners: ['737913175697129582','505279473722327040'],


};

module.exports = settings;
