const Discord = require('discord.js');
const { Client, MessageEmbed } = require('discord.js');
const client = new Discord.Client();
const request = require('request');
const fs = require('fs');
const path = require('path');

client.on('ready', () => {
  console.log(`로그인했다`); 
});

client.login(process.env.TOKEN);
