const { MessageEmbed,MessageButton,MessageActionRow } = require('discord.js');
const btcValue = require('btc-value');
module.exports = {
    description: 'Have you tried EcoCoin?',
  options: [
       {
            name: 'amount',
            description: 'Select amount',
            type: 'INTEGER',
            required: true
        },
    ],
    run: async (client, interaction) => {
     let timecooldown = Math.floor(Math.random() * 200)+50;
    let playtime = await client.eco.beg(client.ecoAddUser, timecooldown,{cooldown: 5000});
    if (playtime.onCooldown) return interaction.reply(`**Take it slow,wait ${playtime.time.seconds} more seconds**`);
   let data2= client.eco.removeMoney(interaction.user.id, parseInt(timecooldown));
  btcValue().then(value => {
value = value.toString().slice(0,3);
  let authordata = client.eco.fetchMoney(interaction.user.id) 
  let amount = interaction.options.getInteger('amount')
  if(amount=="all") amount=parseInt((authordata.amount/value))
  if(amount=="half") amount=parseInt((authordata.amount/value)/2)
  if (!amount || isNaN(amount) || amount<1) return interaction.reply(`**Please enter a valid amount to buy**`) 
  if(authordata.amount < amount*value) return interaction.reply(`**Looks like you don\'t have that much money,You need to have ${amount*value}💶 to do this operation.**`) 
  client.eco.removeMoney(interaction.user.id, parseInt(amount*value));
  client.eco.addMoney(`${interaction.user.id}11`, parseInt(amount));
  let amountformat=String(amount).replace(/(.)(?=(\d{3})+$)/g,'$1,')
  let amountformat2=String(amount*value).replace(/(.)(?=(\d{3})+$)/g,'$1,')
  return interaction.reply(`**Transaction successful! You bought ${amountformat} EcoCoin for ${amountformat2}💶.**`)
});
    }
};
