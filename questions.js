window.addEventListener("load", () => {
    document.getElementById("submitBtnQuestions").addEventListener("click", checkQuestion);
    startQuestion();
    document.getElementById("answer1").addEventListener("click",answerClicked);
    document.getElementById("answer2").addEventListener("click",answerClicked);
    document.getElementById("answer3").addEventListener("click",answerClicked);
    document.getElementById("answer4").addEventListener("click",answerClicked);
});

let questionsArr = [{question: "חניך מרגיש שהוא מנסה ללמוד את החומר ולא מצליח והמוטיבציה שלו קטנה בעקבות זה. מה אעשה בתור מפקד?", answer1: "אתן לו להתמודד לבד ואז ככה יוכל להבין בעצמו איך להתגבר על קשייו", answer2: "אנסה לעזור לו ללמוד ואקח אותו באופן פרטני כדי לגרום לו להצלחה", answer3: 'אפנה אותו למ"מ מפני שקושי לימודי הוא באחריות המ"מ', answer4: "אדיח אותו מהקורס על אי התקדמות לימודית, מפני שיש פער לימודי", correctAnswer: "answer2"},
      {question: "חניך ניגש אליך ומודיע לך שהוא מרגיש שיש לו מצוקה נפשית ואינו בטוח בעצמו וחושב שיפגע בעצמו. מה אעשה בתור מפקד?", answer1: "אתן לו להמשיך את שגרת יומו, במערכת הצבאית קשה לכולם והוא יתגבר", answer2: "אתקשר לאמבולנס על מנת שיפנו אותו בהקדם למיון פסיכיאטרי", answer3: "אקח אותו לשיחה בשביל לפתור את קשייו", answer4: 'אקח אותו לשיחה ואדווח ישר למ"מ', correctAnswer: "answer4"},
      {question: "חניך מרגיש שאינו מצליח להשתלב חברתית בקורס והנך רואה את זה מהצד. מה תעשה בתור מפקד?", answer1: "אתן לו תפקיד או משהו בכדי להעצים אותו בהכשרה, כדי שיבלוט", answer2: "לא אתערב בהתנהלות החברתית של החניכים על מנת לא ליצור מצב לא נעים", answer3: 'אדבר עם המ"מ והסגל ונמצא יחד מגוון פתרונות בכדי לעזור למצב הקיים', answer4: "תשובות א + ג נכונות", correctAnswer: "answer4"},
      {question: "חניך מחליט שהוא רוצה לצאת הביתה ובשום פנים ואופן לא מוכן להישאר בקורס ומתחיל להתקדם לכיוון הש.ג, מה תעשה?", answer1: 'נותן לו לצאת אבל מנסה לשוחח איתו כדי למנוע זאת ומסביר לו על כלל ההשלכות הקיימות ובמקביל מדווח למ"מ', answer2: "עוצר אותו באופן פיזי", answer3: 'משוחח איתו ומנסה להסביר לו למה הוא לא יכול לצאת ואיזה בעיות זה יגרום לו ולשירות הצבאי שלו ובזמן הזה מקפיץ את כלל החמ"ל בבסיס', answer4: 'מתקשר לחמ"ל ואומר להם לא לתת לחייל לצאת בש.ג', correctAnswer: 'answer1'}];

let questionNum = 0;
let currAnswer = "";

const startQuestion = () => {
    document.getElementById("question").innerText = questionsArr[questionNum].question;
    document.getElementById("sentence1").innerText = questionsArr[questionNum].answer1;
    document.getElementById("sentence2").innerText = questionsArr[questionNum].answer2;
    document.getElementById("sentence3").innerText = questionsArr[questionNum].answer3;
    document.getElementById("sentence4").innerText = questionsArr[questionNum].answer4;
}

const checkQuestion = (event) => {
    if (currAnswer === questionsArr[questionNum].correctAnswer) {
        document.getElementById("rightFeedback").style.display = "block";
        setTimeout( () => {
        document.getElementById("rightFeedback").style.display = "none";
          questionNum++;
          startQuestion();
          document.getElementById(currAnswer).style.backgroundColor = "white";
        }, 1000);
        if (questionNum === 3) {
          window.location.href = "end.html";
        }
      } else {
        document.getElementById("wrongFeedback").style.display = "block";
        setTimeout( () => {
            document.getElementById("wrongFeedback").style.display = "none";
            document.getElementById(currAnswer).style.backgroundColor = "white";
        }, 1000);
      }
}

const answerClicked = (event) => {
    document.getElementById(`answer1`).style.backgroundColor = "white";
    document.getElementById(`answer2`).style.backgroundColor = "white";
    document.getElementById(`answer3`).style.backgroundColor = "white";
    document.getElementById(`answer4`).style.backgroundColor = "white";
      
    document.getElementById(event.target.id).style.backgroundColor = "lightblue";
    currAnswer = event.target.id;
}