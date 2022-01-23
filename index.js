const Discord = require("discord.js");
const client = new Discord.Client({ disableMentions: 'everyone' });
const dbots = require("discord.dbl");
const dbl = new dbots("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjkyNDMxMTA5MjQ2ODAxNTExNiIsImJvdCI6dHJ1ZSwiaWF0IjoxNjQyOTYzMTY0fQ.ulBEV8WgG5MnBenmEJfuI4lcz0MiUYE6cS4npI7HiJk", client, { autoPost: 900001, auth: "AuthKey" }); //Time in milliseconds, must be greater than 15 minutes!
const disbut = require('discord-buttons');
disbut(client);
const Eco = require("quick.eco");
client.eco = new Eco.Manager(); // quick.eco
client.db = Eco.db; // quick.db
client.config = require("./botConfig");
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
client.shop = {
  "common.case" : {
    cost: 100
  },
  "rare.case" : {
    cost: 1000
  },
  "epic.case" : {
    cost: 10000
  }
};
const fs = require("fs");
client.on('ready', async () => {
  dbl.Webhook("https://sftest.glitch.me/vote") //No need to put any thing in this brackets!
})
dbl.on("voted", voter => {
  console.log(`A user with ID: ${voter.id} (${voter.username} has voted me!`)
})
fs.readdir("./events/", (err, files) => {
    if (err) return console.error(err);
    files.forEach(f => {
        if (!f.endsWith(".js")) return;
        const event = require(`./events/${f}`);
        let eventName = f.split(".")[0];
        client.on(eventName, event.bind(null, client));
    });
});

fs.readdir("./commands/", (err, files) => {
    if (err) return console.error(err);
    files.forEach(f => {
        if (!f.endsWith(".js")) return;
        let command = require(`./commands/${f}`);
        client.commands.set(command.help.name, command);
        command.help.aliases.forEach(alias => {
            client.aliases.set(alias, command.help.name);
        });
    });
});


client.login(client.config.token);
