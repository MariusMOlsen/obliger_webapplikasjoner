

let word_count = 0;
let word_attempt = "";
let wrongs_count = 0;
const word_list = ["katt", "hund", "ost", "fisk"];

const button = document.querySelector("button");
const word = document.getElementById("word");
const letter = document.getElementById("letter");
const main = document.getElementById("main");
const wrongs = document.getElementById("wrongs");

const word_html = word.innerHTML;
const letter_html = letter.innerHTML;
const wrongs_html = wrongs.innerHTML;

const showWord = () => {
    if (check_word_list(word_count)) {
        word.innerHTML = word_html + ": " + word_list[word_count];
    } else {
        word.innerHTML = word_html + ": " + "Ingen flere ord";
    }
};

const nextWord = () => {
    word_count++;
};

const check_word_list = (index) => {
    if (typeof word_list[index] === "undefined") {
        return false;
    } else {
        return true;
    }
};

const clear_word_attempt = () => {
    word_attempt = "";
    letter.innerHTML = letter_html + ": " + word_attempt;
};

const updateWrongs = () => {
    wrongs_count++;
    wrongs.innerHTML = wrongs_html + ": " + wrongs_count;
    clear_word_attempt();
};

const checkIfWordIsCorrect = (word_attempt) => {
    if (word_attempt === word_list[word_count]) {
        nextWord();
        showWord();
        clear_word_attempt();
    } else if (word_attempt.length > word_list[word_count].length) {
        updateWrongs();
        clear_word_attempt();
    } else if (
        word_attempt.length === word_list[word_count].length &&
        word_attempt !== word_list[word_count]
    ) {
        updateWrongs();
        clear_word_attempt();
    }
};

const writePressedKey = (e) => {
    word_attempt += e.key;
    checkIfWordIsCorrect(word_attempt);
    letter.innerHTML = letter_html + ": " + word_attempt;
};

button.addEventListener("click", () => {
    showWord();
});

main.addEventListener("keypress", (e) => {
    writePressedKey(e);
});

// TODO: Sett startverdien for de ulike tellerene du trenger for å ha kontroll på
// - antall feil
// - posisjonen til bokstaven du skal skrive
// - ordet som skal vises
// TODO: Lag en liste med ulike ord
// TODO: Hent ut HTML #ider og knappen
// TODO: Lag en funksjon for å skrive ut ordet som brukeren skal skrive eller en medling om at det ikke er flere ord igjen
// TODO: Lag en funksjon som gjør at vi kan bytte ord. Må også oppdatere tellerene
// TODO: Lag en funksjon for å sjekke om vi har skrevet riktig bokstav. Må ta hensyn til plassen i ordet vi skal skrive
// TODO: Lag en funksjon for å sjekke om posisjonen vi er på er lik lengden på ordet vi skal skrive. Det betyr at vi er ferdig med ordet og kan bytte ord
// TODO: Lag en funksjon som trigges når vi skriver på tastaturen og basert på hva vi skriver / posisjonen vi er på gjør nødvendige oppdateringer av grensesnittet
// TODO: Lag en funksjon som kan brukes til å oppdatere grensesnittet
// - Vise antall feil
// - Vise ordet vi skal skrive
// - Vise hvor langt vi har kommet (posisjonen) på det ordet vi skal skrive
// TODO: Lytt til keyup på window
// TODO: Lytt til klikk på knappen. Klikket skal gjøre knappen "disabled" samt starte oppgaven
