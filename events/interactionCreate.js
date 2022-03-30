module.exports = (client, interaction) => {

    if (!interaction.isCommand()) return;
     if (client.cfg.bannedusers.includes(interaction.user.id)) return interaction.reply("**You are banned from EcoVerse.**");
    const command = client.commands.get(interaction.commandName);
    if (!command) return void interaction.reply({
        content: `\`${interaction.commandName}\` isminde komut bulunamadı.`,
        ephemeral: true
    });
    command.run(client, interaction);
};