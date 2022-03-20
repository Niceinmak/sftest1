const { MessageEmbed,MessageButton,MessageActionRow } = require('discord.js');

module.exports = {
    description: 'Withdraw into bank account',
  options: [
       {
            name: 'amount',
            description: 'Select amount',
            type: 'INTEGER',
            required: true
        },
    ],
    run: async (client, interaction) => {
  let authordata = client.eco.fetchMoney(interaction.user.id) 
  let amount = interaction.options.getInteger('amount')
  let userBalance = client.eco.fetchMoney(`${interaction.user.id}10`);
  if (!amount || isNaN(amount) || amount<1) return interaction.reply(`**Please enter a valid amount to transfer**`) 
  if(amount>userBalance.amount) return interaction.reply('**Looks like you don\'t have that much money in the bank**') 
  client.eco.addMoney(interaction.user.id, parseInt(amount));
  client.eco.removeMoney(`${interaction.user.id}10`, parseInt(amount));
  let amountformat=String(amount).replace(/(.)(?=(\d{3})+$)/g,'$1,')
  return interaction.reply(`You have successfully withdraw 💶**${amountformat}** to **🏦BANK**.`)
    }
};
