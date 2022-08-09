window.addEventListener("load", ()=> {
    document.getElementById("submitBtn").addEventListener("click", answerSubmitted);
});

const answerSubmitted = () => {
    if (document.getElementById("input").value === "עבודת צוות") {
        window.location.href = "domino.html"
      } else {
        document.getElementById("wordsTryAgain").style.display = "block";
        setTimeout(() => {
        document.getElementById("wordsTryAgain").style.display = "none";
        }, 1000); 
      }
}