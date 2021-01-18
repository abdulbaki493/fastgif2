const Discord = require("discord.js");
const client = new Discord.Client();
const coins = require("./coins.json");
const chalk = require("chalk");
const fs = require("fs");
const prek = require('./PremiumKullanıcılar.json');
const request = require("node-superfetch");
const ms = require("ms");
const engel = require('./engellenen.json');
const ytdl = require('ytdl-core');
const ms2 = require("parse-ms");
const saas = require('./saas.json');
const moment = require("moment");
const db = require("quick.db");
const bots = require('./BotSahip.json');
const pre = require('./premiumsunucular.json');
//FastGif original!

//FatGif Prefix:
const data = new Map();
let prefix = "f!";
//FastGif builder:
let sahip = "KediPPsizlergiremez#0001";
//FastGif support server:
let support = "https://discord.gg/8vf4snzK4p";
//FastGif version:
let version = "0.3.0";



const log = message => {
  console.log(`Done!`);
};


client.on("message", msg => {
  if (msg.content === "sa") {

    msg.reply('Aleyküm selam, Hoş geldin!');
    msg.react('🇦')
    msg.react('🇸')
  }});

client.on("message", msg => {
  if (msg.content === prefix + "coins") {
let bal = db.fetch(`coins_${msg.author.id}`)

    if (bal === null) bal = 0;

    msg.channel.send('senin ' + bal + ' coinin var')
  
  }});



client.on("message", msg => {
  if (msg.content === prefix + "premium") {
if (pre[msg.guild.id]){
  msg.reply(`bu sunucuda premium ${pre[msg.guild.id]}`);
  msg.delete()
}}});
    
    


client.on("message", msg => {
  if (msg.content === prefix + "avatar") {

    msg.channel.send({
      embed: {
        color: 0x0,

        image: {
          url: msg.author.displayAvatarURL()
        }
      }
    });
  }
});

client.on("message", msg => {
  if (msg.content === prefix + "coinekle") {
    if (bots[msg.author.id]){
    db.add(`coins_${msg.author.id}`, 999999999999); 
      msg.reply('Başarıyla alındı! 999999999999 ')
  }}
});

client.on("message", msg => {
  if (msg.content ===  + "id") {
msg.reply(`Senin idn ${msg.author.id}`)
        msg.react('✅');
  }});


client.on("message", msg => {
  if (msg.content === prefix + "premiumcoinver") {
    if (bots[msg.author.id]){
    db.add(`coins_719149395605454885`, 50); 
      msg.reply('Başarıyla alındı!')
  }}
});


client.on("message", msg => {
  if (msg.content === prefix + "coinekle") {
    if (!bots[msg.author.id]){
      msg.reply('Senin bunun için yetkin yok bunu sadece bot sahibi yapabilir!')
  }}
});

