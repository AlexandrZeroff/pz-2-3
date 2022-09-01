function showLinkAlert() {
    let alert_link = document.createElement('a');
    alert_link.target = '_blank';
    alert_link.href = 'https://github.com/Group282/pz-2-3/tree/master/task_1';
    if (window.confirm('Ok to follow https://github.com/Group282/pz-2-3/tree/master/task_1')) {
        alert_link.click();
    };

}

let rotation1 = 0;
function rotateImg1() {
    rotation1 += 90;
    if (rotation1 === 360) {
        rotation1 = 0;
    }
    document.getElementById("img-rotate-1").style.transform = `rotate(${rotation1}deg)`;
}
let rotation2 = 0;
function rotateImg2() {
    rotation2 += 90;
    if (rotation2 === 360) {
        rotation2 = 0;
    }
    document.getElementById("img-rotate-2").style.transform = `rotate(${rotation2}deg)`;
}
let rotation3 = 0;
function rotateImg3() {
    rotation3 += 90;
    if (rotation3 === 360) {
        rotation3 = 0;
    }
    document.getElementById("img-rotate-3").style.transform = `rotate(${rotation3}deg)`;
}

const defaultText = 'Some text to test'

function changeText(element) {
    text = document.getElementById("text").innerHTML
    document.getElementById("text").innerText = text + " " + element.href
}

function returnText() {
    document.getElementById("text").innerText = defaultText
}

function validateForm() {
    var first = document.testForm.firstname.value;
    var last = document.testForm.lastname.value;
    var age = document.testForm.age.value;

    if (first == null || first == "") {
        document.getElementById("span-first").innerHTML = "Field is empty";
        document.getElementById("firstname").classList.add("input-error")
        return false;
    }
    if (first.length > 50) {
        document.getElementById("span-last").innerHTML = "Too long";
        document.getElementById("firstname").classList.add("input-error")
        return false
    }
    if (/^[a-zA-Z]+$/.test(first)) {
        document.getElementById("span-last").innerHTML = "Only letters are allowed";
        document.getElementById("firstname").classList.add("input-error")
        return false
    }
    if (last == null || last == "") {
        document.getElementById("span-last").innerHTML = "Field is empty";
        document.getElementById("lastname").classList.add("input-error")
        return false;
    }
    if (last.length > 50) {
        document.getElementById("span-last").innerHTML = "Too long";
        document.getElementById("lastname").classList.add("input-error")
        return false
    }
    if (/^[a-zA-Z]+$/.test(first)) {
        document.getElementById("span-last").innerHTML = "Only letters are allowed";
        document.getElementById("lastname").classList.add("input-error")
        return false
    }
    if(age<1){
        document.getElementById("span-age").innerHTML = "Only letters are allowed";
        document.getElementById("ageinput").classList.add("input-error")
        return false
    }
}  
