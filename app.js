// set inital value to zero
let count = 0;
//choose value and buttons
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;
    if (styles.contains("decrease")) {
      count-=10;
    } else if (styles.contains("increase")) {
      count+=10;
      //changed new else if statement with myArray function
    } else if (styles.contains("random")) {
      count+myArray();
    } else {
      count = 0;
    }

    if (count > 0) {
      value.style.color = "green";
    }
    if (count < 0) {
      value.style.color = "red";
    }
    if (count === 0) {
      value.style.color = "#222";
    }
    value.textContent = count;
  });
});

//array for function
const array = ["5", "9", "1", "4", "2", "6 ", "7", "3", "10", "8"];

//random number function
function myArray() {
  return Math.floor(Math.random() * array.length);
}