const { MessageEmbed,MessageButton,MessageActionRow } = require('discord.js');
let ms = require('ms')
let db = require('quick.db');
module.exports = {
    description: 'Puts a clap emoji in the spaces in the message.',
   options: [
        {
            name: 'text',
            description: 'Write a text',
            type: 'STRING',
            required: true
        },
    ],
    run: async (client, interaction) => {
      
     //--------------------------------------------------------------
            const timeout = 10000;
  const cooldown = await db.fetch(`cooldown_clap_${interaction.user.id}`);
      	if (cooldown !== null && timeout - (Date.now() - cooldown) > 0) {
		const time = ms(timeout - (Date.now() - cooldown));
          return interaction.reply(`**Wait ${time} to message again**`)
	}
    db.set(`cooldown_clap_${interaction.user.id}`, Date.now());
      //---------------------------------------------------------------------------
       return interaction.reply(interaction.options.getString('text').replace(/ /g, " 👏 "));
    }
};
