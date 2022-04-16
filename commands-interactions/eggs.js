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
  if (!x) {
    return interaction.editReply(`**No Eggs Found To Display :c**`);
  }
  let eggs=""
  let eggcount=0
  const arrayToObject = x.reduce((itemsobj, x) => {
    if(eggcount==5)
      {
        eggs+="\n"
        eggcount=0
      }
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
    eggcount++
    itemsobj[x.name] = (itemsobj[x.name] || 0) + 1;
    return itemsobj;
  }, {});
  const result = Object.keys(arrayToObject).map(k =>
    embed.addField(`Name: ${k}`, `Quantity:**${arrayToObject[k]}**`, false)
  );
console.log(eggs)
  return interaction.editReply(`**=== Niceinmak's Eggs ===**
${eggs}`);
    }
};
