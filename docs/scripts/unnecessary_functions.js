
// function getKey(collection, index) {
//     db.collection(collection).doc(documentFix).get().then(function (doc) {
//         return (doc.data().maxLessons[index])
//     });
// };

/**
 * Funktionen für die Erste Funktion:
 *      -> Initialisierung
 *      -> maxTrainer aktualisieren/setzen
 *      -> resetCurrent
 */


// function updateData(collection, doc, obj) {
//     const ref = db.collection(collection).doc(doc);
//     ref.update({
//         training_counter: obj
//     }).then(function () {
//         console.log("Document successfully updated!");
//     }).catch(function (error) {
//         console.error("Error updating document: ", error);
//     });
// }


// function updateCurrent(structure, code, field, val) {
//     const ref = db.collection("fix").doc(documentFix);
//     var tmp = {};
//     tmp[structure + '.' + code + '' + '.' + field] = val;
//     console.log(tmp);
//     ref.update(
//         tmp
//     ).then(function () {
//         console.log("Document successfully updated!");
//     }).catch(function (error) {
//         console.error("Error updating document: ", error);
//     });
// }


// function initCounter() {
//     db.collection("fix").doc(documentFix).get().then(function (doc) {
//         var mapOutside = {};
//         for (var i = 1; i <= 5; i++) {
//             for (var j = 1; j <= doc.data().maxLessons[i - 1]; j++) {
//                 // console.log(i.toString() + j.toString());
//                 var mapInside = {};

//                 mapInside.trainer = 1;
//                 mapInside.current = maxParticipiant - 1;
//                 mapOutside[i + '' + j] = mapInside;


//             };
//         };
//         updateData("fix", documentFix, mapOutside);
//     });
// };



/**
 * Hint:
 * Day and lesson starts with one, so if you want to modify
 * the first leson on Tuesday: day = 2, lesson = 1
 */
// function setTrainerNumber(day, lesson, newTrainer) {
//     db.collection("fix").doc(documentFix).get().then(function (doc) {
//         const currentTrainer = doc.data().training_counter[day + '' + lesson].trainer;
//         const tmp1 = day + '' + lesson;
//         const tmp2 = doc.data().training_counter[day + '' + lesson].current - newTrainer + currentTrainer;
//         //9     -    2       +      1      = 8
//         updateCurrent("training_counter", tmp1, "trainer", newTrainer);
//         updateCurrent("training_counter", tmp1, "current", tmp2);
//         console.info(tmp2);
//     });
// };


// function resetCurrent() {
//     db.collection("fix").doc(documentFix).get().then(function (doc) {
//         var mapOutside = {};
//         for (var i = 0; i < 5; i++) {
//             for (var j = 0; j < 5; j++) {
//                 var mapInside = {};
//                 var tmp = doc.data().training_counter[i + '' + j].trainer;
//                 mapInside.trainer = tmp;
//                 mapInside.current = maxParticipiant - tmp;
//                 mapOutside[i + '' + j] = mapInside;
//             };
//         };

//         updateData("fix", documentFix, mapOutside);
//     });
// };

// function decreaseCurrent(day, lesson) {
//     db.collection("fix").doc(documentFix).get().then(function (doc) {
//         var tmp = doc.data().training_counter[day + '' + lesson].current - 1;
//         if (tmp < 0) {
//             return false;
//         }
//         updateCurrent("training_counter", day + '' + lesson, "current", tmp);
//         return true;
//     });
// };

// function increase(day, lesson, increase) {
//     db.collection("fix").doc(documentFix).get().then(function (doc) {
//         var tmp = doc.data().training_counter[day + '' + lesson].current + increase;
//         if (tmp > maxParticipiant) {
//             return false;
//         }
//         updateCurrent("training_counter", day + '' + lesson, "current", tmp);
//         return true;
//     });
// };