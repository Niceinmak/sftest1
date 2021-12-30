exports.execute = async (client, message, args) => {
  let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) 
  let authordata = client.eco.fetchMoney(message.author.id) 
  if (!member) return message.channel.send('Kime para göndermek istiyorsun?') 
  let amount = args[1]
  if (!amount || isNaN(amount)) return message.channel.send('Lütfen geçerli bir miktar giriniz') 
  if(authordata.amount < amount) return message.channel.send('Görünüşe göre senin o kadar paran yok') 
  await client.eco.transfer(message.author.id, member.id, amount) 
  return message.channel.send(`Gönderme işlemi başarılı **${amount}**💶 parayı ** ${member.user.tag}** kişisine gönderdin.`)
}
exports.help = {
  name: "transfer",
  aliases: ['give', 'share', 'send'],
  usage: `transfer <member> <amount>`
};
