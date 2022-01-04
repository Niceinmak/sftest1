const { MessageEmbed } = require("discord.js");

exports.execute = async (client, message, args) => {
 /*   const embed = new MessageEmbed()
        .setAuthor("Commands")
        .setTitle("Sofait Bot Commands")
     //   .setURL("https://www.youtube.com/channel/UCF9E-xef9jL9QgziZRDHKKQ")
        .setDescription(`Total Commands: ${client.commands.size}`)
        .setColor("BLURPLE")
        .setTimestamp()
        .setThumbnail(client.user.displayAvatarURL)
        .setFooter(message.author.tag, message.author.displayAvatarURL);
    client.commands.forEach(cmd => {
        embed.addField(`${cmd.help.name}`, `Aliases: ${cmd.help.aliases.join(", ") || "None"}\nUsage: \`${client.prefix}${cmd.help.usage}\``, true);
    });
    return message.channel.send(embed); */
  
  //------------------------------------------------------------------------------------------------------------
      const embed = new MessageEmbed()
        .setAuthor("Commands")
        .setTitle("Sofait Bot Commands")
     //   .setURL("https://www.youtube.com/channel/UCF9E-xef9jL9QgziZRDHKKQ")
        .setDescription(`Total Commands: ${client.commands.size}`)
        .setColor("BLURPLE")
        .setTimestamp()
        .setThumbnail(client.user.displayAvatarURL)
        .setFooter(message.author.tag, message.author.displayAvatarURL);
  let economyname=""
  let economyaliases=""
  let utilityname=""
  let onlyadminsname=""
  let amount3 = args[0]
 /*   client.commands.forEach(cmd => {
        embed.addField(`${cmd.help.name}`, `Komut: ${cmd.help.aliases.join(", ") || "None"}\nKullanım: \`${client.prefix}${cmd.help.usage}\``, true);
    }); */
  if(amount3==null)
    {
  client.commands.forEach(cmd => {
     //   embed.addField(`\`${client.prefix}${cmd.help.usage}\``,true);
    if(cmd.help.name=="prefix" || cmd.help.name=="ping" || cmd.help.name=="uptime")
      {
        utilityname+=` \`${cmd.help.name}\` ` 
      }
    else if(cmd.help.name=="addmoney" || cmd.help.name=="setmoney")
      {
        onlyadminsname+=` \`${cmd.help.name}\` ` 
      }
    else
      {
       economyname+=` \`${cmd.help.name}\` ` 
      }
  //  economyusage+=` \`${client.prefix}${cmd.help.usage}\` `
    }); 
  embed.setDescription(`Here is the list of commands!\n**For more info on a specific command, use** \`${client.prefix} help <command>\`\n\n**Economy💰**\n${economyname}\n\n**Only Admins **🚫\n${onlyadminsname}\n\n**Utility**🔧\n${utilityname}`);
    return message.channel.send(embed);
    }
  else
    {

        client.commands.forEach(cmd => {
     //   embed.addField(`\`${client.prefix}${cmd.help.usage}\``,true);
    economyname+=` ${cmd.help.name}`
    }); 
  var argString = economyname.substring(1).split(' ');
      let counter=0
      let counter2=0
      let count=""
      for (var i = 0; i < client.commands.size; i++) {
        count+=argString[i]
      if(amount3==argString[i])
      {
        counter++
        break;
       } 
        counter2++
        }
      if(counter>0)
        {
          let cmdcounter=0
          client.commands.forEach(cmd => {
            if(counter2==cmdcounter)
              {
                embed.setDescription(`**Usage:**\`${client.prefix}${cmd.help.usage}\`\n**Aliases:**\`${cmd.help.aliases.join(", ") || "None"}\``);
              }
        cmdcounter++
    });
        }
      else
        {
          embed.setDescription(`The command you were looking for was not found`);
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
