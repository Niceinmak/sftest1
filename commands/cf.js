exports.execute = async (client, message, args) => {
    let amount = Math.floor(Math.random() * 200)+50;
    let amount2 = Math.floor(Math.random() * 2);
    let amount4 = Math.floor(Math.random() * 200)/100;
    let amount3 = args[0]
    let amount5 = args[1]
    let yazitura= ""
    let authordata = client.eco.fetchMoney(message.author.id) 
        let timecooldown = Math.floor(Math.random() * 200)+50;
        let playtime = await client.eco.beg(client.ecoAddUser, timecooldown,{cooldown: 5000});
  let data2= client.eco.removeMoney(message.author.id, parseInt(timecooldown));
    if (playtime.onCooldown) return message.reply(`**Biraz yavaş ol,${playtime.time.seconds} saniye daha bekle.**`);
        if (amount3=="yazı" || amount3=="tura")
 {
    if (!amount5 || isNaN(amount)) return message.channel.send(`** ⛔${message.author.tag} | ** Lütfen Sayı Giriniz`);
    if(amount5>authordata.amount || amount5<1)  return message.channel.send(`** ⛔${message.author.tag} | ** Girdiğiniz miktar paranızdan fazla veya 1'den az olamaz`);
    else
    {
    if (!amount5 || isNaN(amount5)) return message.channel.send(`** ⛔${message.author.tag} | ** Lütfen Sayı Giriniz`);
                message.channel.send(`**${message.author.tag} | ** **${amount5}**💶 oynadı ve **${amount3}** seçti! \n Para döndürülüyor.🪙`).then(async msg => {
        setTimeout(() => {
          msg.edit(`**${message.author.tag} | ** **${amount5}**💶 oynadı ve **${amount3}** seçti! \n Para döndürülüyor..🪙`);
        }, 1000);
                setTimeout(() => {
          msg.edit(`**${message.author.tag} | ** **${amount5}**💶 oynadı ve **${amount3}** seçti! \n Para döndürülüyor...🪙`);
        }, 2000);
                          setTimeout(() => {
           if([Math.floor(amount2)]==0)
        {
            let data = client.eco.addMoney(message.author.id, parseInt(amount5));
      msg.edit(`**${message.author.tag} | ** **${amount5}**💶 oynadı ve **${amount3}** seçti! \n Para döndürülüyor...🪙 ve **${(amount5*2)}**💶 Kazandın!`);
        }
    else {
      let data2= client.eco.removeMoney(message.author.id, parseInt(amount5));
     msg.edit(`**${message.author.tag} | ** **${amount5}**💶 oynadı ve **${amount3}** seçti! \n Para döndürülüyor...🪙 ve maalesef **kaybettin :c**`);
    }
        }, 3000);
        })
     
    }}
  else{
  //--------------------------------------------
    if (!amount3 || isNaN(amount3)) return message.channel.send(`** ⛔${message.author.tag} | ** Lütfen Sayı Giriniz`);
  else{
    if(amount3>authordata.amount || amount3<1)  return message.channel.send(`** ⛔${message.author.tag} | ** Girdiğiniz miktar paranızdan fazla veya 1'den az olamaz`);
    else
    {
       if([Math.floor(amount4)]==0) yazitura="Tura";
          else yazitura="Yazı";
                message.channel.send(`**${message.author.tag} | ** **${amount3}**💶 oynadı ve **${yazitura}** seçti! \n Para döndürülüyor.🪙`).then(async msg => {
        setTimeout(() => {
          msg.edit(`**${message.author.tag} | ** **${amount3}**💶 oynadı ve **${yazitura}** seçti! \n Para döndürülüyor..🪙`);
        }, 1000);
                setTimeout(() => {
          msg.edit(`**${message.author.tag} | ** **${amount3}**💶 oynadı ve **${yazitura}** seçti! \n Para döndürülüyor...🪙`);
        }, 2000);
                          setTimeout(() => {
           if([Math.floor(amount2)]==0)
        {
            let data = client.eco.addMoney(message.author.id, parseInt(amount3));
      msg.edit(`**${message.author.tag} | ** **${amount3}**💶 oynadı ve **${yazitura}** seçti! \n Para döndürülüyor...🪙 ve **${(amount3*2)}**💶 Kazandın!`);
        }
    else {
      let data2= client.eco.removeMoney(message.author.id, parseInt(amount3));
     msg.edit(`**${message.author.tag} | ** **${amount3}**💶 oynadı ve **${yazitura}** seçti! \n Para döndürülüyor...🪙 ve maalesef **kaybettin :c**`);
    }
        }, 3000);
        })
     
    }}
    
    }};

exports.help = {
    name: "cf",
    aliases: ["coinflip","yazıtura"],
    usage: "cf <yazı,tura> <miktar>"
}
