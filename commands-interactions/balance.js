const { MessageEmbed,MessageButton,MessageActionRow,MessageAttachment } = require('discord.js');
const Canvas = require('canvas');
const wait = require('node:timers/promises').setTimeout;
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
      await interaction.deferReply();
		await wait(10);
      let userid=""
      let args_user=interaction.options.getUser('user')
//      console.log(interaction)
        if(!args_user)
  {
    userid = interaction.user.id;
  }
  else
  {
    userid = args_user.id;
  }      
   //    console.log(userid, interaction.member.user.id)
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
              const applyText = (canvas, text) => {
	const context = canvas.getContext('2d');

	// Declare a base size of the font
	let fontSize = 70;

	do {
		// Assign the font to the context and decrement it so it can be measured again
		context.font = `${fontSize -= 10}px sans-serif`;
		// Compare pixel width of the text to the canvas minus the approximate avatar size
	} while (context.measureText(text).width > canvas.width - 300);

	// Return the result to use in the actual canvas
	return context.font;
};
      
      const canvas = Canvas.createCanvas(694, 880);
		const context = canvas.getContext('2d');
const background = await Canvas.loadImage('https://i.imgur.com/cBORedX.png');

	// This uses the canvas dimensions to stretch the image onto the entire canvas
	context.drawImage(background, 0, 0, canvas.width, canvas.height);
context.strokeRect(0, 0, canvas.width, canvas.height);
      //-----------------------TEXT-------------------
context.font = '30px sans-serif';
	context.fillStyle = '#ffffff';
	context.fillText('Balance', canvas.width / 2.8, canvas.height / 9);

	// Add an exclamation point here and below
	context.font = applyText(canvas, `${interaction.member.displayName}!`);
	context.fillStyle = '#ffffff';
	context.fillText(`${interaction.member.displayName}`, canvas.width / 2.8, canvas.height / 6);
      
      context.font = '35px sans-serif';
	context.fillStyle = '#ffffff';
	context.fillText('Balance:', canvas.width / 15, canvas.height / 2.7);

      context.font = '60px sans-serif';
	context.fillStyle = '#ffffff';
	context.fillText(`${userBalanceformat}`, canvas.width / 15, canvas.height / 2.2);
      
           context.font = '35px sans-serif';
	context.fillStyle = '#ffffff';
	context.fillText('Balance:', canvas.width / 15, canvas.height / 1.7);

      context.font = '60px sans-serif';
	context.fillStyle = '#ffffff';
	context.fillText(`${userBalanceformat}`, canvas.width / 15, canvas.height / 1.2);
//---------------------AVATAR--------------------------------
	const avatar = await Canvas.loadImage(interaction.user.displayAvatarURL({ format: 'jpg' }));
context.beginPath();
	context.arc(125, 125, 100, 0, Math.PI * 2, true);
	context.closePath();
	context.clip();
	context.drawImage(avatar, 25, 25, 200, 200);
  //---------------------AVATAR--------------------------------
	const attachment = new MessageAttachment(canvas.toBuffer(), 'profile-image.png');

	interaction.editReply({ files: [attachment] });
    }
};
