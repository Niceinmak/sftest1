const { MessageEmbed,MessageButton,MessageActionRow } = require('discord.js');

module.exports = {
    description: 'EcoVerse Terms Of Service',
    run: async (client, interaction) => {
        const embed = new MessageEmbed()
        .setTitle('EcoVerse Terms Of Service & Privacy Policy')
        .setDescription(`**EcoVerse Privacy Policy**
**What information is stored?**
If you have any money, your user ID is stored. Your user ID can be stored multiple times for money..
Money data, market data, user id and similar things are stored on our servers.

**Who gets this data?**
Badge data is publically available. All other data is only available to EcoVerse Administrators.

**Third Party Data Sharing**
Money data is public. All other data is only available to EcoVerse Administrators..

**Questions and Concerns.**
You can come to our discord server to learn more: https://discord.gg/2n9Zg9BGgY

**How to Remove your data.**
If you wish to delete your data, please contact us: https://discord.gg/2n9Zg9BGgY


***Note: We reserve the right to change this without notifying our users.
As soon as you add the bot to the server, you are deemed to have accepted the privacy policy***

\`This policy was last updated January 6th, 2022.
Niceinmak#9634\`

**EcoVerse Terms Of Service**
These terms of service enable the use of the EcoVerse bot and access to its services. Please read these Terms carefully and contact us if you have any questions. By using our services, you agree to these terms and our privacy policy.


**Your Content**
The bot may receive this information, including your EcoVerse profile picture, username, your id and avatar. Everything you post or otherwise make available on our Services (commands) is referred to as "User Content".
You reserve all rights to and are solely responsible for any user content you submit to EcoVerse.


**EcoCoin and Other Money Services**
The money in the game cannot be used in the real world, this is also the case with EcoCoin. In no way, these coins or EcoCoins can be sold or bought for real world money.


**How Long Do We Store Your Content?**
We keep all data and information until you come to the help server and ask for your account to be closed. You consent to use your content as long as you use it under normal conditions and to change the amount of money you use in games within the bot and derivative works.


**Feedback You Provide**
We value hearing from our users and are always trying to improve our EcoVerse bot. If you choose to post comments, ideas or feedback, you agree that we are free to use them without any restriction or compensation to you.


**Security**
We care about the safety of our users. As we work to protect the security of your content and account, EcoVerse cannot guarantee that unauthorized third parties will not be able to defeat our security measures.


**Third-party links and services**
EcoVerse does not contain any third party software. All data is stored on its own server.

\`More information: EcoVerse.ml
EcoVerse\`
`)
        .setThumbnail(client.user.avatarURL());
        const buton = new MessageButton().setCustomId('primary').setLabel('I Agree!').setStyle('PRIMARY').setDisabled(false);
        const buton2 = new MessageButton().setLabel('Support Server').setStyle('LINK').setURL('https://discord.gg/8aJ7ajGEEM');
        const buton3 = new MessageButton().setLabel('EcoVerse Website').setStyle('LINK').setURL('http://ecoverse.ml');
        const row = new MessageActionRow().addComponents(buton).addComponents(buton2).addComponents(buton3)
       interaction.reply({
           embeds:[embed],
           components:[row],
       })
   const filter = i => i.customId === 'primary' && i.user.id === interaction.user.id;

const collector = interaction.channel.createMessageComponentCollector({time: 15000 });

collector.on('collect', async i => {
	if (i.customId === 'primary') {
		i.deferUpdate();
    embed.setTitle('EcoVerse Terms Of Service & Privacy Policy')
        embed.setDescription(`**You have accepted the Terms Of Use & Privacy Policy!**`)
    const buton = new MessageButton().setCustomId('primary').setLabel('I Agree!').setStyle('PRIMARY').setDisabled(true);
        const buton2 = new MessageButton().setLabel('Support Server').setStyle('LINK').setURL('https://discord.gg/8aJ7ajGEEM');
        const buton3 = new MessageButton().setLabel('EcoVerse Website').setStyle('LINK').setURL('http://ecoverse.ml');
    const row = new MessageActionRow().addComponents(buton).addComponents(buton2).addComponents(buton3)
    return interaction.editReply({
           embeds:[embed],
           components:[row],
       })
	}
});
    }
};
