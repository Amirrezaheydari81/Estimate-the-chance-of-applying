let score = 0;
let education, q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11, q12, q13, q14, q15, q16, q17, q18, q19, q20;
//
education = document.querySelector("#education select");
q1 = document.querySelector("#q1 select");
q2 = document.querySelector("#q2 select");
q3 = document.querySelector("#q3 select");
q4 = document.querySelector("#q4 select");
q5 = document.querySelector("#q5 select");
q6 = document.querySelector("#q6 select");
q7 = document.querySelector("#q7 select");
q8 = document.querySelector("#q8 select");
q9 = document.querySelector("#q9 select");
q10 = document.querySelector("#q10 select");
q11 = document.querySelector("#q11 select");
q12 = document.querySelector("#q12 select");
q13 = document.querySelector("#q13 select");
q14 = document.querySelector("#q14 select");
q15 = document.querySelector("#q15 select");
q16 = document.querySelector("#q16 select");
q17 = document.querySelector("#q17 select");
q18 = document.querySelector("#q18 select");
q19 = document.querySelector("#q19 select");
q20 = document.querySelector("#q20 select");
//
let calculateBtn = document.getElementById('Calculate');
//
function SetpPercentageValue(select, numberAnswers, answersScores) {
    // console.log(numberAnswers);
    for (let i = 0; i < numberAnswers; i++) {
        answer = Number(answersScores[i]);
        // console.log(answer);
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
//
//
// console.log(education);
calculateBtn.addEventListener("click", function () {
    score = 0;
    // console.log(education.value);
    if (education.value == 0) {
        console.log("Bachelors");
        // Bachelors
        SetpPercentageValue(q1.value, 4, [8.0,
            16.0,
            24.0,
            32.0,
        ]);
        SetpPercentageValue(q2.value, 7, [2.6,
            5.1,
            7.7,
            10.3,
            12.9,
            15.4,
            18.0,
        ]);
        SetpPercentageValue(q3.value, 7, [0.4,
            0.9,
            1.3,
            1.7,
            2.1,
            2.6,
            3,
        ]);
        SetpPercentageValue(q4.value, 3, [1.3,
            2.7,
            4.0,
        ]);
        SetpPercentageValue(q5.value, 4, [0.3,
            0.5,
            0.8,
            1.0,
        ]);
        SetpPercentageValue(q6.value, 6, [0.3,
            0.5,
            0.8,
            1.0,
        ]);
        SetpPercentageValue(q7.value, 6, [0.3,
            0.5,
            0.8,
            1.0,
        ]);
        SetpPercentageValue(q8.value, 6, [0.5,
            1.0,
            1.5,
            2.0,
        ]);
        SetpPercentageValue(q9.value, 2, [3.0,
            1.5,
        ]);
        SetpPercentageValue(q10.value, 12, [0.4,
            0.8,
            1.3,
            1.7,
            2.1,
            2.5,
            2.9,
            3.3,
            3.8,
            4.2,
            4.6,
            5.0,
        ]);
        SetpPercentageValue(q11.value, 4, [0.3,
            0.5,
            0.8,
            1.0,
        ]);
        SetpPercentageValue(q12.value, 4, [0.3,
            0.5,
            0.8,
            1.0,
        ]);
        SetpPercentageValue(q13.value, 3, [0.3,
            0.7,
            1.0,
        ]);
        SetpPercentageValue(q14.value, 3, [0.3,
            0.7,
            1.0,
        ]);
        SetpPercentageValue(q15.value, 4, [0.5,
            1.0,
            1.5,
            2.0,
        ]);
        SetpPercentageValue(q16.value, 5, [1,
            2,
            3,
            4,
            5,
        ]);
        SetpPercentageValue(q17.value, 6, [1,
            2,
            3,
            4,
            5,
            6,
        ]);
        SetpPercentageValue(q18.value, 3, [1,
            1,
            2,
        ]);
        SetpPercentageValue(q19.value, 3, [5,
            3,
            2,
        ]);
        SetpPercentageValue(q20.value, 2, [3,
            6,
        ]);
        console.log(score);
    } else if (education.value == 1) {
        console.log("Master");
        // Masters
        console.log("Masters");
        console.log("---- Score Number ----");
        console.log("Score " + score.toFixed(1) + "%");
    } else if (education.value == 2) {
        console.log("phD");
        console.log("---- Score Number ----");
        console.log("Score " + score.toFixed(1) + "%");
    };

});