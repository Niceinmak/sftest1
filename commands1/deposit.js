exports.execute = async (client, message, args) => {
  let authordata = client.eco.fetchMoney(message.author.id) 
  let amount = args[0]
  if (!amount || isNaN(amount) || amount<1) return message.reply(`**Please enter a valid amount to transfer**`) 
  if(authordata.amount < amount) return message.reply('**Looks like you don\'t have that much money**') 
  client.eco.removeMoney(message.author.id, parseInt(amount));
  client.eco.addMoney(`${message.author.id}10`, parseInt(amount));
  let amountformat=String(amount).replace(/(.)(?=(\d{3})+$)/g,'$1,')
  return message.channel.send(`You have successfully deposit 💶**${amountformat}** to **🏦BANK**.`)
}
exports.help = {
  name: "deposit",
  aliases: ['dep', 'DEPOSIT'],
  usage: `deposit <amount>`
};
