const { MessageEmbed,MessageButton,MessageActionRow } = require('discord.js');

module.exports = {
    description: 'Stealing isnt a bad thing as long as you dont get caught. I m just kidding.',
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
