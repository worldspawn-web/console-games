import clc from 'cli-color';

const hangmanStages = {
    1: [` +---+\n
    |   |\n
        |\n
        |\n
        |\n
        |\n
  =========\n`],
    2: [`+---+\n
  |   |\n
  O   |\n
      |\n
      |\n
      |\n
=========\n`],
    3: [`+---+\n
    |   |\n
    O   |\n
    |   |\n
        |\n
        |\n
  =========\n`],
    4: [`+---+\n
  |   |\n
  O   |\n
 /|   |\n
      |\n
      |\n
=========\n`],
    5: [`+---+\n
    |   |\n
    O   |\n
   /|\  |\n
        |\n
        |\n
  =========\n`],
    6: [`+---+\n
    |   |\n
    O   |\n
   /|\  |\n
   /    |\n
        |\n
  =========\n`],
    7: [`+---+\n
    |   |\n
    O   |\n
   /|\  |\n
   / \  |\n
        |\n
  =========\n`]
};

const hangmanThemes = ['sports', 'science', 'technologies', 'programming', 'gaming'];

const getThemesList = () => {
    let output = `${clc.yellow('Available themes:')}\n`;
    for (let i = 0; i < hangmanThemes.length; i += 1) {
        output += `${i + 1}. ${hangmanThemes[i]}\n`;
    }
    return output;
};

const getTheme = (number) => {
    if (hangmanThemes[number]) {
        return hangmanThemes[number];
    } else {
        throw new Error(`${number} value is invalid!`);
    }
};

const hangmanWords = {
    sports: [
        "football",
        "basketball",
        "tennis",
        "golf",
        "hockey",
        "baseball",
        "volleyball",
        "swimming",
        "gymnastics",
        "boxing",
        "snowboarding",
        "rock climbing",
        "athletics",
        "karate",
        "car racing",
        "table tennis",
        "badminton",
        "cycling",
        "skateboarding",
        "powerlifting",
        "diving",
        "rowing",
        "surfing",
        "handball",
        "powerlifting",],
    science: [
        "physics",
        "chemistry",
        "biology",
        "astronomy",
        "geology",
        "genetics",
        "psychology",
        "anthropology",
        "sociology",
        "ecology",
        "neuroscience",
        "medicine",
        "botany"],
    technologies: [
        "computer",
        "internet",
        "software",
        "hardware",
        "network",
        "data",
        "algorithm",
        "coding",
        "programming",
        "website",
        "mobile",
        "application",
        "artificial intelligence",
        "machine learning",
        "virtual reality",
        "augmented reality",
        "blockchain",
        "cybersecurity",
        "cloud computing",
        "big data",
        "robotics",
        "nanotechnology",
        "IoT",
        "drones",
        "3D printing"],
    programming: [
        "variable",
        "function",
        "loop",
        "array",
        "object",
        "string",
        "boolean",
        "integer",
        "float",
        "if statement",
        "for loop",
        "while loop",
        "class",
        "method",
        "inheritance",
        "polymorphism",
        "encapsulation",
        "abstraction",
        "recursion",
        "sorting",
        "searching",
        "debugging",
        "compiler",
        "IDE",
        "API"],
    gaming: [
        "game",
        "console",
        "controller",
        "player",
        "level",
        "quest",
        "character",
        "multiplayer",
        "online",
        "strategy",
        "role-playing",
        "shooter",
        "adventure",
        "simulation",
        "platformer",
        "puzzle",
        "arcade",
        "sports",
        "RPG",
        "FPS",
        "MMORPG",
        "sandbox",
        "stealth",
        "VR",
        "eSports"],
};
