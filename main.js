// => maximal Wert als Variable

// Trainingscounter: Hashmap[xy] => [Anzahl Trainer, current]
//      wobei   x: Wochentag
//              y: Einheit
//  + Array => wie viele Einheiten am jeweiligen Tag

// Teilnehmerliste: Hashmap[dy] => [Participant0, Participant1, ...]
//      wobei   d: Tag des Trainings
//              y: Einheit

const db = firebase.firestore();


var docRef = db.collection("fix").doc("wUWqwE3QsztMFEfVlc9U");

function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
        currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}

// const ref = db.collection("fix");

// const query = ref.where("maxLessons", "!=", true);

// console.log(query);

// var array = [];

function getKey(collection, index) {
    db.collection(collection).get().then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
            return (doc.data().maxLessons[index])
        });
    });
};

console.log(getKey("fix", 2))


// class City {
//     constructor(name, state, country) {
//         this.name = name;
//         this.state = state;
//         this.country = country;
//     }
//     toString() {
//         return this.name + ', ' + this.state + ', ' + this.country;
//     }
// }

// // Firestore data converter
// var cityConverter = {
//     toFirestore: function (city) {
//         return {
//             name: city.name,
//             state: city.state,
//             country: city.country
//         }
//     },
//     fromFirestore: function (snapshot, options) {
//         const data = snapshot.data(options);
//         return new City(data.name, data.state, data.country)
//     }
// }

// db.collection("cities").doc("LA")
//     .withConverter(cityConverter)
//     .get().then(function (doc) {
//         if (doc.exists) {
//             // Convert to City object
//             //var city = doc.data();
//             // Use a City instance method
//             //console.log(city.toString());
//         } else {
//             console.log("No such document!")
//         }
//     }).catch(function (error) {
//         console.log("Error getting document:", error)
//     });

// console.log(db.collection("cities").doc("LA").get().then(function (doc) {doc.data()}));




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





// db.collection("users").add({
//     first: "Ada",
//     last: "Lovelace",
//     born: 1815
// })
//     .then(function (docRef) {
//         console.log("Document written with ID: ", docRef.id);
//     })
//     .catch(function (error) {
//         console.error("Error adding document: ", error);
//     });


// db.collection("users").get().then((querySnapshot) => {
//     querySnapshot.forEach((doc) => {
//         console.log(doc.data());
//     });
// });


