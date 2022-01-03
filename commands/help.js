const { MessageEmbed } = require("discord.js");

exports.execute = async (client, message, args) => {
    const embed = new MessageEmbed()
        .setAuthor("Komutlar")
        .setTitle("Sofait Bot Komutları")
     //   .setURL("https://www.youtube.com/channel/UCF9E-xef9jL9QgziZRDHKKQ")
        .setDescription(`Komut Sayısı: ${client.commands.size}`)
        .setColor("BLURPLE")
        .setTimestamp()
        .setThumbnail(client.user.displayAvatarURL)
        .setFooter(message.author.tag, message.author.displayAvatarURL);
  let economyname=""
  let economyaliases=""
  let economyusage=""
  let economyfull=""
  let amount3 = args[0]
 /*   client.commands.forEach(cmd => {
        embed.addField(`${cmd.help.name}`, `Komut: ${cmd.help.aliases.join(", ") || "None"}\nKullanım: \`${client.prefix}${cmd.help.usage}\``, true);
    }); */
  if(amount3==null)
    {
  client.commands.forEach(cmd => {
     //   embed.addField(`\`${client.prefix}${cmd.help.usage}\``,true);
    economyname+=` \`${cmd.help.name}\` `
  //  economyusage+=` \`${client.prefix}${cmd.help.usage}\` `
    }); 
  embed.setDescription(`**Economy💰**\n${economyname}`);
    return message.channel.send(embed);
    }
  else
    {

        client.commands.forEach(cmd => {
     //   embed.addField(`\`${client.prefix}${cmd.help.usage}\``,true);
    economyname+=` \`${cmd.help.name}\` `
    }); 
  var argString = economyname.substring(1).split(' ');
      let counter=0
      for (var i = 0; i <= client.commands.size; i++) {
        embed.addField(argString[i])
      if(amount3==argString[i])
      {
        counter++
       } 
        }
      if(counter>0)
        {
        embed.setDescription(`**Economy💰**\n${economyname},`);
        }
          
 // let argString = itemname.substr( itemname.indexOf(' ') + 1 );
      
      return message.channel.send(embed);
    }
}

exports.help = {
    name: "help",
    aliases: ["h"],
    usage: `help`
}
