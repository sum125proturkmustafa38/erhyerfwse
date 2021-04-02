const Discord = require ("discord.js");

exports.run = (client, message) => {

const EmbedFwhyCode = new Discord.MessageEmbed()

.setColor("RANDOM")
.setTitle("**▬▬▬▬▬▬[** ©️ **Eğlence Bot (V12)** ©️ **]▬▬▬▬▬▬**  \n\n> :floppy_disk: `+is` **Botun istatistik bilgilerini açar.** \n> :floppy_disk: **Şuanda kullanılan prefix** `+`")
.setThumbnail("https://cdn.discordapp.com/attachments/655459488236568597/655887650494087178/loading_1.gif")
.setDescription(`

▬▬▬▬▬▬[ :closed_lock_with_key: **Xaine Bot Normal Komutlar** :closed_lock_with_key: ]▬▬▬▬▬▬

> **» +avatar :** Avatarınızı gösterir.
> **» +davet :** Davet linklerini gösterir.
> **» +yılbaşı :** Yılbaşına kalan zamanı gösterir.
> **» +hesapla :** Matematik işlemi hesaplarsınız.
> **» +havadurumu :** Belirttiniz bölgenin hava durumuna bakarsınız.
> **» +is :** Botun istatistik bilgilerine bakarsınız.
> **» +bildir :** Şikayet-öneri de bulunursunuz.
> **» +korona :** Belirttiniz ülkenin korona virüs bilgilerine bakarsınız (lütfen ingilizce olarak ülkeleri yazın.)
> **» +ping :** Botun pingine bakarsınız.
> **» +saat :** Saatin kaç olduğuna bakarsınız.
> **» +kurucu :** Botun yapımcısına bakarsınız.
> **» +token :** Botun tokenine bakarsınız :D.
> **» +sunucubilgi :** Bulundunuz sunucu bilgilerini bot sizin için gösterir.
> **» +sunucu-kur :** Bot sizin için sunucu kurar.
> **» +uyar :** Belirttiniz kullanıcıyı uyarır.
> **» +kullanıcıbilgi :** Belirttiniz kullanıcının bilgilerini gösterir.
> **» +destek-ekibi :** Bulunduğunuz sunucuya botun **destek ekibi**ni  çağırır.
> **» +ekibimiz :** Xaine Bot Ekibini gösterir.
> **» +mcskin :** Belirttiniz ismin Minecraft skinine (karakter) bakarsınız.
**» +sözlük :** Belirttiniz kelimenin sözlük anlamına bakarsınız.
*» +kuruluş-tarihi :** Botun kuruluş tarihine bakarsınız.
*» +toplam-komut :** Botun toplam kaç tane komutu olduğuna bakarsınız.
*» +sunucukur :** Bot sizin için sunucu kurar.
*» +çekiliş :** Çekiliş yaparsınız.
**▬▬▬▬▬▬▬[** :gear: **Bilgilendirme** :gear: **]▬▬▬▬▬▬▬**

> :dizzy: **Fikirleriniz** **değerlidir, Belirtmekten asla çekinmeyin!**
> :open_file_folder: **Botun Kod Paylaşım Ve Destek Sunucusuna Gelmek İçin [Tıkla!](https://discord.gg/Kekc2pU)**
> :airplane: **Aktif discord.js sürümüm: v12.2.0**
> :partying_face: ** Şikayet-öneride bulunmak isterseniz **bildir** komutunu kullanabilirsiniz!
> :man_technologist: Yardıma ihtiyacınız olduğu zaman **destek-ekibi** komutunu kullanınız, destek ekibimiz size yardıma gelecektir.
**» Bağlantılar** 
**[Destek Sunucusu](https://discord.gg/https://discord.gg/Kekc2pU)** **•** **
`)
.setImage(`https://media.giphy.com/media/9CkIFgNLtPFAiiCqGN/giphy.gif`)
 
.setFooter(client.user.username + "", client.user.avatarURL)
.setTimestamp();

return message.channel.send(EmbedFwhyCode)
.then; //xaine normal komutlar menüsü

};
exports.conf = {
    enabled: true, 
    guildOnly: false, 
    aliases: ['normal','Normal','NORMAL','normal-komutlar','Normal-komutlar','NORMAL-KOMUTLAR'], 
    permLevel: 0 
};
  
  exports.help = {
    name: 'normal', 
    description: 'Xaine Bot normal komutlar menüsü',
    usage: 'Xaine Bot'
};