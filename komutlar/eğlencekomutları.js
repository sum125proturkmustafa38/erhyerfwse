const Discord = require("discord.js");
exports.run = async (client, message, args) => {

    

var page = 0;
 
let arr = [];
let emojiarr = message.guild.emojis.cache.array();
for(let i =0; Number(i + "0") < (Math.round(emojiarr.length/10)*10 +1); ++i) {
var on = emojiarr.slice(Number(i + "0"), Number(i + "0")+10)
arr.push(on.toString())
}

let embd = new Discord.MessageEmbed()
message.channel.send(embd.setDescription(arr[0]).setDescription('Xaine Bot eğlence komutları menüsüne hoş geldiniz. Sayfaları değiştirerek kodları görebilirsiniz, İyi eğlenceler!')).then(async msg => {
      await msg.react("⬅️");
      await msg.react("➡️");

      let filter = (reaction, user) => user.id !== message.client.user.id && user.id === message.author.id;

      var collector = msg.createReactionCollector(filter, {
        time: 120000
      });

      collector.on("collect", async (reaction, user) => {
        switch (reaction.emoji.name) {
          case "⬅️":
            reaction.users.remove(user).catch(console.error);
            if (page == 0) return;
            --page

              embd.setColor("RANDOM");
              embd.setFooter(`Sayfa ${page+1} / ${arr.length+1}`);
              embd.setDescription("xaine -  aşkölçer - balıktut - - roblox-oyuncu-bilgi - düello - efkarım - tersyazı - yazıtura - öp - aduketçek -  balık-tut - beşlik -  ejderha-yazı - emojiyazı - espri - kartopu - kralol - slots - tokat - yazı-tura - çıkma-teklifi -   düello - oylama -  yıldız - kar - adamasmaca - taş-kağıt-makas")
            msg.edit(embd)
           break;
          case "➡️":
            if (page == arr.length) return;
            ++page
            reaction.users.remove(user).catch(console.error);
              embd.setColor("RANDOM");
              embd.setFooter(`Sayfa ${page+1} / ${arr.length+1}`);
              embd.setDescription("stresçarkı - zarat - nsfw - fal - boks-makinesi - şifre-oluştur -  sayıtut  - komik - sarıl - şiir -  ilginçbilgi - şanslı-sayım - yazan-kazanır - doğruluk-cesaret - kasa-aç")
            msg.edit(embd)
          break;

        }
      });
    })
}
    exports.conf = {
        enabled: true,
        guildOnly: true,
        aliases: ["Eğlence", "eğlence","EĞLENCE"],
        permLevel: 0
      };
      
      exports.help = {
        name: "eğlence",
        description: "Sayfalı Yardım Menüsü -ArdaDemr",
        usage: "Sayfalı Yardım Menüsü"
      };