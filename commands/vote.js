const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { MessageButton } = require('discord-buttons')
const client = new Discord.Client()
let db = require('quick.db');
const DBL = require("dblapi.js");
let ms = require('ms')
const dbl = new DBL(process.env.TOPGG_TOKEN, + client);
module.exports.execute = async (client, message, args) => {
  let user = message.mentions.users.first() || message.author;
    
  const timeout = 43200000;
  const cooldown = await db.fetch(`cooldown_Command-Name_${message.author.id}`);
    let amount = Math.floor(Math.random() * 5000) + 300;
    let amountformat=String(amount).replace(/(.)(?=(\d{3})+$)/g,'$1,')
      dbl.hasVoted(message.author.id).then(voted => {
    if (voted){
        	if (cooldown !== null && timeout - (Date.now() - cooldown) > 0) {
		const time = ms(timeout - (Date.now() - cooldown));
		return message.reply(`**Wait ${time} to vote again**`);
	}
     client.eco.addMoney(message.author.id, parseInt(amount));
      let userBalance = client.eco.fetchMoney(user.id);
    let userBalanceformat=String(userBalance.amount).replace(/(.)(?=(\d{3})+$)/g,'$1,')
       message.reply(`**You have won ${amountformat}💶 by voting!**`);
      db.set(`cooldown_Command-Name_${message.author.id}`, Date.now());
    }
    else if (!voted){
         const embed = new MessageEmbed()
        .setTitle("EcoVerse Vote")
     //   .setURL("https://www.youtube.com/channel/UCF9E-xef9jL9QgziZRDHKKQ")
        .setDescription(`
       ** ☑| Your daily vote is available!
         :diamond_shape_with_a_dot_inside: | You can vote every 12 hours!
        Please rate the bot at \`https://top.gg/bot/924311092468015116/vote\`**`)
        .setColor("BLURPLE")
        .setTimestamp()
        .setThumbnail(client.user.displayAvatarURL)
        .setFooter(message.author.tag, message.author.displayAvatarURL);
        let buttonurl = new MessageButton()
  .setStyle('url')
    .setURL("https://top.gg/bot/924311092468015116/vote")
  .setLabel('Vote') 
  .setDisabled(false);
       return message.channel.send({ buttons: [buttonurl], embed: embed});
    }
      
		
})
};

module.exports.help = {
    name: "vote",
    aliases: ["VOTE"],
    usage: "vote"
}