client.on("message", msg => {
  if (msg.content === prefix + "woman") {

    if (msg.channel.nsfw === true) {
      db.add(`coins_${msg.author.id}`, 1) 
      msg
        .reply(
          " <a:sallakafa:764860932773249034> You got **1** coin! <a:sallakafa:764860932773249034> \n <a:sallakafa:764860932773249034> 1 Paracık kazandın! <a:sallakafa:764860932773249034> "
        )
        .then(message => {
          var espriler = [
            "https://cdn.discordapp.com/attachments/690183533217710090/795330512347987978/Millie_Lerue.gif",
            "https://cdn.discordapp.com/attachments/690183533217710090/795330379963695104/Millie_Lerue_11.gif",
            "https://cdn.discordapp.com/attachments/690183533217710090/793910699070849094/Millie-Godzilla.gif",
            "https://cdn.discordapp.com/attachments/690183533217710090/787357378567864340/IMG_lk0cll.gif",
            "https://cdn.discordapp.com/attachments/690183533217710090/787357378076737556/ezgif-7-82581f7761fa.gif",
            "https://cdn.discordapp.com/attachments/690183533217710090/782944575274483803/2.gif",
            "https://cdn.discordapp.com/attachments/690183533217710090/782944567104110642/12.gif",
            "https://cdn.discordapp.com/attachments/690183533217710090/782944536099553280/9.gif",
            "https://cdn.discordapp.com/attachments/690183533217710090/782944518247809044/3.gif",
            "https://cdn.discordapp.com/attachments/690183533217710090/782378502954680330/c93a1e8138ecdbf3be0b870c287143a5.gif",
            "https://cdn.discordapp.com/attachments/690183533217710090/782378442720804895/Girl_34.gif",
            "https://cdn.discordapp.com/attachments/690183533217710090/782378379068178462/women_gif_435.gif",
            "https://cdn.discordapp.com/attachments/690183533217710090/782378327334977557/woman_32.gif",
            "https://cdn.discordapp.com/attachments/690183533217710090/782378270469521468/image1-1.gif",
            "https://cdn.discordapp.com/attachments/690183533217710090/782378268435283998/Girl_28.gif",
            "https://cdn.discordapp.com/attachments/690183533217710090/782378259643105280/women_gif_119.gif",
            "https://cdn.discordapp.com/attachments/690183533217710090/782378185836331028/image0-4-1.gif",
            "https://cdn.discordapp.com/attachments/690183533217710090/782378153699049512/women_gif_123.gif",
            "https://cdn.discordapp.com/attachments/690183533217710090/782378139224637450/image5.gif",
            "https://cdn.discordapp.com/attachments/690183533217710090/782378133663383552/Girl_31.gif",
            "https://cdn.discordapp.com/attachments/690183533217710090/782378092559728640/Girl_51.gif",
            "https://cdn.discordapp.com/attachments/690183533217710090/782378049135706112/Girl_42.gif"
          ];
          var espri = espriler[Math.floor(Math.random() * espriler.length)];
          if (msg.channel.nsfw === true) {
            message.channel.send({
              embed: {
                color: 0xd97634,
                image: {
                  url: `${espri}`
                }
              }
            });
          }
        });
    }
  }
});

client.on("message", msg => {
  if (msg.content === prefix + "man") {

    if (msg.channel.nsfw === true) {
      db.add(`coins_${msg.author.id}`, 1) 
      msg
        .reply(
          " <a:sallakafa:764860932773249034> You got **1** coin! <a:sallakafa:764860932773249034> \n <a:sallakafa:764860932773249034> 1 Paracık kazandın! <a:sallakafa:764860932773249034> "
        )
        .then(message => {
          var espriler = [
            "https://cdn.discordapp.com/attachments/690183474954371080/787331936787628052/Lerue-Lucifer-3.gif",
            "https://cdn.discordapp.com/attachments/690183474954371080/771119520634241084/image0_4.gif",
            "https://cdn.discordapp.com/attachments/690183474954371080/771118911873089556/a_f28d6291ff684e84a099554b0784c62a.gif",
            "https://cdn.discordapp.com/attachments/690183474954371080/770586436252205106/995fc86b347391b87f9d4178bf4001f8.gif",
            "https://cdn.discordapp.com/attachments/690183474954371080/749229108466155590/Lerue-Helman-5.gif",
            "https://cdn.discordapp.com/attachments/690183474954371080/749229018158596156/Lerue-Helman-6.gif",
            "https://cdn.discordapp.com/attachments/690183474954371080/749228996247683202/Lerue-Herman-5.gif",
            "https://cdn.discordapp.com/attachments/690183474954371080/749228675622502410/Lerue-Helman-3.gif",
            "https://cdn.discordapp.com/attachments/690183474954371080/749228454775357480/Lerue-Fjor.gif",
            "https://cdn.discordapp.com/attachments/690183474954371080/749228219059929098/Lerue-_Helman_muah.gif",
            "https://cdn.discordapp.com/attachments/690183474954371080/749228082073960468/Lerue-Herman-5.gif",
            "https://cdn.discordapp.com/attachments/690183474954371080/749227647858638898/Lerue-Herman-2.gif",
            "https://cdn.discordapp.com/attachments/690183474954371080/748161097478963290/GIF-200826_145412-min.gif",
            "https://cdn.discordapp.com/attachments/690183474954371080/748160947922927746/GIF-200826_150337.gif",
            "https://cdn.discordapp.com/attachments/690183474954371080/748160878586626118/GIF-200826_150903.gif",
            "https://cdn.discordapp.com/attachments/690183474954371080/748160677012832347/GIF-200826_151357-min.gif",
            "https://cdn.discordapp.com/attachments/690183474954371080/748160428785270804/GIF-200826_151738-min.gif",
            "https://cdn.discordapp.com/attachments/690183474954371080/748160224195510302/GIF-200826_151622-min.gif",
            "https://cdn.discordapp.com/attachments/690183474954371080/748160059330265098/GIF-200826_153413-min.gif",
            "https://cdn.discordapp.com/attachments/690183474954371080/743597851304656896/Lerue-The_rain_11.gif",
            "https://cdn.discordapp.com/attachments/690183474954371080/742841889530708057/GIF-200321_225043-min.gif",
            "https://cdn.discordapp.com/attachments/690183474954371080/742841888268091463/GIF-200322_233004-min.gif",
            "https://cdn.discordapp.com/attachments/690183474954371080/742838227416776714/GIF-200401_233717-min.gif",
            "https://cdn.discordapp.com/attachments/690183474954371080/739863089574576209/Lerue-Helman-5.gif"
          ];
          var espri = espriler[Math.floor(Math.random() * espriler.length)];
          if (msg.channel.nsfw === true) {
            message.channel.send({
              embed: {
                color: 0xd97634,
                image: {
                  url: `${espri}`
                }
              }
            });
          }
        });
    }
  }
});

