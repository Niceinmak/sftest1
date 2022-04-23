const { MessageEmbed,MessageButton,MessageActionRow } = require('discord.js');
const moment = require("moment");
let ms = require('ms');
let db = require('quick.db');
const wait = require('node:timers/promises').setTimeout;
module.exports = {
    description: 'Look your Battle Pass History',
    run: async (client, interaction) => {
      await interaction.deferReply();
		await wait(10);
         //--------------------------------------------------------------
            const timeout = 10000;
  const cooldown = await db.fetch(`cooldown_claimhistory_${interaction.user.id}`);
      	if (cooldown !== null && timeout - (Date.now() - cooldown) > 0) {
		const time = ms(timeout - (Date.now() - cooldown));
          return interaction.editReply(`**Wait ${time} to message again**`)
	}
    db.set(`cooldown_claimhistory_${interaction.user.id}`, Date.now());
      //---------------------------------------------------------------------------
      let history=client.db.get(`battlepass_${interaction.user.id}.history`)

      const embed = new MessageEmbed()
        	.setColor('#0099ff')
	.setTitle('Battle Pass Claim History')
      if(!history || history.toString()=="undefined") embed.setDescription(`The history is null`)
        else embed.setDescription(`${history}`)
       interaction.editReply({
           embeds:[embed],
       }) 
        
    }
};
