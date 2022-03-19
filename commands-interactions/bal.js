const { MessageEmbed,MessageButton,MessageActionRow } = require('discord.js');

module.exports = {
    description: 'Show Your Balance',
  options: [
        {
            name: 'user',
            description: 'Select a user',
            type: 'USER',
            required: false
        },
    ],
    run: async (client, interaction) => {
      let userid=""
      let args_user=interaction.options.getUser('user')
        if(!args_user)
  {
    userid = args_user.id;
  }
  else
  {
    userid = interaction.member.user.id;
  }      
       console.log(userid, interaction.member.user.id)
    let userBalance = client.eco.fetchMoney(userid);
    let userBalanceformat=String(userBalance.amount).replace(/(.)(?=(\d{3})+$)/g,'$1,')
    const embed = new MessageEmbed()
        .setTitle(`Balance`)
        .addField(`User`, `<@${userBalance.user}>`)
        .addField(`Balance`, `**${userBalanceformat}**💶`)
        .addField(`Position`, `${userBalance.position}`)
        .setColor("RANDOM")
        .setThumbnail(userid.displayAvatarURL)
        .setTimestamp();
       interaction.reply({
           embeds:[embed],
       })
    }
};
