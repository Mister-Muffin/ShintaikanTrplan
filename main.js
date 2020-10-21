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

function getKey(collection, index) {
    db.collection(collection).get().then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
            return (doc.data().maxLessons[index])
        });
    });
};

/**
 * Funktionen für die Erste Funktion:
 *      -> Initialisierung
 *      -> maxTrainer aktualisieren/setzen
 *      -> resetCurrent
 */


function updateData(collection, doc, obj) {
    const ref = db.collection(collection).doc(doc);
    ref.update({
        training_counter: obj
    }).then(function () {
        console.log("Document successfully updated!");
    }).catch(function (error) {
        console.error("Error updating document: ", error);
    });
}



function initCounter() {
    db.collection("fix").get().then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
            var mapOutside = {};
            for (var i = 1; i <= 5; i++) {
                for (var j = 1; j <= doc.data().maxLessons[i - 1]; j++) {
                    // console.log(i.toString() + j.toString());
                    var mapInside = {};

                    mapInside.trainer = 1;
                    mapInside.current = maxParticipiant - 1;
                    mapOutside[i + '' + j] = mapInside;


                };
            };

            // doc.data().trainingCounter(i.toString() + j.toString()).trainer = 1;
            // const tmp = doc.data().trainingCounter(i.toString() + j.toString()).trainer
            // doc.data().trainingCounter(i.toString() + j.toString()).current = maxParticipiant - tmp;

            updateData("fix", documentFix, mapOutside);
            console.log(mapOutside);
        });
    });
};

initCounter();


/**
 * Hint:
 * Day and lesson starts with zero, so if you want to modify
 * the first leson on Tuesday: day = 1, lesson = 0
 */
function setTrainerNumber(day, lesson, trainer) {
    
};


function resetCurrent() {
    for (var i = 0; i < 5; i++) {
        for (var j = 0; j < 5; j++) {
            alert("Test");
        };
    };
};
