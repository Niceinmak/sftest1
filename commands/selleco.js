const btcValue = require('btc-value');
exports.execute = async (client, message, args) => {
  btcValue().then(value => {
value = value.toString().slice(0,3);
  let authordata = client.eco.fetchMoney(message.author.id) 
  let amount = args[0]
  if(amount=="all") amount=authordata.amount
  if(amount=="half") amount=authordata.amount/2
  if (!amount || isNaN(amount) || amount<1) return message.reply(`**Please enter a valid amount to sell**`)
  client.eco.removeMoney(`${message.author.id}11`, parseInt(amount));
  client.eco.addMoney(message.author.id, parseInt(amount*value));
  let amountformat=String(amount).replace(/(.)(?=(\d{3})+$)/g,'$1,')
  return message.channel.send(`**Transaction successful! You bought ${amountformat} EcoCoin🌿.**`)
});
}
exports.help = {
  name: "buyeco",
  aliases: ['BUYECO', 'buyecocoin'],
  usage: `buyeco <amount>`
};
