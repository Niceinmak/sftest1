const { MessageEmbed } = require("discord.js");
const discord = require("discord.js")
const client = new discord.Client()
const random = require("something-random-on-discord").Random
let ms = require('ms')
let db = require('quick.db');
exports.execute = async (client, message, args) => {
      const timeout = 10000;
  const cooldown = await db.fetch(`cooldown_Command-Name_${message.author.id}`);
      	if (cooldown !== null && timeout - (Date.now() - cooldown) > 0) {
		const time = ms(timeout - (Date.now() - cooldown));
		return message.reply(`**Wait ${time} to message again**`);
	}
  db.set(`cooldown_Command-Name_${message.author.id}`, Date.now());
if (!args.length) {
      return message.channel.send(`**Usage:\`${client.prefix}clap <msg> <msg>\`**`);
    }
    message.channel.send(args.join(" ").replace(/ /g, " 👏 "));
}

exports.help = {
    name: "clap",
    aliases: ["CLAP"],
    usage: `Add clap emoji between each word`
}
