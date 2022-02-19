const { MessageEmbed } = require("discord.js");
const { MessageButton } = require('discord-buttons')
exports.execute = async (client, message, args) => {
  let userid=message.author.id
  let namescardslistd=""
     let namescards = [
        "hf",
        "d",
        "s",
        "ds",
        "df",
        "h",
        "c",
    ];
 var dealerpoint=""
 var dealerpointtemp=""
 var userpoint=""
let namescardslistu=""
 dealerpoint=0
 userpoint=0
  dealerpointtemp=0
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
      let buttonagree = new MessageButton()
  .setStyle('1')
  // .setStyle('red')
  // .setStyle('blue')
  .setLabel('I Agree!') 
  .setID('1') 
  .setDisabled(false);
               message.channel.send({ buttons: [buttonagree], embed: embed }).then(message => { // Send Embed And Buttons
               const filter = (button) => button.clicker.user.id === userid // To Check If User Who Clicked Button Is Same As Who Used Command
               console.log(userid)
                const collector = message.createButtonCollector(filter, { time: 300000 }) // 30 Seconds To Click
                collector.on('collect', async button => {
                             console.log("collected");
   let dealerd=`${drawCard("d")}`
      var argString = dealerd.substring(1).split(' ');
 // let argString = itemname.substr( itemname.indexOf(' ') + 1 );
  //let agr1d=argString[0]
  //let agr2d=argString[1]
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
                  button.reply.defer()
          return message.edit({embed: embed });
                })
                
                  setTimeout(function(){
                    console.log("te")
                  }, 3000);
                 
                 

                               const filter2 = (button) => button.clicker.user.id === userid // To Check If User Who Clicked Button Is Same As Who Used Command
               console.log(userid)
                const collector2 = message.createButtonCollector(filter2, { time: 300000 }) // 30 Seconds To Click
                collector2.on('collect', async button => {
                             console.log("collected");
   let dealerd=`${drawCard("d")}`
      var argString = dealerd.substring(1).split(' ');
 // let argString = itemname.substr( itemname.indexOf(' ') + 1 );
  //let agr1d=argString[0]
  //let agr2d=argString[1]
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
                  button.reply.defer()
          return message.edit({ buttons: [buttonagree], embed: embed });
                })
       } );
    }
    } 
function drawCard(who) {
   let count = Math.floor(Math.random() * 10);
  if(count==0) count=1
  if(count<5) count=7
  if(who=="d")
    {
    namescardslistd+=`${count}${namescards[Math.floor(Math.random() * namescards.length)]},`
    dealerpoint+=count
      return [` [${dealerpoint}+?] \`${namescardslistd}\``];
    }
  if(who=="u")
    {
    namescardslistu+=`${count}${namescards[Math.floor(Math.random() * namescards.length)]},`
    userpoint+=count
      return [` [${userpoint}] \`${namescardslistu}\``];
    }
    
}
};

exports.help = {
    name: "cf2",
    aliases: ["coinflip","yazıtura"],
    usage: "cf2 <yazı,tura> <reaction command>"
}