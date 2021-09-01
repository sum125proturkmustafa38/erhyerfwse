const Discord = require('discord.js');
const config = require('../ayarlar.json');
const os = require('os');

module.exports.run = async (client, message, args) => {
    if (message.author.bot) return;
    let prefix = config.prefix;
    if(!message.content.startsWith(prefix)) return;

    let servercount = client.guilds.cache.size;
    let usercount = client.users.cache.size;
    let channelscount = client.channels.cache.size;
    let arch = os.arch();
    let platform = os.platform();
    let shard = client.ws.shards.size;
    let NodeVersion = process.version;
    let cores = os.cpus().length;

    let stats = new Discord.MessageEmbed()
    .setAuthor('Xaine Bot')
    .setTitle(`${client.user.username} Bot bilgileri`)
    .setColor('RANDOM')
    .addField("Sunucu sayısı", `${servercount}`, true)
    .addField("Kullanıcı sayısı", `$`, true)
    .addField("Kanal sayısı", `${channelscount}`, true)
    .setTimestamp()
    .setFooter(`${message.author.tag}`, message.author.displayAvatarURL());
    message.channel.send(stats);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['Stats','STATS','stats'],
  permLevel: 0
};

exports.help = {
  name: 'stats',
  description: 'stats',
  usage: 'stats'
};
