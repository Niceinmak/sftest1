exports.execute = async (client, message, args) => {
  let authordata = client.eco.fetchMoney(message.author.id) 
  let amount = args[0]
  let userBalance = client.eco.fetchMoney(`${message.author.id}10`);
  if (!amount || isNaN(amount) || amount<1) return message.reply(`**Please enter a valid amount to transfer**`) 
  if(amount>userBalance.amount) return message.reply('**Looks like you don\'t have that much money in the bank**') 
  client.eco.addMoney(message.author.id, parseInt(amount));
  client.eco.removeMoney(`${message.author.id}10`, parseInt(amount));
  let amountformat=String(amount).replace(/(.)(?=(\d{3})+$)/g,'$1,')
  return message.channel.send(`You have successfully withdraw 💶**${amountformat}** to **🏦BANK**.`)
}
exports.help = {
  name: "withdraw",
  aliases: ['WITHDRAW'],
  usage: `withdraw <amount>`
};
