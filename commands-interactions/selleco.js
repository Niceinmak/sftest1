const { MessageEmbed,MessageButton,MessageActionRow } = require('discord.js');
const moment = require("moment");
let ms = require('ms');
let db = require('quick.db');
const btcValue = require('btc-value');
module.exports = {
    description: 'Sell ​​before the price drops!',
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
  const cooldown = await db.fetch(`cooldown_selleco_${interaction.user.id}`);
      	if (cooldown !== null && timeout - (Date.now() - cooldown) > 0) {
		const time = ms(timeout - (Date.now() - cooldown));
          return interaction.reply(`**Wait ${time} to message again**`)
	}
    db.set(`cooldown_selleco_${interaction.user.id}`, Date.now());
      //---------------------------------------------------------------------------
  btcValue().then(value => {
value = value.toString().slice(0,3);
  let authordata = client.eco.fetchMoney(`${interaction.user.id}11`) 
  let amount = interaction.options.getInteger('amount')
  if(amount=="all") amount=authordata.amount
  if(amount=="half") amount=authordata.amount/2
  if (!amount || isNaN(amount) || amount<1) return interaction.reply(`**Please enter a valid amount to sell**`)
  if(authordata.amount < amount) return interaction.reply(`**Looks like you don\'t have that much EcoCoin,Maximum amount you can sell: ${authordata.amount} EcoCoin.**`) 
  client.eco.removeMoney(`${interaction.user.id}11`, parseInt(amount));
  client.eco.addMoney(interaction.user.id, parseInt(amount*value));
  let amountformat=String(amount).replace(/(.)(?=(\d{3})+$)/g,'$1,')
  let amountformat2=String(amount*value).replace(/(.)(?=(\d{3})+$)/g,'$1,')
  return interaction.reply(`**${amountformat} EcoCoin has been sold successfully! The money you earn is ${amountformat2}💶.**`)
});
    }
};
