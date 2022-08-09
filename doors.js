window.addEventListener("load", ()=> {
    document.getElementById("closeVideoBtn").addEventListener("click", handleVideo);
    document.getElementById("showVideoBtn").addEventListener("click", handleVideo);
    document.getElementById("door1").addEventListener("click", doorClicked);
    document.getElementById("door2").addEventListener("click", doorClicked);
    document.getElementById("door3").addEventListener("click", doorClicked);
    document.getElementById("X").addEventListener("click", closeQuestion);
    document.getElementById("option1").addEventListener("click", checkAnswer);
    document.getElementById("option2").addEventListener("click", checkAnswer);
    document.getElementById("option3").addEventListener("click", checkAnswer);
    document.getElementById("continueBtn").addEventListener("click", next);
});

let showVideo = true;
let questionArr = [{question: "כמה סרטנים התאחדו כדי לעזור לסרטן היחיד?", option1: "32", option2: "16", option3: "18", correctAns: "option2", doorNum: 1}, {question: "כמה ידיים יש לנמלה?", option1: "5", option2: "3", option3: "4", correctAns: "option3", doorNum: 2}, {question: "כמה קרחונים יש בסרטון?", option1: "1", option2: "2", option3: "3", correctAns: "option3", doorNum: 3}];
let questionNum = 0;
let openQuestion = false;
let isFirstDoor = false;
let isSecondDoor = false;
let isThirdDoor = false;
let doorsRevealed = 0;

const handleVideo = () => {
    showVideo = showVideo ? false : true;
        if (showVideo) {
            document.getElementById("startVideo").style.display = "block";
            document.getElementById("closeVideoBtn").style.display = "block";
            document.getElementById("showVideoBtn").style.display = "none";
            document.getElementById("door1").style.display = "none";
            document.getElementById("door2").style.display = "none";
            document.getElementById("door3").style.display = "none";
        } else {
            document.getElementById("startVideo").style.display = "none";
            document.getElementById("closeVideoBtn").style.display = "none";
            document.getElementById("showVideoBtn").style.display = "block";
            document.getElementById("door1").style.display = "block";
            document.getElementById("door2").style.display = "block";
            document.getElementById("door3").style.display = "block";
        }
};

const doorClicked = (event) => {
    openQuestion = true;
    questionNum = event.target.id.charAt(event.target.id.length - 1) - 1;
    document.getElementById("doorQuestion").innerText = questionArr[questionNum].question;
    document.getElementById("question").style.display = "block";
    document.getElementById("option1").innerText = questionArr[questionNum].option1;
    document.getElementById("option2").innerText = questionArr[questionNum].option2;
    document.getElementById("option3").innerText = questionArr[questionNum].option3;
    document.getElementById("door1").removeEventListener("click", doorClicked);
    document.getElementById("door2").removeEventListener("click", doorClicked);
    document.getElementById("door3").removeEventListener("click", doorClicked);
    
}

const closeQuestion = (event) => {
    document.getElementById("question").style.display = "none";
    openQuestion = false;
    document.getElementById("door1").addEventListener("click", doorClicked);
    document.getElementById("door2").addEventListener("click", doorClicked);
    document.getElementById("door3").addEventListener("click", doorClicked);
}

const checkAnswer = (event) => {
    document.getElementById("removeListeners").style.pointerEvents = "none";
      let currAns = event.target.id;
      document.getElementById("option1").removeEventListener("click", checkAnswer);
      if (currAns === questionArr[questionNum].correctAns) {
        document.getElementById(currAns).classList.add("correctAnswer");
        setTimeout(() => {
        document.getElementById(`door${questionNum + 1}`).classList.add("doorAnimation");
        document.getElementById(currAns).classList.remove("correctAnswer");
        document.getElementById("removeListeners").style.pointerEvents = "all";
        closeQuestion();
        doorsRevealed++;
        if (doorsRevealed === 3) {
          document.getElementById("continueBtn").style.display = "block";
          document.getElementById("showVideoBtn").style.display = "none";
        }
       }, 500);
      } else {
        document.getElementById(currAns).classList.add("wrongAnswer");
        document.getElementById("tryAgain").classList.add("tryAgainAnimation");
            setTimeout(() => {
          if(openQuestion) {
          document.querySelector(`#${currAns}`).classList.remove("wrongAnswer");
          document.getElementById("tryAgain").classList.remove("tryAgainAnimation");
          document.getElementById("removeListeners").style.pointerEvents = "all";
          }
        }, 4000);
    }
}

const next = () => {
    window.location.href = "words.html";
}

