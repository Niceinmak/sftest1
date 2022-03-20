const { MessageEmbed,MessageButton,MessageActionRow } = require('discord.js');

module.exports = {
    description: 'Look at the money in the bank.',
    run: async (client, interaction) => {
        let user = interaction.user
    let userBalance = client.eco.fetchMoney(`${interaction.user.id}10`);
    let userBalanceformat=String(userBalance.amount).replace(/(.)(?=(\d{3})+$)/g,'$1,')
    const embed = new MessageEmbed()
        .setTitle(`**🏦 BANK 🏦**`)
        .addField(`Bank Balance`, `**${userBalanceformat}**💶`)
        .addField(`Usage`,`Deposit \`${client.prefix} deposit\` \nWithdraw \`${client.prefix} withdraw\``)
        .setColor("RANDOM")
        .setThumbnail(user.displayAvatarURL)
        .setTimestamp();
    return interaction.reply({embeds:embed});
    }
};
