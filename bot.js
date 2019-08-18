// Declarations + Activation
const Discord = require('discord.js');
const { Client, Attachment } = require('discord.js');
const { RichEmbed } = require('discord.js');
const bot = new Discord.Client();

bot.login('#');

bot.on('ready', function() {
    console.log('BOT Ready!')
});


// Server Greeting
bot.on('guildMemberAdd', member => {
    const channel = member.guild.channels.find(ch => ch.name === 'member-log');
    if (!channel) return;
    channel.send('Welcome to the server, ${member}');
});



// Voice Commands //
bot.on('message', message => {
    var isReady = true;
    if (!message.guild) return;
  
    if (message.content === '!join') {
      if (message.member.voiceChannel) {
        message.member.voiceChannel.join()
          .then(connection => {
          })
          .catch(console.log);
      } else {
        message.reply('... You need to join a voice channel first!');
      }
    }

});

// Youtube //

bot.music = require("discord.js-musicbot-addon");

bot.music.start(bot, {
  youtubeKey: "#",

  help: {
    enabled: true,
    name: "musichelp",
    exclude: false
  },

  play: {
    usage: "{{prefix}}play some tunes",
    exclude: false  
  },

  anyoneCanSkip: true,
  ownerOverMember: true,
  ownerID: "140232612768645120",
  cooldown: {
    enabled: false
  }
});


