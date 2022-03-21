const { MessageEmbed,MessageButton,MessageActionRow } = require('discord.js');
const btcValue = require('btc-value');
module.exports = {
    description: 'Want to browse EcoCoin?',
    run: async (client, interaction) => {
        let ecocoin=0
    let amount = Math.floor(Math.random() * 200)+50;
    const embed = new MessageEmbed()
    btcValue().then(value => {
      let value1=value
      value1 = value1.toString().slice(0,3);
    ecocoin=value1
        
        embed.setTitle(`**EcoCoin🌿**`)
        embed.setDescription(`**EcoCoin instant price:** \`${ecocoin}\``)
  

btcValue.getPercentageChangeLastDay().then(percentage => {
  embed.addField(`**Percentage compared to last day:**`,`**%${percentage.toString().slice(0,5)}**`)

  embed.addField(`\`Note\` **This coin can only be used in-game.**`,`**Cannot be bought and sold in real life**`)
  return interaction.reply({embeds:[embed]});
      });
      });
    }
};