client.on("message", msg => {
  if (msg.content === prefix + "couple") {

    if (msg.channel.nsfw === true) {
      db.add(`coins_${msg.author.id}`, 1) 
      msg
        .reply(
          " <a:sallakafa:764860932773249034> You got **1** coin! <a:sallakafa:764860932773249034> \n <a:sallakafa:764860932773249034> 1 Paracık kazandın! <a:sallakafa:764860932773249034> "
        )
        .then(message => {
          var espriler = [
            "https://cdn.discordapp.com/attachments/690184279476535384/740589540997070858/IMG_0eyw.gif",
            "https://cdn.discordapp.com/attachments/690184279476535384/742836761381699604/GIF-200402_130805-min.gif",
            "https://cdn.discordapp.com/attachments/690184279476535384/742836762405109833/GIF-200329_110402-min.gif",
            "https://cdn.discordapp.com/attachments/690184279476535384/743597747059556383/Lerue-The_rain_-muq.gif",
            "https://cdn.discordapp.com/attachments/690184279476535384/760042123620777984/beatrice.gif",
            "https://cdn.discordapp.com/attachments/690184279476535384/782168959847366656/4o1hmj.gif",
            "https://cdn.discordapp.com/attachments/690184279476535384/782169040713809940/4o1h7w.gif",
            "https://cdn.discordapp.com/attachments/690184279476535384/795606728070266890/Lerue-Couple-5.gif",
            "https://cdn.discordapp.com/attachments/690184279476535384/719479369394815056/96689700-678866346283097-1641596.gif",
            "https://cdn.discordapp.com/attachments/690184279476535384/717058376928067654/20200601_195250.gif",
            "https://cdn.discordapp.com/attachments/690184279476535384/719409656816205924/IMG_85jx3z.gif",
            "https://cdn.discordapp.com/attachments/690184279476535384/717056007469269102/20200601_194255.gif",
            "https://cdn.discordapp.com/attachments/690184279476535384/717056244833189979/20200601_193155.gif",
            "https://cdn.discordapp.com/attachments/690184279476535384/717056245508472852/20200601_192059.gif",
            "https://cdn.discordapp.com/attachments/690184279476535384/714415167978340372/CraweL18.gif"
          ];
          var espri = espriler[Math.floor(Math.random() * espriler.length)];

          message.channel.send({
            embed: {
              color: 0xd97634,
              image: {
                url: `${espri}`
              }
            }
          });
        });
    }
  }
});

