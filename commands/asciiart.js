const { MessageEmbed } = require("discord.js");
const figlet = require("figlet");
exports.execute = async (client, message, args) => {
  let users = [
        "Pocket",
        "T-Shirt",
        "Zero's Databse",
        "Street"
    ];
    let text = args.join(" ");
   if (!text) {
      return message.channel.send(`\`Usage:${client.prefix}ascii <msg>\``);
    }
   let maxlen = 20;
    if (text.length > 20) {
      return message.channel.send(
        `Please put text that has 20 characters or less because the conversion won't be good!`
      );
    }
   figlet(text, function (err, data) {
      message.channel.send(data, {
        code: "AsciiArt",
      });
    });
  
}

exports.help = {
    name: "asciiart",
    aliases: ["ASCIIART"],
    usage: `asciiart`
}
