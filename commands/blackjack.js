
const { MessageEmbed } = require("discord.js");
let namescardslistd=""
exports.execute = async (client, message, args) => {
  let temp=0;
     let namescards = [
        "hf",
        "d",
        "s",
        "ds",
        "df",
        "h",
        "c",
    ];
  let randomcounter=0
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
    let playtime = await client.eco.work(client.ecoAddUser, timecooldown,{cooldown: 5000});
    const user1 = message.member.user
    if (playtime.onCooldown) return message.reply(`**Take it slow,wait ${playtime.time.seconds} more seconds**`);
    let data2= client.eco.removeMoney(message.author.id, parseInt(timecooldown));
  //--------------------------------------------
  if(amount3=="all") amount3=authordata.amount;
  if(amount3=="half") amount3=authordata.amount/2;
    if (!amount3 || isNaN(amount3)) return message.channel.send(`** ⛔${message.author.tag} | ** Please specify a valid amount.`);
  else{
    if(amount3>authordata.amount || amount3<1) return message.channel.send(`** ⛔${message.author.tag} | ** You don't have enough money`);
    else
    {
      let messageid=message.author.id
      if(amount3>50000)amount3=50000
      drawCard("u")
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
             .setAuthor(`${user1.username}, Played Blackjack With ${amount3}💶`, user1.displayAvatarURL())
            .setFooter(`Game in progress`)
            .setTitle(`${user1.username}`)
            .addFields(
    { name: `Dealer \`${agr1d}\``, value: agr2d, inline: true },
    { name: `${user1.username} \`${agr1u}\``, value: agr2u, inline: true },
	)
            .setColor("#7289DA")
            .setTimestamp();
      drawCard("d")
              return message.channel.send(embed).then(async msg => {
	  msg.react("👊")
        //  msg.react("")  
          msg.react("🛑")
  const filter = (reaction, user) => {
	return (reaction.emoji.name === '👊' || reaction.emoji.name === '🛑') && user.id === message.author.id;
};
const collector = msg.createReactionCollector(filter, {max:1, time: 15000});

collector.on("collect", (reaction, user) => {
   if (reaction.emoji.name === '👊') {
     reaction.users.remove(user.id);
startbj()
                  const filter2 = (reaction, user) => {
	return (reaction.emoji.name === '👊' || reaction.emoji.name === '🛑') && user.id === message.author.id;
};
const collector2 = msg.createReactionCollector(filter2, {max:1, time: 15000});

collector2.on("collect", (reaction, user) => {
  if (reaction.emoji.name === '👊') {
    reaction.users.remove(user.id);
startbj()
       const filter3 = (reaction, user) => {
	return (reaction.emoji.name === '👊' || reaction.emoji.name === '🛑') && user.id === message.author.id;
};
const collector3 = msg.createReactionCollector(filter3, {max:1, time: 15000});

collector3.on("collect", (reaction, user) => {
  if (reaction.emoji.name === '👊') {
     reaction.users.remove(user.id);
startbj()
  }
  else
    {
      if (reaction.emoji.name === '🛑') {
       reaction.users.remove(user.id);
      let points=`${stopbj()}`
      var argString = points.substring(1).split(' ');
 // let argString = itemname.substr( itemname.indexOf(' ') + 1 );
  let dpoint=argString[0]
  let upoint=argString[1]
  let dcard=argString[2]
  let ucard=argString[3]
  embed.fields = [];
  embed.addFields(
    { name: `Dealer \`${dpoint}\``, value: dcard, inline: true },
    { name: `${user1.username} \`${upoint}\``, value: ucard, inline: true },
	)
      if(userpoint>dealerpoint)
        {
         embed.setAuthor(`You Win!`) 
          embed.setFooter(`You win ${amount3}`)
          let data2= client.eco.addMoney(messageid, parseInt(amount3));
        }
      else if(userpoint==dealerpoint)
        {
          embed.setFooter(`You both bust!`)
          embed.setFooter(`You both bust!`)
        }
      else
        {
          if(dealerpoint>21)
            {
              embed.setAuthor(`You Win!`) 
              embed.setFooter(`You win ${amount3}`)
          let data2= client.eco.addMoney(messageid, parseInt(amount3));
            }
          else
            {
           embed.setAuthor(`You Lose`) 
              embed.setFooter(`You lose ${amount3}`)
          let data2= client.eco.removeMoney(messageid, parseInt(amount3));
            }
        }
      return msg.edit(embed);
     
    }
    }
//write
  
})
collector3.on("end", (reaction, user) => {
//write
})
  }
else
  {
    if (reaction.emoji.name === '🛑') {
       reaction.users.remove(user.id);
      let points=`${stopbj()}`
      var argString = points.substring(1).split(' ');
 // let argString = itemname.substr( itemname.indexOf(' ') + 1 );
  let dpoint=argString[0]
  let upoint=argString[1]
  let dcard=argString[2]
  let ucard=argString[3]
  embed.fields = [];
  embed.addFields(
    { name: `Dealer \`${dpoint}\``, value: dcard, inline: true },
    { name: `${user1.username} \`${upoint}\``, value: ucard, inline: true },
	)
     if(userpoint>dealerpoint)
        {
         embed.setAuthor(`You Win!`) 
          embed.setFooter(`You win ${amount3}`)
          let data2= client.eco.addMoney(messageid, parseInt(amount3));
        }
      else if(userpoint==dealerpoint)
        {
          embed.setFooter(`You both bust!`)
          embed.setFooter(`You both bust!`)
        }
      else
        {
          if(dealerpoint>21)
            {
              embed.setAuthor(`You Win!`) 
              embed.setFooter(`You win ${amount3}`)
          let data2= client.eco.addMoney(messageid, parseInt(amount3));
            }
          else
            {
           embed.setAuthor(`You Lose`) 
              embed.setFooter(`You lose ${amount3}`)
          let data2= client.eco.removeMoney(messageid, parseInt(amount3));
            }
        }
      return msg.edit(embed);
     
    }
  }

    
//write
  
//write
  
})
    collector2.on("end", (reaction, user) => {
//write
})

collector.on("end", (reaction, user) => {
//write
})
   }
else
  {
    if (reaction.emoji.name === '🛑') {
      drawCard("d")
       reaction.users.remove(user.id);
      let points=`${stopbj()}`
      var argString = points.substring(1).split(' ');
 // let argString = itemname.substr( itemname.indexOf(' ') + 1 );
  let dpoint=argString[0]
  let upoint=argString[1]
  let dcard=argString[2]
  let ucard=argString[3]
  embed.fields = [];
  embed.addFields(
    { name: `Dealer \`${dpoint}\``, value: dcard, inline: true },
    { name: `${user1.username} \`${upoint}\``, value: ucard, inline: true },
	)
   if(userpoint>dealerpoint)
        {
         embed.setAuthor(`You Win!`) 
          embed.setFooter(`You win ${amount3}`)
          let data2= client.eco.addMoney(messageid, parseInt(amount3));
        }
      else if(userpoint==dealerpoint)
        {
          embed.setFooter(`You both bust!`)
          embed.setFooter(`You both bust!`)
        }
      else
        {
          if(dealerpoint>21)
            {
              embed.setAuthor(`You Win!`) 
              embed.setFooter(`You win ${amount3}`)
          let data2= client.eco.addMoney(messageid, parseInt(amount3));
            }
          else
            {
           embed.setAuthor(`You Lose`) 
              embed.setFooter(`You lose ${amount3}`)
          let data2= client.eco.removeMoney(messageid, parseInt(amount3));
            }
        }
      return msg.edit(embed);
     
    }
  }
  
  
                

})
            
function stopbj(){
  return [` ${dealerpoint} ${userpoint} \`${namescardslistd}\` \`${namescardslistu}\``]
}
                
                
                  function startbj(){
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
  if(userpoint<=21)
    {
      embed.fields = [];
  embed.addFields(
    { name: `Dealer \`${agr1d}\``, value: agr2d, inline: true },
    { name: `${user1.username} \`${agr1u}\``, value: agr2u, inline: true },
	)
    }
   else
      {
        let data2= client.eco.removeMoney(messageid, parseInt(amount3));
        embed.setFooter(`You lose ${amount3}`)
             embed.setAuthor(`You Lose`)      
            let points=`${stopbj()}`
      var argString = points.substring(1).split(' ');
 // let argString = itemname.substr( itemname.indexOf(' ') + 1 );
  let dpoint=argString[0]
  let upoint=argString[1]
  let dcard=argString[2]
  let ucard=argString[3]
  embed.fields = [];
  embed.addFields(
    { name: `Dealer \`${dpoint}\``, value: dcard, inline: true },
    { name: `${user1.username} \`${upoint}\``, value: ucard, inline: true },
	)
     }
    
          return msg.edit(embed);
        temp++
}
       } );
    }
    
    } 

function drawCard(who) {
  let count = Math.floor(Math.random() * 10);
  if(randomcounter<2)
    {
     if(count==0) count=1
      randomcounter++
    }
  else
    {
  if(count==0) count=1
  if(count<5) count=5
    }
  
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
    name: "bj",
    aliases: ["blackjack","BLACKJACK"],
    usage: "bj <amount>"
}

