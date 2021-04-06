// => maximal Wert als Variable

// Trainingscounter: Hashmap[xy] => [Anzahl Trainer, current]
//      wobei   x: Wochentag
//              y: Einheit
//  + Array => wie viele Einheiten am jeweiligen Tag

// Teilnehmerliste: Hashmap[dy] => [Participant0, Participant1, ...]
//      wobei   d: Tag des Trainings
//              y: Einheit

const db = firebase.firestore();
if (location.hostname === "localhost") {
    db.useEmulator("localhost", 8080);
}
const documentFix = "wUWqwE3QsztMFEfVlc9U";

const calendarWeekElement = document.getElementById("nextWeek");


const today = new Date();
var wday = today.getDay();
if (wday == 6) wday = -1;

const dd = parseInt(String(today.getDate()).padStart(2, '0'));
var mm = parseInt(String(today.getMonth()).padStart(2, '0')); //January is 0!
var yyyy = today.getFullYear();

const days = new Date(yyyy, mm, 0).getDate(); // Days of month
var mondayDate = new Date(yyyy, mm, dd - wday + 1);
var fridayDate = new Date(yyyy, mm, dd + (5 - wday));

calendarWeekElement.innerText = `Woche vom: ${mondayDate.getDate()}.${mondayDate.getMonth() + 1}.${mondayDate.getFullYear()} bis ` +
    `${fridayDate.getDate()}.${fridayDate.getMonth() + 1}.${fridayDate.getFullYear()}`;
// Mondag: today - wday + 1
// Freidag: today + (5 - wday)  

setValuesToHTML();



// -------------------- Functions --------------------

async function setValuesToHTML() {
    await db.collection("fix").doc(documentFix).get().then(function (doc) {
        for (var i = 1; i <= 5; i++) {
            for (var j = 1; j <= 6; j++) {
                try {
                    document.getElementById(`${i}${j}`).innerText = `${doc.data().maxValue - doc.data().training_counter[i + ''][j + ''].current - doc.data().training_counter[i + ''][j + ''].trainer}` + `/${doc.data().maxValue - doc.data().training_counter[i + ''][j + ''].trainer}`
                } catch (error) {

                }
            }
        }
    });
}