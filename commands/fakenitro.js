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
 var links = [
      `https://discord.gift/Hejs82hejdi9`,
      `https://discord.gift/ejf88rjcUw8i`,
      `https://discord.gift/aujtjc68Wisa`,
      `https://discord.gift/aueuhdjx8eo9`,
      `https://discord.gift/aytjx1juy8Wf`,
    ];
   var images = [
      `https://cdn.discordapp.com/attachments/716917641209708647/748945266979242106/IMG_20200828_215650.jpg`,
      `https://cdn.discordapp.com/attachments/716917641209708647/748945228907413675/IMG_20200828_220208.jpg`,
    ];
    const embed = new MessageEmbed()
     .setTitle("Here is your Nitro")
      .setDescription(links[Math.floor(Math.random() * links.length)])
      .setImage(images[Math.floor(Math.random() * images.length)])
      .setColor("RANDOM");
  message.channel.send(embed);
  
}

exports.help = {
    name: "fakenitro",
    aliases: ["FAKENITRO"],
    usage: `fakenitro`
}
