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
    "Hello! How are you?",
    "Just checking",
    "did you hear the",
    "I hope you have ",
    "Thinking of you.😊",
    "What's for dinner",
    "Did you know that",
    "Planning anything",
    "Sending positive",
    "Remember to take",
    "Honey never spoils",
    "Hope you're enjoy!",
    "Just wanted to say",
    "Ready for a?",
    "Sending virtual🤗",
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
