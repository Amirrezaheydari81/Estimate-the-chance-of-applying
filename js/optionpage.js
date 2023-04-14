let score = 0;
let q0, q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11, q12, q13, q14, q15, q16, q17, q18, q19, q20;
let education = q0;
q0 = document.querySelector("#q0 select").value;
q1 = document.querySelector("#q1 select").value;
q2 = document.querySelector("#q2 select").value;
q3 = document.querySelector("#q3 select").value;
q4 = document.querySelector("#q4 select").value;
q5 = document.querySelector("#q5 select").value;
q6 = document.querySelector("#q6 select").value;
q7 = document.querySelector("#q7 select").value;
q8 = document.querySelector("#q8 select").value;
q9 = document.querySelector("#q9 select").value;
q10 = document.querySelector("#q10 select").value;
q11 = document.querySelector("#q11 select").value;
q12 = document.querySelector("#q12 select").value;
q13 = document.querySelector("#q13 select").value;
q14 = document.querySelector("#q14 select").value;
q15 = document.querySelector("#q15 select").value;
q16 = document.querySelector("#q16 select").value;
q17 = document.querySelector("#q17 select").value;
q18 = document.querySelector("#q18 select").value;
q19 = document.querySelector("#q19 select").value;
q20 = document.querySelector("#q20 select").value;
// console.log(q0);
// q0 = 10; // Error test that the input is greater than the number of option select value
function SetpPercentageValue(select, numberAnswers, answersScores) {
    // console.log(numberAnswers);
    for (let i = 0; i < numberAnswers; i++) {
        answer = Number(answersScores[i]);
        console.log(answer);
        if (select == [i]) {
            score += answersScores[i];
        } else if (select == [i++]) {
            score += answersScores[i++];
        }

        if (numberAnswers < select) {
            console.warn('The entered value is greater than the value in the selector');
        }
    }
    return score;
}
SetpPercentageValue(q0, 4, [6.3, 12.5, 18.8, 25.0]);


// console log
console.log("---- Score Number ----");
console.log("Score " + score.toFixed(1) + "%");