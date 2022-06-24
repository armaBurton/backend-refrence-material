require('dotenv').config();
const { SlashCommandBuilder } = require('@discordjs/builders');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { TOKEN, CLIENT_ID, GUILD_ID } = process.env;

const commands = [
  new SlashCommandBuilder()
    .setName('ping') // /ping -> DanBot: 'Pong!'
    .setDescription('Replies with pong!'),
  new SlashCommandBuilder()
    .setName('server') // /server -> DanBot: 'Server info: ...'
    .setDescription('Replies with server info!'),
  new SlashCommandBuilder()
    .setName('user') // /user -> DanBot: 'User info: ...'
    .setDescription('Replies with user info!'),
  new SlashCommandBuilder()
    .setName('quote')
    .setDescription('Replies with a random Futurama quote!'),
].map((command) => command.toJSON());

const rest = new REST({ version: '9' }).setToken(TOKEN);

rest
  .put(Routes.applicationGuildCommands(CLIENT_ID, GUILD_ID), { body: commands })
  .then(() => console.log('✅  Successfully registered application commands!'))
  .catch(console.error); // same as: .catch((error) => console.error(error))
