import type { CodeQuestion } from '$lib/types';

const arnoldc: CodeQuestion[] = [
  {
    id: "arnoldc-main",
    language: "ArnoldC",
    aliases: ["arnoldc", "arnold c", "arnoldc"],
    difficulty: "insane",
    category: "esoteric",
    quizSuitability: "good",
    highlightLanguage: "clike",
    confusionGroup: ["LOLCODE", "INTERCAL", "BASIC", "Chef"],
    discriminators: ["IT'S SHOWTIME", "TALK TO THE HAND", "YOU HAVE BEEN TERMINATED", "Arnold quotes syntax"],
    explanation: "This is ArnoldC. This snippet uses IT'S SHOWTIME, TALK TO THE HAND, YOU HAVE BEEN TERMINATED as recognizable fingerprints.",
    code: `IT'S SHOWTIME
HEY CHRISTMAS TREE score
YOU SET US UP 0
TALK TO THE HAND score
YOU HAVE BEEN TERMINATED`
  },
  {
    id: "arnoldc-if",
    language: "ArnoldC",
    aliases: ["arnoldc", "arnold c", "arnoldc"],
    difficulty: "insane",
    category: "esoteric",
    quizSuitability: "good",
    highlightLanguage: "clike",
    confusionGroup: ["LOLCODE", "INTERCAL", "BASIC", "Chef"],
    discriminators: ["BECAUSE I'M GOING TO SAY PLEASE", "BULLSHIT conditional else", "YOU HAVE NO RESPECT FOR LOGIC", "movie quote keywords"],
    explanation: "This is ArnoldC. This snippet uses BECAUSE I'M GOING TO SAY PLEASE, BULLSHIT conditional else, YOU HAVE NO RESPECT FOR LOGIC as recognizable fingerprints.",
    code: `IT'S SHOWTIME
HEY CHRISTMAS TREE paid
YOU SET US UP @I LIED
BECAUSE I'M GOING TO SAY PLEASE paid
  TALK TO THE HAND "receipt"
BULLSHIT
  TALK TO THE HAND "pending"
YOU HAVE NO RESPECT FOR LOGIC
YOU HAVE BEEN TERMINATED`
  },
  {
    id: "arnoldc-method",
    language: "ArnoldC",
    aliases: ["arnoldc", "arnold c", "arnoldc"],
    difficulty: "insane",
    category: "esoteric",
    quizSuitability: "good",
    highlightLanguage: "clike",
    confusionGroup: ["LOLCODE", "INTERCAL", "BASIC", "Chef"],
    discriminators: ["LISTEN TO ME VERY CAREFULLY method", "GIVE THESE PEOPLE AIR", "HASTA LA VISTA BABY return", "class-like quote syntax"],
    explanation: "This is ArnoldC. This snippet uses LISTEN TO ME VERY CAREFULLY method, GIVE THESE PEOPLE AIR, HASTA LA VISTA BABY return as recognizable fingerprints.",
    code: `LISTEN TO ME VERY CAREFULLY Discount
I NEED YOUR CLOTHES YOUR BOOTS AND YOUR MOTORCYCLE total
GIVE THESE PEOPLE AIR
  GET TO THE CHOPPER total
  HERE IS MY INVITATION total
  YOU'RE FIRED 10
  ENOUGH TALK
HASTA LA VISTA, BABY`
  }
];

export default arnoldc;
