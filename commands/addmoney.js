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
    let buttonurl = new MessageButton()
  .setStyle('url')
    .setURL("https://discord.gg/2n9Zg9BGgY")
  .setLabel('Support Server') 
  .setDisabled(false);
   let buttonurl2 = new MessageButton()
  .setStyle('url')
    .setURL("http://ecoverse.ml/")
  .setLabel('Go to Website') 
  .setDisabled(false);
 message.channel.send({ buttons: [buttonagree, buttonurl, buttonurl2], embed: embed }).then(message => { // Send Embed And Buttons
                const filter = (button) => button.clicker.user.id === userid // To Check If User Who Clicked Button Is Same As Who Used Command
                const collector = message.createButtonCollector(filter, { time: 300000 }) // 30 Seconds To Click
                collector.on('collect', async button => {
                  if(button.id === '1') { // If User Click Yes Button
                   button.reply.defer()
                  buttonagree.setDisabled(true);
                    embed.setAuthor("Thanks")
                  embed.setDescription("**You have accepted the Terms Of Use & Privacy Policy!**");
                  message.edit({ buttons: [buttonagree, buttonurl, buttonurl2], embed: embed })
                  
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
