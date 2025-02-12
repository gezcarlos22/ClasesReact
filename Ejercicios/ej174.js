const json = `{
    "character": {
      "name": "Aria the Brave",
      "class": "Warrior",
      "level": 10,
      "hp": 120,
      "mana": 50,
      "equipment": {
        "weapon": {
          "name": "Flaming Sword",
          "damage": 35,
          "element": "Fire"
        },
        "armor": {
          "name": "Dragon Scale Shield",
          "defense": 50
        }
      },
      "inventory": [
        { "item": "Health Potion", "type": "Consumable", "effect": "+50 HP" },
        { "item": "Mana Potion", "type": "Consumable", "effect": "+30 Mana" },
        {
          "item": "Mystic Gem",
          "type": "Artifact",
          "effect": "Boosts magic power"
        }
      ],
      "quests": [
        { "name": "Slay the Dragon", "status": "Completed" },
        { "name": "Find the Lost Amulet", "status": "In Progress" }
      ]
    }
  }`;

const objeto = JSON.parse(json);

const character = objeto.character
console.log(`Nombre: ${character.name}`);
console.log(`Clase: ${character.class}`);
console.log(`Nivel: ${character.level}`);

console.log("Inventario:")
character.inventory.forEach(item => {
  console.log(`- ${item.item}: ${item.effect}`);
});

console.log("Quests en progreso:");
character.quests.forEach(quest => {
  if (quest.status === "In Progress") {
    console.log(`- ${quest.name}`);
  }
});
