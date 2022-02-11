
const { MessageEmbed } = require("discord.js");
   let namescards = [
        "hf",
        "d",
        "s",
        "ds",
        "df",
        "h",
        "c",
    ];
 let dealerpoint=""
 let userpoint=""
let namescardslistu=""
let namescardslistd=""
exports.execute = async (client, message, args) => {
 dealerpoint=""
 userpoint=""
namescardslistu=""
namescardslistd=""
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
    const user1 = message.mentions.users.first() || message.member.user
    if (playtime.onCooldown) return message.reply(`**Biraz yavaş ol,${playtime.time.seconds} saniye daha bekle.**`);
  //--------------------------------------------
    if (!amount3 || isNaN(amount3)) return message.channel.send(`** ⛔${message.author.tag} | ** Lütfen Sayı Giriniz`);
  else{
    if(amount3>authordata.amount || amount3<1)  return message.channel.send(`** ⛔${message.author.tag} | ** Girdiğiniz miktar paranızdan fazla veya 1'den az olamaz`);
    else
    {
      let dealerd=`${drawCard("d")}`
      var argString = dealerd.substring(1).split(' ');
 // let argString = itemname.substr( itemname.indexOf(' ') + 1 );
  let agr1d=argString[0]
  let agr2d=argString[1]
  let dealeru=`${drawCard("u")}`
  var argString2 = dealeru.substring(1).split(' ');
 // let argString = itemname.substr( itemname.indexOf(' ') + 1 );
  let agr1u=argString2[0]
  let agr2u=argString2[1]
             const embed = new MessageEmbed()
             .setAuthor(`${user1.username}, ${amount3} ile blackjack oynadı`, user1.displayAvatarURL())
            .setFooter(`Oyun devam ediyor`)
            .setTitle(`${user1.username}`)
            .addFields(
    { name: `Dealer \`${agr1d}\``, value: agr2d, inline: true },
    { name: `${user1.username} \`${agr1u}\``, value: agr2u, inline: true },
	)
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
   let dealerd=`${drawCard("d")}`
      var argString = dealerd.substring(1).split(' ');
 // let argString = itemname.substr( itemname.indexOf(' ') + 1 );
  let agr1d=argString[0]
  let agr2d=argString[1]
  let dealeru=`${drawCard("u")}`
  var argString2 = dealeru.substring(1).split(' ');
 // let argString = itemname.substr( itemname.indexOf(' ') + 1 );
  let agr1u=argString2[0]
  let agr2u=argString2[1]
    embed.fields = [];
  embed.addFields(
    { name: `Dealer \`${agr1d}\``, value: agr2d, inline: true },
    { name: `${user1.username} \`${agr1u}\``, value: agr2u, inline: true },
	)
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
    name: "cf2",
    aliases: ["coinflip","yazıtura"],
    usage: "cf2 <yazı,tura> <reaction command>"
}

function drawCard(who) {
   let count = Math.floor(Math.random() * 10);
  if(who=="d")
    {
    namescardslistd+=`${count}${namescards[Math.floor(Math.random() * namescards.length)]},`
    dealerpoint=dealerpoint+count
      return [` [${dealerpoint}+?] \`${namescardslistd}\``];
    }
  if(who=="u")
    {
    namescardslistu+=`${count}${namescards[Math.floor(Math.random() * namescards.length)]},`
    userpoint+=count
      return [` [${userpoint}] \`${namescardslistu}\``];
    }
    
}