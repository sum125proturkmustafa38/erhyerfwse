const {MessageEmbed} = require("discord.js");
exports.run = async (client, message, args) => {

    

var page = 1;
 
let arr = [];
message.guild.emojis.cache.forEach(e => {
  arr.push(e)
})
  
  var cmds = [
    "xaine -  aşkölçer - balıktut - mutlu-yıllar - roblox-oyuncu-bilgi - düello - efkarım - tersyazı - yazıtura - öp - aduketçek -  balık-tut - beşlik -  ejderha-yazı - emojiyazı - espri - kartopu - kralol - slots - tokat - yazı-tura - çıkma-teklifi -   düello - oylama -  yıldız - kar - adamasmaca - taş-kağıt-makas",
    "stresçarkı - zarat - nsfw - fal - boks-makinesi - şifre-oluştur -  sayıtut  - komik - sarıl - şiir -  ilginçbilgi - şanslı-sayım - yazan-kazanır - doğruluk-cesaret - kasa-aç"
  ]

let embd = new MessageEmbed()
.setDescription(cmds[0])
message.channel.send({embeds: [embd]}).then(async msg => {
      await msg.react("⬅️");
      await msg.react("➡️");

      let filter = (reaction, user) => user.id !== message.client.user.id && user.id === message.author.id;

      var collector = msg.createReactionCollector({filter: filter, time: 130000})

      collector.on("collect", async (reaction, user) => {
        switch (reaction.emoji.name) {
          case "⬅️":
            reaction.users.remove(user).catch(console.error);
            if (page == 1) return;
            --page

              embd.setColor("RANDOM");
              embd.setFooter(`Sayfa ${page} / ${cmds.length}`);
              embd.setDescription(cmds[page-1])
            msg.edit({embeds: [embd]})
           break;
          case "➡️":
            reaction.users.remove(user).catch(console.error);
            if (page == cmds.length) return;
            ++page
              embd.setColor("RANDOM");
              embd.setFooter(`Sayfa ${page} / ${cmds.length}`);
              embd.setDescription(cmds[page-1])
            msg.edit({embeds: [embd]})
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