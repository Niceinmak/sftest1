const { MessageEmbed,MessageButton,MessageActionRow } = require('discord.js');
let ms = require('ms')
let db = require('quick.db');
module.exports = {
    description: 'Puts a clap emoji in the spaces in the message.',
    run: async (client, interaction) => {
      
     //--------------------------------------------------------------
            const timeout = 10000;
  const cooldown = await db.fetch(`cooldown_Command-Name_${interaction.user.id}`);
      	if (cooldown !== null && timeout - (Date.now() - cooldown) > 0) {
		const time = ms(timeout - (Date.now() - cooldown));
          return interaction.reply(`**Wait ${time} to message again**`)
	}
    db.set(`cooldown_Command-Name_${interaction.user.id}`, Date.now());
      //---------------------------------------------------------------------------
        const embed = new MessageEmbed()
        .setTitle('Test')
        .setDescription(`Test Succesfuly`)
        .setThumbnail(client.user.avatarURL());
        const buton = new MessageButton().setLabel('EcoVerse Website').setStyle('LINK').setURL('http://ecoverse.ml');
        const row = new MessageActionRow().addComponents(buton)
       interaction.reply({
           embeds:[embed],
           components:[row],
       })
    }
};
