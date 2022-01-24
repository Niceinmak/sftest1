const Discord = require("discord.js");
const client = new Discord.Client()
let db = require('quick.db');
const DBL = require("dblapi.js");
let ms = require('ms')
const dbl = new DBL(process.env.TOPGG_TOKEN, + client);
module.exports.execute = async (client, message, args) => {
  let user = message.mentions.users.first() || message.author;
    
  const timeout = 5000;
  const cooldown = await db.fetch(`cooldown_Command-Name_${message.author.id}`);
    let amount = Math.floor(Math.random() * 2000) + 100;
    let amountformat=String(amount).replace(/(.)(?=(\d{3})+$)/g,'$1,')
  	if (cooldown !== null && timeout - (Date.now() - cooldown) > 0) {
		const time = ms(timeout - (Date.now() - cooldown));
		message.channel.send(`1 gün bekle`);
	} else {
      dbl.hasVoted(message.author.id).then(voted => {
    if (voted){
     client.eco.addMoney(message.author.id, parseInt(amount));
      let userBalance = client.eco.fetchMoney(user.id);
    let userBalanceformat=String(userBalance.amount).replace(/(.)(?=(\d{3})+$)/g,'$1,')
       message.reply(`Bu gün **${amountformat}** 💸topladın  ${userBalanceformat}`);
      db.set(`cooldown_Command-Name_${message.author.id}`, Date.now());
    }
    else if (!voted){
       return message.reply(`oyla knk`);
    }
      
		
})
  }
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
    name: "daily2",
    aliases: [],
    usage: "daily2"
}