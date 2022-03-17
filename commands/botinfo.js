const { MessageEmbed } = require("discord.js");
exports.execute = async (client, message, args) => {
  let id=""
  for(let i=0;i<30;i++)
    {
      let temp=`${args[i]}`
      if(temp!=`undefined`)
        {
          let temp2=`${args[i+1]}`
          if(temp2!=`undefined`)
            {
        id+=`${args[i]} `
            }
          else
            {
        id+=`${args[i]}`}
        }
      else
        {
          break;
        }
    }
    if (!client.config.admins.includes(message.author.id)) return message.reply("**Only bot administrators.**"); // return if author isn't bot owner
  let serverformat=String(client.guilds.cache.size).replace(/(.)(?=(\d{3})+$)/g,'$1,')
  let userformat=String(client.guilds.cache.map((g) => g.memberCount).reduce((a, c) => a + c)).replace(/(.)(?=(\d{3})+$)/g,'$1,')
const embed = new MessageEmbed()
        .setTitle(`Bot Info`)
       .addField(`Servers:`,serverformat)
       .addField(`Users:`,userformat)
let servernames=""
client.guilds.cache.forEach(guild => {
  if(guild.id==id)
    {
   embed.addField(`Find Server:`,`\`${guild.name} | ${guild.id}\``)
    }
  if(guild.name==id)
    {
   embed.addField(`Find Server:`,`\`${guild.name} | ${guild.id}\``)
    }
})
  message.channel.send(embed);
  
}

exports.help = {
    name: "botinfo",
    aliases: ["botinfo","BOTINFO"],
    usage: `botinfo`
}
