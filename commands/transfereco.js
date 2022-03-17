const { MessageEmbed } = require("discord.js");
const { MessageButton } = require('discord-buttons')
exports.execute = async (client, message, args) => {
  let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) 
  let authorid=message.author.id
  let authordata = client.eco.fetchMoney(`${message.author.id}11`);
  if (!member) return message.channel.send('Please mention the person or give their ID') 
  let amount = args[1]
  if (!amount || isNaN(amount)) return message.channel.send('Please enter a valid amount to transfer') 
  if(authordata.amount < amount) return message.channel.send('Looks like you don\'t have that much EcoCoin') 
  if(message.author.id==member.id) return message.channel.send("You **can't** send money to yourself :D")
  if (client.config.admins.includes(message.author.id))
    {
     if(message.author.id==process.env.OWNER_ID)
    {
      await client.eco.transfer(`${message.author.id}11`, `${member.id}11`, amount) 
  let amountformat=String(amount).replace(/(.)(?=(\d{3})+$)/g,'$1,')
  return message.channel.send(`You have successfully transferred **${amountformat}** EcoCoin to ** ${member.user.tag}**.`)
    }
      else if(amount<200)
             {
        await client.eco.transfer(`${message.author.id}11`, `${member.id}11`, amount) 
  let amountformat=String(amount).replace(/(.)(?=(\d{3})+$)/g,'$1,')
  return message.channel.send(`You have successfully transferred **${amountformat}** EcoCoin to ** ${member.user.tag}**.`)
         }
    else
      {
        message.reply("Confirmation is required for some money transfers.Request sent, waiting for return...")
        const embed = new MessageEmbed()
        .setTitle(`Transfer (EcoCoin) Request`)
        .addField(`User`, `${message.author.tag} (${message.author.id})`)
        .addField(`To`, `${member.user.tag} (${member.id})`)
        .addField(`Amount`, `${amount} EcoCoin`)
        .setColor("RANDOM")
        .setTimestamp();
          let buttonagree = new MessageButton()
  .setStyle('1')
  // .setStyle('red')
  // .setStyle('blue')
  .setLabel('I Agree!') 
  .setID('1') 
  .setDisabled(false);
        let buttondeny= new MessageButton()
  .setStyle('1')
  // .setStyle('red')
  // .setStyle('blue')
  .setLabel('I Deny!') 
  .setID('2') 
  .setDisabled(false);
        const channel = client.channels.cache.get(process.env.REQUEST_CHANNEL)
        const channel1 = client.channels.cache.get(message.channel.id)
 channel.send({ buttons: [buttonagree, buttondeny], embed: embed }).then(message => { // Send Embed And Buttons
                const filter = (button) => button.clicker.user.id === process.env.OWNER_ID // To Check If User Who Clicked Button Is Same As Who Used Command
                const collector = message.createButtonCollector(filter, { time: 600000 }) // 30 Seconds To Click
                collector.on('collect', async button => {
                  if(button.id === '1') { // If User Click Yes Button
                   button.reply.defer()
                  buttonagree.setDisabled(true);
                    buttondeny.setDisabled(true);
                  message.edit({ buttons: [buttonagree, buttondeny], embed: embed })
                  await client.eco.transfer(`${message.author.id}11`, `${member.id}11`, amount) 
  let amountformat=String(amount).replace(/(.)(?=(\d{3})+$)/g,'$1,')
  return channel1.send(`You have successfully transferred **${amountformat}** EcoCoin to ** ${member.user.tag}**.`)
                    }
                  else
                    {
                      button.reply.defer()
                      buttonagree.setDisabled(true);
                    buttondeny.setDisabled(true);
                  message.edit({ buttons: [buttonagree, buttondeny], embed: embed })
                      channel1.send("**The request was denied.**");
                    }
                })
 //collector.on('end', collected => console.log(`Collected ${collected.size} items`));
            })
      }
    }
  else
    {
      await client.eco.transfer(`${message.author.id}11`, `${member.id}11`, amount) 
  let amountformat=String(amount).replace(/(.)(?=(\d{3})+$)/g,'$1,')
  return message.channel.send(`You have successfully transferred **${amountformat}** EcoCoin to ** ${member.user.tag}**.`)
    }
  
}
exports.help = {
  name: "transfereco",
  aliases: ["SENDECO","TRANSFERECO","sendeco"],
  usage: `transfereco <member> <amount>`
};
