//export decks at bottom

//  ------------------------------------------------ B E A S T ------------------------------------------------
const amzBabyTiger = {
  id: "amz-baby-tiger",
  name: "Amazoness Baby Tiger",
  level: "2",
  attribute: "Earth",
  type: "Beast",
  atk: "500",
  def: "500",
  effect : "This card's name becomes \"Amazoness Tiger\" while on the field or in the GY. If an \"Amazoness\" monster is Normal or Special Summoned to your field while this card is in your hand or GY: You can Special Summon this card. You can only use this effect of \"Amazoness Baby Tiger\" once per turn. Gains 100 ATK for each \"Amazoness\" card in your GY.",
  imgPath: "../images/cards/warriors/amazoness/card-art/baby-tiger.jpg"
};
const dynatherium = {
  id: "dynatherium",
  name: "Dynatherium",
  level: "4",
  attribute: "Wind",
  type: "Beast",
  atk: "1600",
  def: "600",
  effect : "You can Special Summon this card (from your hand). You can only Special Summon \"Dynatherium\" once per turn this way. When Summoned this way: Your opponent can target 1 Level 4 monster in either player's Graveyard; they Special Summon that target to their side of the field.",
  imgPath: "../images/cards/beast/card-art/dynatherium.jpg"
};

//  ------------------------------------------------ D I N O ------------------------------------------------
const babycerasaurus = {
  id: "babycerasaurus",
  name: "Babycerasaurus",
  level: "2",
  attribute: "Earth",
  type: "Dinosaur",
  atk: "500",
  def: "500",
  effect : "If this card is destroyed by a card effect and sent to the Graveyard: Special Summon 1 Level 4 or lower Dinosaur-Type monster from your Deck.",
  imgPath: "../images/cards/dinos/card-art/babycerasaurus.jpg"
};
const giantRex = {
  id: "giant-rex",
  name: "Giant Rex",
  level: "4",
  attribute: "Earth",
  type: "Dinosaur",
  atk: "2000",
  def: "1200",
  effect : "Cannot attack directly. If this card is banished: You can Special Summon this card, and if you do, this card gains 200 ATK for each of your banished Dinosaur monsters. You can only use this effect of \"Giant Rex\" once per turn.",
  imgPath: "../images/cards/dinos/card-art/giant-rex.jpg"
};
const jurracDino = {
  id: "jurrac-dino",
  name: "Jurrac Dino",
  level: "3",
  attribute: "Fire",
  type: "Dinosaur",
  atk: "1700",
  def: "800",
  effect : "Once during each player's End Phase, if this card destroyed an opponent's monster by battle this turn, you can Tribute 1 \"Jurrac\" monster to draw 2 cards.",
  imgPath: "../images/cards/dinos/card-art/jurrac-dino.jpg"
};
const sabersaurus = {
  id: "sabersaurus",
  name: "Sabersaurus",
  level: "4",
  attribute: "Earth",
  type: "Dinosaur",
  atk: "1900",
  def: "500",
  effect : "This normally gentle dinosaur enjoys relaxing in its nest in the prairies. If it becomes angered, it turns terribly ferocious.",
  imgPath: "../images/cards/dinos/card-art/sabersaurus.jpg"
};
const salamandra = {
  id: "salamandra",
  name: "Evilswarm Salamandra",
  level: "4",
  attribute: "Dark",
  type: "Dinosaur",
  atk: "1850",
  def: "950",
  effect : "Up to twice per turn: You can banish 1 monster from your Graveyard; this card gains 300 ATK until the end of your opponent's turn.",
  imgPath: "../images/cards/dinos/card-art/salamandra.jpg"
};

//  ------------------------------------------------ D R A G O N ------------------------------------------------
const blackrose = {
  id: "blackrose",
  name: "Black Rose Dragon",
  level: "7",
  attribute: "Fire",
  type: "Dragon/Synchro",
  atk: "2400",
  def: "1800",
  summonRequirement: "1 Tuner + 1+ non-Tuner monsters",
  effect: "When this card is Synchro Summoned: You can destroy all cards on the field. Once per turn: You can banish 1 Plant monster from your GY, then target 1 Defense Position monster your opponent controls; change that target to face-up Attack Position, and if you do, its ATK becomes 0 until the end of this turn.",
  imgPath: "../images/cards/dragons/card-art/black-rose-dragon.jpg"
};

//  ------------------------------------------------ F A I R Y ------------------------------------------------
const constellarVirgo = {
  id: "constellar-virgo",
  name: "Constellar Virgo",
  level: "5",
  attribute: "Light",
  type: "Fairy",
  atk: "2300",
  def: "1600",
  effect : "When this card is Normal Summoned: You can Special Summon 1 Level 5 \"Constellar\" monster from your hand in face-up Defense Position.",
  imgPath: "../images/cards/fairy/card-art/constellar-virgo.jpg"
};

