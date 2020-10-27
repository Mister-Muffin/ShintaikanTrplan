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
const fieldEmail = document.getElementById("email");
const form = document.getElementById("myForm");
const plswait = document.getElementById("plswait");

const emailRegex = '([a-z0-9]+@)+([a-z]+)+([.])+([a-z]+)';

const btn = document.getElementById("btn");
btn.addEventListener("click", async function login() {

    const vorname = fieldVorName.value.trim();
    const nachname = fieldNachName.value.trim();
    var email = fieldEmail.value.trim();

    if (vorname.length <= 1 || nachname.length <= 1) {
        return;
    }
    if (!email.match(emailRegex) && !email.length <= 0) {
        alert("Die Email ist ungültig!");
        return;
    }
    if (email.length <= 0) {
        email = "undefined";
    }

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
            "firstname": vorname,
            "lastname": nachname,
            "email": email
        })
    });
    if (response.status === 200) {
        //e.preventDefault();     
        window.location.replace("/trainingsplan/?status=200");
    } else if (response.status === 406) {
        window.location.replace("/trainingsplan/?status=full");
    } else if (response.status === 410) {
        window.location.replace("/trainingsplan/?status=gone");
    } else {
        //e.preventDefault();     
        window.location.replace("/trainingsplan/?status=error");
    }
});