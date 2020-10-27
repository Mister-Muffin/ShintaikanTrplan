const msgBox = document.getElementById("msgBox");
const msgText = document.getElementById("msgText");

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
var status = urlParams.get("status");

const waitTime = 10000;

if (status === "200") {
    msgBox.style.backgroundColor = "rgb(4, 202, 4)";
    msgText.innerText = "Die Anmeldung war erfolgreich!"
    msgBox.style.display = "block";
    setTimeout(clearStatus, waitTime);
} else if (status === "cancelled") {
    msgBox.style.backgroundColor = "rgb(232, 145, 16)";
    msgText.innerText = "Die Anmeldung wurde abgebrochen."
    msgBox.style.display = "block";
    setTimeout(clearStatus, waitTime);
} else if (status === "error") {
    msgBox.style.backgroundColor = "rgb(202, 4, 4)";
    msgText.innerText = "Ein Fehler ist aufgetreten!"
    msgBox.style.display = "block";
    setTimeout(clearStatus, waitTime);
} else if (status === "gone") {
    msgBox.style.backgroundColor = "rgb(202, 4, 4)";
    msgText.innerText = "Der gewählte Kurs liegt in der Vargangenheit"
    msgBox.style.display = "block";
    setTimeout(clearStatus, waitTime);
} else if (status === "full") {
    msgBox.style.backgroundColor = "rgb(202, 4, 4)";
    msgText.innerText = "Der gewählte Kurs ist bereits voll!"
    msgBox.style.display = "block";
    setTimeout(clearStatus, waitTime);
} else {
    msgBox.style.display = "none";
}

function clearStatus() {
    msgBox.style.display = "none";
    status = "";
    window.location.replace("/trainingsplan/");
}