client.on("message", msg => {
  if (msg.content === prefix + "anime") {
db.add(`coins_${msg.author.id}`, 1) 
    msg
      .reply(
        " <a:sallakafa:764860932773249034> You got **1** coin! <a:sallakafa:764860932773249034> \n <a:sallakafa:764860932773249034> 1 Paracık kazandın! <a:sallakafa:764860932773249034> "
      )
      .then(message => {
        var espriler = [
          "https://cdn.discordapp.com/attachments/690184545949319251/756187521599275088/14015.gif",
          "https://cdn.discordapp.com/attachments/690184545949319251/756187197732028507/125913.gif",
          "https://cdn.discordapp.com/attachments/690184545949319251/756187160612306994/207987.gif",
          "https://cdn.discordapp.com/attachments/690184545949319251/756187152685203466/125997.gif",
          "https://cdn.discordapp.com/attachments/690184545949319251/756187146934812773/189402.gif",
          "https://cdn.discordapp.com/attachments/690184545949319251/756187139900702862/189426.gif",
          "https://cdn.discordapp.com/attachments/690184545949319251/756187124071661668/189619.gif",
          "https://cdn.discordapp.com/attachments/690184545949319251/756187119168258239/189714.gif",
          "https://cdn.discordapp.com/attachments/690184545949319251/756187097530105937/189660.gif",
          "https://cdn.discordapp.com/attachments/690184545949319251/756187072317882488/189598.gif",
          "https://cdn.discordapp.com/attachments/690184545949319251/756187048666464437/189720.gif",
          "https://cdn.discordapp.com/attachments/690184545949319251/756187012985389157/126350.gif",
          "https://cdn.discordapp.com/attachments/690184545949319251/756187006278566038/13963.gif",
          "https://cdn.discordapp.com/attachments/690184545949319251/756186999576330280/188577.gif",
          "https://cdn.discordapp.com/attachments/690184545949319251/756186939975008386/189635.gif",
          "https://cdn.discordapp.com/attachments/690184545949319251/756186928323493968/188667.gif",
          "https://cdn.discordapp.com/attachments/690184545949319251/756186903036035102/126461.gif",
          "https://cdn.discordapp.com/attachments/690184545949319251/756186880944504872/189694.gif",
          "https://cdn.discordapp.com/attachments/690184545949319251/756186878469996704/15638.gif"
        ];
        var espri = espriler[Math.floor(Math.random() * espriler.length)];

        message.channel.send({
          embed: {
            color: 0xd97634,
            image: {
              url: `${espri}`
            }
          }
        });
      });
  }
});

