const { MessageEmbed,MessageButton,MessageActionRow } = require('discord.js');
const moment = require("moment");
let ms = require('ms');
let db = require('quick.db');
const wait = require('node:timers/promises').setTimeout;
module.exports = {
    description: 'battlepass command',
    run: async (client, interaction) => {
      await interaction.deferReply();
		await wait(10);
         //--------------------------------------------------------------
            const timeout = 10000;
  const cooldown = await db.fetch(`cooldown_openeggs_${interaction.user.id}`);
      	if (cooldown !== null && timeout - (Date.now() - cooldown) > 0) {
		const time = ms(timeout - (Date.now() - cooldown));
          return interaction.editReply(`**Wait ${time} to message again**`)
	}
    db.set(`cooldown_openeggs_${interaction.user.id}`, Date.now());
      //---------------------------------------------------------------------------
      let levels = []
      for(let i=0;i<=20;i++)
        {
          levels.push(i)
        }
      console.log(levels)
        const embed = new MessageEmbed()
        	.setColor('#0099ff')
	.setTitle('EcoVerse Battle Pass')
        .setDescription(`***Your point:${client.db.get(`battlepass_${interaction.user.id}.point`)}<:ticket:965658088885583892>***`)
	.setThumbnail(interaction.user.displayAvatarURL({ format: 'png' }))
	.addFields(
		{ name: 'Level 1 [10]<:ticket:965658088885583892>', value: `**Prize**;\n***10,000:euro: Cash***` },
	)
	.setTimestamp()
	.setFooter({ text: `${interaction.user.username}`});
      const buton = new MessageButton().setCustomId('primary1').setEmoji('<:rightarrow:965666012794069003>').setStyle('PRIMARY').setDisabled(false);
      const buton2 = new MessageButton().setCustomId('primary2').setEmoji('<:leftarrow:965666012911521841>').setStyle('PRIMARY').setDisabled(false);
        const row = new MessageActionRow().addComponents(buton).addComponents(buton2)
       interaction.editReply({
           embeds:[embed],
           components:[row],
       })
      function selectLevel(level){
        let returnlevel=""
        for(let i=0;i<levels.lenght;i++)
          {
            if(i==level)
              {
                returnlevel+=`\`${levels[i]}\` `
              }
            else
              {
          returnlevel+=`**${levels[i]}** ` 
              }
          }
      }
    }
};
