const { REST }= require("@discordjs/rest");
const fs = require("fs");
const {Routes}=require("discord-api-types/v9");
const Discord = require("discord.js");
const { Client, Intents,Collection } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const btcValue = require('btc-value');
const DBL = require('dblapi.js');
const Eco = require("quick.eco");
const { Handler } = require('discord-slash-command-handler');
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
  },
  "<:ant:948264757000040460>" : {
    cost: 3
  },
  "<:bear:948264822926094426>" : {
    cost: 3
  },
  "<:bird:948264810980732988>" : {
    cost: 3
  },
  "<:bison:948264912818429962>" : {
    cost: 3
  },
  "<:cat1:948265025850724372>" : {
    cost: 3
  },
  "<:deer:948264928387674213>" : {
    cost: 3
  },
  "<:dodo:948264775639519232>" : {
    cost: 3
  },
  "<:fox:948265002492624976>" : {
    cost: 3
  },
  "<:goat:948264872850886687>" : {
    cost: 3
  },
  "<:god:948265037313757184>" : {
    cost: 3
  },
  "<:gorilla:948265050538377226>" : {
    cost: 3
  },
  "<:horse:948264952198746112>" : {
    cost: 3
  },
  "<:koala:948264836322721862>" : {
    cost: 3
  },
  "<:leopard:948264964597121146>" : {
    cost: 3
  },
  "<:llama:948264865552818196>" : {
    cost: 3
  },
  "<:monkey:948265059686174871>" : {
    cost: 3
  },
  "<:mouse:948264854551162910>" : {
    cost: 3
  },
  "<:ox:948264893629480981>" : {
    cost: 3
  },
  "<:penguin:948264801698717728>" : {
    cost: 3
  },
  "<:pig:948264880417439804>" : {
    cost: 3
  },
  "<:rabbit:948264845520801882>" : {
    cost: 3
  },
  "<:tiger:948264974856388639>" : {
    cost: 3
  },
  "<:trex1:948264765866786907>" : {
    cost: 3
  },
};

const commandFiles=fs.readdirSync("./fes/").filter(file => file.endsWith(".js"));
const commands=[];
client.commands=new Collection();
for(const file of commandFiles)
  {
    const command=require(`./fes/${file}`)
    commands.push(command.data.toJSON());
    client.commands.set(command.data.name, command);
  }
client.once("ready",() => {
  const CLIENT_ID=client.user.id;
  const rest= new REST({
    version: "9"
  }).setToken(process.env.TOKEN);
  (async () =>{
    try {
      if(process.env.ENV==="production"){
        await rest.put(Routes.applicationCommands(CLIENT_ID),{
          body: commands
        })
        console.log("Succesfuly registered")
      } else {
        await rest.put(Routes.applicationGuildCommands(CLIENT_ID, process.env.GUILD_ID),{
          body: commands
        })
        console.log("registered")
      }
    } catch(err){
      if (err) console.error(err);
    }
    
  })
  
})


const dbl = new DBL(process.env.TOPGG_TOKEN, { webhookPort: 3000, webhookAuth: process.env.TOPGG_AUTH });
dbl.webhook.on('ready', hook => {
  
  console.log(`Webhook running at http://${hook.hostname}:${hook.port}${hook.path}`);
});
dbl.webhook.on('vote', vote => {
  const channel = client.channels.cache.get(process.env.POST_CHANNEL)
  const embed = new Discord.MessageEmbed()
  .setTitle("__Thanks for votting me:-__")
  .setDescription(`༺═──────────────────────═༻\n⭐ **Voted By:-**\n<@${vote.user}>\n\n🔗 **Vote Link:-**\n${process.env.VOTE_LINK}\n\n💖 **You can vote again in 12hour!** 💖\n༺═──────────────────────═༻`)
  .setImage(process.env.IMAGE_LINK)
  .setFooter("❤Your vote means a lot!❤")
  .setColor("GREEN")
  channel.send(embed)
});

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
