// => maximal Wert als Variable

// Trainingscounter: Hashmap[xy] => [Anzahl Trainer, current]
//      wobei   x: Wochentag
//              y: Einheit
//  + Array => wie viele Einheiten am jeweiligen Tag

// Teilnehmerliste: Hashmap[dy] => [Participant0, Participant1, ...]
//      wobei   d: Tag des Trainings
//              y: Einheit

const db = firebase.firestore();
//const docRef = db.collection("fix").doc("wUWqwE3QsztMFEfVlc9U");

// var array = new Array();
// async function getKey(collection, index) {
//     await db.collection(collection).get().then(querySnapshot => {
//         querySnapshot.forEach(doc => {
//             array.push(doc.data().maxLessons);
//         });
//     });
// };

// console.log(getKey("fix", 2))

// function load() {
//     return new Promise(function(resolve, reject) {
//         db.collection("fix").get().then(function (querySnapshot) {
//             querySnapshot.forEach(function (doc) {
//                 let data = doc.data().maxLessons
//                 resolve(data);
//             });
//         });
//     });
// }

// function loadMaxLesson(index) {
//     let promise = load();
//     var array = [];
//     promise.then(
//         data => {array.push(data); alert(array)}
//     );
//     console.log(array);
//     return array;
// }
// alert(loadMaxLesson(2));


function getKey(collection, index) {
    return db.collection(collection).get().then((querySnapshot) => {
        return querySnapshot.map((doc) => {
            return doc.data().maxLessons;
        });
    });
}

getKey("fix", 2).then((data) => { return data[2] })

    (async () => {
        const fix = await getKey("fix", 2);
        console.log(fix);

    })()


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
