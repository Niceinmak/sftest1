const { MessageEmbed,MessageButton,MessageActionRow } = require('discord.js');
const btcValue = require('btc-value');
const moment = require("moment");
let ms = require('ms');
let db = require('quick.db');
module.exports = {
    description: 'Test',
  options: [
        {
            name: 'user',
            description: 'Select a user',
            type: 'USER',
            required: false
        },
    ],
    run: async (client, interaction) => {
      const timeout = 5000;
  const cooldown = await db.fetch(`cooldown_Command-Name_${interaction.user.id}`);
      	if (cooldown !== null && timeout - (Date.now() - cooldown) > 0) {
		const time = ms(timeout - (Date.now() - cooldown));
          return interaction.reply(`**Wait ${time} to message again**`)
	}
      //---------------------------------------------------------------------------
        let userid=""
            let user=""
      let args_user=interaction.options.getUser('user')
        if(!args_user)
  {
    userid = interaction.user.id;
    user = interaction.user;
  }
  else
  {
    userid = args_user.id;
    user = args_user;
  } 
  return interaction.reply("sa")
    }
};
