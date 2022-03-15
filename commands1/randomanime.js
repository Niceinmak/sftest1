const discord = require("discord.js")
const randomanime = require('random-anime')
let ms = require('ms')
let db = require('quick.db');
exports.execute = async (client, message, args) => {
  let userevent=args[0]
  const timeout = 10000;
  const cooldown = await db.fetch(`cooldown_Command-Name_${message.author.id}`);
      	if (cooldown !== null && timeout - (Date.now() - cooldown) > 0) {
		const time = ms(timeout - (Date.now() - cooldown));
		return message.reply(`**Wait ${time} to message again**`);
	}
  db.set(`cooldown_Command-Name_${message.author.id}`, Date.now());
const anime = randomanime.anime();
    const embed = new discord.MessageEmbed().setImage(anime);
   message.channel.send({ embeds: [embed] });
}

exports.help = {
    name: "randomanime",
    aliases: ["RANDOMANIME"],
    usage: `randomanime`
}
