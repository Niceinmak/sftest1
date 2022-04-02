const { MessageEmbed,MessageButton,MessageActionRow } = require('discord.js');
const { Modal, TextInputComponent, showModal } = require('discord-modals') // Now we extract the showModal method
const moment = require("moment");
let ms = require('ms');
let db = require('quick.db');
const wait = require('node:timers/promises').setTimeout;
module.exports = {
    description: 'Have a question? Submit a request to the support team!',
    run: async (client, interaction) => {
    await interaction.deferReply();
		await wait(10);
       //--------------------------------------------------------------
            const timeout = 100;
  const cooldown = await db.fetch(`cooldown_ticket_${interaction.user.id}`);
      	if (cooldown !== null && timeout - (Date.now() - cooldown) > 0) {
		const time = ms(timeout - (Date.now() - cooldown));
          return interaction.editReply(`**Wait ${time} to message again**`)
	}
    //db.set(`cooldown_ticket_${interaction.user.id}`, Date.now());
      //---------------------------------------------------------------------------
      const modal = new Modal() // We create a Modal
.setCustomId('modal-customid')
.setTitle('Test of Discord-Modals!')
.addComponents(
  new TextInputComponent() // We create a Text Input Component
  .setCustomId('textinput-customid')
  .setLabel('Some text Here')
  .setStyle('SHORT') //IMPORTANT: Text Input Component Style can be 'SHORT' or 'LONG'
  .setMinLength(4)
  .setMaxLength(10)
  .setPlaceholder('Write a text here')
  .setRequired(true) // If it's required or not
);
         showModal(modal, {
      client: client, // Client to show the Modal through the Discord API.
      interaction: interaction.editReply // Show the modal with interaction data.
    })
  
    }
};
