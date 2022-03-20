const { MessageEmbed,MessageButton,MessageActionRow } = require('discord.js');

module.exports = {
    description: 'Deposit into bank account',
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
  if (!amount || isNaN(amount) || amount<1) return interaction.reply(`**Please enter a valid amount to transfer**`) 
  if(authordata.amount < amount) return interaction.reply('**Looks like you don\'t have that much money**') 
  client.eco.removeMoney(interaction.user.id, parseInt(amount));
  client.eco.addMoney(`${interaction.user.id}10`, parseInt(amount));
  let amountformat=String(amount).replace(/(.)(?=(\d{3})+$)/g,'$1,')
  return interaction.reply(`You have successfully deposit 💶**${amountformat}** to **🏦BANK**.`)
    }
};
