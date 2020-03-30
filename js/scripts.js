
function getQuizData() {
    let someVarName = JSON.parse(localStorage.getItem("question"))
    if (someVarName != null && someVarName <= 4) {
        document.getElementById("q" + someVarName).style.display = 'block';
    }
    else {
        localStorage.setItem("question", 0);
        document.getElementById("q0").style.display = 'block';
        document.getElementById("prev-btn").style.display = 'none'
    }
}

function selectedOptions(event) {
    let questionNum = JSON.parse(localStorage.getItem("question"))
    if (event.target.value && event.target.value !== "" || event.target.value !== null){
        localStorage.setItem(questionNum, event.target.value);
        document.getElementById("next-btn").disabled = false
    }
    
}


function next() {
    let someVarName = JSON.parse(localStorage.getItem("question"))
    let selectedValue = localStorage.getItem(someVarName)
    let checkvalue = someVarName + 1;
    localStorage.setItem("question", checkvalue);
    if (checkvalue <= 4 && selectedValue !== null) {
        document.getElementById("q" + someVarName).style.display = 'none';
        document.getElementById("q" + checkvalue).style.display = 'block';
        document.getElementById("prev-btn").disabled = false
        document.getElementById("prev-btn").style.display = "initial"
    } else if (checkvalue == 5) {
        let finalValues = []
        for (let i = 0; i <= 4; i++) {
            let getVal = localStorage.getItem(i)
            finalValues.push(getVal)
        }
        let button = document.getElementsByClassName('footer-buttons')
        button[0].style.display = 'none'
        document.getElementById("q" + someVarName).style.display = 'none';
        document.getElementById("results").innerHTML = '<h3>Your Submitted Answer: <div> ' + finalValues + ' </div></h3>';
    }
}


function previous() {
    let someVarName = JSON.parse(localStorage.getItem("question"))
    let checkvalue = someVarName - 1;
    document.getElementById("q" + someVarName).style.display = 'none';
    localStorage.setItem("question", checkvalue);
    let selectedValue = localStorage.getItem(checkvalue)
    if (checkvalue >= 0) {
        document.getElementById("q" + someVarName).style.display = 'none';
        document.getElementById("q" + checkvalue).style.display = 'block';
        if (checkvalue == 0) {
            document.getElementById("prev-btn").style.display = 'none'
        }
    }
    if (selectedValue !== null) {
        document.getElementById("next-btn").disabled = false
    }
}