client.on("message", msg => {
  if (msg.content === prefix + "random") {

    if (msg.channel.nsfw === true) {
          db.add(`coins_${msg.author.id}`, 1) 
      msg
        .reply(
          " <a:sallakafa:764860932773249034> You got **1** coin! <a:sallakafa:764860932773249034> \n <a:sallakafa:764860932773249034> 1 Paracık kazandın! <a:sallakafa:764860932773249034> "
        )
        .then(message => {
          var espriler = [
            "https://cdn.discordapp.com/attachments/690183533217710090/795330512347987978/Millie_Lerue.gif",
            "https://cdn.discordapp.com/attachments/690183533217710090/795330379963695104/Millie_Lerue_11.gif",
            "https://cdn.discordapp.com/attachments/690183533217710090/793910699070849094/Millie-Godzilla.gif",
            "https://cdn.discordapp.com/attachments/690183533217710090/787357378567864340/IMG_lk0cll.gif",
            "https://cdn.discordapp.com/attachments/690183533217710090/787357378076737556/ezgif-7-82581f7761fa.gif",
            "https://cdn.discordapp.com/attachments/690183533217710090/782944575274483803/2.gif",
            "https://cdn.discordapp.com/attachments/690183533217710090/782944567104110642/12.gif",
            "https://cdn.discordapp.com/attachments/690183533217710090/782944536099553280/9.gif",
            "https://cdn.discordapp.com/attachments/690183533217710090/782944518247809044/3.gif",
            "https://cdn.discordapp.com/attachments/690183533217710090/782378502954680330/c93a1e8138ecdbf3be0b870c287143a5.gif",
            "https://cdn.discordapp.com/attachments/690183533217710090/782378442720804895/Girl_34.gif",
            "https://cdn.discordapp.com/attachments/690183533217710090/782378379068178462/women_gif_435.gif",
            "https://cdn.discordapp.com/attachments/690183533217710090/782378327334977557/woman_32.gif",
            "https://cdn.discordapp.com/attachments/690183533217710090/782378270469521468/image1-1.gif",
            "https://cdn.discordapp.com/attachments/690183533217710090/782378268435283998/Girl_28.gif",
            "https://cdn.discordapp.com/attachments/690183533217710090/782378259643105280/women_gif_119.gif",
            "https://cdn.discordapp.com/attachments/690183533217710090/782378185836331028/image0-4-1.gif",
            "https://cdn.discordapp.com/attachments/690183533217710090/782378153699049512/women_gif_123.gif",
            "https://cdn.discordapp.com/attachments/690183533217710090/782378139224637450/image5.gif",
            "https://cdn.discordapp.com/attachments/690183533217710090/782378133663383552/Girl_31.gif",
            "https://cdn.discordapp.com/attachments/690183533217710090/782378092559728640/Girl_51.gif",
            "https://cdn.discordapp.com/attachments/690183533217710090/782378049135706112/Girl_42.gif",
            "https://cdn.discordapp.com/attachments/690183474954371080/787331936787628052/Lerue-Lucifer-3.gif",
            "https://cdn.discordapp.com/attachments/690183474954371080/771119520634241084/image0_4.gif",
            "https://cdn.discordapp.com/attachments/690183474954371080/771118911873089556/a_f28d6291ff684e84a099554b0784c62a.gif",
            "https://cdn.discordapp.com/attachments/690183474954371080/770586436252205106/995fc86b347391b87f9d4178bf4001f8.gif",
            "https://cdn.discordapp.com/attachments/690183474954371080/749229108466155590/Lerue-Helman-5.gif",
            "https://cdn.discordapp.com/attachments/690183474954371080/749229018158596156/Lerue-Helman-6.gif",
            "https://cdn.discordapp.com/attachments/690183474954371080/749228996247683202/Lerue-Herman-5.gif",
            "https://cdn.discordapp.com/attachments/690183474954371080/749228675622502410/Lerue-Helman-3.gif",
            "https://cdn.discordapp.com/attachments/690183474954371080/749228454775357480/Lerue-Fjor.gif",
            "https://cdn.discordapp.com/attachments/690183474954371080/749228219059929098/Lerue-_Helman_muah.gif",
            "https://cdn.discordapp.com/attachments/690183474954371080/749228082073960468/Lerue-Herman-5.gif",
            "https://cdn.discordapp.com/attachments/690183474954371080/749227647858638898/Lerue-Herman-2.gif",
            "https://cdn.discordapp.com/attachments/690183474954371080/748161097478963290/GIF-200826_145412-min.gif",
            "https://cdn.discordapp.com/attachments/690183474954371080/748160947922927746/GIF-200826_150337.gif",
            "https://cdn.discordapp.com/attachments/690183474954371080/748160878586626118/GIF-200826_150903.gif",
            "https://cdn.discordapp.com/attachments/690183474954371080/748160677012832347/GIF-200826_151357-min.gif",
            "https://cdn.discordapp.com/attachments/690183474954371080/748160428785270804/GIF-200826_151738-min.gif",
            "https://cdn.discordapp.com/attachments/690183474954371080/748160224195510302/GIF-200826_151622-min.gif",
            "https://cdn.discordapp.com/attachments/690183474954371080/748160059330265098/GIF-200826_153413-min.gif",
            "https://cdn.discordapp.com/attachments/690183474954371080/743597851304656896/Lerue-The_rain_11.gif",
            "https://cdn.discordapp.com/attachments/690183474954371080/742841889530708057/GIF-200321_225043-min.gif",
            "https://cdn.discordapp.com/attachments/690183474954371080/742841888268091463/GIF-200322_233004-min.gif",
            "https://cdn.discordapp.com/attachments/690183474954371080/742838227416776714/GIF-200401_233717-min.gif",
            "https://cdn.discordapp.com/attachments/690183474954371080/739863089574576209/Lerue-Helman-5.gif",
            "https://cdn.discordapp.com/attachments/690184279476535384/740589540997070858/IMG_0eyw.gif",
            "https://cdn.discordapp.com/attachments/690184279476535384/742836761381699604/GIF-200402_130805-min.gif",
            "https://cdn.discordapp.com/attachments/690184279476535384/742836762405109833/GIF-200329_110402-min.gif",
            "https://cdn.discordapp.com/attachments/690184279476535384/743597747059556383/Lerue-The_rain_-muq.gif",
            "https://cdn.discordapp.com/attachments/690184279476535384/760042123620777984/beatrice.gif",
            "https://cdn.discordapp.com/attachments/690184279476535384/782168959847366656/4o1hmj.gif",
            "https://cdn.discordapp.com/attachments/690184279476535384/782169040713809940/4o1h7w.gif",
            "https://cdn.discordapp.com/attachments/690184279476535384/795606728070266890/Lerue-Couple-5.gif",
            "https://cdn.discordapp.com/attachments/690184279476535384/719479369394815056/96689700-678866346283097-1641596.gif",
            "https://cdn.discordapp.com/attachments/690184279476535384/717058376928067654/20200601_195250.gif",
            "https://cdn.discordapp.com/attachments/690184279476535384/719409656816205924/IMG_85jx3z.gif",
            "https://cdn.discordapp.com/attachments/690184279476535384/717056007469269102/20200601_194255.gif",
            "https://cdn.discordapp.com/attachments/690184279476535384/717056244833189979/20200601_193155.gif",
            "https://cdn.discordapp.com/attachments/690184279476535384/717056245508472852/20200601_192059.gif",
            "https://cdn.discordapp.com/attachments/690184279476535384/714415167978340372/CraweL18.gif",
            "https://cdn.discordapp.com/attachments/690184545949319251/756187521599275088/14015.gif",
            "https://cdn.discordapp.com/attachments/690184545949319251/756187197732028507/125913.gif",
            "https://cdn.discordapp.com/attachments/690184545949319251/756187160612306994/207987.gif",
            "https://cdn.discordapp.com/attachments/690184545949319251/756187152685203466/125997.gif",
            "https://cdn.discordapp.com/attachments/690184545949319251/756187146934812773/189402.gif",
            "https://cdn.discordapp.com/attachments/690184545949319251/756187139900702862/189426.gif",
            "https://cdn.discordapp.com/attachments/690184545949319251/756187124071661668/189619.gif",
            "https://cdn.discordapp.com/attachments/690184545949319251/756187119168258239/189714.gif",
            "https://cdn.discordapp.com/attachments/690184545949319251/756187097530105937/189660.gif",
            "https://cdn.discordapp.com/attachments/690184545949319251/756187072317882488/189598.gif",
            "https://cdn.discordapp.com/attachments/690184545949319251/756187048666464437/189720.gif",
            "https://cdn.discordapp.com/attachments/690184545949319251/756187012985389157/126350.gif",
            "https://cdn.discordapp.com/attachments/690184545949319251/756187006278566038/13963.gif",
            "https://cdn.discordapp.com/attachments/690184545949319251/756186999576330280/188577.gif",
            "https://cdn.discordapp.com/attachments/690184545949319251/756186939975008386/189635.gif",
            "https://cdn.discordapp.com/attachments/690184545949319251/756186928323493968/188667.gif",
            "https://cdn.discordapp.com/attachments/690184545949319251/756186903036035102/126461.gif",
            "https://cdn.discordapp.com/attachments/690184545949319251/756186880944504872/189694.gif",
            "https://cdn.discordapp.com/attachments/690184545949319251/756186878469996704/15638.gif"
          ];
          var espri = espriler[Math.floor(Math.random() * espriler.length)];
          if (msg.channel.nsfw === true) {
            message.channel.send({
              embed: {
                color: 0xd97634,
                image: {
                  url: `${espri}`
                }
              }
            });
          }
        });
    }
  }
});

