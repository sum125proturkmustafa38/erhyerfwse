const Discord = require("discord.js");
const client = new Discord.Client();

exports.run = (client, message) => {

message.channel.send("matador | Hemen Diyorum Abi 1 Saniye..").then(message => {

    var matador = [

      "**Senin Malafatın  18CM ** :eggplant: ",
      "**Senin Malafatın  11CM ** :eggplant:",
      "**Senin Malafatın 32CM  ** :eggplant:",
      "**Senin Malafatın  35CM ** :eggplant:",
      "**Senin Malafatın  8CM  ** :eggplant:",
      "**Senin Malafatın  65CM ÇUŞ OHA  ** :eggplant:",
      "**Senin Malafatın 5CM  ** :eggplant:",
      "**Senin Malafatın 31CM sjjsj ** :eggplant:",
      "**Senin Malafatın  14CM ** :eggplant:",
      "**Senin Malafatın  1CM ** :eggplant:"

    ];

    var matador= matador[Math.floor(Math.random() * matador.length)];

    message.edit(`${matador}`);
  
  });
};

exports.conf = {
  enabled: false,
  guildOnly: true,
  aliases: ["kaçcm", "cmkaç", "kaçcm", "cm-kaç"],
  permLevel: 0
};

exports.help = {
  name: "kaç-cm",
  description: "Malafatını Söyler.",
  usage: "kaçcm"
};