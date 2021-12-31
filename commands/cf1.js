
const { MessageEmbed } = require("discord.js");
exports.execute = async (client, message, args) => {
    let amount = Math.floor(Math.random() * 25);
  let amount2 = Math.floor(Math.random() * 14);
        let namescards = [
        "Q",
        "J",
        "K",
    ];
   let acards= "A"
    let amount3 = args[0]
    let yazitura= ""
    let authordata = client.eco.fetchMoney(message.author.id) 
    let timecooldown = Math.floor(Math.random() * 200)+50;
    let playtime = await client.eco.beg(client.ecoAddUser, timecooldown,{cooldown: 5000});
    let data2= client.eco.removeMoney(message.author.id, parseInt(timecooldown));
    const user1 = message.mentions.users.first() || message.member.user
    if (playtime.onCooldown) return message.reply(`**Biraz yavaş ol,${playtime.time.seconds} saniye daha bekle.**`);
  //--------------------------------------------
    if (!amount3 || isNaN(amount3)) return message.channel.send(`** ⛔${message.author.tag} | ** Lütfen Sayı Giriniz`);
  else{
    if(amount3>authordata.amount || amount3<1)  return message.channel.send(`** ⛔${message.author.tag} | ** Girdiğiniz miktar paranızdan fazla veya 1'den az olamaz`);
    else
    {
      
             const embed = new MessageEmbed()
             .setAuthor(`${user1.username}, ${amount3} ile blackjack oynadı`, user1.displayAvatarURL())
             if(amount<10)
               {
                 embed.addField(`**Kasa [${amount}+?]**        ${user1.username} [20]`,`** Kasa ${amount} **       ${user1.username} 5`)
               };
            if(amount==11)
               {
                 embed.addField(`**Kasa [${acards}+?]**        ${user1.username} [20]`,`** Kasa **${acards} **       ${user1.username} 5`)
               };
     if(amount>11)
               {
                 amount=10
                 embed.addField(`**Kasa [${amount}+?]**        ${user1.username} [20]`,`** Kasa ${namescards[Math.floor(Math.random() * namescards.length)]}       ${user1.username} 5`)
               };
    
            embed.setFooter(`Oyun devam ediyor`)
            .setColor("#7289DA")
            .setTimestamp();
              return message.channel.send(embed).then(async msg => {
          msg.react("👊")
        //  msg.react("")  
          msg.react("🛑");

const filter = (reaction, user) => {
	return reaction.emoji.name === '👊' && user.id === message.author.id;
};
const collector = msg.createReactionCollector(filter, {max:1, time: 15000});

collector.on("collect", (reaction, user) => {
  console.log("collected");
    embed.setAuthor(`the test`)
          return msg.edit(embed);
//write
})

collector.on("end", (reaction, user) => {
console.log("not collected");
//write
})
                
   const filter2 = (reaction, user) => {
	return reaction.emoji.name === '🛑' && user.id === message.author.id;
};
const collector2 = msg.createReactionCollector(filter2, {max:1, time: 15000});

collector2.on("collect", (reaction, user) => {
  console.log("collected");
    embed.setAuthor(`the testa`)
          return msg.edit(embed);
//write
})

collector.on("end", (reaction, user) => {
console.log("not collected");
//write
})
        } );
      

      
      
      
      
        message.channel.send(embed).then(async msg => {
         // msg.react("👊")
          //msg.react("🛑")  

          embed.setAuthor(`as`)
          return msg.edit(embed);
        } );
    }
    }  };

exports.help = {
    name: "cf1",
    aliases: ["coinflip","yazıtura"],
    usage: "cf1 <yazı,tura> <miktar>"
}
