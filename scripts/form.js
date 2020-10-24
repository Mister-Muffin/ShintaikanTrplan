function cancelLogin() {
    window.location.replace("/trainingsplan/?status=cancelled");
}


/**
 * 1. Datum abfragen
 * 2. Eingetragenes Datum berechnen
 * 3. Name auslesen
 * 4. Name eintragen
 * 5. Current anpassen
 */

const fieldVorName = document.getElementById("vorname");
const fieldNachName = document.getElementById("nachname");
const form = document.getElementById("myForm");
const plswait = document.getElementById("plswait");

const btn = document.getElementById("btn");
btn.addEventListener("click", async function login() {
    form.style.display = "none";
    plswait.style.display = "block";
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const day = urlParams.get("day");
    console.log(day)
    const lesson = urlParams.get("lesson");
    console.log(lesson)

    const response = await fetch("https://europe-west1-shintaikan-6b670.cloudfunctions.net/decreaseCurrent", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "day": day,
            "lesson": lesson,
            "firstname": fieldVorName.value,
            "lastname": fieldNachName.value
        })
    });
    if (response.status === 200) {
        //e.preventDefault();     
        window.location.replace("/trainingsplan/?status=200");
    } else if (response.status === 406) {
        window.location.replace("/trainingsplan/?status=full");
    } else {
        //e.preventDefault();     
        window.location.replace("/trainingsplan/?status=error");
    }
});