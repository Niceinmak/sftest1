const { MessageEmbed,MessageButton,MessageActionRow } = require('discord.js');

module.exports = {
    description: 'Game of chance, but by dice.',
  options: [
    {
            name: 'select_number',
            description: 'Select number',
            type: 'INTEGER',
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
    let amount3 = interaction.options.getInteger('select_number')
    let amount4 = interaction.options.getInteger('amount')
    let authordata = client.eco.fetchMoney(message.author.id) 
    let timecooldown = Math.floor(Math.random() * 200)+50;
    let playtime = await client.eco.work(client.ecoAddUser, timecooldown,{cooldown: 5000});
    const user1 = message.mentions.users.first() || message.member.user
    if (playtime.onCooldown) return message.reply(`**Take it slow,wait ${playtime.time.seconds} more seconds**`);
   let data2= client.eco.removeMoney(message.author.id, parseInt(timecooldown));
  //--------------------------------------------
  if(amount4=="all") amount4=authordata.amount;
  if(amount4=="half") amount4=authordata.amount/2 , amount4=parseInt(amount4);
  if(amount4>50000) amount4=50000;
    if (!amount4 || isNaN(amount4)) return message.channel.send(`** ⛔${message.author.tag} | ** Please specify a valid amount.`);
  if (!amount3 || isNaN(amount3) || amount3>6 || amount<0) return message.channel.send(`** ⛔${message.author.tag} | ** Please select 1,2,3,4,5,6`);
  else{
    if(amount4>authordata.amount || amount4<1)  return message.channel.send(`** ⛔${message.author.tag} | ** You don't have enough money`);
    else
    {
               message.channel.send(`**🎲 | ${user1.username} played roll:** \`${amount3}\`\n**Number on the dice:**`).then(async msg => {
                 let randomnumber=numbers[Math.floor(Math.random() * numbers.length)]
                setTimeout(() => {
  // embed.setAuthor(`as`)
          msg.edit(`**🎲 | ${user1.username} played roll:** \`${amount3}\`\n**Number on the dice:**\`.\``)
                   }, 500);
                setTimeout(() => {
       //  embed.setAuthor(`sa`)
          msg.edit(`**🎲 | ${user1.username} played roll:** \`${amount3}\`\n**Number on the dice:**\`..\``)
              }, 1000);
            setTimeout(() => {
             msg.edit(`**🎲 | ${user1.username} played roll:** \`${amount3}\`\n**Number on the dice:**\`...\``)
              }, 2000);
          setTimeout(() => {
            msg.edit(`**🎲 | ${user1.username} played roll:** \`${amount3}\`\n**Number on the dice:**\`${randomnumber}\``)
              }, 3000);
           setTimeout(() => {
             if(amount3==randomnumber)
                {
                  msg.edit(`**🎲 | ${user1.username} played roll:** \`${amount3}\`\n**Number on the dice:**\`${randomnumber}\`\n\`Congrulations,You Win ${amount4*3}💶!\``)
                  let data = client.eco.addMoney(message.author.id, parseInt(amount4*3));
                }
             else
               {
                 let data = client.eco.removeMoney(message.author.id, parseInt(amount4));
                 msg.edit(`**🎲 | ${user1.username} played roll:** \`${amount3}\`\n**Number on the dice:**\`${randomnumber}\`\n\`Sorry,You Lost ${amount4}💶\``)
               }
              }, 4000);
        } );
    }
    } 
    }
};
