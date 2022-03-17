const discord = require("discord.js")
const client = new discord.Client()
const random = require("something-random-on-discord").Random
let ms = require('ms')
let db = require('quick.db');
exports.execute = async (client, message, args) => {
  let userevent=args[0]
  const timeout = 10000;
  if(userevent!="pat" && userevent!="hug" && userevent!="waifu" && userevent!="cry" && userevent!="kiss" && userevent!="slap" && userevent!="smug" && userevent!="punch")
    {
      return message.reply(`**Usage: \`${client.prefix}randomanime <category(pat/hug/waifu/cry/kiss/slap/smug/punch)>\`**`);
    }
  const cooldown = await db.fetch(`cooldown_Command-Name_${message.author.id}`);
      	if (cooldown !== null && timeout - (Date.now() - cooldown) > 0) {
		const time = ms(timeout - (Date.now() - cooldown));
		return message.reply(`**Wait ${time} to message again**`);
	}
  db.set(`cooldown_Command-Name_${message.author.id}`, Date.now());
 let data = await random.getAnimeImgURL(userevent)
    message.channel.send(data)
}

exports.help = {
    name: "randomanime",
    aliases: ["RANDOMANIME"],
    usage: `randomanime`
}
