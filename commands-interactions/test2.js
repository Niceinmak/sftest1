const { MessageEmbed,MessageButton,MessageActionRow,MessageAttachment } = require('discord.js');
const Canvas = require('canvas');
const wait = require('node:timers/promises').setTimeout;
module.exports = {
    description: 'Test',
    run: async (client, interaction) => {
      await interaction.deferReply();
		await wait(10);
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
      
      const canvas = Canvas.createCanvas(700, 250);
		const context = canvas.getContext('2d');
const background = await Canvas.loadImage('https://i.imgur.com/SpcEOfc.jpg');

	// This uses the canvas dimensions to stretch the image onto the entire canvas
	context.drawImage(background, 0, 0, canvas.width, canvas.height);
context.strokeRect(0, 0, canvas.width, canvas.height);

	const avatar = await Canvas.loadImage(interaction.user.displayAvatarURL({ format: 'jpg' }));
context.beginPath();

	// Start the arc to form a circle
	context.arc(125, 125, 100, 0, Math.PI * 2, true);

	// Put the pen down
	context.closePath();

	// Clip off the region you drew on
	context.clip();
      
	// Draw a shape onto the main canvas
	context.drawImage(avatar, 25, 25, 200, 200);
      context.font = '60px sans-serif';

	// Select the style that will be used to fill the text in
	context.fillStyle = '#ffffff';

	// Actually fill the text with a solid color
	context.fillText(interaction.member.displayName, canvas.width / 2.5, canvas.height / 1.8);
	// Use the helpful Attachment class structure to process the file for you
	const attachment = new MessageAttachment(canvas.toBuffer(), 'profile-image.png');

	interaction.editReply({ files: [attachment] });
      
    }
};
