"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharacterController = void 0;
const CharacterClass_1 = require("../enums/CharacterClass");
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
            const { name, characterClass } = this.view.askCharacterData(count);
            this.createAndShowCharacter(name, characterClass);
            count++;
            if (count > 2) { // mínimo 2 personagens antes de perguntar
                const continuar = this.view.askContinue();
                if (!continuar)
                    creating = false;
            }
        }
        const all = this.service.getAllCharacters();
        this.view.showAllCharacters(all);
    }
    //importa o método createAndShowCharacter para criar um personagem com base na classe escolhida e mostrar suas informações
    //a classe é definida como um enum, o que facilita a escolha e evita erros de digitação
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
}
exports.CharacterController = CharacterController;
//# sourceMappingURL=CharacterController.js.map