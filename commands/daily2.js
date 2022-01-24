const Discord = require("discord.js");
const client = new Discord.Client()
const DBL = require("dblapi.js");
const dbl = new DBL(process.env.TOPGG_TOKEN, + client);
let db = require('quick.db')
module.exports.execute = async (client, message, args) => {
  const timeout = 604800000;
  const cooldown = await db.fetch(`cooldown_Command-Name_${message.guild.id}_${message.author.id}`);
    let amount = Math.floor(Math.random() * 2000) + 100;
    let addMoney = client.eco.daily(message.author.id, amount,{cooldown: 5000});
    if (addMoney.onCooldown) 
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
    
    }
};

module.exports.help = {
    name: "daily2",
    aliases: [],
    usage: "daily2"
}
