"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ReadlineConfig_1 = require("./ReadlineConfig");
const CharacterController_1 = require("../controllers/CharacterController");
async function main() {
    const view = new ReadlineConfig_1.CharacterView();
    const controller = new CharacterController_1.CharacterController();
    console.log("Escolha a classe do personagem:");
    console.log("1 - Warrior");
    console.log("2 - Archer");
    console.log("3 - Mage");
    const choice = await view.ask("Opção: ");
    const name = await view.ask("Nome do personagem: ");
    switch (choice) {
        case "1":
            controller.createAndShowWarrior(name);
            break;
        case "2":
            controller.createAndShowArcher(name);
            break;
        case "3":
            controller.createAndShowMage(name);
            break;
        default:
            console.log("Opção inválida!");
    }
    view.close();
}
main();
//# sourceMappingURL=CharacterView.js.map