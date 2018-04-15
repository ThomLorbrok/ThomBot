const Discord = require('discord.js')
const bot = new Discord.Client()
var prefix = ("!");

bot.on('ready', function () {
  console.log("Bot démarré")
})

bot.on('ready', () => {
bot.user.setActivity("/help | ThomBot")
});

bot.login(process.env.TOKEN)

// Informations sur les commandes //
bot.on('message', message => {
  if (message.content === '/help') {
    message.reply('Les commandes : /info-bot testbot type , testbot facebook , testbot Emmanuel, testbot Récite-moi la table de 1 jusque 10')
  }

  if (message.content === '/info-bot testbot type') {
    message.reply('Ce type de BOT est un bot privée.')
  }

  if (message.content === 'testbot facebook') {
    message.channel.send('Facebook est un réseau social.')
  }

    if (message.content === 'testbot Emmanuel') {
    message.channel.send('Emmanuel est une personne qui ma aidé beaucoup')
    }

          if (message.content === 'OK Maze Récite-moi la table de 1 jusque 10') {
        message.channel.send('Goooo! \n 1x1=1\n1x2=2\n1x3=3\n1x4=4\n1x5=5\n1x6=6\n1x7=7\n1x8=8\n1x9=9\n1x10=10')
    }
  
  if(message.content === prefix + "clear"){
            if (message.member.hasPermission("MANAGE_MESSAGES")){
                message.channel.fetchMessages()
                    .then(function(list){
                        message.channel.bulkDelete(list);
                    }, function(err){message.channel.send("Erreur")})}
                    console.log("La commande clear viens d'être effectué par un membre de l'équipe.")
}

})

if(message.content === prefix + "infodiscord")
       var embed = new Discord.RichEmbed()
       .setDescription("Information du Discord")
       .addField("Nom du discord", message.guild.name)
       .addField("Crée le", message.guild.createdAt)
       .addField("Tu as rejoin le", message.member.joinedAt)
       .addField("Utilisateur sur le discord", message.guild.memberCount)
       .setColor("0x0000FF")
    message.channel.sendEmbed(embed)

          })
