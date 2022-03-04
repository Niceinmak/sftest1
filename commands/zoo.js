const anyLength = require('any-length');
const { MessageEmbed } = require("discord.js");
exports.execute = async (client, message, args) => {
  let commonname=""
  let commonanimals = [
        "<:god:948265037313757184>",
    ];
  let common=``
  const embed = new MessageEmbed()
    .setAuthor(`Inventory of ${message.author.tag}`, message.guild.iconURL)
    .setColor("RANDOM")
    .setThumbnail()
    .setTimestamp();
  const x = client.db.get(`items_${message.author.id}`);
  if (!x) {
    return message.channel.send(`No Items Found To Display :c`);
  }
  const arrayToObject = x.reduce((itemsobj, x) => {
    itemsobj[x.name] = (itemsobj[x.name] || 0) + 1;
    return itemsobj;
  }, {});
  const result = Object.keys(arrayToObject).map(k =>
    common+=`${k} `
    //embed.addField(`Name: ${k}`, `Quantity:**${arrayToObject[k]}**`, false)
  );
  for (var i = 0; i < commonanimals.length; i++) {
    var args = common.split(' ');
     if(args[0]==commonanimals[i])
      {
        let lenght1=anyLength(args[0])
        commonname+=`${args[0]} `
        common=common.substr(lenght1)
      }
    }
  
  //common=common.substr(4)
embed.setDescription(`${common},${commonname}`)
  return message.channel.send(embed);
};
exports.help = {
  name: "zoo",
  aliases: ["z","ZOO"],
  usage: `zoo`
};
