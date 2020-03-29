
let showing = [1, 0, 0, 0, 0];
let questions = ['q0', 'q1', 'q2', 'q3', 'q4'];

function next() {
    let qElems = [];
    let results = [];

    let q0 = document.forms["quizForm"]["q1"].value;
    let q1 = document.forms["quizForm"]["q2"].value;
    let q2 = document.forms["quizForm"]["q3"].value;
    let q3 = document.forms["quizForm"]["q4"].value;
    let q4 = document.forms["quizForm"]["q5"].value;

    document.getElementById('prev-btn').disabled = false
    for (var i = 0; i < questions.length; i++) {
        qElems.push(document.getElementById(questions[i]));
    }
    for (var i = 0; i < showing.length; i++) {
        if (eval("q" + i) !== "") {
            results.push(eval("q" + i))
            if (showing[i] == 1) {
                qElems[i].style.display = 'none';
                showing[i] = 0;
                if (i == showing.length - 1) {
                    let button = document.getElementsByClassName('footer-buttons')
                    button[0].style.display = 'none'
                    document.getElementById("results").innerHTML = '<h3>Your Submitted Answer: <div> ' + results + ' </div></h3>';
                } else {
                    qElems[i + 1].style.display = 'block';
                    showing[i + 1] = 1;
                }
                break;
            }
        }


    }
}


function previous() {
    let qElems = [];
    for (var i = 0; i < questions.length; i++) {
        qElems.push(document.getElementById(questions[i]));
    }
    for (var i = 0; i < showing.length; i++) {
        if (showing[i] == 1) {
            qElems[i].style.display = 'none';
            showing[i] = 0;
            if (4 == showing.length - i) {
                qElems[i - 1].style.display = 'block';
                showing[i - 1] = 1;
                document.getElementById('prev-btn').disabled = true
            } else {
                qElems[i - 1].style.display = 'block';
                showing[i - 1] = 1;
            }
            break;
        }
    }
}


