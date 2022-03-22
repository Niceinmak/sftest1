const { MessageEmbed,MessageButton,MessageActionRow } = require('discord.js');
const discord = require("discord.js")
let ms = require('ms')
let db = require('quick.db');
module.exports = {
    description: 'Blackjack...It was hard to make but it was worth it',
  options: [
       {
      name: "amount",
      description: "Select amount",
      type: 'INTEGER',
      required: true,
    }
  ],
    run: async (client, interaction) => {
       let namescardslistd=""
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
    let user1=interaction.user
    let amount = Math.floor(Math.random() * 200)+50;
    let amount2 = Math.floor(Math.random() * 2);
    let amount4 = Math.floor(Math.random() * 200)/100;
    let amount3 = interaction.options.getInteger('amount')
    let yazitura= ""
    let authordata = client.eco.fetchMoney(interaction.user.id) 
            //--------------------------------------------------------------
            const timeout = 15000;
  const cooldown = await db.fetch(`cooldown_blackjack_${interaction.user.id}`);
      	if (cooldown !== null && timeout - (Date.now() - cooldown) > 0) {
		const time = ms(timeout - (Date.now() - cooldown));
          return interaction.reply(`**Wait ${time} to message again**`)
	}
    db.set(`cooldown_blackjack_${interaction.user.id}`, Date.now());
      //---------------------------------------------------------------------------
  //--------------------------------------------
  if(amount3=="all") amount3=authordata.amount;
  if(amount3=="half") amount3=authordata.amount/2;
    if (!amount3 || isNaN(amount3)) return interaction.reply(`** ⛔${interaction.user.username} | ** Please specify a valid amount.`);
  else{
    if(amount3>authordata.amount || amount3<1) return interaction.reply(`** ⛔${interaction.user.username} | ** You don't have enough money`);
    else
    {
      let messageid=interaction.user.id
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
            .setTitle(`${user1.username}, Played Blackjack With ${amount3}💶`)
            .addFields(
    { name: `Dealer \`${agr1d}\``, value: agr2d, inline: true },
    { name: `${user1.username} \`${agr1u}\``, value: agr2u, inline: true },
	)
            .setColor("#7289DA")
            .setTimestamp();
            interaction.reply({embeds:[embed]})
      const message = await interaction.fetchReply();
            message.react("👊")
        //  msg.react("")  
          message.react("🛑")
      const filter = (reaction, user) => {
	return (reaction.emoji.name === '👊' || reaction.emoji.name === '🛑') && user.id === interaction.user.id;
};

const collector = message.createReactionCollector({ filter, time: 15000 });

collector.on('collect', (reaction, user) => {
	console.log(`Collected ${reaction.emoji.name} from ${user.tag}`);
  if (reaction.emoji.name === '👊') {
    if(temp==0)
       {
        reaction.users.remove(user.id);
startbj() 
       }
       }
   if (reaction.emoji.name === '🛑') {
      if(temp==0)
        {
          temp=1;
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
   if(userpoint>21 && dealerpoint>21)
     {
       temp=1;
      embed.setTitle(`You both bust!`)
     }
    else if(userpoint>21 && dealerpoint<=21)
      {
        temp=1;
        embed.setTitle(`You lose ${amount3}`) 
          let data2= client.eco.removeMoney(messageid, parseInt(amount3));
      }
          else
            {
              if(userpoint>dealerpoint)
        {
          temp=1;
         embed.setTitle(`You win ${amount3}`) 
          let data2= client.eco.addMoney(messageid, parseInt(amount3));
        }
      else if(userpoint==dealerpoint)
        {
          temp=1;
          embed.setTitle(`You both bust!`)
        }
      else
        {
          if(dealerpoint>21)
            {
              temp=1;
              embed.setTitle(`You win ${amount3}`) 
          let data2= client.eco.addMoney(messageid, parseInt(amount3));
            }
          else
            {
              temp=1;
           embed.setTitle(`You lose ${amount3}`)
          let data2= client.eco.removeMoney(messageid, parseInt(amount3));
            }
        }
            }
   
      return interaction.editReply({embeds:[embed]})
     
    }
        }
});

collector.on('end', collected => {
	console.log(`Collected ${collected.size} items`);
});
                  
function stopbj(){
  if(dealerpoint<17)
    {
      for(; ;)
        {
          drawCard("d")
         if(dealerpoint>=17)
           {
             break
           }
        }
      
    }
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
  if(userpoint<21)
    {
                embed.fields = [];
  embed.addFields(
    { name: `Dealer \`${agr1d}\``, value: agr2d, inline: true },
    { name: `${user1.username} \`${agr1u}\``, value: agr2u, inline: true },
	)
    }
     else
    {
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
   if(userpoint>21 && dealerpoint>21)
     {
       temp=1;
       embed.setTitle(`You both bust!`)
     }
    else if(userpoint>21 && dealerpoint<=21)
      {
        temp=1;
        embed.setTitle(`You lose ${amount3}`) 
          let data2= client.eco.removeMoney(messageid, parseInt(amount3));
      }
          else
            {
              if(userpoint>dealerpoint)
        {
          temp=1;
         embed.setTitle(`You win ${amount3}`) 
          let data2= client.eco.addMoney(messageid, parseInt(amount3));
        }
      else if(userpoint==dealerpoint)
        {
          temp=1;
          embed.setTitle(`You both bust!`)
        }
      else
        {
          if(dealerpoint>21)
            {
              temp=1;
              embed.setTitle(`You win ${amount3}`) 
          let data2= client.eco.addMoney(messageid, parseInt(amount3));
            }
          else
            {
              temp=1;
           embed.setTitle(`You lose ${amount3}`) 
          let data2= client.eco.removeMoney(messageid, parseInt(amount3));
            }
        }
            }
     }
 
    
          return interaction.editReply({embeds:[embed]})
}
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
      if(randomcounter==2)
        {
        if(count<userpoint)
    {
     count=userpoint 
      randomcounter++
    }  
        }
      randomcounter++
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
      
    }
  
};
