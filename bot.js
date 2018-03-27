//var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');
const Discord = require('discord.js');
//const client = new Discord.Client();

// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';

//Client ID: 428194115184754698
//Client Secret:nl3euNuv6mteajYna3jYkHqS-CjICKNV
//https://discordapp.com/api/oauth2/authorize?client_id=428194115184754698&permissions=268437554&scope=bot
// Initialize Discord Bot
var bot = new Discord.Client({
    autorun: true
});

bot.login(auth.token);
bot.on('ready', function (evt) {
    logger.info('Connected');
});

bot.on('message', function (message) {
    // Our bot needs to know if it needs to execute a command
    // for this script it will listen for messages that will start with `!`
    logger.log('info', 'message %s', message);
    messagetxt = message.content;
    if (messagetxt.substring(0, 1) == '!') {
        var args = messagetxt.substring(1).split(' ');
        var cmd = args[0];

        args = args.splice(1);

        switch(cmd) {
            // !ping
            case 'ping':
                message.channel.send('Pong!')
                //bot.sendMessage({ to: channelID, message: 'Pong!' });
            break;
            default:
                message.channel.send('Unknown!')
                //bot.sendMessage({ to: channelID, message: 'Unknown command.' });
        }
    }
})
