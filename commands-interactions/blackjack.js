const { MessageEmbed,MessageButton,MessageActionRow } = require('discord.js');
const wait = require('node:timers/promises').setTimeout;
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
const guild = client.guilds.cache.get(interaction.guild.id);
       await interaction.deferReply();
		await wait(10);
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
      let cards1=[
        "<a:asf:467565463950458890>",
        "<a:acf:467565462566338561>",
        "<a:ahf:467565462063022110>",
        "<a:adf:467565463992401920>"
      ]
      let cards2=[
        "<a:2df:467565459756285962>",
        "<a:2hf:467565456463495169>",
        "<a:2cf:467565449736093696>",
        "<a:2sf:467565461886992394>"
      ]
      let cards3=[
        "<a:3sf:467565462092382208>",
        "<a:3cf:467565457566859265>",
        "<a:3hf:467565459756154890>",
        "<a:3df:467565462071410708>"
      ]
      let cards4=[
        "<a:4sf:467565462864265228>",
        "<a:4cf:467565460401946654>",
        "<a:4hf:467565462335782932>",
        "<a:4df:467565462180593665>"
      ]
      let cards5=[
        "<a:5sf:467565463304536085>",
        "<a:5cf:467565461010251778>",
        "<a:5hf:467565460422918145>",
        "<a:5df:467565463195484180>"
      ]
      let cards6=[
        "<a:6sf:467565463938007051>",
        "<a:6cf:467565462868197376>",
        "<a:6hf:467565460590690315>",
        "<a:6df:467565463556325376>"
      ]
      let cards7=[
        "<a:7sf:467565463703126016>",
        "<a:7cf:467565460892942357>",
        "<a:7hf:467565460938948608>",
        "<a:7df:467565463170187264>"
      ]
      let cards8=[
        "<a:8sf:467565464000659486>",
        "<a:8cf:467565463333765130>",
        "<a:8hf:467565461517762560>",
        "<a:8df:467565464017436672>"
      ]
      let cards9=[
        "<a:9sf:802675578586136598>",
        "<a:9cf:467565463262461963>",
        "<a:9hf:467565461895118877>",
        "<a:9df:467565463518314497>"
      ]
      let cards10=[
        "<a:10sf:802675577214861342>",
        "<a:10cf:467565463996465162>",
        "<a:10hf:467565463317250049>",
        "<a:10df:467565463979687947>"
      ]
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
          return interaction.editReply(`**Wait ${time} to message again**`)
	}
    db.set(`cooldown_blackjack_${interaction.user.id}`, Date.now());
      //---------------------------------------------------------------------------
  //--------------------------------------------
  if(amount3=="all") amount3=authordata.amount;
  if(amount3=="half") amount3=authordata.amount/2;
    if (!amount3 || isNaN(amount3)) return interaction.editReply(`** ⛔${interaction.user.username} | ** Please specify a valid amount.`);
  else{
    if(amount3>authordata.amount || amount3<1) return interaction.editReply(`** ⛔${interaction.user.username} | ** You don't have enough money`);
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
         .setAuthor({ name: `${user1.username}, Played Blackjack With ${amount3}💶`, iconURL: interaction.user.displayAvatarURL({ format: 'png' })})
            .addFields(
    { name: `Dealer \`${agr1d}\``, value: agr2d, inline: true },
    { name: `${user1.username} \`${agr1u}\``, value: agr2u, inline: true },
	)
            .setColor("#7cbaeb")
            .setTimestamp();
            interaction.editReply({embeds:[embed]})
      const message = await interaction.fetchReply();
            message.react("👊")
        //  msg.react("")  
          message.react("🛑")
      const filter = (reaction, user) => {
	return (reaction.emoji.name === '👊' || reaction.emoji.name === '🛑') && user.id === interaction.user.id;
};

const collector = message.createReactionCollector({ filter, time: 15000 });

collector.on('collect', (reaction, user) => {
//	console.log(`Collected ${reaction.emoji.name} from ${user.tag}`);
  if (reaction.emoji.name === '👊') {
    if(temp==0)
       {
         if(guild.me.permissions.has("MANAGE_MESSAGES")) reaction.users.remove(user.id);
startbj() 
       }
       }
   if (reaction.emoji.name === '🛑') {
      if(temp==0)
        {
          temp=1;
      drawCard("d")
      if(guild.me.permissions.has("MANAGE_MESSAGES")) reaction.users.remove(user.id);
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
       embed.setFooter({ text: `You both bust!`});
       embed.setColor("GREY")
     }
    else if(userpoint>21 && dealerpoint<=21)
      {
        temp=1;
       embed.setFooter({ text: `You lose ${amount3}`});
       embed.setColor("RED")
          let data2= client.eco.removeMoney(messageid, parseInt(amount3));
      }
          else
            {
              if(userpoint>dealerpoint)
        {
          temp=1;
       embed.setFooter({ text: `You win ${amount3}`});
       embed.setColor("GREEN")
          let data2= client.eco.addMoney(messageid, parseInt(amount3));
        }
      else if(userpoint==dealerpoint)
        {
          temp=1;
       embed.setFooter({ text: `You both bust!`});
       embed.setColor("GREY")
        }
      else
        {
          if(dealerpoint>21)
            {
              temp=1;
       embed.setFooter({ text: `You win ${amount3}`});
       embed.setColor("GREEN")
          let data2= client.eco.addMoney(messageid, parseInt(amount3));
            }
          else
            {
              temp=1;
       embed.setFooter({ text: `You lose ${amount3}`});
       embed.setColor("RED")
          let data2= client.eco.removeMoney(messageid, parseInt(amount3));
            }
        }
            }
   
      return interaction.editReply({embeds:[embed]})
     
    }
        }
});

