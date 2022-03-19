const { MessageEmbed,MessageButton,MessageActionRow } = require('discord.js');

module.exports = {
    description: 'Transfer Money',
    options: [
        {
            name: 'receiver',
            description: 'Select a user',
            type: 'USER',
            required: true
        },
       {
            name: 'amount',
            description: 'Select amount',
            type: 'INTEGER',
            required: true
        },
    ],
    run: async (client, interaction) => {
    let member = interaction.options.getUser('receiver')
  let authorid=interaction.user.id
  let authordata = client.eco.fetchMoney(interaction.user.id) 
  if (!member) return interaction.reply('Please mention the person or give their ID') 
  let amount = interaction.options.getUser('amount')
  if (!amount || isNaN(amount)) return interaction.reply('Please enter a valid amount to transfer') 
  if(authordata.amount < amount) return interaction.reply('Looks like you don\'t have that much money') 
  if(interaction.user.id==member.id) return interaction.reply("You **can't** send money to yourself :D")
      await client.eco.transfer(interaction.user.id, member.id, amount) 
  let amountformat=String(amount).replace(/(.)(?=(\d{3})+$)/g,'$1,')
  return interaction.reply(`You have successfully transferred 💶**${amountformat}** to ** ${member.user.tag}**.`)
    }
};
