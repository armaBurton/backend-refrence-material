require('dotenv').config();
const { Client, Intents } = require('discord.js');
const fetch = require('cross-fetch');
const { TOKEN } = process.env;

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.once('ready', () => {
  console.log('🚀 Ready!');
});

client.on('interactionCreate', async (interaction) => {
  if (!interaction.isCommand()) return;

  const { commandName } = interaction;

  switch (commandName) {
    case 'ping':
      return await interaction.reply('Pong!');
    case 'server':
      return await interaction.reply(
        `Server name: ${interaction.guild.name}\nTotal members: ${interaction.guild.memberCount}`
      );
    case 'user':
      return await interaction.reply(
        `Your tag: ${interaction.user.tag}\nYour id: ${interaction.user.id}`
      );
    case 'quote': {
      const res = await fetch('https://futuramaapi.herokuapp.com/api/quotes/1');
      const data = await res.json();
      const { quote, character, image } = data[0];
      console.log(data);
      return await interaction.reply(`> "${quote}"\n- ${character}\n${image}`);
    }
    default:
      return await interaction.reply('Unknown command!');
  }

  // if (commandName === 'ping') {
  //   await interaction.reply('Pong!');
  // } else if (commandName === 'server') {
  //   await interaction.reply(
  //     `Server name: ${interaction.guild.name}\nTotal members: ${interaction.guild.memberCount}`
  //   );
  // } else if (commandName === 'user') {
  //   await interaction.reply(
  //     `Your tag: ${interaction.user.tag}\nYour id: ${interaction.user.id}`
  //   );
  // } else if (commandName === 'quote') {
  //   const res = await fetch('https://futuramaapi.herokuapp.com/api/quotes/1');
  //   const data = await res.json();
  //   const { quote, character, image } = data[0];
  //   console.log(data);
  //   await interaction.reply(`> "${quote}"\n- ${character}\n${image}`);
  // }
});

client.login(TOKEN);
