const Discord = require("discord.js");
const client = new Discord.Client({ disableMentions: 'everyone' });
const dbots = require("discord.dbl");
const dbl = new dbots("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjkyNDMxMTA5MjQ2ODAxNTExNiIsImJvdCI6dHJ1ZSwiaWF0IjoxNjQyOTYwNzk5fQ.BfR0ku4nkuShZ18qcQrGHhJPiKfmIKKLCeMkKKy4yZI", client, { autoPost: 900001 }); //Time in milliseconds, must be greater than 15 minutes!
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
client.on("ready", async () => {
  dbl.postStats(); //=> Note: You can only use this package for discord.js use
  
  // Must have a package named node-fetch and express
  // console.log("Server count posted")
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
