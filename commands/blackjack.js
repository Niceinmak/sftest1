const { MessageEmbed } = require("discord.js");
        _ = require("lodash");
exports.execute = async (client, message, args) => {
  let users = [
        "Pocket",
        "T-Shirt",
        "Zero's Databse",
        "Street"
    ];
    let amount = Math.floor(Math.random() * 200)+50;
    let amount3 = args[0]
    const embed = new MessageEmbed()
        .setTitle(`Test`)
  message.channel.send(embed);

  
}

exports.help = {
    name: "bj",
    aliases: [],
    usage: `bj`
}
function drawCard() {
    icons = ['♥️','♠️','♦️','♣️']
    suite = _.random(0,3);
    card = _.random(0,12);
    return [require('../enum/cards')['cardDeck'][suite][card] , icons[suite]];
}