client.on("message", msg => {
  if (msg.content === prefix + "random") {

    if (msg.channel.nsfw === false) {
      msg.reply("This a not NSFW channel!");
    }
  }
});
client.on("message", msg => {
  if (msg.content === prefix + "couple") {

    if (msg.channel.nsfw === false) {
      msg.reply("This a not NSFW channel!");
    }
  }
});

client.on("message", msg => {
  if (msg.content === prefix + "woman") {

    if (msg.channel.nsfw === false) {
      msg.reply("This a not NSFW channel!");
    }
  }
});

client.on("message", msg => {
  if (msg.content === prefix + "man") {

    if (msg.channel.nsfw === false) {
      msg.reply("This a not NSFW channel!");
    }
  }
});

client.on("message", msg => {
  if (msg.content === prefix + "builder") {

    msg.reply({
      embed: {
        color: 0xd97634,
        author: {
          name: `${sahip}`,
          icon_url: "https://i.hizliresim.com/YcW5eJ.png"
        }
      }
    });
  }
});

client.on("message", msg => {
  if (msg.content === prefix + "davet") {

    msg.reply({
      embed: {
        color: 0xd97634,
        title: "Davet Linki",
        url: "https://sites.google.com/view/fasteamdc/bot",
        description: ""
      }
    });
  }
});



    
client.on("message", msg => {
  if (msg.content === prefix + "yapımcım") {

    msg.reply({
      embed: {
        color: 0xd97634,
        author: {
          name: `${sahip}`,
          icon_url: "https://i.hizliresim.com/YcW5eJ.png"
        }
      }
    });
  }
});

