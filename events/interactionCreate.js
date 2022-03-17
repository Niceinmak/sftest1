module.exports = (client2, interaction) => {

    if (!interaction.isCommand()) return;
    const command = client2.commands.get(interaction.commandName);
    if (!command) return void interaction.reply({
        content: `\`${interaction.commandName}\` isminde komut bulunamadı.`,
        ephemeral: true
    });
  
    command.run(client2, interaction);
};