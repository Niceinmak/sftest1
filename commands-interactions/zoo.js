const { MessageEmbed,MessageButton,MessageActionRow } = require('discord.js');
const anyLength = require('any-length');
let ms = require('ms')
let db = require('quick.db');
const wait = require('node:timers/promises').setTimeout;
module.exports = {
    description: 'Look Your Zoo!',
    run: async (client, interaction) => {
     await interaction.deferReply();
		await wait(10);
      const timeout = 5000;
  const cooldown = await db.fetch(`cooldown_zoo_${interaction.user.id}`);
      	if (cooldown !== null && timeout - (Date.now() - cooldown) > 0) {
		const time = ms(timeout - (Date.now() - cooldown));
          return interaction.editReply(`**Wait ${time} to message again**`)
	}
  db.set(`cooldown_zoo_${interaction.user.id}`, Date.now());
  let userBalance = client.eco.fetchMoney(`${interaction.user.id}12`);
  let userBalanceformat=String(userBalance.amount).replace(/(.)(?=(\d{3})+$)/g,'$1,')
  let user =interaction.user;
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
  const x = client.db.get(`animals_${interaction.user.id}`);
  if (!x || !x.toString()) {
    return interaction.editReply(`**There are no animals in your zoo :(**`);
  }
      console.log(x.toString())
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
  let zoopoint=0
  for(var j=0;j<argslenght;j++){
   
    t=args[j]
    var args = all.split(' ');
   for (var i = 0; i < commonanimals.length; i++) {
     if(args[j]==commonanimals[i])
      {
        zoopoint+=500
           let tempnumber=""
           if(args[j+1]<10)
             {
                       
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
        else
          {
            tempnumber="⁰⁹"
          }
             }
        else if(args[j+1]<100)
          {
        let arg1=args[j+1].substr(0,1);
        let arg2=args[j+1].substr(1,2);
            let argall = [
            arg1,
            arg2
           ]
            for(let i=0;i<2;i++)
              {
                
            if(argall[i]=="0")
          {
            tempnumber+="⁰"
          }
        else if(argall[i]=="1")
          {
            tempnumber+="¹"
          }
        else if(argall[i]=="2")
          {
            tempnumber+="²"
          }
        else if(argall[i]=="3")
          {
            tempnumber+="³"
          }
        else if(argall[i]=="4")
          {
            tempnumber+="⁴"
          }
        else if(argall[i]=="5")
          {
            tempnumber+="⁵"
          }
        else if(argall[i]=="6")
          {
            tempnumber+="⁶"
          }
        else if(argall[i]=="7")
          {
            tempnumber+="⁷"
          }
        else if(argall[i]=="8")
          {
            tempnumber+="⁸"
          }
        else
          {
            tempnumber+="⁹"
          }
              }
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
        zoopoint+=1000
        let tempnumber=""
           if(args[j+1]<10)
             {
                       
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
        else
          {
            tempnumber="⁰⁹"
          }
             }
        else if(args[j+1]<100)
          {
        let arg1=args[j+1].substr(0,1);
        let arg2=args[j+1].substr(1,2);
            let argall = [
            arg1,
            arg2
           ]
            for(let i=0;i<2;i++)
              {
                
            if(argall[i]=="0")
          {
            tempnumber+="⁰"
          }
        else if(argall[i]=="1")
          {
            tempnumber+="¹"
          }
        else if(argall[i]=="2")
          {
            tempnumber+="²"
          }
        else if(argall[i]=="3")
          {
            tempnumber+="³"
          }
        else if(argall[i]=="4")
          {
            tempnumber+="⁴"
          }
        else if(argall[i]=="5")
          {
            tempnumber+="⁵"
          }
        else if(argall[i]=="6")
          {
            tempnumber+="⁶"
          }
        else if(argall[i]=="7")
          {
            tempnumber+="⁷"
          }
        else if(argall[i]=="8")
          {
            tempnumber+="⁸"
          }
        else
          {
            tempnumber+="⁹"
          }
              }
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
        zoopoint+=2000
        let tempnumber=""
           if(args[j+1]<10)
             {
                       
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
        else
          {
            tempnumber="⁰⁹"
          }
             }
        else if(args[j+1]<100)
          {
        let arg1=args[j+1].substr(0,1);
        let arg2=args[j+1].substr(1,2);
            let argall = [
            arg1,
            arg2
           ]
            for(let i=0;i<2;i++)
              {
                
            if(argall[i]=="0")
          {
            tempnumber+="⁰"
          }
        else if(argall[i]=="1")
          {
            tempnumber+="¹"
          }
        else if(argall[i]=="2")
          {
            tempnumber+="²"
          }
        else if(argall[i]=="3")
          {
            tempnumber+="³"
          }
        else if(argall[i]=="4")
          {
            tempnumber+="⁴"
          }
        else if(argall[i]=="5")
          {
            tempnumber+="⁵"
          }
        else if(argall[i]=="6")
          {
            tempnumber+="⁶"
          }
        else if(argall[i]=="7")
          {
            tempnumber+="⁷"
          }
        else if(argall[i]=="8")
          {
            tempnumber+="⁸"
          }
        else
          {
            tempnumber+="⁹"
          }
              }
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
        zoopoint+=5000
        let tempnumber=""
           if(args[j+1]<10)
             {
                       
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
        else
          {
            tempnumber="⁰⁹"
          }
             }
        else if(args[j+1]<100)
          {
        let arg1=args[j+1].substr(0,1);
        let arg2=args[j+1].substr(1,2);
            let argall = [
            arg1,
            arg2
           ]
            for(let i=0;i<2;i++)
              {
                
            if(argall[i]=="0")
          {
            tempnumber+="⁰"
          }
        else if(argall[i]=="1")
          {
            tempnumber+="¹"
          }
        else if(argall[i]=="2")
          {
            tempnumber+="²"
          }
        else if(argall[i]=="3")
          {
            tempnumber+="³"
          }
        else if(argall[i]=="4")
          {
            tempnumber+="⁴"
          }
        else if(argall[i]=="5")
          {
            tempnumber+="⁵"
          }
        else if(argall[i]=="6")
          {
            tempnumber+="⁶"
          }
        else if(argall[i]=="7")
          {
            tempnumber+="⁷"
          }
        else if(argall[i]=="8")
          {
            tempnumber+="⁸"
          }
        else
          {
            tempnumber+="⁹"
          }
              }
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
        zoopoint+=10000
        let tempnumber=""
           if(args[j+1]<10)
             {
                       
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
        else
          {
            tempnumber="⁰⁹"
          }
             }
        else if(args[j+1]<100)
          {
        let arg1=args[j+1].substr(0,1);
        let arg2=args[j+1].substr(1,2);
            let argall = [
            arg1,
            arg2
           ]
            for(let i=0;i<2;i++)
              {
                
            if(argall[i]=="0")
          {
            tempnumber+="⁰"
          }
        else if(argall[i]=="1")
          {
            tempnumber+="¹"
          }
        else if(argall[i]=="2")
          {
            tempnumber+="²"
          }
        else if(argall[i]=="3")
          {
            tempnumber+="³"
          }
        else if(argall[i]=="4")
          {
            tempnumber+="⁴"
          }
        else if(argall[i]=="5")
          {
            tempnumber+="⁵"
          }
        else if(argall[i]=="6")
          {
            tempnumber+="⁶"
          }
        else if(argall[i]=="7")
          {
            tempnumber+="⁷"
          }
        else if(argall[i]=="8")
          {
            tempnumber+="⁸"
          }
        else
          {
            tempnumber+="⁹"
          }
              }
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
  
  let userBalanceformat2=String(zoopoint).replace(/(.)(?=(\d{3})+$)/g,'$1,')
  //common=common.substr(4)
//embed.setDescription(`<:common:949006743428542545>${common},${commonname},${argslenght},${t}`)
       interaction.editReply(`**🌿 🌱${user.username}'s Zoo🌿 🌱
<:common:949006743428542545> ${commonname}
<:uncommon:949006765696098345> ${uncommonname}
<:rare:949006777519837225> ${rarename}
<:epic:949006791201652827> ${epicname}
<:legendary:949006805646864404> ${legendaryname}

Zoo Point:\`${userBalanceformat2}\`
XP Point:\`${userBalanceformat}\`**`)
    }
};