// Misc Commands
bot.on('message', (message) => {


        // Trivia Questions
    var questions = new Array(35);
    questions[0] = "Who is Medivh's apprentice?"
    questions[1] = "What room in Stormwind City did you used to have to visit to qeue for a battleground?"
    questions[2] = "What was the name of the Legendary that dropped only once?"
    questions[3] = "What dungeon dropped the key to Shadow Labs?"
    questions[4] = "What raid leader was famous for the quote 'Many whelps, handle it!'"
    questions[5] = "What was the name of the guild that is known today for their guild leader's rage on Onyxia in Vanilla WoW?"
    questions[6] = "What rare world drop trinket drops anywhere within Wrath of the Lich King?"
    questions[7] = "Who used to be renown for playing porn over our Ventrilo server?"
    questions[8] = "What paladin got so upset with Unholy Dynasty that he spam shamed our guild name in trade chat?"
    questions[9] = "What was the minimum reputation needed to enter Naxxramas?"
    questions[10] = "Who was the star of the famous YouTube video featuring the quote 'Imma chargin muh Fireball!'"
    questions[11] = "Who says the famous quote 'Hello beautiful lady, you buy cat?'"
    questions[12] = "What YouTube channel was known for their Machinima Warcraft videos. (Ex. Crick in the Back!, ROFLMAO!, The Anti-Elf Anthem, Tank Tank Heal Tank)"
    questions[13] = "What YouTube channel was known for their Warcraft Music videos. (Ex. Hard Like Heroic, M.A.G.E., Ni Hao, Assassinate)"
    questions[14] = "How do you log out via chat?"
    questions[15] = "What was the name of the guild led by the almighty warrior 'Catscratch'?"
    questions[16] = "What was the night elf shadow priest racial ability called?"
    questions[17] = "Which of the dreadlords was Arthas hell bent on killing?"
    questions[18] = "What was Deathwing's name before he became corrupted by the old gods?"
    questions[19] = "Which race did the shadow priest racial ability 'Devouring Plague' belong to?"
    questions[20] = "What part of Thousand Needles that is now underwater was once expansively barren and flat?"
    questions[21] = "Which weapon would initiate an event if worn while within The Scarlet Monastary?"
    questions[23] = "What was the name of the item that if used would kill all enemies within 30 yards of you? * * Hint * * : It was used as an exploit in Ulduar."
    questions[25] = "The use of what abilitity/item led to the banning of a guild upon their World First Heroic Lich King kill?"
    questions[26] = "What item was used to open a locked door within Ulduman?"
    questions[27] = "Which encounter was was said to be statistically impossible during the Burning Crusade, until fixed in a later patch?"
    questions[28] = "During the Warlords of Draenor expansion, what was the name of the zone was set to be released but never was?"
    questions[29] = "Which melee DPS trinket that dropped in Icecrown Citadel would morph your appearance ?"
    questions[30] = "Which class in Wrath of the Lich King was fabled to increase their DPS by standing in fire?"
    questions[31] = "Which Unholy Dynasty member enjoying using 'brutal' as an adjective?"
    questions[32] = "What is the name of the shadow priest artifact weapon?"
    questions[33] = "What was Varian Wrynn's gladiator name?"
    questions[34] = "Who is the Loa of Kings?"
    questions[35] = "In Classic, what level would a priest learn Shadowform?"
    questions[36] = "When did Unholy Dynasty get the first Festergut kill? (month/day/year) :^)"
    questions[37] = "How many Dragon Aspects are there?"
    questions[38] = "Where is Sentinel Hill?"
    questions[39] = "Which patch added Black Temple?"
    questions[34] = "What is the name of the Alliance specific Pandaren Faction?"
    questions[35] = "What did spirit originally do?"
    questions[36] = "What was the minimum reputation needed to get into Naxxramas in Classic?"
    questions[37] = "What was the name of the special event boss in BC Karazhan"
    questions[38] = "Where did Millhouse Manastorm first appear?"
    questions[39] = "Who created the Emerald Dream?"
    questions[40] = "What was Varian Wrynn's wifes name?"
    questions[41] = 'What is the name of the island that is home to the Night Elves World Tree?' // ! Trivial Pursuit starts here
    questions[42] = 'Who is the female Maghar Orc mate of Thrall?'
    questions[43] = 'The two-headed wolf, Omen, can be fought during which world event?'
    questions[44] = 'What was the first type of bandage learned with the First Aid proffession?'
    questions[45] = 'What scepter could only be acquired by one player per server and was needed to open the gates of Ahn\'Qiraj?'
    questions[46] = 'Who was Jaina Proudmoore\'s mentor in the Kirin Tor?'
    questions[47] = 'In which zone can the abomination known as Stitches be found?'
    questions[48] = 'Which Dragon Aspect leads the bronze dragonflight?'
    questions[49] = 'Who was the elemental lord of air?'
    questions[50] = 'Garona Halforcen killed which Human king?'
    questions[51] = 'Don Carlos Famous Hat allows owners to summon what type of incorporeal spirit?'
    questions[52] = 'Which ogre was once an apprentice of Gul\'dan and would later lead the Twilight Hammer?'
    questions[53] = 'Dalaran was originally located in which Eastern Kingdoms zone?'
    questions[54] = 'What Dark Iron Dwarf boss can be fought in Blackrock Depths during Brewfest?'
    questions[55] = 'Which Tauren leader was killed by Garrosh Hellscream?'
    questions[56] = 'In which zone can the Gallywix Pleasure Palace be found?'
    questions[57] = 'Who was the last Pandaren emperor of Pandaria?'
    questions[58] = 'Nightsong Battlefear is a raid tier set for which class?'
    questions[59] = 'What zone did Goblins reshape to more resemble the symbol of the horde?'
    questions[60] = 'What was the name of the former leader of the Kirin Tor and husband Vereesa Windrunner?'


              
    const randomQuestion = questions[Math.floor(Math.random()*questions.length)];
            


            // -= Commands =- //
    if(message.content == '!ping') {
        message.channel.send('Pong!');
    } else if(message.content === '!avatar') {
        message.reply(message.author.avatarURL);
    } else if(message.content === '!dave') {
        message.channel.send('https://www.youtube.com/watch?v=BQgdOsjArig');
    } else if(message.content === '!nig') {
        const attachment = new Attachment('https://i.imgur.com/q193mAV.png');
        message.channel.send(attachment);
    } else if(message.content ==='!portfolio') {
        message.channel.send('Mike\'s Portfolio...');
        message.channel.send('http://www.mikejferguson.com/');
    } else if(message.content === '!flip') {
        message.channel.send("Flipping a coin...")
        message.channel.send("It landed on+ " + flipResult + "!")
    } else if(message.content === '!trivia') {
        message.channel.send(randomQuestion)
    } else if(message.content.toLowerCase().includes('fuck you' && 'murf')) {
        message.channel.send("<:SadTurtle:569356273481416721>");
    } else if(message.content.toLowerCase().includes('loser' && 'murf')) {
        message.channel.send("<:SadTurtle:569356273481416721>");
    } else if(message.content.toLowerCase().includes('idiot' && 'murf')) {
        message.channel.send("<:SadTurtle:569356273481416721>");
    } else if(message.content.toLowerCase().includes('dumbass' && 'murf')) {
        message.channel.send("<:SadTurtle:569356273481416721>");
    } else if(message.content.toLowerCase().includes('eat dirt' && 'murf')) {
        message.channel.send("<:SadTurtle:569356273481416721>");
    } else if(message.content.toLowerCase().includes('bitch' && 'murf')) {
        message.channel.send("<:SadTurtle:569356273481416721>");
    } else if(message.content.toLowerCase().includes('suck it' && 'murf')) {
        message.channel.send("<:SadTurtle:569356273481416721>");
    } else if(message.content.toLowerCase().includes('shit' && 'murf')) {
        message.channel.send("<:SadTurtle:569356273481416721>");
    }

                // -= Flip a Coin =- //
    var flipCalc = Math.floor(Math.random() * 2) + 1;

    var flipResult

    if(flipCalc === 1) {
        flipResult = 'Heads'
    } else {
        flipResult = 'Tails'
    };

});



bot.on('message', message => {
    if(message.content == '!help') {
        const embed = new RichEmbed()
            .setTitle('* * * M.U.R.F Commands * * *')
            .setColor('#e91e63')
            .setDescription("All commands must be LOWERCASE and led by a '!' (Ex. '!command')")
            .addField(":exclamation:! avatar", ":white_small_square: - Returns a JPG of your Avatar", false)
            .addField(":exclamation:! dave", ":white_small_square: - Fuck you Dave", false)
            .addField(":exclamation:! portfolio", ":white_small_square: - Links you to Mike's Portfolio", false)
            .addField(":exclamation:! flip", ":white_small_square: - Flip a coin and see who wins!", false)
            .addField(":exclamation:! trivia", ":white_small_square: - Receive a random WoW related question! *[WIP]*", false)
            .addField(":exclamation:! play", ":white_small_square: - Plays a YouTube video via URL/Search (type '!musichelp' for more commands)" , false)
        message.channel.send(embed);
    }

});


//  !avatar : Returns JPG of your Avatar
//  !dave : Fuck You Dave
//  !portfolio : Links you to Mike's Portfolio
//  !flip : Flip a coin and see who wins!
//  !trivia : Receive a random WoW related question! *WIP*