//  ------------------------------------------------ F I E N D ------------------------------------------------
const archCavalry = {
  id: "arch-cavalry",
  name: "Archfiend Cavalry",
  level: "4",
  attribute: "Dark",
  type: "Fiend",
  atk: "1900",
  def: "0",
  effect : "If this card on the field is destroyed by card effect and sent to the GY: You can target 1 \"Archfiend\" monster in your GY, except \"Archfiend Cavalry\"; Special Summon it, but it cannot attack this turn.",
  imgPath: "../images/cards/fiends/archfiends/card-art/cavalry.jpg"
};
const archCommander = {
  id: "arch-commander",
  name: "Archfiend Commander",
  level: "6",
  attribute: "Dark",
  type: "Fiend",
  atk: "2500",
  def: "1200",
  effect : "If you control an \"Archfiend\" card, you can Special Summon this card (from your hand), but it cannot attack this turn. You can only Special Summon \"Archfiend Commander\" once per turn this way. When Special Summoned this way: Target 1 \"Archfiend\" card you control; destroy that target. When this card is Tribute Summoned: You can target 1 Level 6 \"Archfiend\" monster in your Graveyard; Special Summon that target in face-up Defense Position.",
  imgPath: "../images/cards/fiends/archfiends/card-art/commander.jpg"
};
const archEmperor = {
  id: "arch-emperor",
  name: "Archfiend Emperor, the First Lord of Horror",
  level: "8",
  attribute: "Dark",
  type: "Fiend",
  atk: "3000",
  def: "2000",
  effect : "You can Normal Summon this card without Tributing, but its original ATK/DEF become halved. If Summoned this way, this card is destroyed during the End Phase. You cannot Special Summon any monsters, except Fiend monsters. Once per turn: You can banish 1 \"Archfiend\" card from your hand or GY, then target 1 card on the field; destroy it.",
  imgPath: "../images/cards/fiends/archfiends/card-art/emperor.jpg"
};
const archEmpress = {
  id: "arch-empress",
  name: "Archfiend Empress",
  level: "8",
  attribute: "Dark",
  type: "Fiend",
  atk: "2900",
  def: "2100",
  effect : "If (exactly) 1 face-up DARK Fiend-Type monster on the field, except this card, would be destroyed, you can remove from play 1 DARK Fiend-Type monster from your Graveyard, instead. When this card is destroyed and sent from the field to the Graveyard, you can select 1 Level 6 or higher DARK Fiend-Type monster in your Graveyard, except \"Archfiend Empress\", and Special Summon it.",
  imgPath: "../images/cards/fiends/archfiends/card-art/empress.jpg"
};
const armades = {
  id: "armades",
  name: "Armades, Keeper of Boundaries",
  level: "5",
  attribute: "Light",
  type: "Fiend/Syncro",
  atk: "2300",
  def: "1500",
  summonRequirement: "1 Tuner + 1 or more non-Tuner monsters",
  effect : "If this card attacks or is attacked, your opponent cannot activate cards or effects until the end of the Damage Step.",
  imgPath: "../images/cards/fiends/card-art/armades.jpg"
};
const cardGuard = {
  id: "card-guard",
  name: "Card Guard",
  level: "4",
  attribute: "Dark",
  type: "Fiend",
  atk: "1600",
  def: "500",
  effect : "If this card is Normal or Special Summoned: Place 1 Guard Counter on it. This card gains 300 ATK for each Guard Counter on it. Once per turn: You can target 1 other face-up card you control; remove 1 Guard Counter from this card, and if you do, place 1 Guard Counter on that target (if that card would ever be destroyed, remove 1 Guard Counter from it instead).",
  imgPath: "../images/cards/fiends/card-art/card-guard.jpg"
};
const doomdog = {
  id: "doomdog",
  name: "Doomdog Octhros",
  level: "3",
  attribute: "Dark",
  type: "Fiend",
  atk: "800",
  def: "800",
  effect : "If this card is sent from the field to the Graveyard: Add 1 Level 8 Fiend-Type monster from your Deck to your hand. You can only use this effect of \"Doomdog Octhros\" once per turn.",
  imgPath: "../images/cards/fiends/card-art/doomdog.jpg"
};
const dukeShadow = {
  id: "duke-shadow",
  name: "Duke Shadow, the Sinister Shadow Lord",
  level: "4",
  attribute: "Dark",
  type: "Fiend",
  atk: "500",
  def: "2000",
  effect : "You can Tribute any number of DARK monsters; Special Summon this card from your hand, and if you do, it gains 500 ATK for each monster you Tributed. If this card is Normal or Special Summoned: You can target 1 Level 5 or higher DARK monster in your GY; add it to your hand. You can only use each effect of \"Duke Shade, the Sinister Shadow Lord\" once per turn. You cannot Special Summon monsters the turn you activate either of this card's effects, except DARK monsters.",
  imgPath: "../images/cards/fiends/card-art/duke-shadow.jpg"
};
const fabledLurrie = {
  id: "fabled-lurrie",
  name: "Fabled Lurrie",
  level: "1",
  attribute: "Light",
  type: "Fiend",
  atk: "200",
  def: "400",
  effect : "When this card is discarded to the Graveyard, Special Summon it.",
  imgPath: "../images/cards/fiends/card-art/fabled-lurrie.jpg"
};
const lavaGolem = {
  id: "lava-golem",
  name: "Lava Golem",
  level: "8",
  attribute: "Fire",
  type: "Fiend",
  atk: "3000",
  def: "2500",
  effect : "Cannot be Normal Summoned/Set. Must first be Special Summoned (from your hand) to your opponent's field by Tributing 2 monsters they control. You cannot Normal Summon/Set the turn you Special Summon this card. Once per turn, during your Standby Phase: Take 1000 damage.",
  imgPath: "../images/cards/fiends/card-art/lava-golem.jpg"
};
const necrofear = {
  id: "necrofear",
  name: "Dark Necrofear",
  level: "8",
  attribute: "Dark",
  type: "Fiend",
  atk: "2200",
  def: "2800",
  effect : "Cannot be Normal Summoned/Set. Must first be Special Summoned (from your hand) by banishing 3 Fiend monsters from your GY. During the End Phase, if this card is in your GY because it was destroyed in your Monster Zone by an opponent's card and sent there this turn: Target 1 face-up monster your opponent controls; equip this card to that target. While this card is equipped to a monster by this effect, take control of that monster.",
  imgPath: "../images/cards/fiends/card-art/dark-necrofear.jpg"
};
const relinkuriboh = {
  id: "relinkuriboh",
  name: "Relinkuriboh",
  level: "1",
  attribute: "Dark",
  type: "Fiend",
  atk: "300",
  def: "200",
  effect : "If this card is Tributed: Draw 1 card. If your monster would be destroyed by battle, you can banish this card from your GY instead.",
  imgPath: "../images/cards/fiends/card-art/relinkuriboh.jpg"
};
const snipeHunter = {
  id: "snipe-hunter",
  name: "Snipe Hunter",
  level: "4",
  attribute: "Dark",
  type: "Fiend",
  atk: "1500",
  def: "600",
  effect : "You can discard 1 card, then target 1 card on the field; roll a six-sided die, and destroy that target unless you roll a 1 or 6.",
  imgPath: "../images/cards/fiends/card-art/snipe-hunter.jpg"
};
const sphereKuriboh = {
  id: "sphere-kuriboh",
  name : "Sphere Kuriboh",
  level: "1",
  attribute: "Dark",
  type: "Fiend",
  atk: "300",
  def: "200",
  effect: "When an opponent's monster declares an attack: You can send this card from your hand to the Graveyard; change the attacking monster to Defense Position. When you Ritual Summon a monster, you can banish this card from your Graveyard as 1 of the monsters required for the Ritual Summon.",
  imgPath: "../images/cards/fiends/card-art/sphere-kuriboh.jpg"
};
const stygianSecurity = {
  id: "stygian-security",
  name: "Stygian Security",
  level: "1",
  attribute: "Dark",
  type: "Fiend",
  atk: "100",
  def: "600",
  effect : "If this card is destroyed by battle and sent to the Graveyard: Special Summon 1 Level 1 Fiend-Type monster from your Deck.",
  imgPath: "../images/cards/fiends/card-art/stygian-security.jpg"
};
const tranceArch = {
  id: "trance-arch",
  name: "Trance Archfiend",
  level: "4",
  attribute: "Dark",
  type: "Fiend",
  atk: "1500",
  def: "500",
  effect : "Once per turn: You can discard 1 Fiend-Type monster, and if you do, this card gains 500 ATK until the end of this turn. When this card you control is destroyed and sent to your Graveyard: You can target 1 of your banished DARK monsters; add that target to your hand.",
  imgPath: "../images/cards/fiends/card-art/trance-archfiend.jpg"
};

