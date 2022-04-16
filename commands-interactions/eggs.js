const { MessageEmbed,MessageButton,MessageActionRow } = require('discord.js');
const wait = require('node:timers/promises').setTimeout;
module.exports = {
    description: 'Look Your Eggs',
    run: async (client, interaction) => {
       await interaction.deferReply();
		await wait(10);
      const embed = new MessageEmbed()
    .setTitle(`${interaction.user.username}'s Eggs!`)
    .setColor("RANDOM")
    .setThumbnail()
    .setTimestamp();
  const x = client.db.get(`eggs_${interaction.user.id}`);
  if (!x || !x.toString()) {
    return interaction.editReply(`**No Eggs Found To Display :c**`);
  }
  let eggs=""
  let eggcount=0
  let eggcount1=0
  let break1=0
  let counter1=0
  let counter2=0
  const arrayToObject = x.reduce((itemsobj, x) => {
    counter1++
    if(break1==0)
      {
    if(eggcount==5)
      {
        eggs+="\n"
        eggcount=0
        eggcount1++
      }
        if(eggcount1>7)
      {
        break1=1
        counter2=counter1
      }
        if(break1==0)
          {
    if(x.name=="<:eggepic:964448950281183242>")
      {
    eggs+=`\`E\`${x.name} ` 
      }
    else if(x.name=="<:eggrare:964448940248428604>")
      {
      eggs+=`\`R\`${x.name} ` 
      }
    else
      {
        eggs+=`\`C\`${x.name} ` 
      }
          }
    eggcount++
    itemsobj[x.name] = (itemsobj[x.name] || 0) + 1;
    return itemsobj;
      }
  }, {});
      if(break1==1)
        {
          
         return interaction.editReply(`**=== Niceinmak's Eggs ===**
${eggs}**More ${counter1-counter2} items...**`); 
        }
      else
        {
  return interaction.editReply(`**=== Niceinmak's Eggs ===**
${eggs}`);
        }
    }
};
