const nav = document.querySelector("#navbar");
const bar = document.querySelector("#bar");
const close = document.querySelector("#close");

if (bar) {
    bar.addEventListener("click", () => {
        nav.classList.add("active");
    })
}

if (close) {
    close.addEventListener("click", () => {
        nav.classList.remove("active")
    })
}



function changeImage(fileName) {
    let image = document.querySelector("#img");
    image.setAttribute("src", fileName); 
}
function changeText() {
    document.querySelector(".con").textContent = "Rs7";
    document.querySelector(".con1").textContent = "Audi";
    document.querySelector(".con2").textContent = "2015";
    document.querySelector(".con3").textContent = "5";
    document.querySelector(".con4").textContent = "Yes";
    document.querySelector(".con5").textContent = "Automatic";
    document.querySelector(".con6").textContent = "Petrol";
    document.querySelector(".con7").textContent = "Audi A7 / 75$ per day";

}
function changeText1() {
    document.querySelector(".con").textContent = "S6";
    document.querySelector(".con1").textContent = "Audi";
    document.querySelector(".con2").textContent = "2014";
    document.querySelector(".con3").textContent = "5";
    document.querySelector(".con4").textContent = "Yes";
    document.querySelector(".con5").textContent = "Automatic";
    document.querySelector(".con6").textContent = "Diesel";
    document.querySelector(".con7").textContent = "Audi S6 / 100$ per day";
}
function changeText2() {
    document.querySelector(".con").textContent = "Golf 7";
    document.querySelector(".con1").textContent = "Vw";
    document.querySelector(".con2").textContent = "2017";
    document.querySelector(".con3").textContent = "5";
    document.querySelector(".con4").textContent = "Yes";
    document.querySelector(".con5").textContent = "Manual";
    document.querySelector(".con6").textContent = "Diesel";
    document.querySelector(".con7").textContent = "Golf 7 / 35$ per day";
}
function changeText3() {
    document.querySelector(".con").textContent = "XE";
    document.querySelector(".con1").textContent = "Jaguar";
    document.querySelector(".con2").textContent = "2018";
    document.querySelector(".con3").textContent = "5";
    document.querySelector(".con4").textContent = "Yes";
    document.querySelector(".con5").textContent = "Automatic";
    document.querySelector(".con6").textContent = "Diesel";
    document.querySelector(".con7").textContent = "Jaguar XE / 48$ per day";
}
function changeText4() {
    document.querySelector(".con").textContent = "F-Pace";
    document.querySelector(".con1").textContent = "Jaguar";
    document.querySelector(".con2").textContent = "2020";
    document.querySelector(".con3").textContent = "5";
    document.querySelector(".con4").textContent = "Yes";
    document.querySelector(".con5").textContent = "Automatic";
    document.querySelector(".con6").textContent = "Petrol";
    document.querySelector(".con7").textContent = "Jaguar F-Pace/ 70$ per day";
}
function changeText5() {
    document.querySelector(".con").textContent = "E-Class";
    document.querySelector(".con1").textContent = "Mercedes";
    document.querySelector(".con2").textContent = "2014";
    document.querySelector(".con3").textContent = "5";
    document.querySelector(".con4").textContent = "Yes";
    document.querySelector(".con5").textContent = "Automatic";
    document.querySelector(".con6").textContent = "Diesel";
    document.querySelector(".con7").textContent = "Mercedes/ 50$ per day";
}
function changeText6() {
    document.querySelector(".con").textContent = "Superb";
    document.querySelector(".con1").textContent = "Skoda";
    document.querySelector(".con2").textContent = "2019";
    document.querySelector(".con3").textContent = "5";
    document.querySelector(".con4").textContent = "Yes";
    document.querySelector(".con5").textContent = "Manual";
    document.querySelector(".con6").textContent = "Diesel";
    document.querySelector(".con7").textContent = "Skoda Superb/ 60$ per day";
}
function changeText7() {
    document.querySelector(".con").textContent = "Xc90";
    document.querySelector(".con1").textContent = "Volvo";
    document.querySelector(".con2").textContent = "2020";
    document.querySelector(".con3").textContent = "5";
    document.querySelector(".con4").textContent = "Yes";
    document.querySelector(".con5").textContent = "Automatic";
    document.querySelector(".con6").textContent = "Diesel";
    document.querySelector(".con7").textContent = "Volvo Xc90/ 90$ per day";
}
function changeText8() {
    document.querySelector(".con").textContent = "Fiesta";
    document.querySelector(".con1").textContent = "Ford";
    document.querySelector(".con2").textContent = "2013";
    document.querySelector(".con3").textContent = "5";
    document.querySelector(".con4").textContent = "Yes";
    document.querySelector(".con5").textContent = "Manual";
    document.querySelector(".con6").textContent = "Petrol";
    document.querySelector(".con7").textContent = "Ford Fiesta/ 50$ per day";
}