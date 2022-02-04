exports.execute = async (client, message, args) => {
  let authordata = client.eco.fetchMoney(message.author.id) 
  let amount = args[0]
  if (!amount || isNaN(amount)) return message.channel.send(`Please enter a valid amount to transfer,${amount}`) 
  if(authordata.amount < amount) return message.channel.send('Looks like you don\'t have that much money') 
  client.eco.removeMoney(message.author.id, parseInt(amount));
  client.eco.addMoney(`${message.author.id}_bank`, parseInt(amount));
  let amountformat=String(amount).replace(/(.)(?=(\d{3})+$)/g,'$1,')
  return message.channel.send(`You have successfully transferred 💶**${amountformat}** to ** ${message.author.tag}**.`)
}
exports.help = {
  name: "deposit",
  aliases: ['dep', 'DEPOSIT'],
  usage: `deposit <amount>`
};
