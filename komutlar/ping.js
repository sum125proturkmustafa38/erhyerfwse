const Discord = require('discord.js')
 
exports.run = async (client ,message, args) =>{

  
  const embed = new Discord.MessageEmbed()
  .setTitle(" <:hourglass:825313852321169429> Pingim aşağıda yazmaktadır.")
  .setColor("RANDOM")
  .setDescription(`${client.ws.ping} ms`)
  message.channel.send(embed)
};
exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ['ping','Ping','PİNG',],
 permLevel: 0
};
 
exports.help = {
 name: 'ping',
 description: 'Botun Pingine Bakarsınız Xaine Bot',
 usage: '+ping'
};