const { MessageEmbed,MessageButton,MessageActionRow } = require('discord.js');
const moment = require("moment");
let ms = require('ms');
let db = require('quick.db');
module.exports = {
    description: 'Classic EcoVerse game,Coinflip...',
  options: [
    {
      name: "choice",
      description: "Heads or tails?",
      type: 'STRING',
      choices: [{ name: "Heads", value: "heads" }, { name: "Tails", value: "tails" }],
      required: true,
    },
       {
      name: "amount",
      description: "Select amount",
      type: 'INTEGER',
      required: true,
    }
  ],
    run: async (client, interaction) => {
      //--------------------------------------------------------------
            const timeout = 20000;
  const cooldown = await db.fetch(`cooldown_coinflip_${interaction.user.id}`);
      	if (cooldown !== null && timeout - (Date.now() - cooldown) > 0) {
		const time = ms(timeout - (Date.now() - cooldown));
          return interaction.reply(`**Wait ${time} to message again**`)
	}
    db.set(`cooldown_coinflip_${interaction.user.id}`, Date.now());
      //---------------------------------------------------------------------------
        let amount = Math.floor(Math.random() * 200)+50;
    let amount2 = Math.floor(Math.random() * 2);
    let amount4 = Math.floor(Math.random() * 200)/100;
    let amount3 = interaction.options.get("choice").value;
    let amount5 = interaction.options.getInteger('amount')
    let coinflip= ""
    let authordata = client.eco.fetchMoney(interaction.user.id) 
    if(amount5=="all") amount5=authordata.amount;
    if(amount5=="half") amount5=authordata.amount/2 , amount5=parseInt(amount5);
    if(amount5>50000) amount5=50000;
    else if (!amount5 || isNaN(amount5)) return interaction.reply(`** ⛔${interaction.user.username} | ** Please specify a valid amount.`);
    if(amount5>authordata.amount || amount5<1)  return interaction.reply(`** ⛔${interaction.user.username} | ** You don't have enough money`);
    else
    {
    if(amount5=="all") amount5=authordata.amount;
      if(amount5=="half") amount5=authordata.amount/2 , amount5=parseInt(amount5);
      if(amount5>50000) amount5=50000;
    else if (!amount5 || isNaN(amount5)) return interaction.reply(`** ⛔${interaction.user.username} | ** Please specify a valid amount.`);
                interaction.reply(`**${interaction.user.username} | ** spent **${amount5}**💶 and chose **${amount3}**\n The coin spins.🪙`).then(async msg => {
        setTimeout(() => {
          interaction.editReply(`**${interaction.user.username} | ** spent **${amount5}**💶 and chose **${amount3}**\n The coin spins..🪙`);
        }, 1000);
                setTimeout(() => {
          interaction.editReply(`**${interaction.user.username} | ** spent **${amount5}**💶 and chose **${amount3}**\n The coin spins...🪙`);
        }, 2000);
                          setTimeout(() => {
           if([Math.floor(amount2)]==0)
        {
            let data = client.eco.addMoney(interaction.user.id, parseInt(amount5));
      interaction.editReply(`**${interaction.user.username} | ** spent **${amount5}**💶 and chose **${amount3}**\n The coin spins.🪙 and you won **${amount5*2}**💶`);
        }
    else {
      let data2= client.eco.removeMoney(interaction.user.id, parseInt(amount5));
     interaction.editReply(`**${interaction.user.username} | ** spent **${amount5}**💶 and chose **${amount3}**\n The coin spins.🪙 and you lost it all... :c`);
    }
        }, 3000);
        })
     
    }
    }
};
