const msgBox = document.getElementById("msgBox");
const msgText = document.getElementById("msgText");

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const status = urlParams.get("status");

console.log(status)

if (status === "200") {
    msgBox.style.backgroundColor = "rgb(4, 202, 4)";
    msgText.innerText = "Die Anmeldung war erfolgreich!"
    msgBox.style.display = "block";
} else if (status === "cancelled") {
    msgBox.style.backgroundColor = "rgb(202, 149, 4)";
    msgText.innerText = "Die Anmeldung wurde abgebrochen."
    msgBox.style.display = "block";
} else if (status === "error") {
    msgBox.style.backgroundColor = "rgb(202, 4, 4)";
    msgText.innerText = "Ein Fehler ist aufgetreten!"
    msgBox.style.display = "block";
    console.info("Error")
} else if (status === "full") {
    msgBox.style.backgroundColor = "rgb(202, 4, 4)";
    msgText.innerText = "Der gewählte Kurs ist bereits voll!"
    msgBox.style.display = "block";
} else {
    msgBox.style.display = "";
}