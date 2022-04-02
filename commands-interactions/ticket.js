const { MessageEmbed,MessageButton,MessageActionRow } = require('discord.js');
const { Modal, TextInputComponent, showModal } = require('discord-modals') // Now we extract the showModal method
const { Formatters } = require('discord.js');
const moment = require("moment");
let ms = require('ms');
let db = require('quick.db');
const wait = require('node:timers/promises').setTimeout;
module.exports = {
    description: 'Have a question? Submit a request to the support team!',
    run: async (client, interaction) => {
       //--------------------------------------------------------------
            const timeout = 100;
  const cooldown = await db.fetch(`cooldown_ticket_${interaction.user.id}`);
      	if (cooldown !== null && timeout - (Date.now() - cooldown) > 0) {
		const time = ms(timeout - (Date.now() - cooldown));
          return interaction.editReply(`**Wait ${time} to message again**`)
	}
    db.set(`cooldown_ticket_${interaction.user.id}`, Date.now());
      //---------------------------------------------------------------------------
      const modal = new Modal() // We create a Modal
.setCustomId('ticket')
.setTitle('Submit a ticket to EcoVerse!')
.addComponents(
  new TextInputComponent() // We create a Text Input Component
  .setCustomId('title')
  .setLabel('Title')
  .setStyle('SHORT') //IMPORTANT: Text Input Component Style can be 'SHORT' or 'LONG'
  .setMinLength(2)
  .setMaxLength(30)
  .setPlaceholder('Eg. bug ,command not working...')
  .setRequired(true), // If it's required or not
  new TextInputComponent() // We create a Text Input Component
  .setCustomId('description')
  .setLabel('Description')
  .setStyle('LONG') //IMPORTANT: Text Input Component Style can be 'SHORT' or 'LONG'
  .setMinLength(10)
  .setPlaceholder('Can I have your question?')
  .setRequired(true), // If it's required or not+
  new TextInputComponent() // We create a Text Input Component
  .setCustomId('link')
  .setLabel('Attachment link (Not required)')
  .setStyle('LONG') //IMPORTANT: Text Input Component Style can be 'SHORT' or 'LONG'
  .setPlaceholder('Want to add a screenshot?')
  .setRequired(false) // If it's required or not+
);
      
         showModal(modal, {
      client: client, // Client to show the Modal through the Discord API.
      interaction: interaction // Show the modal with interaction data.
    })
    }
};
