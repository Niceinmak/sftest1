const { MessageEmbed } = require("discord.js");
const figlet = require("figlet");
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
    let text = args.join(" ");
   if (!text) {
      return message.channel.send(`\`Usage:${client.prefix}ascii <msg>\``);
    }
   let maxlen = 20;
    if (text.length > 20) {
      return message.channel.send(
        `Please put text that has 20 characters or less because the conversion won't be good!`
      );
    }
   figlet(text, function (err, data) {
      message.channel.send(data, {
        code: "AsciiArt",
      });
    });
  
}

exports.help = {
    name: "asciiart",
    aliases: ["ASCIIART"],
    usage: `asciiart`
}
