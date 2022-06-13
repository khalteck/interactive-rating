//The rate us div
let rateUs = document.getElementById("rate");
//The thank you div
let thank = document.getElementById("thank");
//All the rating buttons
const rating1 = document.getElementById("rating1");
const rating2 = document.getElementById("rating2");
const rating3 = document.getElementById("rating3");
const rating4 = document.getElementById("rating4");
const rating5 = document.getElementById("rating5");
//the submit button
const btn = document.getElementById("btn");
let clicked1,clicked2,clicked3,clicked4,clicked5 = false;

//function that collects the rating choice and displays the result in a thank you card!
btn.addEventListener("click", function() {
    if (clicked1 === true || clicked2 === true || clicked3 === true || clicked4 === true || clicked5 === true) {
        rateUs.classList.add("hide-div");
        thank.classList.remove("hide-div");
    } else if (clicked1 === false || clicked2 === false || clicked3 === false || clicked4 === false || clicked5 === false){
        alert("You have not given us a rating!");
    }
});

//A function that changes the color of the first rating button when clicked
const changeColor1 = () => {
    document.getElementById("one").classList.remove("hide-div");
    document.getElementById("two").classList.add("hide-div");
    document.getElementById("three").classList.add("hide-div");
    document.getElementById("four").classList.add("hide-div");
    document.getElementById("five").classList.add("hide-div");
    rating1.classList.add("color-gray");
    rating2.classList.remove("color-gray");
    rating3.classList.remove("color-gray");
    rating4.classList.remove("color-gray");
    rating5.classList.remove("color-gray");
}
rating1.addEventListener("click", changeColor1);
rating1.addEventListener("click", function() {
    clicked1 = true
});
//A function that changes the color of the second rating button when clicked
const changeColor2 = () => {
    document.getElementById("two").classList.remove("hide-div");
    document.getElementById("one").classList.add("hide-div");
    document.getElementById("three").classList.add("hide-div");
    document.getElementById("four").classList.add("hide-div");
    document.getElementById("five").classList.add("hide-div");
    rating1.classList.remove("color-gray");
    rating2.classList.add("color-gray");
    rating3.classList.remove("color-gray");
    rating4.classList.remove("color-gray");
    rating5.classList.remove("color-gray");
}
rating2.addEventListener("click", changeColor2);
rating2.addEventListener("click", function() {
    clicked2 = true
});
//A function that changes the color of the third rating button when clicked
const changeColor3 = () => {
    document.getElementById("three").classList.remove("hide-div");
    document.getElementById("one").classList.add("hide-div");
    document.getElementById("two").classList.add("hide-div");
    document.getElementById("four").classList.add("hide-div");
    document.getElementById("five").classList.add("hide-div");
    rating1.classList.remove("color-gray");
    rating2.classList.remove("color-gray");
    rating3.classList.add("color-gray");
    rating4.classList.remove("color-gray");
    rating5.classList.remove("color-gray");
}
rating3.addEventListener("click", changeColor3);
rating3.addEventListener("click", function() {
    clicked3 = true
});
//A function that changes the color of the fourth rating button when clicked
const changeColor4 = () => {
    document.getElementById("four").classList.remove("hide-div");
    document.getElementById("one").classList.add("hide-div");
    document.getElementById("two").classList.add("hide-div");
    document.getElementById("three").classList.add("hide-div");
    document.getElementById("five").classList.add("hide-div");
    rating1.classList.remove("color-gray");
    rating2.classList.remove("color-gray");
    rating3.classList.remove("color-gray");
    rating4.classList.add("color-gray");
    rating5.classList.remove("color-gray");
}
rating4.addEventListener("click", changeColor4);
rating4.addEventListener("click", function() {
    clicked4 = true
});
//A function that changes the color of the fifth rating button when clicked
const changeColor5 = () => {
    document.getElementById("five").classList.remove("hide-div");
    document.getElementById("one").classList.add("hide-div");
    document.getElementById("two").classList.add("hide-div");
    document.getElementById("three").classList.add("hide-div");
    document.getElementById("four").classList.add("hide-div");
    rating1.classList.remove("color-gray");
    rating2.classList.remove("color-gray");
    rating3.classList.remove("color-gray");
    rating4.classList.remove("color-gray");
    rating5.classList.add("color-gray");
}
rating5.addEventListener("click", changeColor5);
rating5.addEventListener("click", function() {
    clicked5 = true
});