//  ------------------------------------------------ M A C H I N E ------------------------------------------------
const constellarZubeneschamali = {
  id: "constellar-zubeneschamali",
  name: "Constellar Zubeneschamali",
  level: "5",
  attribute: "Light",
  type: "Machine",
  atk: "2100",
  def: "1400",
  effect : "When this card is Normal or Special Summoned: You can add 1 \"Constellar\" monster from your Deck to your hand.",
  imgPath: "../images/cards/machines/card-art/constellar-zubeneschamali.jpg"
};
const jinzo = {
  id: "jinzo",
  name: "Jinzo",
  level: "6",
  attribute: "Dark",
  type: "Machine",
  atk: "2400",
  def: "1500",
  effect : "Trap Cards, and their effects on the field, cannot be activated. Negate all Trap effects on the field.",
  imgPath: "../images/cards/machines/card-art/jinzo.jpg"
};
const jinzoJector = {
  id: "jinzo-jector",
  name: "Jinzo - Jector",
  level: "4",
  attribute: "Dark",
  type: "Machine",
  atk: "800",
  def: "2000",
  effect : "This card's name becomes \"Jinzo\" while on the field or in the Graveyard. You can Tribute this card; add 1 \"Jinzo\" monster from your Deck to your hand, except \"Jinzo - Jector\", then reveal all Set cards in your opponent's Spell & Trap Zones, and if there are Trap Cards among them, you can Special Summon \"Jinzo\" monsters from your hand, up to the number of Trap Cards revealed. You can only use this effect of \"Jinzo - Jector\" once per turn.",
  imgPath: "../images/cards/machines/card-art/jinzo-jector.jpg"
};
const samuraiDestroyer = {
  id: "samurai-destroyer",
  name: "Samurai Destroyer",
  level: "7",
  attribute: "Earth",
  type: "Machine/Synchro",
  atk: "2600",
  def: "1400",
  summonRequirement: "1 Tuner + 1+ non-Tuner monsters",
  effect: "If this card battles an opponent's monster, your opponent cannot activate cards or effects until the end of the Damage Step, also that opponent's monster has its effects negated during the Battle Phase only. If this face-up card in its owner's control leaves the field because of an opponent's card effect: You can target 1 Machine monster in your GY; Special Summon it.",
  imgPath: "../images/cards/machines/card-art/samurai-destroyer.jpg"
};
const vermillion = {
  id: "vermillion",
  name: "Vermillion Dragon Mech",
  level: "9",
  attribute: "Fire",
  type: "Machine/Synchro",
  atk: "2700",
  def: "1800",
  summonRequirement: "1 Tuner + 1+ non-Tuner monsters",
  effect: "Once per turn: You can banish 1 Tuner from your hand, GY, or face-up field, then target 1 card on the field; destroy it. If this Synchro Summoned card is destroyed by card effect and sent to the GY: You can target 1 of your banished Tuners; add it to your hand.",
  imgPath: "../images/cards/machines/card-art/vermillion-dragon-mech.jpg"
}

//  ------------------------------------------------ R O C K ------------------------------------------------
const landrobeVassal = {
  id: "landrobe-vassal",
  name: "Landrobe the Rock Vassal",
  level: "4",
  attribute: "Earth",
  type: "Rock",
  atk: "800",
  def: "1000",
  effect : "If this card is in your hand: You can target 1 face-up monster your opponent controls; you cannot Special Summon monsters from the Extra Deck for the rest of this turn, also Special Summon this card, and if you do, change that monster to face-down Defense Position. If this card is Tributed for a Tribute Summon: You can target 1 monster with 800 ATK and 1000 DEF in your Graveyard, except \"Landrobe the Rock Vassal\"; add it to your hand. You can only use each effect of \"Landrobe the Rock Vassal\" once per turn.",
  imgPath: "../images/cards/rock/card-art/landrobe-the-rock-vassal.jpg"
};

//  ------------------------------------------------ T H U N D E R ------------------------------------------------
const creator = {
  id: "creator",
  name: "The Creator",
  level: "8",
  attribute: "Light",
  type: "Thunder",
  atk: "2300",
  def: "3000",
  effect : "Cannot be Special Summoned from the Graveyard. Once per turn: You can target 1 monster in your Graveyard; send 1 card from your hand to the Graveyard, and if you do, Special Summon that target.",
  imgPath: "../images/cards/thunder/card-art/the-creator.jpg"
};
const mithraVassal = {
  id: "mithra-vassal",
  name: "Mithra the Thunder Vassal",
  level: "2",
  attribute: "Light",
  type: "Thunder",
  atk: "800",
  def: "1000",
  effect : "If this card is in your hand: You can activate this effect; you cannot Special Summon monsters from the Extra Deck for the rest of this turn, also Special Summon this card, and if you do, Special Summon 1 \"Vassal Token\" (Thunder-Type/LIGHT/Level 1/ATK 800/DEF 1000) to your opponent's field in Defense Position. If this card is Tributed for a Tribute Summon: You can activate this effect; you can Tribute Summon 1 monster during your Main Phase this turn, in addition to your Normal Summon/Set this turn. (You can only gain this effect once per turn.) You can only use each effect of \"Mithra the Thunder Vassal\" once per turn.",
  imgPath: "../images/cards/thunder/card-art/mithra-the-thunder-vassal.jpg"
};

