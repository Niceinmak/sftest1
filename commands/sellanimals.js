const { MessageEmbed } = require("discord.js");

exports.execute = async (client, message, args) => {
  let userBalance = client.eco.fetchMoney(message.author.id);
  let itemname=" "
  let item = args[0];
  let commonanimals = [
        "<:god:948265037313757184>",
        "<:cat1:948265025850724372>",
        "<:fox:948265002492624976>",
        "<:bison:948264912818429962>",
    ];
  let uncommonanimals = [
        "<:tiger:948264974856388639>",
        "<:leopard:948264964597121146>",
        "<:horse:948264952198746112>",
    ];
  let rareanimals = [
        "<:deer:948264928387674213>",
        "<:ox:948264893629480981>",
        "<:pig:948264880417439804>",
        "<:goat:948264872850886687>",
    ];
  let epicanimals = [
        "<:llama:948264865552818196>",
        "<:mouse:948264854551162910>",
        "<:rabbit:948264845520801882>",
        "<:koala:948264836322721862>",
        "<:bear:948264822926094426>",
    ];
  let legendaryanimals = [
        "<:bird:948264810980732988>",
        "<:penguin:948264801698717728>",
        "<:dodo:948264775639519232>",
        "<:trex1:948264765866786907>",
        "<:ant:948264757000040460>",
    ];
  let test=""
  let x = client.db.get(`animals_${message.author.id}`);
    if (!x) {
    return message.channel.send(`${message.author.tag} | Animals not found`);
  }
  let tempcount=0
  let count=0
  const arrayToObject = x.reduce((itemStruct, x) => {
    if(x.name==item) count=tempcount
    itemStruct[x.name] = (itemStruct[x.name] || 0) + 1;
    console.log(x.name,itemStruct[x.name])
    tempcount+=x.prize
    return itemStruct;
  }, {});
  const result = Object.keys(arrayToObject).map(k =>
       itemname+=k+" "+arrayToObject[k]+" "
  //   message.channel.send(`**${k} Kasasını Sattın ve ${randomcash},${quantity*randomcash}💶 kazandın.${quantity}$,${count1},${itemname},,,${agr1},,,${agr2},,,${agr3}**`)
  );
  var argString = x.toString().substring(1).split(",");
  console.log(arrayToObject)  
//  console.log(arrayToObject.slice(0).join(' '))
  client.db.set(`animals_${message.author.id}`, x)
  var keyToDelete = '<:cat1:948265025850724372>';
  //x.splice(1,1);
  console.log(x)
  console.log(count)
    let amount = Math.floor(Math.random() * 200)+50;
    let amount3 = args[0]
    //console.log(itemname)
    const embed = new MessageEmbed()
        .setTitle(`Test`)
  message.channel.send(embed);
  
}

exports.help = {
    name: "sellanimals",
    aliases: ["sellanimal","sellanimals"],
    usage: `sellanimals <animal>`
}
