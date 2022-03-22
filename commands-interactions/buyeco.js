const { MessageEmbed,MessageButton,MessageActionRow } = require('discord.js');
const moment = require("moment");
let ms = require('ms');
let db = require('quick.db');
const btcValue = require('btc-value');
module.exports = {
    description: 'Have you tried EcoCoin?',
  options: [
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
  const cooldown = await db.fetch(`cooldown_buyeco_${interaction.user.id}`);
      	if (cooldown !== null && timeout - (Date.now() - cooldown) > 0) {
		const time = ms(timeout - (Date.now() - cooldown));
          return interaction.reply(`**Wait ${time} to message again**`)
	}
    db.set(`cooldown_buyeco_${interaction.user.id}`, Date.now());
      //---------------------------------------------------------------------------
  btcValue().then(value => {
value = value.toString().slice(0,3);
  let authordata = client.eco.fetchMoney(interaction.user.id) 
  let amount = interaction.options.getInteger('amount')
  if(amount=="all") amount=parseInt((authordata.amount/value))
  if(amount=="half") amount=parseInt((authordata.amount/value)/2)
  if (!amount || isNaN(amount) || amount<1) return interaction.reply(`**Please enter a valid amount to buy**`) 
  if(authordata.amount < amount*value) return interaction.reply(`**Looks like you don\'t have that much money,You need to have ${amount*value}💶 to do this operation.**`) 
  client.eco.removeMoney(interaction.user.id, parseInt(amount*value));
  client.eco.addMoney(`${interaction.user.id}11`, parseInt(amount));
  let amountformat=String(amount).replace(/(.)(?=(\d{3})+$)/g,'$1,')
  let amountformat2=String(amount*value).replace(/(.)(?=(\d{3})+$)/g,'$1,')
  return interaction.reply(`**Transaction successful! You bought ${amountformat} EcoCoin for ${amountformat2}💶.**`)
});
    }
};