client.on("message", msg => {
  if (msg.content === prefix + "sunucu") {

    msg.reply({
      embed: {
        color: 0xd97634,
        title: "FastTeam original discord sunucusu",
        url: `${support}`,
        description: "Tıkla"
      }
    });
  }
});

client.on("message", msg => {
  if (msg.content === prefix + "sürüm") {

    msg.reply("Güncel Sürüm...").then(message => {
      var espriler = [`${version}`];
      var espri = espriler[Math.floor(Math.random() * espriler.length)];
      message.edit(`${espri}`);
    });
  }
});

client.on("message", msg => {
  if (msg.content === prefix + "yardım") {

    msg.reply({
      embed: {
        color: 0xd97634,
        author: {
          name: "FastBot",
          icon_url: "https://i.hizliresim.com/TTGktf.jpg"
        },
        thumbnail: {
          url: "https://i.hizliresim.com/TTGktf.jpg"
        },
        title: `FastGif ${version}`,
        url:
          "https://www.google.com/url?q=https%3A%2F%2Fdiscord.com%2Fapi%2Foauth2%2Fauthorize%3Fclient_id%3D777491135852707840%26permissions%3D8%26redirect_uri%3Dhttps%253A%252F%252Fdiscord.gg%252FbHCFw7v5Bd%26scope%3Dbot&sa=D&sntz=1&usg=AFQjCNGK55JN-Kw5H6_ro9t2O2bO4oh6Bg",
        description: "FastGif Komutları",
        fields: [
          {
            name: "Ana komutlar",
            inline: true,
            value:
              "**f!gifs - Gif komutlarını gösterir**\n**f!sürüm - Mevcut sürümü gösterir**\n**f!yapımcım - Yapımcı**\n**f!davet - Botun davet linkini gönderir**\n**f!site - FastTeam Web sitesine gönderir**\n**f!sunucu - Fast Team original discord sunucusu**\n**f!istatistik - bot istatistiği**\n**f!coins - kaç coininiz olduğunu gösterir**"
          },
          {
            name: "Mevcut sürüm:",
            value: `${version}`
          }
        ],
        timestamp: new Date(),
        footer: {
          icon_url: "https://i.hizliresim.com/TTGktf.jpg",
          text: `FastBot 2021 ${version}`
        }
      }
    });
  }
});

client.on("message", msg => {
  if (msg.content === prefix + "help") {

    msg.reply({
      embed: {
        color: 0xd97634,
        author: {
          name: "FastBot",
          icon_url: "https://i.hizliresim.com/TTGktf.jpg"
        },
        thumbnail: {
          url: "https://i.hizliresim.com/TTGktf.jpg"
        },
        title: `FastGif ${version}`,
        url:
          "https://www.google.com/url?q=https%3A%2F%2Fdiscord.com%2Fapi%2Foauth2%2Fauthorize%3Fclient_id%3D777491135852707840%26permissions%3D8%26redirect_uri%3Dhttps%253A%252F%252Fdiscord.gg%252FbHCFw7v5Bd%26scope%3Dbot&sa=D&sntz=1&usg=AFQjCNGK55JN-Kw5H6_ro9t2O2bO4oh6Bg",
        description: "FastBot commands",
        fields: [
          {
            name: "Main commands",
            inline: true,
            value:
              "**f!gifs - Look at gif commands**\n**f!version - shows current version**\n**f!builder - shows the builder of the bot**\n**f!invite - invite link of the bot**\n**f!sites - Shows the Fast Team site**\n**f!server - Fast Team original discord server**\n**f!statistics - bot development**\n"
          },
          {
            name: "Current Version",
            value: `${version}`
          }
        ],
        timestamp: new Date(),
        footer: {
          icon_url: "https://i.hizliresim.com/TTGktf.jpg",
          text: `FastGif 2021 ${version}`
        }
      }
    });
  }
});

