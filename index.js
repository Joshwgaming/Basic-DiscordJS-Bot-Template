const { Client, Intents } = require('discord.js');
const { botToken, prefix } = require('./config.json');
const client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,
    ]
});

client.login(botToken)

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}.`);
});

client.on('messageCreate', (message) => {

    if (message.content === "hi") {
        message.reply("hello")
    }

    if (message.content.startsWith(prefix)) {
        const args = message.content.slice(prefix.length).split(' ');
        let command = args[0];
        if (command === "ping") {
            message.reply("pong!")
        }
    }
})
