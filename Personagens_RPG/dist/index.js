"use strict";
//comando para rodar o projeto: **npx tsc ** -> ** node dist/index.js **
Object.defineProperty(exports, "__esModule", { value: true });
const Archer_1 = require("./models/Archer");
const Mage_1 = require("./models/Mage");
const Warrior_1 = require("./models/Warrior");
//aqui estou instanciando os personagens, ou seja, criando objetos a partir das classes que criei
//e passando os parâmetros necessários para o construtor de cada classe (name, level, health, characterClass)
const warrior = new Warrior_1.Warrior("Aragorn", 10, 100);
const archer = new Archer_1.Archer("Legolas", 8, 80);
const mage = new Mage_1.Mage("Gandalf", 15, 120);
console.log(`
  ${warrior.name}
  Classe: ${warrior.characterClass}
  Poder de ataque: ${warrior.attack()}
  Saúde: ${warrior.health}
  Dano recebido: ${warrior.takeDamage(20)}
  Saúde após dano: ${warrior.health}
`);
console.log(`
  ${archer.name}
  Classe: ${archer.characterClass}
  Poder de ataque: ${archer.attack()}
  Saúde: ${archer.health}
  Dano recebido: ${archer.takeDamage(15)}
  Saúde após dano: ${archer.health}
`);
console.log(`
  ${mage.name}
  Classe: ${mage.characterClass}
  Poder de ataque: ${mage.attack()}
  Saúde: ${mage.health}
  Dano recebido: ${mage.takeDamage(25)}
  Saúde após dano: ${mage.health}
`);
//# sourceMappingURL=index.js.map