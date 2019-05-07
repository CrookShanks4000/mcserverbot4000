# mcserverbot4000
A minecraft server status discord bot for use with heroku, based on vegeta897's mc-server.js.
You must have created a discord app with a bot connected to your server and a heroku app.
1. Link the repo to a heroku app.
2. Go to the Resources tab.
3. Uncheck "web" and check "worker" under dynos.
4. Go to the Settings tab and set the config variables BOT_TOKEN, IP, MC_PORT, and COMMAND.
COMMAND is the command used to trigger the bot, IP is the server IP, 
MC_PORT is the server port, and BOT_TOKEN is the bot's account token.
5. Deploy the app.
