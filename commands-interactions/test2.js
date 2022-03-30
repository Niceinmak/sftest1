const { MessageEmbed,MessageButton,MessageActionRow,MessageAttachment } = require('discord.js');
const Canvas = require('canvas');
const wait = require('node:timers/promises').setTimeout;
module.exports = {
    description: 'Test',
    run: async (client, interaction) => {
      await interaction.deferReply();
		await wait(10);
      const canvas = Canvas.createCanvas(700, 250);
		const context = canvas.getContext('2d');

	const background = await Canvas.loadImage('./wallpaper.jpg');

	// This uses the canvas dimensions to stretch the image onto the entire canvas
	context.drawImage(background, 0, 0, canvas.width, canvas.height);

	// Use the helpful Attachment class structure to process the file for you
	const attachment = new MessageAttachment(canvas.toBuffer(), 'profile-image.png');

	interaction.reply({ files: [attachment] });
    }
};
