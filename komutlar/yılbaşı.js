const Discord = require ("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");

exports.run = async (client, message, args) => {

  let yilbasi = new Date("2020-12-31 21:01:00");
  let zaman = ms(yilbasi - Date.now('Turkey'));
  if(zaman.seconds <= 0 && zaman.minutes <= 0 && zaman.hours <= 0 && zaman.days <= 0) return message.reply('Zaten 2021 deyiz :)')

return message.channel.send(
    `:label: **Yılbaşının kutlanmasına Dair Bilgiler Aşağıda;** \n\n> Gün: **${zaman.days}** \n> Saat: **${zaman.hours}** \n> Dakika: **${zaman.minutes}**\n> Saniye: **${zaman.seconds}**\n> MiliSaniye: **${zaman.milliseconds}**\n> MicroSaniye: **${zaman.microseconds}**\n> NanoSaniye: **${zaman.nanoseconds}** \n\n:white_check_mark: **Yılbaşının kutlanmasına Bu Kadar Zaman Kaldı! Mutlu Yıllar!
    2021 Hoşgeldin!...**`
  );
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  kategori: "eğlence",
  permLevel: 0
};

exports.help = {
  name: "yılbaşı",

  description:
    "Yılbaşının kutlanmasına kaç gün kaç saat kaç dakika kaç saniye olduğunu gösterir.",
  usage: ""
};