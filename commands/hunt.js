const { MessageEmbed } = require("discord.js");

exports.execute = async (client, message, args) => {
  let animals = [
    "<:ant:948264757000040460>",
"<:bear:948264822926094426>",
"<:bird:948264810980732988>",
"<:bison:948264912818429962>",
"<:cat1:948265025850724372>",
"<:deer:948264928387674213>",
"<:dodo:948264775639519232>",
"<:fox:948265002492624976>",
"<:goat:948264872850886687>",
"<:god:948265037313757184>",
"<:gorilla:948265050538377226>", 
"<:horse:948264952198746112>",
"<:koala:948264836322721862>",
"<:leopard:948264964597121146>",
"<:llama:948264865552818196>",
"<:monkey:948265059686174871>",
"<:mouse:948264854551162910>",
"<:ox:948264893629480981>",
"<:penguin:948264801698717728>",
"<:pig:948264880417439804>",
"<:rabbit:948264845520801882>",
"<:tiger:948264974856388639>" ,
"<:trex1:948264765866786907>"
  ]
  let userBalance = client.eco.fetchMoney(message.author.id);
  if (userBalance.amount < 3) return message.channel.send("Looks like you are poor.");
  let item = animals[Math.floor(Math.random() * animals.length)];
  if (!item) return message.channel.send("What are you trying to buy?");
  let hasItem = client.shop[item];
  if (!hasItem || hasItem == undefined) return message.reply("That item doesnt exists lol");
  let isBalanceEnough = (userBalance.amount >= hasItem.cost);
  if (!isBalanceEnough) return message.reply("Your balance is insufficient. You need :dollar: "+hasItem.cost+" to buy this item.");
  let buy = client.eco.removeMoney(message.author.id, hasItem.cost);
  
  let itemStruct = {
    name: item.toLowerCase(),
    prize: hasItem.cost
  };
  
  client.db.push(`items_${message.author.id}`, itemStruct);
  return message.channel.send(`You purchased **${item}** for **:dollar: ${hasItem.cost}**.`);
};

exports.help = {
  name: "hunt",
  aliases: ["HUNT","h"],
  usage: `hunt`
};
