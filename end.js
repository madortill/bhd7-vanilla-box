window.addEventListener("load", () => {
    document.getElementById("odotBtn").addEventListener("click", openOdot);
    beggining();
});

let showOdot = false;

const beggining = () => {
    document.getElementById("odotDiv").style.display = "none";
    document.getElementById("odotBtn").innerText = "אודות";
}

const openOdot = () => {
    showOdot = showOdot ? false : true;
    if (showOdot) {
    document.getElementById("notebook").style.display = "none";
    document.getElementById("odotDiv").style.display = "block";
    document.getElementById("odotBtn").innerText = "חזרה";
    document.getElementById("finishSentence").innerText = "אודות";
    } else {
    document.getElementById("notebook").style.display = "block";
    document.getElementById("odotDiv").style.display = "none";
    document.getElementById("odotBtn").innerText = "אודות";
    document.getElementById("finishSentence").innerText = "כל הכבוד!";
    }
}