const { MessageEmbed,MessageButton,MessageActionRow } = require('discord.js');

module.exports = {
    description: 'Classic EcoVerse game,Coinflip...',
  options: [
    {
      name: "choices",
      description: "Select color",
      type: 'STRING',
      required: false,
      choices: [{ name: "Epic Case", value: "epic.case" }, { name: "Rare Case", value: "rare.case" }, { name: "Common Case", value: "common.case" }]
    },
       {
      name: "amount",
      description: "Select amount",
      type: 'INTEGER',
      required: true,
    }
  ],
    run: async (client, interaction) => {
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
