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

const protectedUrl = "https://europe-west1-shintaikan-6b670.cloudfunctions.net/getKey";

async function get(collection, key) {
    const response = await fetch(protectedUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "collection": collection,
            "document": key
        })
    });
    const status = response.status;
    if (status === 200) {
        return response.json();
    } else {
        return status;
    }
}


let res = get("fix", documentFix);
res.then(function (result) {
    console.log(result)
})


get("fix", documentFix).then(function (result) {
    console.log(result)
});




/**
 * Funktionen für die Erste Funktion:
 *      -> Initialisierung
 *      -> maxTrainer aktualisieren/setzen
 *      -> resetCurrent
 */


function initCounter() {
    for (var i = 0; i < 5; i++) {
        for (var j = 0; j < 5; j++) {
            alert("Test");
        };
    };
};

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
