bot.on('guildMemberAdd', member => {
    const welcomechannel = member.guild.channels.cache.find(ch => ch.id === '723955226666598530');

    if (!welcomechannel) {
        console.log(`ERR: No Welcome Channel was found!`);
    }

    let WelcomeUserEmbed = new Discord.MessageEmbed()
        .setAuthor('AstroDevelopment Bot', 'https://cdn.discordapp.com/attachments/723965594927628298/793589359356936192/Untitled-1.png')
        .setTitle(`Welcome **${member.user.tag}** to **AstroDevelopment**`)
        .setColor('#4B0082')
        .addField('Total Members', `${member.guild.memberCount}`)
        .setThumbnail('https://cdn.discordapp.com/attachments/723965594927628298/793589359356936192/Untitled-1.png')
        .addField('Date Joined', new Date())
        .addField('Website', 'http://astrodevelop.com/')
        .addField('Website Status', ':x: down for maintenance!')
        .setFooter('AstroDevelopment Staff Team')

    welcomechannel.send(WelcomeUserEmbed);  
    member.roles.add('723953994157785108');

})
