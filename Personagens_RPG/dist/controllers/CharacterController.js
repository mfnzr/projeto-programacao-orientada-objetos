"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharacterController = void 0;
const CharacterClass_1 = require("../enums/CharacterClass");
const Exceptions_1 = require("../exceptions/Exceptions");
//COORDENA O FLUXO ENTRE A VIEW E O SERVICE
class CharacterController {
    //injeção de dependência - o service é injetado no controller, permitindo maior flexibilidade
    constructor(service) {
        this.service = service;
    }
    setView(view) {
        this.view = view;
    }
    startCreation() {
        let creating = true;
        let count = 1;
        while (creating) {
            try {
                const { name, characterClass } = this.view.askCharacterData(count);
                this.createAndShowCharacter(name, characterClass);
                count++;
                if (count > 2) {
                    const continuar = this.view.askContinue();
                    if (!continuar)
                        creating = false;
                }
            }
            catch (error) {
                if (error instanceof Exceptions_1.InvalidOptionException) {
                    console.log(`Erro: ${error.message}`);
                }
                else if (error instanceof Exceptions_1.EmptyNameException) {
                    console.log(`Erro: ${error.message}`);
                }
                else {
                    throw error;
                }
            }
        }
        const all = this.service.Characters();
        this.view.showAllCharacters(all);
    }
    //importa o método createAndShowCharacter para criar um personagem com base na classe escolhida e mostrar suas informações
    //o método createAndShowCharacter é genérico, ou seja, pode criar qualquer tipo de personagem com base na classe escolhida, utilizando o polimorfismo para chamar o método attack específico de cada classe
    createAndShowCharacter(name, characterClass) {
        switch (characterClass) {
            case CharacterClass_1.CharacterClass.WARRIOR:
                //aqui estou utilizando o service para criar um personagem do tipo Guerreiro
                return this.service.createWarrior(name);
            case CharacterClass_1.CharacterClass.ARCHER:
                return this.service.createArcher(name);
            case CharacterClass_1.CharacterClass.MAGE:
                return this.service.createMage(name);
        }
    }
    attack(attackerIndex, defenderIndex, critical) {
        const characters = this.service.Characters();
        const attacker = characters[attackerIndex];
        const defender = characters[defenderIndex];
        if (!attacker || !defender)
            throw new Exceptions_1.CharacterNotFoundException();
        const damage = this.service.attackCharacter(attacker, defender, critical);
        return { attacker, defender, damage };
    }
    startBattle() {
        const entities = this.service.Characters();
        let validChoice = false;
        while (!validChoice) {
            try {
                const { attackerIndex, defenderIndex, critical } = this.view.askBattle(entities);
                if (attackerIndex === defenderIndex) {
                    console.log("Uma entidade não pode atacar a si mesma!");
                    continue;
                }
                const { attacker, defender, damage } = this.attack(attackerIndex, defenderIndex, critical);
                this.view.showAttackResult(attacker, defender, damage, critical);
                validChoice = true;
            }
            catch (error) {
                if (error instanceof Exceptions_1.CharacterNotFoundException) {
                    console.log(`Erro: ${error.message} Tente novamente.\n`);
                }
                else {
                    throw error;
                }
            }
        }
    }
}
exports.CharacterController = CharacterController;
//# sourceMappingURL=CharacterController.js.map