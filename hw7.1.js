const regex = /^[^aA]{6,}$/;
const words = ["Wonderful", "Joyful", "Happiness", "Time", "Task", "Apple"];

for (let i = 0; i < words.length; i++) {
    const currentWord = words[i];
    if (regex.test(currentWord)) {
        console.log(`${currentWord} — Слово підходить`);     
    }
    else console.log(`${currentWord} — Слово не підходить`);
}