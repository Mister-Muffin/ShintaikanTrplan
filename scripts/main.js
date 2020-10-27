// => maximal Wert als Variable

// Trainingscounter: Hashmap[xy] => [Anzahl Trainer, current]
//      wobei   x: Wochentag
//              y: Einheit
//  + Array => wie viele Einheiten am jeweiligen Tag

// Teilnehmerliste: Hashmap[dy] => [Participant0, Participant1, ...]
//      wobei   d: Tag des Trainings
//              y: Einheit

const db = firebase.firestore();
const documentFix = "wUWqwE3QsztMFEfVlc9U";

const maxParticipiant = 10;

// Set Values to HTML
db.collection("fix").doc(documentFix).get().then(function (doc) {
    for (var i = 1; i <= 5; i++) {
        for (var j = 1; j <= 6; j++) {
            console.log(`i: ${i} j:${j}`)
            try {
                document.getElementById(`${i}${j}`).innerText = `${doc.data().maxValue - doc.data().training_counter[`${i}${j}`].current - doc.data().training_counter[`${i}${j}`].trainer}` + `/${doc.data().maxValue - doc.data().training_counter[`${i}${j}`].trainer}`
            } catch (error) {

            }
            // if (doc.data().training_counter[`${i}${j}`].current <= 0) {
            //     document.getElementById(`${i}${j}`).disabled = true;
            // }
        }
    }
});

// setTimeout(setTrainerNumber, 1000, 1, 2, 2);
// console.log("test");
// setTimeout(decreaseCurrent, 100, 1, 2);

// sleep(1000);
// setTimeout(decreaseCurrent, 2000, 1, 2);