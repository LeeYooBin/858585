const prompt = require('prompt-sync')();

const hero = {
  name: prompt("Enter name: "),
  xp: parseInt(prompt("Enter experience: "))
};

let level;

if (hero.xp < 1000) {
  level = "Ferro";
} else if (hero.xp >= 1001 && hero.xp <= 2000) {
  level = "Bronze";
} else if (hero.xp >= 2001 && hero.xp <= 5000) {
  level = "Prata";
} else if (hero.xp >= 5001 && hero.xp <= 7000) {
  level = "Ouro";
} else if (hero.xp >= 7001 && hero.xp <= 8000) {
  level = "Platina";
} else if (hero.xp >= 8001 && hero.xp <= 9000) {
  level = "Ascendente";
} else if (hero.xp >= 9001 && hero.xp <= 10000) {
  level = "Imortal";
} else {
  level = "Radiante";
}

console.log(`O Herói de nome ${hero.name} está no nível de ${level}`);
