const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json')
const { Database } = require('quick.db')//Seninki quick.db İse Bunu Sil Onun yerine const db = require('quick.db') Yaz
exports.run = (client, message, args) => {
const black = args[0]
if(message.author.id !== ayarlar.sahip) return message.channel.send(
    new Discord.MessageEmbed()
    .setDescription(`**Malesef bu komutu kullanamazsınız! Sahibim değilsiniz.**`)
//Bots For List Yapımı!
)
if(!black) return message.channel.send(
    new Discord.MessageEmbed()
    .setDescription(`Üyenin İDsini Yaz`)
)//Bots For List Yapımı!
if(black == ayarlar.sahip) return message.channel.send(`Kendini karalisteye ekleyemezsiniz`)
message.channel.send(
    new Discord.MessageEmbed()
    .setDescription(`**<@${black}> Adlı Kişi BlackList'e Eklendi!**`)
)
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
}

exports.help = {
    name: "karaliste"//Bots For List Yapımı!
}