//  ------------------------------------------------ W A R R I O R ------------------------------------------------
const adChanger = {
  id: "ad-changer",
  name: "A/D Changer",
  level: "1",
  attribute: "Light",
  type: "Warrior",
  atk: "100",
  def: "100",
  effect : "You can banish this card from your Graveyard, then target 1 monster on the field; change its battle position.",
  imgPath: "../images/cards/warriors/card-art/ad-changer.jpg"
};
const amzPaladin = {
  id: "amz-paladin",
  name: "Amazoness Paladin",
  level: "4",
  attribute: "Earth",
  type: "warrior",
  atk: "1700",
  def: "300",
  effect : "This card gains 100 ATK for each \"Amazoness\" monster you control.",
  imgPath: "../images/cards/warriors/amazoness/card-art/paladin.jpg"
};
const amzPrincess = {
  id: "amz-princess",
  name: "Amazoness Princess",
  level: "3",
  attribute: "Earth",
  type: "Warrior",
  atk: "1200",
  def: "900",
  effect : "This card's name becomes \"Amazoness Queen\" while on the field or in the GY. If this card is Normal or Special Summoned: You can add 1 \"Amazoness\" Spell/Trap from your Deck to your hand. You can only use this effect of \"Amazoness Princess\" once per turn. When this card declares an attack: You can send 1 other card from your hand or field to the GY; Special Summon 1 \"Amazoness\" monster from your Deck in Defense Position, except \"Amazoness Princess\".",
  imgPath: "../images/cards/warriors/amazoness/card-art/princess.jpg"
};
const amzQueen = {
  id: "amz-queen",
  name: "Amazoness Queen",
  level: "6",
  attribute: "Earth",
  type: "Warrior",
  atk: "2400",
  def: "1800",
  effect : "\"Amazoness\" monsters you control cannot be destroyed by battle.",
  imgPath: "../images/cards/warriors/amazoness/card-art/queen.jpg"
};
const amzSage = {
  id: "amz-sage",
  name: "Amazoness Sage",
  level: "4",
  attribute: "Earth",
  type: "Warrior",
  atk: "1400",
  def: "700",
  effect : "At the end of the Damage Step, if this card attacked and is still on the field: Target 1 Spell/Trap your opponent controls; destroy that target.",
  imgPath: "../images/cards/warriors/amazoness/card-art/sage.jpg"
};
const amzSwordsWoman = {
  id: "amz-swords-woman",
  name: "Amazoness Swords Woman",
  level: "4",
  attribute: "Earth",
  type: "Warrior",
  atk: "1500",
  def: "1600",
  effect : "Your opponent takes any battle damage you would have taken from battles involving this card instead.",
  imgPath: "../images/cards/warriors/amazoness/card-art/swords-woman.jpg"
};
const blueFlameSwordsman = {
  id: "blue-flame-swordsman",
  name: "Blue Flame Swordsman",
  level: "4",
  attribute: "Fire",
  type: "Warrior",
  atk: "1800",
  def: "1600",
  effect : "Once per turn, during either player's Battle Phase: You can target 1 other Warrior-Type monster you control; this card loses exactly 600 ATK, and if it does, that monster gains 600 ATK. When this card you control is destroyed by your opponent's card (by battle or card effect) and sent to your Graveyard: You can banish this card from your Graveyard, then target 1 FIRE Warrior-Type monster in your Graveyard; Special Summon that target.",
  imgPath: "../images/cards/warriors/card-art/blue-flame-swordsman.jpg"
};
const lightrayGrepher = {
  id: "lightray-grepher",
  name: "Lightray Grepher",
  level: "4",
  attribute: "Light",
  type: "Warrior",
  atk: "1700",
  def: "1600",
  effect : "You can Special Summon this card (from your hand) by discarding 1 Level 5 or higher LIGHT monster. Once per turn: You can discard 1 LIGHT monster; banish 1 LIGHT monster from your Deck.",
  imgPath: "../images/cards/warriors/card-art/lightray-grepher.jpg"
};
const sacredSoldier = {
  id: "sacred-soldier",
  name: "Black Luster Soldier - Sacred Soldier",
  level: "8",
  attribute: "Light",
  type: "Warrior",
  atk: "3000",
  def: "2500",
  effect : "When this card is Normal or Special Summoned: You can target 1 of your banished LIGHT or DARK monsters and 1 card your opponent controls; return that banished card to the GY, and if you do, banish that card your opponent controls. You can only use this effect of \"Black Luster Soldier - Sacred Soldier\" once per turn. When this card destroys an opponent's monster by battle: You can target 1 Level 7 or lower Warrior monster in your GY; add it to your hand.",
  imgPath: "../images/cards/warriors/card-art/BLS-sacred-soldier.jpg"
};
const valkyrianKnight = {
  id: "valkyrian-knight",
  name: "Valkyrian Knight",
  level: "4",
  attribute: "Fire",
  type: "Warrior",
  atk: "1900",
  def: "1200",
  effect : "Monsters your opponent controls cannot target face-up Warrior-Type monsters for attacks, except \"Valkyrian Knight\". When this card is destroyed by battle and sent to the Graveyard: You can banish 1 Warrior-Type monster and this card from your Graveyard, then target 1 Level 5 or higher Warrior-Type monster in your Graveyard; Special Summon that target.",
  imgPath: "../images/cards/warriors/card-art/valkyrian-knight.jpg"
};

//  ------------------------------------------------ W I N G E D - B E A S T ------------------------------------------------
const sonicBird = {
  id: "sonic-bird",
  name: "Sonic Bird",
  level: "4",
  attribute: "Wind",
  type: "Winged-Beast",
  atk: "1400",
  def: "1000",
  effect: "When this card is Normal or Flip Summoned: You can add 1 Ritual Spell from your Deck to your hand.",
  imgPath: "../images/cards/winged-beasts/card-art/sonic-bird.jpg"
}

