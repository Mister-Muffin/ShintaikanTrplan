// => maximal Wert als Variable

// Trainingscounter: Hashmap[xy] => [Anzahl Trainer, current]
//      wobei   x: Wochentag
//              y: Einheit
//  + Array => wie viele Einheiten am jeweiligen Tag

// Teilnehmerliste: Hashmap[dy] => [Participant0, Participant1, ...]
//      wobei   d: Tag des Trainings
//              y: Einheit
const websiteRoot = window.location.hostname.includes("shintaikan.de") ? "trainingsplan/" : "/";

const db = firebase.firestore();
// if (location.hostname === "localhost") {
//     db.useEmulator("localhost", 8080);
// }
const documentFix = "wUWqwE3QsztMFEfVlc9U";

const calendarWeekElement = document.getElementById("nextWeek");


const today = new Date();
let wday = today.getDay();
if (wday == 6) wday = -1;

const dd = parseInt(String(today.getDate()).padStart(2, '0'));
let mm = parseInt(String(today.getMonth()).padStart(2, '0')); //January is 0!
let yyyy = today.getFullYear();

const days = new Date(yyyy, mm, 0).getDate(); // Days of month
let mondayDate = new Date(yyyy, mm, dd - wday + 1);
let fridayDate = new Date(yyyy, mm, dd + (5 - wday));

calendarWeekElement.innerText = `Woche vom: ${mondayDate.getDate()}.${mondayDate.getMonth() + 1}.${mondayDate.getFullYear()} bis ` +
    `${fridayDate.getDate()}.${fridayDate.getMonth() + 1}.${fridayDate.getFullYear()}`;
// Mondag: today - wday + 1
// Freidag: today + (5 - wday)  

setValuesToHTML();



// -------------------- Functions --------------------

async function setValuesToHTML() {
    await db.collection("fix").doc(documentFix).get().then(function (doc) {
        for (let i = 1; i <= 5; i++) {
            for (let j = 1; j <= 6; j++) {
                try {
                    document.getElementById(`${i}${j}`).innerText = `${doc.data().maxValue - doc.data().training_counter[i + ''][j + ''].current - doc.data().training_counter[i + ''][j + ''].trainer}` + `/${doc.data().maxValue - doc.data().training_counter[i + ''][j + ''].trainer}`
                } catch (error) {

                }
            }
        }
    });
}

function openLogin(id) {
    window.location.href = `${websiteRoot}form.html?day=${id[0]}&lesson=${id[1]}`;
}