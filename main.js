const Discord = require('discord.js')
const bot = new Discord.Client()

bot.on('ready', function () {
  console.log("Bot démarré")
})

bot.on('ready', () => {
bot.user.setActivity("/help | ThomBot")
});

bot.login(process.env.TOKEN)
bot.on('message', message => {
  if (message.content === '/help') {
    message.reply('Les commandes : /info-bot thombot , thombot facebook , thombot Emmanuel,thombot la table de 1 jusque 10 ')
  }

  if (message.content === '/info-bot thombot') {
    message.reply('Ce type de BOT est un bot privée.')
  }

  if (message.content === 'thombot facebook') {
    message.chanel.end('Facebook est un réseau social.')
  }

    if (message.content === 'thombot Emmanuel') {
    message.chanel.end('Emmanuel est une personne qui ma aidé beaucoup')
    }

          if (message.content === 'thombot la table de 1 jusque 10') {
        message.channel.send('Goooo! \n 1x1=1\n1x2=2\n1x3=3\n1x4=4\n1x5=5\n1x6=6\n1x7=7\n1x8=8\n1x9=9\n1x10=10')
    }

  )}
