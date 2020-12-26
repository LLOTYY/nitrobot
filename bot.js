const Discord = require("discord.js")
const client = new Discord.Client();

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});



client.on("message", message => {
  function rasteleSembol(uzunluk, semboller) {
    var maske = "";

    if (semboller.indexOf("a") > -1) maske += "abcdefghijklmnopqrstuvwxyz";

    if (semboller.indexOf("A") > -1) maske += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    if (semboller.indexOf("0") > -1) maske += "0123456789";

    var sonuc = "";

    for (var i = uzunluk; i > 0; --i) {
      sonuc += maske[Math.floor(Math.random() * maske.length)];
    }

    return sonuc;
  }

  function spamla() {
    message.channel.send(
      "https:/" + "/discord.gift/" + rasteleSembol(16, "0aA")
    );
  }

  {
    if (message.content.startsWith("!nitro")) {
        {
         message.channel.send(
      "https:/" + "/discord.gift/" + rasteleSembol(16, "0aA")
          );
        }
      {
  message.channel.send("https:/" + "/discord.gift/" + rasteleSembol(16, "0aA"));
      }
{
  message.channel.send("https:/" + "/discord.gift/" + rasteleSembol(16, "0aA"));
      }
{
  message.channel.send("https:/" + "/discord.gift/" + rasteleSembol(16, "0aA"));
      }
{
  message.channel.send("https:/" + "/discord.gift/" + rasteleSembol(16, "0aA"));
      }
{
  message.channel.send("https:/" + "/discord.gift/" + rasteleSembol(16, "0aA"));
      }
      {
  message.channel.send("https:/" + "/discord.gift/" + rasteleSembol(16, "0aA"));
      }
      {
  message.channel.send("https:/" + "/discord.gift/" + rasteleSembol(16, "0aA"));
      }
      {
  message.channel.send("https:/" + "/discord.gift/" + rasteleSembol(16, "0aA"));
      }
      {
  message.channel.send("https:/" + "/discord.gift/" + rasteleSembol(16, "0aA"));
      }
      {
  message.channel.send("https:/" + "/discord.gift/" + rasteleSembol(16, "0aA"));
      }
      {
  message.channel.send("https:/" + "/discord.gift/" + rasteleSembol(16, "0aA"));
      }
      {
  message.channel.send("https:/" + "/discord.gift/" + rasteleSembol(16, "0aA"));
      }
    }
  }
});
      

client.login("NzgzNTg3OTM0Njk0NTM5Mjk2.X8c7IQ.SjC9BjjHPTuljWoqskD1IiKHzoE");
