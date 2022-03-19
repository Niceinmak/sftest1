const { MessageEmbed,MessageButton,MessageActionRow } = require('discord.js');

module.exports = {
    description: 'Show Your Balance',
  options: [
        {
            name: 'user',
            description: 'Select a user',
            type: 'STRING',
            required: false
        },
    ],
  if(interaction.options.getChannel('user')==null)
    run: async (client, interaction) => {
    let user = interaction.mentions.first() || interaction.member.user.id;
    let userBalance = client.eco.fetchMoney(user.id);
    let userBalanceformat=String(userBalance.amount).replace(/(.)(?=(\d{3})+$)/g,'$1,')
    const embed = new MessageEmbed()
        .setTitle(`Balance`)
        .addField(`User`, `<@${userBalance.user}>`)
        .addField(`Balance`, `**${userBalanceformat}**💶`)
        .addField(`Position`, userBalance.position)
        .setColor("RANDOM")
        .setThumbnail(user.displayAvatarURL)
        .setTimestamp();
       interaction.reply({
           embeds:[embed],
       })
    }
};
