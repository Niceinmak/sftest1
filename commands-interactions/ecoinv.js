const { MessageEmbed,MessageButton,MessageActionRow } = require('discord.js');
const btcValue = require('btc-value');
module.exports = {
    description: 'Look Your EcoCoin Inventory',
    run: async (client, interaction) => {
    btcValue().then(value => {
    value=value.toString().slice(0,3);
    let user = interaction.user
    let userBalance = client.eco.fetchMoney(`${interaction.user.id}11`);
    let userBalanceformat=String(userBalance.amount).replace(/(.)(?=(\d{3})+$)/g,'$1,')
    let userBalanceformat2=String(userBalance.amount*value).replace(/(.)(?=(\d{3})+$)/g,'$1,')
    const embed = new MessageEmbed()
        .setTitle(`**EcoCoin🌿**`)
        .setDescription(`**EcoCoin: \`${userBalanceformat}\`\nPrice: \`${userBalanceformat2}\`**`)
        .addField(`Usage`,`Buy \`/buyeco\` \nSell\`/selleco\``)
        .addField(`\`Note\` **This coin can only be used in-game.**`,`**Cannot be bought and sold in real life**`)
        .setColor("RANDOM")
        .setThumbnail(user.displayAvatarURL)
        .setTimestamp();
    return interaction.reply({embeds:[embed]});
});
    }
};