//  ------------------------------------------------ Z O M B I E ------------------------------------------------
const anima = {
  id: "anima",
  name: "Vendread Anima",
  level: "1",
  attribute: "Dark",
  type: "Zombie",
  atk: "0",
  def: "0",
  effect: "You can banish this card from your GY, then target 1 of your banished \"Vendread\" monsters, except \"Vendread Anima\"; Special Summon it, also you cannot Special Summon monsters for the rest of this turn, except Zombie monsters. A \"Vendread\" monster Ritual Summoned using this card on the field gains the following effect. You can only use each of the preceding effects of \"Vendread Anima\" once per turn. \u2022 Banish any monster destroyed by battle with this card.",
  imgPath: "../images/cards/zombies/vendreads/card-art/anima.jpg"
};
const baconSaver = {
  id: "bacon-saver",
  name: "Bacon Saver",
  level: "2",
  attribute: "Dark",
  type: "Zombie",
  atk: "700",
  def: "600",
  effect : "During either player's Battle Step, while an attack is occurring: You can banish this card from your Graveyard; negate the attack. You can only use the effect of \"Bacon Saver\" once per Duel.",
  imgPath: "../images/cards/zombies/card-art/bacon-saver.jpg"
};
const battlelord = {
  id: "battlelord",
  name: "Vendread Battlelord",
  level: "7",
  attribute: "Dark",
  type: "Zombie",
  atk: "2700",
  def: "0",
  effect: "You can Ritual Summon this card with any \"Vendread\" Ritual Spell. You can banish 1 \"Vendread\" card from your GY and declare 1 type of card (Monster, Spell, or Trap); for the rest of this turn, your opponent cannot activate cards or effects of that type. If this Ritual Summoned card is sent to the GY: You can add 1 Ritual Monster from your Deck to your hand, and if you do, send 1 \"Vendread\" monster from your Deck to the GY. You can only use each effect of \"Vendread Battlelord\" once per turn.",
  imgPath: "../images/cards/zombies/vendreads/card-art/battlelord.jpg"
};
const executor = {
  id: "executor",
  name: "Revendread Executor",
  level: "8",
  attribute: "Dark",
  type: "Zombie",
  atk: "3000",
  def: "0",
  effect: "You can Ritual Summon this card with any \"Vendread\" Ritual Spell. This card's name becomes \"Revendread Slayer\" while on the field. While this Ritual Summoned card is on the field, your opponent cannot target cards you control with card effects, except this card. If this Ritual Summoned card is destroyed by battle, or is destroyed by an opponent's card effect while in its owner's Monster Zone: You can add 1 \"Vendread\" card from your Deck to your hand. You can only use this effect of \"Revendread Executor\" once per turn.",
  imgPath: "../images/cards/zombies/vendreads/card-art/executor.jpg"
};
const familiar = {
  id: "familiar",
  name: "Vampire Familiar",
  level: "1",
  attribute: "Dark",
  type: "Zombie",
  atk: "500",
  def: "0",
  effect : "If this card is Special Summoned: You can pay 500 LP; add 1 \"Vampire\" monster from your Deck to your hand, except \"Vampire Familiar\". If this card is in your GY: You can send 1 \"Vampire\" card from your hand or face-up field to the GY; Special Summon this card, but banish it when it leaves the field. You can only use each effect of \"Vampire Familiar\" once per turn.",
  imgPath: "../images/cards/zombies/vampires/card-art/familiar.jpg"
};
const glowUpBloom = {
  id: "glowUpBloom",
  name : "Glow-Up Bloom",
  level: "1",
  attribute: "Dark",
  type: "Zombie",
  atk: "0",
  def: "0",
  effect: "If this card is sent to the GY: You can banish this card from your GY; add 1 Level 5 or higher Zombie monster from your Deck to your hand, or, if \"Zombie World\" is in a Field Zone, you can Special Summon it from your Deck instead, also, in either case, you cannot Special Summon monsters for the rest of this turn, except Zombie monsters. You can only use this effect of \"Glow-Up Bloom\" once per turn.",
  imgPath: "../images/cards/zombies/card-art/glow-up-bloom.jpg"
};
const gozuki = {
  id: "gozuki",
  name: "Gozuki",
  level: "4",
  attribute: "Earth",
  type: "Zombie",
  atk: "1700",
  def: "800",
  effect : "During your Main Phase: You can send 1 Zombie monster from your Deck to the GY. If this card is sent to the GY: You can banish 1 Zombie monster from your GY, except \"Gozuki\"; Special Summon 1 Zombie monster from your hand. You can only use each effect of \"Gozuki\" once per turn.",
  imgPath: "../images/cards/zombies/card-art/gozuki.jpg"
};
const grace = {
  id: "grace",
  name: "Vampire Grace",
  level: "6",
  attribute: "Dark",
  type: "Zombie",
  atk: "2000",
  def: "1200",
  effect : "When a Level 5 or higher Zombie-Type monster(s) is Special Summoned to your side of the field by the effect of a Zombie-Type monster while this card is in your Graveyard: You can pay 2000 LP; Special Summon this card from your Graveyard. You can only use this effect of \"Vampire Grace\" once per turn. Once per turn: You can declare 1 card type (Monster, Spell, or Trap); your opponent sends 1 card of that type from their Deck to the Graveyard.",
  imgPath: "../images/cards/zombies/vampires/card-art/grace.jpg"
};
const houndhorde = {
  id: "houndhorde",
  name: "Vendread Houndhorde",
  level: "3",
  attribute: "Dark",
  type: "Zombie",
  atk: "0",
  def: "2100",
  effect: "If this card is in your GY: You can discard 1 \"Vendread\" card; Special Summon this card, but banish it when it leaves the field. A \"Vendread\" monster Ritual Summoned using this card on the field gains the following effect. You can only use each of the preceding effects of \"Vendread Houndhorde\" once per turn. \u2022 Once per turn (Quick Effect): You can target 1 Spell/Trap your opponent controls; banish it.",
  imgPath: "../images/cards/zombies/vendreads/card-art/houndhorde.jpg"
};
const plaguespreader = {
  id: "plaguespreader",
  name: "Plaguespreader Zombie",
  level: "2",
  attribute: "Dark",
  type: "Zombie",
  atk: "400",
  def: "200",
  effect : "If this card is in your GY: You can place 1 card from your hand on the top of the Deck; Special Summon this card, but banish it when it leaves the field.",
  imgPath: "../images/cards/zombies/card-art/plaguespreader.jpg"
};
const redEyesZombie = {
  id: "red-eyes-zombie",
  name: "Red-Eyes Zombie Dragon",
  level: "7",
  attribute: "Dark",
  type: "Zombie",
  atk: "2400",
  def: "2000",
  effect : "You can Tribute Summon this card in Attack Position by Tributing 1 Zombie monster. When this card destroys a Zombie monster by battle and sends it to the GY: You can Special Summon that Zombie monster.",
  imgPath: "../images/cards/zombies/card-art/red-eyes-zombie.jpg"
};
const retainer = {
  id: "retainer",
  name: "Vampire Retainer",
  level: "2",
  attribute: "Dark",
  type: "Zombie",
  atk: "1200",
  def: "0",
  effect : "If this card is Special Summoned: You can pay 500 LP; add 1 \"Vampire\" Spell/Trap from your Deck to your hand. If this card is in your GY: You can send 1 \"Vampire\" card from your hand or face-up field to the GY; Special Summon this card, but banish it when it leaves the field. You can only use each effect of \"Vampire Retainer\" once per turn.",
  imgPath: "../images/cards/zombies/vampires/card-art/retainer.jpg"
};
const revenants = {
  id: "revenants",
  name: "Vendread Revenants",
  level: "4",
  attribute: "Dark",
  type: "Zombie",
  atk: "1800",
  def: "200",
  effect: "If this card in your possession is destroyed by an opponent's card (by battle or card effect) and sent to your GY: You can Special Summon this card, but banish it when it leaves the field. A \"Vendread\" monster Ritual Summoned using this card on the field gains this effect. You can only use the preceding effect of \"Vendread Revenants\" once per turn. \u2022 Once per turn (Quick Effect): You can target 1 Special Summoned monster your opponent controls; banish it.",
  imgPath: "../images/cards/zombies/vendreads/card-art/revenants.jpg"
};
const samSkull = {
  id: "sam-skull",
  name: "Samurai Skull",
  level: "4",
  attribute: "Dark",
  type: "Zombie",
  atk: "1700",
  def: "0",
  effect : "When this card is Normal Summoned: You can send 1 Zombie monster from your Deck to the GY. If this face-up card in its owner's control leaves the field because of an opponent's card effect: You can Special Summon 1 Level 4 or lower Zombie monster from your Deck, except \"Samurai Skull\".",
  imgPath: "../images/cards/zombies/card-art/samurai-skull.jpg"
};
const shogunsaga = {
  id: "shogunsaga",
  name: "Shiranui Shogunsaga",
  level: "8",
  attribute: "Fire",
  type: "Zombie/Synchro",
  atk: "3000",
  def: "0",
  summonRequirement: "1 Zombie-Type Tuner + 1 or more non-Tuner Zombie-Type monsters",
  effect: "If this card is Special Summoned: You can banish 1 Zombie-Type monster from your Graveyard; this card gains ATK equal to the banished monster's original ATK, until the end of this turn. If this card on the field is destroyed by battle or card effect and sent to the Graveyard: You can target 1 of your banished Zombie-Type monsters with 0 DEF; return it to the Graveyard. You can only Special Summon \"Shiranui Shogunsaga(s)\" once per turn.",
  imgPath: "../images/cards/zombies/shiranui/card-art/shogunsaga.jpg"
}
const slayer = {
  id: "slayer",
  name: "Revendread Slayer",
  level: "6",
  attribute: "Dark",
  type: "Zombie",
  atk: "2400",
  def: "0",
  effect : "You can Ritual Summon this card with any \"Vendread\" Ritual Spell. Once per battle, if this card battles an opponent's monster, during damage calculation (Quick Effect): You can banish 1 Zombie monster from your GY; this card gains 300 ATK. If this Ritual Summoned card is sent to the GY: You can add 1 Ritual Spell from your Deck to your hand, and if you do, send 1 \"Vendread\" monster from your Deck to the GY. You can only use this effect of \"Revendread Slayer\" once per turn.",
  imgPath: "../images/cards/zombies/vendreads/card-art/slayer.jpg"
};
const vamp = {
  id: "vamp",
  name: "Vampire Vamp",
  level: "7",
  attribute: "Dark",
  type: "Zombie",
  atk: "2000",
  def: "2000",
  effect : "Once per turn, when this card or a \"Vampire\" monster is Normal Summoned to your field: You can target 1 face-up monster your opponent controls, whose ATK is higher than this card's; equip it to this card. This card gains ATK equal to the combined original ATK of the monsters equipped to it by this effect. If this card is sent to the GY, while equipped with a card(s) by this effect: Special Summon this card.",
  imgPath: "../images/cards/zombies/vampires/card-art/vamp.jpg"
};

