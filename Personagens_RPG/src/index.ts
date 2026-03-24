//comando para rodar o projeto: **npx tsc ** -> ** node dist/index.js **

import { Archer } from "./models/Archer";
import { Mage } from "./models/Mage";
import { Warrior } from "./models/Warrior";

//aqui estou instanciando os personagens, ou seja, criando objetos a partir das classes que criei
//e passando os parâmetros necessários para o construtor de cada classe (name, level, health, characterClass)
const warrior: Warrior = new Warrior("Aragorn", 10, 100);
const archer: Archer = new Archer("Legolas", 8, 80);
const mage: Mage = new Mage("Gandalf", 15, 120);

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
