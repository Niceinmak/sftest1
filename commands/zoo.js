const anyLength = require('any-length');
const { MessageEmbed } = require("discord.js");
exports.execute = async (client, message, args) => {
  let timecooldown = Math.floor(Math.random() * 200)+50;
    let playtime = await client.eco.work(client.ecoAddUser, timecooldown,{cooldown: 5000});
    const user1 = message.member.user
    if (playtime.onCooldown) return message.reply(`**Take it slow,wait ${playtime.time.seconds} more seconds**`);
    let data2= client.eco.removeMoney(message.author.id, parseInt(timecooldown));
  let userBalance = client.eco.fetchMoney(`${message.author.id}12`);
  let userBalanceformat=String(userBalance.amount).replace(/(.)(?=(\d{3})+$)/g,'$1,')
  let user =message.author;
  let commoncount=0
  let commonname=""
  let commonanimals = [
        "<:god:948265037313757184>",
        "<:cat1:948265025850724372>",
        "<:fox:948265002492624976>",
        "<:bison:948264912818429962>",
    ];
  let uncommoncount=0
  let uncommonname=""
  let uncommonanimals = [
        "<:tiger:948264974856388639>",
        "<:leopard:948264964597121146>",
        "<:horse:948264952198746112>",
    ];
  let rarecount=0
  let rarename=""
  let rareanimals = [
        "<:deer:948264928387674213>",
        "<:ox:948264893629480981>",
        "<:pig:948264880417439804>",
        "<:goat:948264872850886687>",
    ];
  let epiccount=0
  let epicname=""
  let epicanimals = [
        "<:llama:948264865552818196>",
        "<:mouse:948264854551162910>",
        "<:rabbit:948264845520801882>",
        "<:koala:948264836322721862>",
        "<:bear:948264822926094426>",
    ];
  let legendarycount=0
  let legendaryname=""
  let legendaryanimals = [
        "<:bird:948264810980732988>",
        "<:penguin:948264801698717728>",
        "<:dodo:948264775639519232>",
        "<:trex1:948264765866786907>",
        "<:ant:948264757000040460>",
    ];
  let all=``
  const x = client.db.get(`animals_${message.author.id}`);
  if (!x) {
    return message.channel.send(`No Animals Found To Display :c`);
  }
  const arrayToObject = x.reduce((itemsobj, x) => {
    itemsobj[x.name] = (itemsobj[x.name] || 0) + 1;
    return itemsobj;
  }, {});
  const result = Object.keys(arrayToObject).map(k =>
    all+=`${k} ${arrayToObject[k]} `
    //embed.addField(`Name: ${k}`, `Quantity:**${arrayToObject[k]}**`, false)
  );
  let lenght1=anyLength(all)
  var args = all.split(' ')
  let argslenght=(anyLength(args))-1
  let t=``
  for(var j=0;j<argslenght;j++){
   
    t=args[j]
    var args = all.split(' ');
   for (var i = 0; i < commonanimals.length; i++) {
     if(args[j]==commonanimals[i])
      {
        let tempnumber=""
        if(args[j+1]=="0")
          {
            tempnumber="⁰⁰"
          }
        else if(args[j+1]=="1")
          {
            tempnumber="⁰¹"
          }
        else if(args[j+1]=="2")
          {
            tempnumber="⁰²"
          }
        else if(args[j+1]=="3")
          {
            tempnumber="⁰³"
          }
        else if(args[j+1]=="4")
          {
            tempnumber="⁰⁴"
          }
        else if(args[j+1]=="5")
          {
            tempnumber="⁰⁵"
          }
        else if(args[j+1]=="6")
          {
            tempnumber="⁰⁶"
          }
        else if(args[j+1]=="7")
          {
            tempnumber="⁰⁷"
          }
        else if(args[j+1]=="8")
          {
            tempnumber="⁰⁸"
          }
        else if(args[j+1]=="9")
          {
            tempnumber="⁰⁹"
          }
        else
          {
            tempnumber="⁹⁺"
          }
        commonname+=`${args[j]} ${tempnumber} `
        commoncount++
      }
    } 
    for (var i = 0; i < uncommonanimals.length; i++) {
     if(args[j]==uncommonanimals[i])
      {
        let tempnumber=""
        if(args[j+1]=="0")
          {
            tempnumber="⁰⁰"
          }
        else if(args[j+1]=="1")
          {
            tempnumber="⁰¹"
          }
        else if(args[j+1]=="2")
          {
            tempnumber="⁰²"
          }
        else if(args[j+1]=="3")
          {
            tempnumber="⁰³"
          }
        else if(args[j+1]=="4")
          {
            tempnumber="⁰⁴"
          }
        else if(args[j+1]=="5")
          {
            tempnumber="⁰⁵"
          }
        else if(args[j+1]=="6")
          {
            tempnumber="⁰⁶"
          }
        else if(args[j+1]=="7")
          {
            tempnumber="⁰⁷"
          }
        else if(args[j+1]=="8")
          {
            tempnumber="⁰⁸"
          }
        else if(args[j+1]=="9")
          {
            tempnumber="⁰⁹"
          }
        else
          {
            tempnumber="⁹⁺"
          }
        uncommonname+=`${args[j]} ${tempnumber} `
        uncommoncount++
      }
    } 
    for (var i = 0; i < rareanimals.length; i++) {
     if(args[j]==rareanimals[i])
      {
        let tempnumber=""
        if(args[j+1]=="0")
          {
            tempnumber="⁰⁰"
          }
        else if(args[j+1]=="1")
          {
            tempnumber="⁰¹"
          }
        else if(args[j+1]=="2")
          {
            tempnumber="⁰²"
          }
        else if(args[j+1]=="3")
          {
            tempnumber="⁰³"
          }
        else if(args[j+1]=="4")
          {
            tempnumber="⁰⁴"
          }
        else if(args[j+1]=="5")
          {
            tempnumber="⁰⁵"
          }
        else if(args[j+1]=="6")
          {
            tempnumber="⁰⁶"
          }
        else if(args[j+1]=="7")
          {
            tempnumber="⁰⁷"
          }
        else if(args[j+1]=="8")
          {
            tempnumber="⁰⁸"
          }
        else if(args[j+1]=="9")
          {
            tempnumber="⁰⁹"
          }
        else
          {
            tempnumber="⁹⁺"
          }
        rarename+=`${args[j]} ${tempnumber} `
        rarecount++
      }
    } 
    for (var i = 0; i < epicanimals.length; i++) {
     if(args[j]==epicanimals[i])
      {
        let tempnumber=""
        if(args[j+1]=="0")
          {
            tempnumber="⁰⁰"
          }
        else if(args[j+1]=="1")
          {
            tempnumber="⁰¹"
          }
        else if(args[j+1]=="2")
          {
            tempnumber="⁰²"
          }
        else if(args[j+1]=="3")
          {
            tempnumber="⁰³"
          }
        else if(args[j+1]=="4")
          {
            tempnumber="⁰⁴"
          }
        else if(args[j+1]=="5")
          {
            tempnumber="⁰⁵"
          }
        else if(args[j+1]=="6")
          {
            tempnumber="⁰⁶"
          }
        else if(args[j+1]=="7")
          {
            tempnumber="⁰⁷"
          }
        else if(args[j+1]=="8")
          {
            tempnumber="⁰⁸"
          }
        else if(args[j+1]=="9")
          {
            tempnumber="⁰⁹"
          }
        else
          {
            tempnumber="⁹⁺"
          }
        epicname+=`${args[j]} ${tempnumber} `
        epiccount++
      }
    }
    for (var i = 0; i < legendaryanimals.length; i++) {
     if(args[j]==legendaryanimals[i])
      {
        let tempnumber=""
        if(args[j+1]=="0")
          {
            tempnumber="⁰⁰"
          }
        else if(args[j+1]=="1")
          {
            tempnumber="⁰¹"
          }
        else if(args[j+1]=="2")
          {
            tempnumber="⁰²"
          }
        else if(args[j+1]=="3")
          {
            tempnumber="⁰³"
          }
        else if(args[j+1]=="4")
          {
            tempnumber="⁰⁴"
          }
        else if(args[j+1]=="5")
          {
            tempnumber="⁰⁵"
          }
        else if(args[j+1]=="6")
          {
            tempnumber="⁰⁶"
          }
        else if(args[j+1]=="7")
          {
            tempnumber="⁰⁷"
          }
        else if(args[j+1]=="8")
          {
            tempnumber="⁰⁸"
          }
        else if(args[j+1]=="9")
          {
            tempnumber="⁰⁹"
          }
        else
          {
            tempnumber="⁹⁺"
          }
        legendaryname+=`${args[j]} ${tempnumber} `
        legendarycount++
      }
    } 
    if(j+1==argslenght){
          if(commoncount!=5){
            for(i=commoncount;i<5;i++){
              commonname+=`<:none:949563964843499520> ⁰⁰ `
            }
          }
        }
    if(j+1==argslenght){
          if(uncommoncount!=5){
            for(i=uncommoncount;i<5;i++){
              uncommonname+=`<:none:949563964843499520> ⁰⁰ `
            }
          }
        }
    if(j+1==argslenght){
          if(rarecount!=5){
            for(i=rarecount;i<5;i++){
              rarename+=`<:none:949563964843499520> ⁰⁰ `
            }
          }
        }
    if(j+1==argslenght){
          if(epiccount!=5){
            for(i=epiccount;i<5;i++){
              epicname+=`<:none:949563964843499520> ⁰⁰ `
            }
          }
        }
    if(j+1==argslenght){
          if(legendarycount!=5){
            for(i=legendarycount;i<5;i++){
              legendaryname+=`<:none:949563964843499520> ⁰⁰ `
            }
          }
        }
  }
  
  
  //common=common.substr(4)
//embed.setDescription(`<:common:949006743428542545>${common},${commonname},${argslenght},${t}`)
  message.channel.send(`**🌿 🌱${user.username}'s Zoo🌿 🌱
<:common:949006743428542545> ${commonname}
<:uncommon:949006765696098345> ${uncommonname}
<:rare:949006777519837225> ${rarename}
<:epic:949006791201652827> ${epicname}
<:legendary:949006805646864404> ${legendaryname}
  
Zoo Point:\`${userBalanceformat}\`**`)
};
exports.help = {
  name: "zoo",
  aliases: ["z","ZOO"],
  usage: `zoo`
};
