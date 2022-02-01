const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const client = new Discord.Client()
const DBL = require("dblapi.js");
const dbl = new DBL(process.env.TOPGG_TOKEN, + client);
module.exports.execute = async (client, message, args) => {
  dbl.hasVoted(message.author.id).then(voted => {
    if (voted){
       message.reply(`b`);
    }
    else if (!voted){
     message.reply(`a`);
    }})
};

module.exports.help = {
    name: "vote",
    aliases: ["VOTE"],
    usage: "vote"
}