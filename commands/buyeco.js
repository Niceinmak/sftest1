const btcValue = require('btc-value');
exports.execute = async (client, message, args) => {
  let timecooldown = Math.floor(Math.random() * 200)+50;
    let playtime = await client.eco.beg(client.ecoAddUser, timecooldown,{cooldown: 5000});
    if (playtime.onCooldown) return message.reply(`**Take it slow,wait ${playtime.time.seconds} more seconds**`);
   let data2= client.eco.removeMoney(message.author.id, parseInt(timecooldown));
  btcValue().then(value => {
value = value.toString().slice(0,3);
  let authordata = client.eco.fetchMoney(message.author.id) 
  let amount = args[0]
  if(amount=="all") amount=authordata.amount
  if(amount=="half") amount=authordata.amount/2
  if (!amount || isNaN(amount) || amount<1) return message.reply(`**Please enter a valid amount to buy**`) 
  if(authordata.amount < amount*value) return message.reply(`**Looks like you don\'t have that much money,You need to have ${amount*value}💶 to do this operation.**`) 
  client.eco.removeMoney(message.author.id, parseInt(amount*value));
  client.eco.addMoney(`${message.author.id}11`, parseInt(amount));
  let amountformat=String(amount).replace(/(.)(?=(\d{3})+$)/g,'$1,')
  return message.channel.send(`**Transaction successful! You bought ${amountformat} EcoCoin🌿.**`)
});
}
exports.help = {
  name: "buyeco",
  aliases: ['BUYECO', 'buyecocoin'],
  usage: `buyeco <amount>`
};
