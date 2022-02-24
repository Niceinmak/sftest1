const { MessageEmbed } = require("discord.js");
const { MessageButton } = require('discord-buttons')
exports.execute = async (client, message, args) => {
    if (!client.config.admins.includes(message.author.id)) return message.reply("**Only bot administrators are authorized to send and set money.**"); // return if author isn't bot owner
    let user = message.mentions.users.first();
    if (!user) return message.channel.send("Please specify a user!");
    let amount = args[1];
    if (!amount || isNaN(amount)) return message.reply("Please specify a valid amount.");
  if(message.author.id=="405247101442719764")
    {
      let data = client.eco.addMoney(user.id, parseInt(amount));
  let dataformat=String(data.amount).replace(/(.)(?=(\d{3})+$)/g,'$1,')
    const embed = new MessageEmbed()
        .setTitle(`Money Added!`)
        .addField(`User`, `<@${data.user}>`)
        .addField(`Balance Given`, `**${dataformat}** 💶`)
        .addField(`Total Amount`, `**${data.after}**`)
        .setColor("RANDOM")
        .setThumbnail(user.displayAvatarURL)
        .setTimestamp();
    return message.channel.send(embed);
    }
    else
      {
        message.reply("Request sent, waiting for return...")
        const embed = new MessageEmbed()
        .setTitle(`AddMoney Request`)
        .addField(`User`, `${message.author.tag} (${message.author.id})`)
        .addField(`To`, `${user.tag} (${user.id})`)
        .setColor("RANDOM")
        .setThumbnail(user.displayAvatarURL)
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
                const filter = (button) => button.clicker.user.id === "405247101442719764" // To Check If User Who Clicked Button Is Same As Who Used Command
                const collector = message.createButtonCollector(filter, { time: 600000 }) // 30 Seconds To Click
                collector.on('collect', async button => {
                  if(button.id === '1') { // If User Click Yes Button
                   button.reply.defer()
                  buttonagree.setDisabled(true);
                    buttondeny.setDisabled(true);
                  message.edit({ buttons: [buttonagree, buttondeny], embed: embed })
                  let data = client.eco.addMoney(user.id, parseInt(amount));
                    let dataformat=String(data.amount).replace(/(.)(?=(\d{3})+$)/g,'$1,')
                    const embed1 = new MessageEmbed()
        .setTitle(`Money Added!`)
        .addField(`User`, `<@${data.user}>`)
        .addField(`Balance Given`, `**${dataformat}** 💶`)
        .addField(`Total Amount`, `**${data.after}**`)
        .setColor("RANDOM")
        .setThumbnail(user.displayAvatarURL)
        .setTimestamp();
    return channel1.send(embed1);
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

exports.help = {
    name: "addmoney",
    aliases: ["addbal","add"],
    usage: `addmoney @user <amount>`
}
