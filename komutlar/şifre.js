const Discord = require('discord.js');
const generator = require('generate-password');


exports.run = function(client, message, args,params) {
    var uzunluk = args.slice(0).join(' ');
  
  if (isNaN(uzunluk)) return message.reply(" :x: Geçersiz! Lütfen Örneğe Bakınız; ``+şifre 10`` Hata sebebi: ``Geçersiz Sayı``")
    if (!uzunluk) return message.channel.send(' :x: Geçersiz! Lütfen Örneğe Bakınız; ``+şifre 10``')
    var password = generator.generate({
        length: uzunluk,
        numbers: true,
    })
  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 30);
    message.author.send(password);
  if (message.channel.type !== 'dm') {
    message.channel.send(':white_check_mark: Şifreniz Özel Olarak Size İletildi!') }
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
        message.author.sendCode('message',password);
    }
  }





};  

exports.conf = {
  enabled: true, 
  guildOnly: true, 
  aliases: [],
  permLevel: 0,
    kategori: 'eğlence',
};

exports.help = {
  name: 'şifre', 
  description: 'Rastgele bir şifre oluşturur.',
  usage: 'şifre <uzunluk>'
};