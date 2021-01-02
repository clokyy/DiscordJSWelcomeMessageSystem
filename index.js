bot.on('guildMemberAdd', member => {
    const welcomechannel = member.guild.channels.cache.find(ch => ch.id === '723955226666598530');

    if (!welcomechannel) {
        console.log(`ERR: No Welcome Channel was found!`);
    }

    let WelcomeUserEmbed = new Discord.MessageEmbed()
        .setAuthor('{DISCORD_SERVER_NAME} Bot', '{DISCORD_SERVER_ICON}')
        .setTitle(`Welcome **${member.user.tag}** to **{DISCORD_SERVER_NAME}**`)
        .setColor('#4B0082')
        .addField('Total Members', `${member.guild.memberCount}`)
        .setThumbnail('{DISCORD_SERVER_ICON}')
        .addField('Date Joined', new Date())
        .addField('Website', '{DISCORD_SERVER_WEBSITE}')
        .addField('Website Status', ':x: down for maintenance!')
        .setFooter('{DISCORD_SERVER_NAME} Staff Team')

    welcomechannel.send(WelcomeUserEmbed);  
    member.roles.add('723953994157785108');

})
