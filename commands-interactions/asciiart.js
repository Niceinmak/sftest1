const { MessageEmbed,MessageButton,MessageActionRow } = require('discord.js');
const figlet = require("figlet");
const discord = require("discord.js")
let ms = require('ms')
let db = require('quick.db');
module.exports = {
    description: 'Text To Asciiart',
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
            const timeout = 20000;
  const cooldown = await db.fetch(`cooldown_asciiart_${interaction.user.id}`);
      	if (cooldown !== null && timeout - (Date.now() - cooldown) > 0) {
		const time = ms(timeout - (Date.now() - cooldown));
          return interaction.reply(`**Wait ${time} to message again**`)
	}
    db.set(`cooldown_asciiart_${interaction.user.id}`, Date.now());
      //---------------------------------------------------------------------------
        let text = interaction.options.getString('text')
   if (!text) {
      return interaction.reply(`\`Usage:${client.prefix}ascii <msg>\``);
    }
   let maxlen = 20;
    if (text.length > 20) {
      return interaction.reply(
        `Please put text that has 20 characters or less because the conversion won't be good!`
      );
    }
   figlet(text, function (err, data) {
     data="```"+data+"```"
      interaction.reply(`${data}`);
    });
    }
};
