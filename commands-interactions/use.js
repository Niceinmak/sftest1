const { MessageEmbed,MessageButton,MessageActionRow } = require('discord.js');

module.exports = {
    description: 'Sell your crates and earn money',
    run: async (client, interaction) => {
       let userBalance = client.eco.fetchMoney(interaction.user.id);
  let quantity=0;
  let randomcash = Math.floor(Math.random() * 200);
  let itemname=" "
  let count1=0
  let count2=0
  let count3=0
  let count4=0
  let totalcash=0
  let totalcash2=" "
  //------------------------------------------
    const x = client.db.get(`items_${interaction.user.id}`);
    if (!x) {
    return interaction.reply(`${interaction.user.username} | Item not found for sale`);
  }
  const arrayToObject = x.reduce((itemStruct, x) => {
    itemStruct[x.name] = (itemStruct[x.name] || 0) + 1;
    return itemStruct;
  }, {});
//  if(k=="yaygın.kasa") randomcash = Math.floor(Math.random() * 200);
    const result = Object.keys(arrayToObject).map(k =>
       itemname+=k+" "+arrayToObject[k]+" "
  //   message.channel.send(`**${k} Kasasını Sattın ve ${randomcash},${quantity*randomcash}💶 kazandın.${quantity}$,${count1},${itemname},,,${agr1},,,${agr2},,,${agr3}**`)
  );
     client.db.delete(`items_${interaction.user.id}`)
  var argString = itemname.substring(1).split(' ');
 // let argString = itemname.substr( itemname.indexOf(' ') + 1 );
  let agr1=argString[0]
  let agr2=argString[1]
  let agr3=argString[2]
  let agr4=argString[3]
  let agr5=argString[4]
  let agr6=argString[5]
  count1=agr2;
      count2=agr4;
      count3=agr6;
  if(agr1=="common.case")
    {
        randomcash = Math.floor(Math.random() * 20000);
  let sell = client.eco.addMoney(interaction.user.id, randomcash*agr2);
  totalcash+=randomcash*agr2
      totalcash2+=` ${agr1},`
      
    }
  if(agr1=="rare.case")
    {
        randomcash = Math.floor(Math.random() * 200000);
  let sell = client.eco.addMoney(interaction.user.id, randomcash*agr2);
  totalcash+=randomcash*agr2
     totalcash2+=` ${agr1},`
    }
    if(agr1=="epic.case")
    {
        randomcash = Math.floor(Math.random() * 2000000);
  let sell = client.eco.addMoney(interaction.user.id, randomcash*agr2);
  totalcash+=randomcash*agr2
     totalcash2+=` ${agr1},`
    }
  if(count2!=null)
    {
       if(agr3=="common.case")
    {
        randomcash = Math.floor(Math.random() * 20000);
  let sell = client.eco.addMoney(interaction.user.id, randomcash*agr4);
  totalcash+=randomcash*agr4
     totalcash2+=` ${agr3},`
    }
  if(agr3=="rare.case")
    {
        randomcash = Math.floor(Math.random() * 200000);
  let sell = client.eco.addMoney(interaction.user.id, randomcash*agr4);
  totalcash+=randomcash*agr4
    totalcash2+=` ${agr3},`
    }
    if(agr3=="epic.case")
    {
        randomcash = Math.floor(Math.random() * 2000000);
  let sell = client.eco.addMoney(interaction.user.id, randomcash*agr4);
  totalcash+=randomcash*agr4
     totalcash2+=` ${agr3},`
    }
    }
    if(count3!=null)
    {
    if(agr5=="common.case")
    {
        randomcash = Math.floor(Math.random() * 20000);
  let sell = client.eco.addMoney(interaction.user.id, randomcash*agr6);
  totalcash+=randomcash*agr6
     totalcash2+=` ${agr5},`
    }
  if(agr5=="rare.case")
    {
        randomcash = Math.floor(Math.random() * 200000);
  let sell = client.eco.addMoney(interaction.user.id, randomcash*agr6);
  totalcash+=randomcash*agr6
      totalcash2+=` ${agr5},`
    }
    if(agr5=="epic.case")
    {
        randomcash = Math.floor(Math.random() * 2000000);
  let sell = client.eco.addMoney(interaction.user.id, randomcash*agr6);
  totalcash+=randomcash*agr6
      totalcash2+=` ${agr5},`
    }
    }
    const result1 = Object.keys(arrayToObject).map(k =>
  
     quantity+=arrayToObject[k]
  );
   //  let sell = client.eco.addMoney(interaction.user.id, 1);
   let totalcashformat=String(totalcash).replace(/(.)(?=(\d{3})+$)/g,'$1,')
      const  result2 = Object.keys(arrayToObject).find(k =>
    interaction.reply(`${interaction.user.username} | Congrulations! You selled**${totalcash2}** cases and earn **${totalcashformat}**💶!`)
  );
    }
};