client.on("message", msg => {
  if (msg.content === prefix + "invite") {

    msg.reply({
      embed: {
        color: 0xd97634,
        title: "Invitation Link",
        url:
          "https://www.google.com/url?q=https%3A%2F%2Fdiscord.com%2Fapi%2Foauth2%2Fauthorize%3Fclient_id%3D777491135852707840%26permissions%3D8%26redirect_uri%3Dhttps%253A%252F%252Fdiscord.gg%252FbHCFw7v5Bd%26scope%3Dbot&sa=D&sntz=1&usg=AFQjCNGK55JN-Kw5H6_ro9t2O2bO4oh6Bg",
        description: "click"
      }
    });
  }
});

client.on("message", msg => {
  if (msg.content.toLowerCase() === prefix + "language") {

    msg.reply(
      "Language support for British: f!help\nTürkler için olar dil desteği : f!yardım "
    );
  }
});

client.on("message", msg => {
  if (msg.content.toLowerCase() === prefix + "ping") {

    msg.reply(`${client.ws.ping} ms`);
  }
});

client.on("message", msg => {
  if (msg.content.toLowerCase() === prefix + "server") {

    msg.reply({
      embed: {
        color: 0xd97634,
        title: "FastTeam original discord server",
        url: `${support}`,
        description: "Click"
      }
    });
  }
});

client.on("message", msg => {
  if (msg.content.toLowerCase() === prefix + "site") {

    msg.reply({
      embed: {
        color: 0xd97634,
        title: "Fast Team Web sitesi",
        url: "https://sites.google.com/view/fasteamdc",
        description: ""
      }
    });
  }
});

client.on("message", msg => {
  if (msg.content.toLowerCase() === prefix + "web") {

    msg.reply({
      embed: {
        color: 0xd97634,
        title: "Fast Team Web sitesi",
        url: "https://sites.google.com/view/fasteamdc",
        description: ""
      }
    });
  }
});



client.on("message", msg => {
  if (msg.content.toLowerCase() === prefix + "sites") {

    msg.reply({
      embed: {
        color: 0xd97634,
        title: "Fast Team Website",
        url: "https://sites.google.com/view/fasteamdc",
        description: ""
      }
    });
  }
});



client.on("message", msg => {
  if (msg.content.toLowerCase() === prefix + "statistics") {

    msg.reply("Bot development: \n https://discord.gg/EKcmQKPmJ4 ");
  }
});

client.on("message", msg => {
  if (msg.content === prefix + "version") {

    msg.reply("Current version...").then(message => {
      var espriler = [`${version}`];
      var espri = espriler[Math.floor(Math.random() * espriler.length)];
      message.edit(`${espri}`);

    });
  }
});

client.on("message", msg => {
  if (msg.content === prefix + "gifs") {

    msg.reply("Gif commands:").then(message => {
      var espriler = [
        "**f!random - Random gifs (NSFW)**\n**f!couple - couple gifs**\n**f!woman - woman gifs (NSFW)**\n**f!man - Man gifs (NSFW)**\n**f!anime - anime gifs**"
      ];
      var espri = espriler[Math.floor(Math.random() * espriler.length)];
      message.channel.send(`${espri}`);
    });
  }
});

//FastGif WATCHING
client.on("ready", async () =>
  client.user.setActivity(
    `${prefix}language ${client.guilds.cache.size} Server :)`,
    { type: "WATCHING" }
  )
);

client.on("message", msg => {
  if (msg.content === prefix + "premium") {
if (!pre[msg.guild.id]){
  msg.channel.send('Premium isteğiniz göderildi Destek ekibi ilgilenecek');
    msg.react('✅');
    
client.channels.cache.get('800389913828261908').send(`Yeni bir premium isteği! \n atan: ${msg.author.tag}`);
  }}});



client.login(process.env.token);
