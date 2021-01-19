const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, params) => {
    const matador = new Discord.MessageEmbed()
    .setAuthor('İsteğiniz üzerine yağmur yağaşı gösteriliyor. ☔️ ')
    .setColor('RED')
    .setTimestamp()
    .setDescription('')
        .setImage(`https://media.giphy.com/media/IIlQlxQIOY8P6qAQbV/giphy.gif`)
    return message.channel.send(matador);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['Yağmur','Yağmur','Yağmur'],
  permLevel: 0
};

exports.help = {
  name: 'yağmur',
  description: 'yağmur.',
  usage: 'yağmur'
};