function cancelLogin() {
    window.location.replace("/?status=cancelled");
}

const btn = document.getElementById("btn");
btn.addEventListener("click", async function login() {
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
            "lesson": lesson
        })
    });
    if (response.status === 200) {
        //e.preventDefault();     
        window.location.replace("/?status=200");
    } else {
        //e.preventDefault();     
        window.location.replace("/?status=error");
    }
});