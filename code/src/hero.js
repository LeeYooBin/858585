class Hero {
  constructor(name, age, type) {
    this.name = name;
    this.age = age;
    this.type = type;
  }

  attack() {
    let attackType;
    
    switch (this.type.toLowerCase()) {
      case "mago":
        attackType = "magia";
        break;
      case "guerreiro":
        attackType = "espada";
        break;
      case "monge":
        attackType = "artes marciais";
        break;
      case "ninja":
        attackType = "shuriken";
        break;
      default:
        attackType = "usou um ataque básico";
    }

    console.log(`O ${this.type} atacou usando ${attackType}`);
  }
}

const warrior = new Hero("Aragorn", 87, "guerreiro");
warrior.attack();

const wizard = new Hero("Gandalf", 2000, "mago");
wizard.attack();
