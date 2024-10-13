const prompt = require('prompt-sync')();

const rankedMatchesCalculator = (victories, defeats) => {
  const result = victories - defeats;

  if (result < 10) return "Ferro";
  else if (result >= 11 && result <= 20) return "Bronze";
  else if (result >= 21 && result <= 50) return "Prata";
  else if (result >= 51 && result <= 80) return "Ouro";
  else if (result >= 81 && result <= 90) return "Diamante";
  else if (result >= 91 && result <= 100) return "Lendário";
  else if (result >= 101) return "Imortal";
};

const hero = {
  victories: parseInt(prompt("Enter victory number: ")),
  defeats: parseInt(prompt("Enter defeat number: "))
};

const rank = rankedMatchesCalculator(hero.victories, hero.defeats);

console.log(`O Herói tem de saldo de ${victories} está no nível de ${rank}`);