//  ------------------------------------------------ S P E L L S ------------------------------------------------
const anitMagicArrows = {
  id: "anti-magic-arrows",
  name: "Anti-Magic Arrows",
  type: "Quick-Play Spell",
  effect: "At the start of the Battle Phase: For the rest of this turn after this card resolves, Spell/Trap Cards, and their effects, cannot be activated. Cards and effects cannot be activated in response to this card's activation.",
  imgPath: "../images/cards/spells/quick-play-spells/card-art/anti-magic-arrows.jpg"
};
const cosmicCyclone = {
  id: "cosmic-cyclone",
  name: "Cosmic Cyclone",
  type: "Quick-Play Spell",
  effect: "Pay 1000 LP, then target one Spell/Trap on the field; banish it.",
  imgPath: "../images/cards/spells/quick-play-spells/card-art/cosmic-cyclone.jpg"
};
const enemyController = {
  id: "enemy-controller",
  name: "Enemy Controller",
  type: "Quick-Play Spell",
  effect: "Activate 1 of these effects. \u2022 Target 1 face-up monster your opponent controls; change that target's battle position. \u2022 Tribute 1 monster, then target 1 face-up monster your opponent controls; take control of that target until the End Phase.",
  imgPath: "../images/cards/spells/quick-play-spells/card-art/enemy-controller.jpg"
};
const evolution = {
  id: "evolution",
  name: "Revendread Evolution",
  type: "Ritual Spell",
  effect: "This card can be used to Ritual Summon any \"Vendread\" Ritual Monster from your hand or GY. You must also Tribute monsters from your hand or field, and/or send 1 \"Vendread\" monster from your Deck to the GY, whose total Levels equal the Level of the Ritual Monster you Ritual Summon. The Ritual Summoned monster is destroyed during the End Phase of the next turn. You can only activate 1 \"Revendread Evolution\" per turn.",
  imgPath: "../images/cards/zombies/vendreads/card-art/evolution.jpg"
};
const fossilDig = {
  id: "fossil-dig",
  name: "Fossil Dig",
  type: "Spell Card",
  effect: "Add 1 Level 6 or lower Dinosaur monster from your Deck to your hand.",
  imgPath: "../images/cards/spells/card-art/fossil-dig.jpg"
};
const galaxyCyclone = {
  id: "galaxy-cyclone",
  name: "Galaxy Cyclone",
  type: "Spell Card",
  effect: "Target 1 Set Spell/Trap on the field; destroy it. During your Main Phase, except the turn this card was sent to the GY: You can banish this card from your GY, then target 1 face-up Spell/Trap on the field; destroy it. You can only use this effect of \"Galaxy Cyclone\" once per turn.",
  imgPath: "../images/cards/spells/card-art/galaxy-cyclone.jpg"
};
const insight = {
  id: "red-eyes-insight",
  name: "Red-Eyes Insight",
  type: "Spell Card",
  effect: "Send 1 \"Red-Eyes\" monster from your hand or Deck to the Graveyard; add 1 \"Red-Eyes\" Spell/Trap Card from your Deck to your hand, except \"Red-Eyes Insight\". You can only activate 1 \"Red-Eyes Insight\" per turn.",
  imgPath: "../images/cards/spells/card-art/red-eyes-insight.jpg"
};
const mausoleumEmperor = {
  id: "mausoleum-emperor",
  name: "Mausoleum of the Emperor",
  type: "Field Spell",
  effect: "During any Main Phase: The turn player can pay 1000 LP x the number of monsters normally needed for the Tribute Summon of a monster (max. 2000); that player Normal Summons/Sets that monster without Tributing. (This is their one Normal Summon/Set for that turn. This is not a Tribute Summon.)",
  imgPath: "../images/cards/spells/field/card-art/mausoleum-of-the-emperor.jpg"
};
const nights = {
  id: "nights",
  name: "Vendread Nights",
  type: "Field Spell",
  effect: "You can discard 1 card; add 1 \"Vendread\" monster from your Deck to your hand. You can only use this effect of \"Vendread Nights\" once per turn. When your \"Vendread\" monster destroys an opponent's monster by battle: You can banish 1 \"Vendread\" monster from your GY; it can attack an opponent's monster again in a row.",
  imgPath: "../images/cards/zombies/vendreads/card-art/nights.jpg"
};
const origin = {
  id: "origin",
  name: "Revendread Origin",
  type: "Ritual Spell",
  effect: "This card can be used to Ritual Summon any \"Vendread\" Ritual Monster from your hand or GY. You must also Tribute monsters from your hand or field, and/or banish Zombie monsters from your GY, whose total Levels equal or exceed the Level of the Ritual Monster you Ritual Summon. If \"Revendread Slayer(s)\" you control would be destroyed by battle or card effect, you can banish this card from your GY instead.",
  imgPath: "../images/cards/zombies/vendreads/card-art/origin.jpg"
};
const storm = {
  id: "storm",
  name: "Storm",
  type: "Spell Card",
  effect: "Destroy as many Spell/Trap Cards you control as possible, then destroy as many Spell/Trap Cards your opponent controls as possible, up to the number of cards destroyed by this effect.",
  imgPath: "../images/cards/spells/card-art/storm.jpg"
};
const superRush = {
  id: "super-rush",
  name: "Super Rush Headlong",
  type: "Quick Play Spell",
  effect: "Target 1 face-up monster you control and declare 1 Attribute; if that target battles an opponent's monster with that Attribute this turn, destroy that opponent's monster at the start of the Damage Step.",
  imgPath: "../images/cards/spells/quick-play-spells/card-art/super-rush-headlong.jpg"
};
const vampDomain = {
  id: "vamp-domain",
  name: "Vampire's Domain",
  type: "Continuous Spell",
  effect: "Once per turn: You can pay 500 LP; during your Main Phase this turn, you can Normal Summon 1 \"Vampire\" monster in addition to your Normal Summon/Set. (Even if this card leaves the field. You can only gain this effect once per turn.) Each time your \"Vampire\" monster inflicts battle damage to your opponent: Gain the same amount of LP.",
  imgPath: "../images/cards/zombies/vampires/card-art/domain.jpg"
};
const vampKingdom = {
  id: "vamp-kingdom",
  name: "Vampire Kingdom",
  type: "Field Spell",
  effect: "Zombie-Type monsters gain 500 ATK during damage calculation only. Once per turn, when a card(s) is sent from your opponent's Deck to the Graveyard: Target 1 card on the field; send 1 DARK \"Vampire\" monster from your hand or Deck to the Graveyard, and if you do, destroy that target.",
  imgPath: "../images/cards/zombies/vampires/card-art/kingdom.jpg"
};

