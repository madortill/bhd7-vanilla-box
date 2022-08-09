window.addEventListener("load", () => {
    document.getElementById("submitBtn").addEventListener("click", answerSubmitted);
});

const answerSubmitted = () => {
    let newString = document.getElementById("dominoAnswer").value.replace(/\"/g, "").replace(/\;/g, "").replace(/\./g,"").replace(/\,/g,"");
      if (newString === "להתאחד זו התחלה להישאר מאוחדים זו התקדמות לעבוד יחד זו הצלחה") {
        window.location.href = "questions.html"
      } else {
        document.getElementById("wordsTryAgain").style.display = "block";
        setTimeout(() => {
        document.getElementById("wordsTryAgain").style.display = "none";
        }, 1000); 
      }
}