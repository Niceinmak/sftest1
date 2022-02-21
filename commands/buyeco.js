const btcValue = require('btc-value');
exports.execute = async (client, message, args) => {
  btcValue().then(value => {


  let authordata = client.eco.fetchMoney(message.author.id) 
  let amount = args[0]
  if (!amount || isNaN(amount) || amount<1 || amount!="all" || amount!="half") return message.reply(`**Please enter a valid amount to transfer**`) 
  if(amount=="all") amount=authordata.amount
  if(amount=="half") amount=authordata.amount/2
  if(authordata.amount < amount*value) return message.reply(`**Looks like you don\'t have that much money,You need to have ${amount*value} coins to do this operation.**`) 
  client.eco.removeMoney(message.author.id, parseInt(amount*value));
  client.eco.addMoney(`${message.author.id}11`, parseInt(amount));
  let amountformat=String(amount).replace(/(.)(?=(\d{3})+$)/g,'$1,')
  return message.channel.send(`You have successfully deposit 💶**${amountformat}** to **🏦BANK**.`)
});
}
exports.help = {
  name: "buyeco",
  aliases: ['BUYECO', 'buyecocoin'],
  usage: `buyeco <amount>`
};
