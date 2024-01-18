export function getRandomName() {
  const names = [
    "Alice",
    "Bob",
    "Charlie",
    "David",
    "Eve",
    "Frank",
    "Grace",
    "Harry",
    "Ivy",
    "Jack",
    "Katie",
    "Leo",
    "Mia",
    "Nathan",
    "Olivia",
    "Peter",
    "Quinn",
    "Rachel",
    "Sam",
    "Tom",
    "Uma",
    "Victor",
    "Wendy",
    "Xander",
    "Yara",
    "Zane",
  ];

  const randomIndex = Math.floor(Math.random() * names.length);
  return names[randomIndex];
}

export function getRandomSmsText() {
  const messages = [
    "Hello! How are you today?",
    "Just checking in. What's up?",
    "Hey, did you hear the latest news?",
    "I hope you have a fantastic day!",
    "Thinking of you. 😊",
    "What's for dinner tonight?",
    "Did you know that laughter is the best medicine?",
    "Planning anything exciting for the weekend?",
    "Sending positive vibes your way!",
    "Remember to take breaks and relax!",
    "Random fact: Honey never spoils.",
    "Hope you're enjoying your favorite music!",
    "Just wanted to say you're awesome!",
    "Ready for a new adventure?",
    "Sending virtual hugs. 🤗",
  ];

  const randomIndex = Math.floor(Math.random() * messages.length);
  return messages[randomIndex];
}

export async function dummySuggestion(serachText) {
  try {
    if (!serachText) return;
    const dummydata = ["search", "cricket", "dhoni", "kohli", "data"];
    return dummydata;
  } catch (error) {
    console.log(error);
  }
}
