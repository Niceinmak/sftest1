const { MessageEmbed,MessageButton,MessageActionRow } = require('discord.js');

module.exports = {
    description: 'Test',
    run: async (client, interaction) => {
        const embed = new MessageEmbed()
        .setTitle(`EcoVerse Support Server`)
        .setDescription(`**Please press the button below to join to the support server!**
        \`Thanks for joining\``)
        .setThumbnail(client.user.avatarURL());
        const buton = new MessageButton().setLabel('EcoVerse Website').setStyle('LINK').setURL('https://discord.gg/8aJ7ajGEEM');
        const row = new MessageActionRow().addComponents(buton)
       interaction.reply({
           embeds:[embed],
           components:[row],
       })
    }
};