collector.on('end', collected => {
//	console.log(`Collected ${collected.size} items`);
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
  return [` ${dealerpoint} ${userpoint} ${namescardslistd} ${namescardslistu}`]
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
    { name: `Dealer ${agr1d}`, value: agr2d, inline: true },
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
       embed.setFooter({ text: `You both bust!`});
       embed.setColor("GREY")
     }
    else if(userpoint>21 && dealerpoint<=21)
      {
        temp=1;
       embed.setFooter({ text: `You lose ${amount3}`});
       embed.setColor("RED")
          let data2= client.eco.removeMoney(messageid, parseInt(amount3));
      }
          else
            {
              if(userpoint>dealerpoint)
        {
          temp=1;
       embed.setFooter({ text: `You win ${amount3}`});
       embed.setColor("GREEN")
          let data2= client.eco.addMoney(messageid, parseInt(amount3));
        }
      else if(userpoint==dealerpoint)
        {
          temp=1;
       embed.setFooter({ text: `You both bust!`});
       embed.setColor("GREY")
        }
      else
        {
          if(dealerpoint>21)
            {
              temp=1;
       embed.setFooter({ text: `You win ${amount3}`});
       embed.setColor("GREEN")
          let data2= client.eco.addMoney(messageid, parseInt(amount3));
            }
          else
            {
              temp=1;
       embed.setFooter({ text: `You lose ${amount3}`});
       embed.setColor("RED")
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
      if(count==1) namescardslistd+=`${cards1[Math.floor(Math.random() * cards1.length)]},`
      else if(count==2) namescardslistd+=`${cards2[Math.floor(Math.random() * cards2.length)]},`
      else if(count==3) namescardslistd+=`${cards3[Math.floor(Math.random() * cards3.length)]},`
      else if(count==4) namescardslistd+=`${cards4[Math.floor(Math.random() * cards4.length)]},`
      else if(count==5) namescardslistd+=`${cards5[Math.floor(Math.random() * cards5.length)]},`
      else if(count==6) namescardslistd+=`${cards6[Math.floor(Math.random() * cards6.length)]},`
      else if(count==7) namescardslistd+=`${cards7[Math.floor(Math.random() * cards7.length)]},`
      else if(count==8) namescardslistd+=`${cards8[Math.floor(Math.random() * cards8.length)]},`
      else if(count==9) namescardslistd+=`${cards9[Math.floor(Math.random() * cards9.length)]},`
      else namescardslistd+=`${cards10[Math.floor(Math.random() * cards10.length)]},`
    
    dealerpoint+=count
      return [` [${dealerpoint}+?] ${namescardslistd}`];
    }
  if(who=="u")
    {
      if(count==1) namescardslistu+=`${cards1[Math.floor(Math.random() * cards1.length)]},`
      else if(count==2) namescardslistu+=`${cards2[Math.floor(Math.random() * cards2.length)]},`
      else if(count==3) namescardslistu+=`${cards3[Math.floor(Math.random() * cards3.length)]},`
      else if(count==4) namescardslistu+=`${cards4[Math.floor(Math.random() * cards4.length)]},`
      else if(count==5) namescardslistu+=`${cards5[Math.floor(Math.random() * cards5.length)]},`
      else if(count==6) namescardslistu+=`${cards6[Math.floor(Math.random() * cards6.length)]},`
      else if(count==7) namescardslistu+=`${cards7[Math.floor(Math.random() * cards7.length)]},`
      else if(count==8) namescardslistu+=`${cards8[Math.floor(Math.random() * cards8.length)]},`
      else if(count==9) namescardslistu+=`${cards9[Math.floor(Math.random() * cards9.length)]},`
      else namescardslistu+=`${cards10[Math.floor(Math.random() * cards10.length)]},`
        userpoint+=count
      return [` [${userpoint}] ${namescardslistu}`];
    }
    
}
      
    }
  
};
