exports.execute = async (client, message, args) => {
  let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) 
  let authordata = client.eco.fetchMoney(message.author.id) 
  if (!member) return message.channel.send('Please mention the person or give their ID') 
  let amount = args[1]
  if (!amount || isNaN(amount)) return message.channel.send('Please enter a valid amount to transfer') 
  if(authordata.amount < amount) return message.channel.send('Looks like you don\'t have that much money') 
  if(message.author.id==member.id) return message.channel.send("You **can't** send money to yourself :D")
  await client.eco.transfer(message.author.id, member.id, amount) 
  let amountformat=String(amount).replace(/(.)(?=(\d{3})+$)/g,'$1,')
  return message.channel.send(`You have successfully transferred 💶**${amountformat}** to ** ${member.user.tag}**.`)
}
exports.help = {
  name: "transfer",
  aliases: ['give', 'share', 'send',"SEND","TRANSFER"],
  usage: `transfer <member> <amount>`
};
