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
let DivnumRate = document.getElementById("DivnumRate");
let numRate = document.getElementById("numRate");
let modal = document.getElementById("modal");
let Close = document.getElementById("Close");
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
        SetpPercentageValue(q6.value, 4, [0.3,
            0.5,
            0.8,
            1.0,
        ]);
        SetpPercentageValue(q7.value, 4, [0.3,
            0.5,
            0.8,
            1.0,
        ]);
        SetpPercentageValue(q8.value, 4, [0.5,
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
        console.log("Score " + score.toFixed(1) + "%");
        // DivnumRate.classList.remove("hidden");
        // DivnumRate.classList.add("block");
        console.log(score);
        let numRateScore = Math.round(score);
        console.log(numRateScore);
        numRate.style.cssText = `--value: ${numRateScore}`;
        numRate.innerText = numRateScore + "%";
        modal.classList.remove("hidden");
        modal.classList.add("block");
        Close.addEventListener("click", function () {
            modal.classList.remove("block");
            modal.classList.add("hidden");
        });

    } else if (education.value == 1) {
        // Master
        console.log("Master");
        SetpPercentageValue(q1.value, 4, [6.3,
            12.5,
            18.8,
            25.0
        ]);
        SetpPercentageValue(q2.value, 7, [2.1,
            4.3,
            6.4,
            8.6,
            10.7,
            12.9,
            15.0
        ]);
        SetpPercentageValue(q3.value, 7, [0.7,
            1.4,
            2.1,
            2.9,
            3.6,
            4.3,
            5.0
        ]);
        SetpPercentageValue(q4.value, 3, [2.3,
            4.7,
            7.0
        ]);
        SetpPercentageValue(q5.value, 4, [1.5,
            3.0,
            4.5,
            6.0
        ]);
        SetpPercentageValue(q6.value, 4, [0.5,
            1.0,
            1.5,
            2.0
        ]);
        SetpPercentageValue(q7.value, 4, [0.8,
            1.5,
            2.3,
            3.0
        ]);
        SetpPercentageValue(q8.value, 4, [0.5,
            1.0,
            1.5,
            2.0
        ]);
        SetpPercentageValue(q9.value, 2, [3.0,
            1.5
        ]);
        SetpPercentageValue(q10.value, 12, [0.6,
            1.2,
            1.8,
            2.3,
            2.9,
            3.5,
            4.1,
            4.7,
            5.3,
            5.8,
            6.4,
            7.0
        ]);
        SetpPercentageValue(q11.value, 4, [0.5,
            1.0,
            1.5,
            2.0
        ]);
        SetpPercentageValue(q12.value, 4, [0.3,
            0.5,
            0.8,
            1.0
        ]);
        SetpPercentageValue(q13.value, 3, [0.3,
            0.7,
            1.0
        ]);
        SetpPercentageValue(q14.value, 3, [0.3,
            0.7,
            1.0
        ]);
        SetpPercentageValue(q15.value, 4, [0.3,
            0.5,
            0.8,
            1.0
        ]);
        SetpPercentageValue(q16.value, 5, [1,
            2,
            3,
            4,
            5
        ]);
        SetpPercentageValue(q17.value, 6, [0.8,
            1.7,
            2.5,
            3.3,
            4.2,
            5.0
        ]);
        SetpPercentageValue(q18.value, 3, [1,
            2,
            3
        ]);
        SetpPercentageValue(q19.value, 3, [3,
            2,
            1
        ]);
        SetpPercentageValue(q20.value, 2, [2,
            3,
        ]);
        console.log("Score " + score.toFixed(1) + "%");
    } else if (education.value == 2) {
        console.log("phD");
        // phD
        SetpPercentageValue(q1.value, 4, [4.5,
            9.0,
            13.5,
            18.0
        ]);
        SetpPercentageValue(q2.value, 7, [1.4,
            2.9,
            4.3,
            5.7,
            7.1,
            8.6,
            10.0
        ]);
        SetpPercentageValue(q3.value, 7, [1.1,
            2.3,
            3.4,
            4.6,
            5.7,
            6.9,
            8.0
        ]);
        SetpPercentageValue(q4.value, 3, [2.0,
            4.0,
            6.0
        ]);
        SetpPercentageValue(q5.value, 4, [2.5,
            5.0,
            7.5,
            10.0
        ]);
        SetpPercentageValue(q6.value, 4, [1.3,
            2.5,
            3.8,
            5.0
        ]);
        SetpPercentageValue(q7.value, 4, [1.8,
            3.5,
            5.3,
            7.0
        ]);
        SetpPercentageValue(q8.value, 4, [0.5,
            1.0,
            1.5,
            2.0
        ]);
        SetpPercentageValue(q9.value, 2, [5.0,
            2.5
        ]);
        SetpPercentageValue(q10.value, 12, [0.5,
            1.0,
            1.5,
            2.0,
            2.5,
            3.0,
            3.5,
            4.0,
            4.5,
            5.0,
            5.5,
            6.0
        ]);
        SetpPercentageValue(q11.value, 4, [0.3,
            0.5,
            0.8,
            1.0
        ]);
        SetpPercentageValue(q12.value, 4, [0.3,
            0.5,
            0.8,
            1.0
        ]);
        SetpPercentageValue(q13.value, 3, [0.3,
            0.7,
            1.0
        ]);
        SetpPercentageValue(q14.value, 3, [0.3,
            0.7,
            1.0
        ]);
        SetpPercentageValue(q15.value, 4, [0.3,
            0.5,
            0.8,
            1.0
        ]);
        SetpPercentageValue(q16.value, 5, [1,
            1,
            2,
            2,
            3
        ]);
        SetpPercentageValue(q17.value, 6, [0.8,
            1.7,
            2.5,
            3.3,
            4.2,
            5.0
        ]);
        SetpPercentageValue(q18.value, 3, [0,
            1,
            1
        ]);
        SetpPercentageValue(q19.value, 3, [3,
            2,
            1
        ]);
        SetpPercentageValue(q20.value, 2, [3,
            6
        ]);
        //

        console.log("Score " + score.toFixed(1) + "%");
    } else {
        console.error(Error)
    }
});
// let Choose_tab = document.getElementById("Choose");
// let Educational_tab = document.getElementById("Educational");
// let Language_tab = document.getElementById("Language");
// let Intended_tab = document.getElementById("Intended");
// let Skills_tab = document.getElementById("Skills");
// let tabs = document.querySelectorAll("#tabs li");
// let next = document.getElementById("next");
// var activeTab = document.querySelector('#tabs li.active').value;
// console.log(activeTab);
// next.classList.add("hidden", "opacity-0");
// function chekTab(id) {
//     for (let i = 0; i < tabs.length; i++) {
//         let tab = tabs[i];
//         if (tab.getAttribute("id") != id.value) {
//             id.classList.add("hidden", "opacity-0");
//             id.classList.remove("block", "opacity-100");
//         }
//         else {
//             id.classList.remove("hidden", "opacity-0");
//             id.classList.add("block", "opacity-100");
//             console.log("ok");
//             break;
//         }
//     }

// }
// next.addEventListener("click", function () {
//     // chekTab(Choose_tab);
//     chekTab(Educational_tab);
//     // console.log(tabs.length);


// });