//  ------------------------------------------------ T R A P S ------------------------------------------------
const amzOnslaught = {
  id: "amz-onslaught",
  name: "Amazoness Onslaught",
  type: "Continuous Trap",
  effect: "Once per turn, during the Battle Phase: You can Special Summon 1 \"Amazoness\" monster from your hand, and if you do, it gains 500 ATK until the end of this turn (even if this card leaves the field). After damage calculation, if your \"Amazoness\" monster battled an opponent's monster while this card is already face-up in your Spell & Trap Zone: You can banish that opponent's monster. If this card on the field is destroyed and sent to the GY: You can target 1 \"Amazoness\" monster in your GY; Special Summon it.",
  imgPath: "../images/cards/warriors/amazoness/card-art/onslaught.jpg"
};
const amzWillpower = {
  id: "amz-willpower",
  name: "Amazoness Willpower",
  type: "Continuous Trap",
  effect: "Select 1 \"Amazoness\" monster in your Graveyard and Special Summon it in Attack Position. It cannot change its battle position and must attack if able. When this card is removed from the field, destroy that monster. When that monster is destroyed, destroy this card.",
  imgPath: "../images/cards/warriors/amazoness/card-art/willpower.jpg"
};
const archRoar = {
  id: "arch-roar",
  name: "Archfiend's Roar",
  type: "Trap Card",
  effect: "Pay 500 Life Points, then target 1 \"Archfiend\" monster in your Graveyard; Special Summon that target. It cannot be Tributed. Destroy it during the End Phase of this turn.",
  imgPath: "../images/cards/fiends/archfiends/card-art/roar.jpg"
};
const begOfHeavenAndEarth = {
  id: "beg-heaven-earth",
  name: "Beginning of Heaven and Earth",
  type: "Trap Card",
  effect: "Reveal 3 Warrior-Type monsters from your Deck, including at least 1 \"Black Luster Soldier\" monster or \"Gaia The Fierce Knight\" monster, and have your opponent randomly pick 1. If they picked a \"Black Luster Soldier\" monster or \"Gaia The Fierce Knight\" monster, add it to your hand and send the rest to the Graveyard. Otherwise, send them all to the Graveyard. You can only activate 1 \"Beginning of Heaven and Earth\" per turn.",
  imgPath: "../images/cards/traps/card-art/beg-heaven-earth.jpg"
};
const callOfTheArchfiend = {
  id: "call-of-archfiend",
  name: "Call of the Archfiend",
  type: "Trap Card",
  effect: "You can target 1 Level 5 or higher Fiend monster in your GY; discard 1 Fiend monster, and if you do, Special Summon the targeted monster. You can only use this effect of \"Call of the Archfiend\" once per turn.",
  imgPath: "../images/cards/fiends/archfiends/card-art/call-of-the-archfiend.jpg"
};
const callOfTheEarthbound = {
  id: "call-of-the-earthbound",
  name: "Call of the Earthbound",
  type: "Trap Card",
  effect: "When an opponent's monster declares an attack: You choose the target of the attack.",
  imgPath: "../images/cards/traps/card-art/call-of-the-earthbound.jpg"
};
const canadia = {
  id: "canadia",
  name: "Paleozoic Canadia",
  type: "Trap Card",
  effect: "Target 1 face-up monster your opponent controls; change it to face-down Defense Position. Once per Chain, when a Trap Card is activated while this card is in your GY: You can Special Summon this card as a Normal Monster (Aqua/WATER/Level 2/ATK 1200/DEF 0). (This card is NOT treated as a Trap.) If Summoned this way, this card is unaffected by monster effects, also banish it when it leaves the field.",
  imgPath: "../images/cards/traps/card-art/canadia.jpg"
};
const drowningMirrorForce = {
  id: "drowning-mirror-force",
  name: "Drowning Mirror Force",
  type: "Trap Card",
  effect: "When an opponent's monster declares a direct attack: Shuffle all your opponent's Attack Position monsters into the Deck.",
  imgPath: "../images/cards/traps/card-art/Drowning-mirror-force.jpg"
};
const escapeFromTheDarkDimension = {
  id: "escape-from-the-dark-dimension",
  name: "Escape from the Dark Dimension",
  type: "Continuous Trap",
  effect: "Target 1 of your banished DARK monsters; Special Summon that target. When this card leaves the field, destroy that target, and if you do, banish it. When that target is destroyed, destroy this card.",
  imgPath: "../images/cards/traps/continuous/card-art/escape-from-the-dark-dimension.jpg"
};
const floodgate = {
  id: "floodgate",
  name: "Floodgate Trap Hole",
  type: "Trap Card",
  effect: "When your opponent Summons a monster(s): Change that monster(s) to face-down Defense Position. Monsters changed to face-down Defense Position by this effect cannot change their battle positions.",
  imgPath: "../images/cards/traps/card-art/floodgate.jpg"
};
const hallowedLifeBarrier = {
  id: "hallowed-life-barrier",
  name: "Hallowed Life Barrier",
  type: "Trap Card",
  effect: "Discard 1 card from your hand. This turn, any damage you take from your opponent's cards and effects becomes 0.",
  imgPath: "../images/cards/traps/card-art/hallowed-life-barrier.jpg"
};
const marrella = {
  id: "marrella",
  name: "Paleozoic Marrella",
  type: "Trap Card",
  effect: "Send 1 Trap from your Deck to the GY. Once per Chain, when a Trap Card is activated while this card is in your GY: You can Special Summon this card as a Normal Monster (Aqua/WATER/Level 2/ATK 1200/DEF 0). (This card is NOT treated as a Trap.) If Summoned this way, this card is unaffected by monster effects, also banish it when it leaves the field.",
  imgPath: "../images/cards/traps/card-art/marrella.jpg"
};
const needlebugNest = {
  id: "needlebug-nest",
  name: "Needlebug Nest",
  type: "Trap Card",
  effect: "Send the top 5 cards of your Deck to the GY.",
  imgPath: "../images/cards/traps/card-art/needlebug-nest.jpg"
};
const simultaneousLoss = {
  id: "simultaneous-loss",
  name: "Simultaneous Loss",
  type: "Trap Card",
  effect: "Each player sends the top card of their Deck to the Graveyard.",
  imgPath: "../images/cards/traps/card-art/simultaneous-loss.jpg"
};
const spirit = {
  id: "red-eyes-spirit",
  name: "Red-Eyes Spirit",
  type: "Trap Card",
  effect: "Target 1 \"Red-Eyes\" monster in your GY; Special Summon it.",
  imgPath: "../images/cards/traps/card-art/red-eyes-spirit.jpg"
};
const survivalsEnd = {
  id: "survivals-end",
  name: "Survival's End",
  type: "Trap Card",
  effect: "Destroy as many Normal Monsters on the field as possible, and if you do, Special Summon Level 4 or lower Dinosaur-Type monsters from your Deck, up to the number destroyed, but destroy them during the End Phase. You can banish this card from your Graveyard, then target 1 Dinosaur-Type monster you control and 1 card your opponent controls; destroy them.",
  imgPath: "../images/cards/traps/card-art/survivals-end.jpg"
};
const vampTakeover = {
  id: "vamp-takeover",
  name: "Vampire Takeover",
  type: "Trap Card",
  effect: "If you have no card in your Field Zone and all face-up monsters you control (min. 1) are Zombie-Type: Activate 1 \"Vampire Kingdom\" directly from your Deck, then, you can Special Summon 1 DARK \"Vampire\" monster from your Graveyard in face-up Defense Position. You can only activate 1 \"Vampire Takeover\" per turn.",
  imgPath: "../images/cards/zombies/vampires/card-art/takeover.jpg"
};
const wallOfD = {
  id: "wallOfD",
  name: "Wall of Disruption",
  type: "Trap Card",
  effect: "When an opponent's monster declares an attack: All Attack Position monsters your opponent controls lose 800 ATK for each monster they control.",
  imgPath: "../images/cards/traps/card-art/wall-of-disruption.jpg"
};

