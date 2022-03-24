const { MessageEmbed,MessageButton,MessageActionRow } = require('discord.js');
const wait = require('node:timers/promises').setTimeout;
module.exports = {
    description: 'Battle with other animals',
  options: [
        {
            name: 'user',
            description: 'Select a user',
            type: 'USER',
            required: false
        },
    ],
    run: async (client, interaction) => {
      await interaction.deferReply();
		await wait(10);
  let x = client.db.get(`teamanimals_${interaction.user.id}`);
      let animalcount=0
      const arrayToObject1 = x.reduce((itemStruct, x1) => {
    itemStruct[x.name] = (itemStruct[x.name] || 0) + 1;
    animalcount++
    return itemStruct;
  }, {});
      if(animalcount!=3) interaction.editReply(`**You must have 3 animals in the team to be able to battle.**`)
      console.log(animalcount)
        const embed = new MessageEmbed()
        .setTitle('Test')
        .setDescription(`Test Succesfuly`)
        .setThumbnail(client.user.avatarURL());
        const buton = new MessageButton().setLabel('EcoVerse Website').setStyle('LINK').setURL('http://ecoverse.ml');
        const row = new MessageActionRow().addComponents(buton)
       interaction.editReply({
           embeds:[embed],
           components:[row],
       })
    }
};
