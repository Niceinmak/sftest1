const { MessageEmbed } = require("discord.js");
exports.execute = async (client, message, args) => {
    let users = [
        "Pocket",
        "T-Shirt",
        "Zero's Databse",
        "Street"
    ];
    let amount2 = Math.floor(Math.random() * 200)/100;
    let amount3 = args[0]
    let amount5="0"
    let amount = Math.floor(Math.random() * amount3);
    let azcok=""
    let amountfinish= 0
    let authordata = client.eco.fetchMoney(message.author.id) 
    let timecooldown = Math.floor(Math.random() * 200)+50;
        let playtime = await client.eco.beg(client.ecoAddUser, timecooldown,{ canLose: true, cooldown: 5000, customName: "search" });
  let data2= client.eco.removeMoney(message.author.id, parseInt(timecooldown));
    if (playtime.onCooldown) return message.reply(`**Biraz yavaş ol,${playtime.time.seconds} saniye daha bekle.**`);
     if (!amount3 || isNaN(amount3)) return message.channel.send(`** ⛔${message.author.tag} | ** Lütfen Sayı Giriniz.`);
  else{
    if(amount3>authordata.amount || amount3<1) return message.channel.send(`** ⛔${message.author.tag} | ** Kendi bakiyenizden büyük ve 1'den küçük sayı giremessiniz.`);
     if(amount3<authordata.amount) return message.channel.send(`** ⛔${message.author.tag} | ** Bu komut bakımda`); //bj'yi buga sokar
    if([Math.floor(amount2)]==0) 
    {
      azcok="En Az Atan"
      amount5="0"
    }
    else
      {
      azcok="En Çok Atan"
        amount5="1"
      }
        const embed = new MessageEmbed()
  .setTitle(`**${message.author.tag} | ${amount3} İle Blackjack Oynadı!**`)
  .setColor("GRAY")
  .setFooter(`${azcok} 𝙆𝙖𝙯𝙖𝙣ı𝙧`)
  .setDescription(`**🃏${message.author.tag}= *${amount3}*💶  \n 🃏Rakip= *Bekleniyor*💶 **`)
  if(amount5==0){
  return message.channel.send(embed).then(async msg => {
      setTimeout(() => {
         embed.setDescription(`**🃏${message.author.tag}= *${amount3}*💶  \n 🃏Rakip= ${amount}💶 **`)
        return msg.edit(embed)
        }, 1000);
    setTimeout(() => {
      let amount4 = Math.floor(Math.random() * amount3);
      let amountfinish= Math.floor(amount+amount4)
         embed.setDescription(`**🃏${message.author.tag}= *${amount3}*💶  \n 🃏Rakip= ${amountfinish}💶 **`)
        if(amountfinish==amount3) {
                  embed.setColor("YELLOW")
            embed.setFooter(`${azcok} 𝙆𝙖𝙯𝙖𝙣ı𝙧, Rakip Kazandı :(`)
          }
          else if(amountfinish<amount3)
        {
          embed.setColor("RED")
          let data2= client.eco.removeMoney(message.author.id, parseInt(amount3));
          embed.setFooter(`${azcok} 𝙆𝙖𝙯𝙖𝙣ı𝙧, Rakip Kazandı :(`)
        }
      else
        {
          embed.setColor("GREEN")
          let data2= client.eco.addMoney(message.author.id, parseInt(amount3));
          embed.setFooter(`${azcok} 𝙆𝙖𝙯𝙖𝙣ı𝙧, Tebrikler ,Kazandın!`)
        }
    
        return msg.edit(embed)
        }, 2000);
          });
  }
  if(amount5==1){
  return message.channel.send(embed).then(async msg => {
      setTimeout(() => {
         embed.setDescription(`**🃏${message.author.tag}= *${amount3}*💶  \n 🃏Rakip= ${amount}💶 **`)
        return msg.edit(embed)
        }, 1000);
    setTimeout(() => {
      let amount4 = Math.floor(Math.random() * amount3);
      let amountfinish= Math.floor(amount+amount4)
         embed.setDescription(`**🃏${message.author.tag}= *${amount3}*💶  \n 🃏Rakip= ${amountfinish}💶 **`)
        if(amountfinish==amount3) {
                  embed.setColor("YELLOW")
            embed.setFooter(`${azcok} 𝙆𝙖𝙯𝙖𝙣ı𝙧, Rakip Kazandı :(`)
          }
          else if(amountfinish>amount3)
        {
          embed.setColor("RED")
          let data2= client.eco.removeMoney(message.author.id, parseInt(amount3));
          embed.setFooter(`${azcok} 𝙆𝙖𝙯𝙖𝙣ı𝙧, Rakip Kazandı :(`)
        }
      else
        {
          embed.setColor("GREEN")
          let data2= client.eco.addMoney(message.author.id, parseInt(amount3));
          embed.setFooter(`${azcok} 𝙆𝙖𝙯𝙖𝙣ı𝙧, Tebrikler ,Kazandın!`)
        }
    
        return msg.edit(embed)
        }, 2000);
          });
  }
  }
};

exports.help = {
    name: "bj",
    aliases: [],
    usage: "bj <amount>"
}
