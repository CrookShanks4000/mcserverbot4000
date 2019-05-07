const Discord = require('discord.js');
const client = new Discord.Client();
client.login(process.env.BOT_TOKEN);

var request = require('request');
var mcCommand = process.env.COMMAND; // Command for triggering
var mcIP = process.env.IP; // Your MC server IP
var mcPort = process.env.MC_PORT; // Your MC server port (25565 is the default)

client.on('message', message => {
    if (message.content === mcCommand) {
        var url = 'http://mcapi.us/server/status?ip=' + mcIP + '&port=' + mcPort;
        console.log(url);
        request(url, function(err, response, body) {
            if(err) {
                console.log(err);
                return message.reply('Error getting Minecraft server status...');
            }
            body = JSON.parse(body);
            var status = 'Server is currently offline';
            if(body.online) {
                status = '**' + body.motd + '** server is **online** on ' + mcIP + ':' + mcPort + '  -  ';
                if(body.players.now === '1') {
                    status += '**1** person is playing!';
                } else if(body.players.now) {
                    status += '**' + body.players.now + '** people are playing!';
                } else {
                    status += '*Nobody is playing!*';
                }
            }
            message.reply(status);
        });
    }
});
