
// Statisk tekst som brukes til å søke i
const text =
    "Baby cliche unicorn brooklyn farm-to-table. Salvia semiotics hella literally paleo humblebrag bushwick letterpress messenger bag pork belly brooklyn authentic vexillologist. Gastropub sustainable banjo, shaman snackwave viral air plant ramps health goth. Edison bulb vegan microdosing, tote bag unicorn skateboard disrupt copper mug four loko sustainable whatever cloud bread slow-carb lumbersexual four dollar toast. Waistcoat lomo hammock vape shabby chic sartorial yr godard pok pok fashion axe organic migas. Quinoa yr vexillologist intelligentsia verylongwordthatislong neutra mixtape YOLO XOXO listicle letterpress farm-to-table beard.";

const longestWord = () => {
    const words = text.split(" ");
    let biggest = words[0];
    for (e of words) {
        if (biggest.length < e.length) {
            biggest = e;
        }
    }
    return "Det finnes ingen ord i listen som er større enn: " + biggest;
    // TODO: Gjør om text til array eks. ['Baby', 'cliche']
    // TODO: Velg første ord så du har noe å sammenlikne med
    // TODO: Gå igjennom alle ordene og oppdater hvis nytt ord er lengre
};

console.log(longestWord());
