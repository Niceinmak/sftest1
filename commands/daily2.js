const Discord = require("discord.js");
const client = new Discord.Client()
let db = require('quick.db');
const DBL = require("dblapi.js");
let ms = require('ms')
const dbl = new DBL(process.env.TOPGG_TOKEN, + client);
module.exports.execute = async (client, message, args) => {
  let user = message.mentions.users.first() || message.author;
    
  const timeout = 86400000;
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
       return message.reply(`**Please rate the bot at \`https://top.gg/bot/924311092468015116/vote\`**`);
    }
      
		
})
};
     /*  if (addMoney.onCooldown) 
      {
      return message.reply(`Bugünkü paranı topladın.Lütfen ${addMoney.time.hours} saat, ${addMoney.time.minutes} dakika & ${addMoney.time.seconds} saniye sonra tekrar gel.`);
      }
  else 
    {
      dbl.hasVoted(message.author.id).then(voted => {
    if (voted){
      return message.reply(`Bu gün **${addMoney.amount}** 💸topladın.Toplam paran **${addMoney.after}** 💸oldu!`);
    }
    else if (!voted){
       return message.reply(`oyla knk`);
    }
})
    
    } */

module.exports.help = {
    name: "vote",
    aliases: ["VOTE"],
    usage: "vote"
}