export const vendreadDeck = [slayer, executor, battlelord, revenants, houndhorde, anima, sonicBird, sphereKuriboh, cosmicCyclone, origin, evolution, nights, glowUpBloom, blackrose, vermillion];
export const vampireDeck = [grace, vamp, retainer, familiar, gozuki, samSkull, plaguespreader, sphereKuriboh, vampKingdom, vampTakeover, vampDomain, jinzo, galaxyCyclone, enemyController, canadia, simultaneousLoss, shogunsaga];
export const sacredSoldierDeck = [sacredSoldier, blueFlameSwordsman, valkyrianKnight, adChanger, cosmicCyclone, enemyController, begOfHeavenAndEarth, amzPrincess, amzOnslaught, lightrayGrepher, fabledLurrie, creator, drowningMirrorForce, lavaGolem, mausoleumEmperor, canadia];
export const amazonDeck = [amzPrincess, amzOnslaught, amzQueen, amzSwordsWoman, amzSage, amzBabyTiger, floodgate, amzWillpower, amzPaladin];
export const archfiendDeck = [archEmperor, archCommander, archEmpress, archCavalry, stygianSecurity, relinkuriboh, sphereKuriboh, baconSaver, callOfTheArchfiend, archRoar, needlebugNest, tranceArch];
export const redEyesZombieDeck = [redEyesZombie, gozuki, samSkull, baconSaver, insight, spirit, superRush, enemyController, storm];
export const specialDuelDeck = [necrofear, dukeShadow, snipeHunter, sphereKuriboh, enemyController, armades, hallowedLifeBarrier, doomdog, callOfTheEarthbound];
export const dinoDeck = [giantRex, salamandra, babycerasaurus, sabersaurus, jurracDino, survivalsEnd, fossilDig, cosmicCyclone, enemyController, canadia, wallOfD, marrella, samuraiDestroyer];
export const otherDuelDeck = [salamandra, cardGuard, tranceArch, landrobeVassal, mithraVassal, dynatherium, jinzo, jinzoJector, constellarZubeneschamali, constellarVirgo, enemyController, anitMagicArrows, escapeFromTheDarkDimension, canadia];
