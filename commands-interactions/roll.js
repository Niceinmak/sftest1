const { MessageEmbed,MessageButton,MessageActionRow } = require('discord.js');
const moment = require("moment");
let ms = require('ms');
let db = require('quick.db');
module.exports = {
    description: 'Game of chance, but by dice.',
  options: [
    {
            name: 'select_number',
            description: 'Select number',
            type: 'STRING',
            required: true,
            choices: [{ name: "1", value: "1" }, { name: "2", value: "2" }, { name: "3", value: "3" }, { name: "4", value: "4" }, { name: "5", value: "5" }, { name: "6", value: "6" }]
        },
    {
            name: 'amount',
            description: 'Select amount',
            type: 'INTEGER',
            required: true
        },
    ],
    run: async (client, interaction) => {
      //--------------------------------------------------------------
            const timeout = 10000;
  const cooldown = await db.fetch(`cooldown_Command-Name_${interaction.user.id}`);
      	if (cooldown !== null && timeout - (Date.now() - cooldown) > 0) {
		const time = ms(timeout - (Date.now() - cooldown));
          return interaction.reply(`**Wait ${time} to message again**`)
	}
    db.set(`cooldown_Command-Name_${interaction.user.id}`, Date.now());
      //---------------------------------------------------------------------------
      let numbers = [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
    ];
    let card1=""
    let card2=""
    let card3=""
    let amount = Math.floor(Math.random() * 100);
    let amount3 = interaction.options.get("select_number").value;
    let amount4 = interaction.options.getInteger('amount')
    let authordata = client.eco.fetchMoney(interaction.user.id) 
    const user1 = interaction.user
  //--------------------------------------------
  if(amount4=="all") amount4=authordata.amount;
  if(amount4=="half") amount4=authordata.amount/2 , amount4=parseInt(amount4);
  if(amount4>50000) amount4=50000;
    if (!amount4 || isNaN(amount4)) return interaction.reply(`** ⛔${interaction.user.username} | ** Please specify a valid amount.`);
  if (!amount3 || isNaN(amount3) || amount3>6 || amount<0) return interaction.reply(`** ⛔${interaction.user.username} | ** Please select 1,2,3,4,5,6`);
  else{
    if(amount4>authordata.amount || amount4<1)  return interaction.reply(`** ⛔${interaction.user.username} | ** You don't have enough money`);
    else
    {
               interaction.reply(`**🎲 | ${user1.username} played roll:** \`${amount3}\`\n**Number on the dice:**`).then(async msg => {
                 let randomnumber=numbers[Math.floor(Math.random() * numbers.length)]
                setTimeout(() => {
  // embed.setAuthor(`as`)
          interaction.editReply(`**🎲 | ${user1.username} played roll:** \`${amount3}\`\n**Number on the dice:**\`.\``)
                   }, 500);
                setTimeout(() => {
       //  embed.setAuthor(`sa`)
          interaction.editReply(`**🎲 | ${user1.username} played roll:** \`${amount3}\`\n**Number on the dice:**\`..\``)
              }, 1000);
            setTimeout(() => {
             interaction.editReply(`**🎲 | ${user1.username} played roll:** \`${amount3}\`\n**Number on the dice:**\`...\``)
              }, 2000);
          setTimeout(() => {
            interaction.editReply(`**🎲 | ${user1.username} played roll:** \`${amount3}\`\n**Number on the dice:**\`${randomnumber}\``)
              }, 3000);
           setTimeout(() => {
             if(amount3==randomnumber)
                {
                  let data = client.eco.addMoney(interaction.user.id, parseInt(amount4*3));
                  interaction.editReply(`**🎲 | ${user1.username} played roll:** \`${amount3}\`\n**Number on the dice:**\`${randomnumber}\`\n\`Congrulations,You Win ${amount4*3}💶!\``)
                }
             else
               {
                 let data = client.eco.removeMoney(interaction.user.id, parseInt(amount4));
                 interaction.editReply(`**🎲 | ${user1.username} played roll:** \`${amount3}\`\n**Number on the dice:**\`${randomnumber}\`\n\`Sorry,You Lost ${amount4}💶\``)
               }
              }, 4000);
        } );
    }
    } 
    }
};
