const { MessageEmbed,MessageButton,MessageActionRow } = require('discord.js');
const moment = require("moment");
let ms = require('ms');
let db = require('quick.db');
module.exports = {
    description: 'Play Slots Game',
  options: [
       {
            name: 'amount',
            description: 'Select amount',
            type: 'INTEGER',
            required: true
        },
    ],
    run: async (client, interaction) => {
      let emojies = [
        "🏅",
        "🏆",
        "💶",
    ];
    let card1=""
    let card2=""
    let card3=""
    const user1 = interaction.user
    let amount = Math.floor(Math.random() * 100);
    let amount3 = interaction.options.getInteger('amount')
    let authordata = client.eco.fetchMoney(interaction.user.id) 
     //--------------------------------------------------------------
            const timeout = 10000;
  const cooldown = await db.fetch(`cooldown_Command-Name_${interaction.user.id}`);
      	if (cooldown !== null && timeout - (Date.now() - cooldown) > 0) {
		const time = ms(timeout - (Date.now() - cooldown));
          return interaction.reply(`**Wait ${time} to message again**`)
	}
    db.set(`cooldown_Command-Name_${interaction.user.id}`, Date.now());
      //---------------------------------------------------------------------------
  //--------------------------------------------
  if(amount3=="all") amount3=authordata.amount;
  if(amount3=="half") amount3=authordata.amount/2 , amount3=parseInt(amount3);
  if(amount3>50000) amount3=50000;
    if (!amount3 || isNaN(amount3)) return interaction.reply(`** ⛔${interaction.user.username} | ** Please specify a valid amount.`);
  else{
    if(amount3>authordata.amount || amount3<1)  return interaction.reply(`** ⛔${interaction.user.username} | ** You don't have enough money`);
    else
    {
      
             const embed = new MessageEmbed()
             .setTitle(`${user1.username},Played Slots With ${amount3}💶`, user1.displayAvatarURL())
            .setFooter(`.`)
            .addField("Played Slots",`[ ]  [ ]  [ ]`)
            .setColor("#7289DA")
            .setTimestamp();
             interaction.reply({embeds:[embed]}).then(async msg => {
                setTimeout(() => {
  // embed.setAuthor(`as`)
          embed.setFooter(`..`)
          interaction.editReply({embeds:[embed]});
                   }, 500);
                setTimeout(() => {
       //  embed.setAuthor(`sa`)
          embed.setFooter(`...`)
         interaction.editReply({embeds:[embed]});
              }, 1000);
            setTimeout(() => {
             embed.fields = [];
              if(amount>=35)
                {
                  card1="💯"
                }
              else
              {
                card1=`${emojies[Math.floor(Math.random() * emojies.length)]}`
              }
              
              embed.addField("Played Slots",`[${card1}]  [ ]  [ ]`)
       //  embed.setAuthor(`sa`)
          embed.setFooter(`Number 1`)
          interaction.editReply({embeds:[embed]});
              }, 2000);
          setTimeout(() => {
            let amount = Math.floor(Math.random() * 100);
             embed.fields = [];
              if(amount>=35)
                {
                  card2="💯"
                }
              else
              {
                card2=`${emojies[Math.floor(Math.random() * emojies.length)]}`
              }
              
              embed.addField("Played Slots",`[${card1}]  [${card2}]  [ ]`)
       //  embed.setAuthor(`sa`)
          embed.setFooter(`Number 2`)
         return interaction.editReply({embeds:[embed]});
              }, 3000);
           setTimeout(() => {
            let amount = Math.floor(Math.random() * 100);
             embed.fields = [];
              if(amount>=40)
                {
                  card3="💯"
                }
              else
              {
                card3=`${emojies[Math.floor(Math.random() * emojies.length)]}`
              }
              
              embed.addField("Played Slots",`[${card1}]  [${card2}]  [${card3}]`)
       //  embed.setAuthor(`sa`)
          embed.setFooter(`Number 3`)
         return interaction.editReply({embeds:[embed]});
              }, 4000);
           setTimeout(() => {
              if(card1==card2 && card1==card3 && card2==card3)
                {
                 client.eco.addMoney(interaction.user.id, parseInt(amount3*3));
                  embed.addField("Game Finished",`**Congrulations,you win ${amount3*3}💶**`)
                }
              else
              {
                client.eco.removeMoney(interaction.user.id, parseInt(amount3));
               embed.addField("Game Finished",`**Sorry,you lost ${amount3}💶**`)
              }
              
              
       //  embed.setAuthor(`sa`)
          embed.setFooter(`Game Finished`)
         return interaction.editReply({embeds:[embed]});
              }, 4000);
        } );
    }
    }  
    }
};
