let age = 18;

age = Number(age);

if (!isNaN(age)) {
  if (age > 18) {
    console.log("Let`s go");
  } else if (age === 18) {
    console.log("Happy birthday");
  } else {
    console.log("Go away");
  }
} else {
  console.log("Incorrect date");
}

let gender = "Male";

if (gender.toLocaleLowerCase() === "male") {
  console.log("Go to the left");
} else if (gender === "female") {
  console.log("Go to the right");
}

let isUser = false;

let typeUser = isUser ? "User" : "Bot";

console.log("Hello, " + typeUser);

typeUser = "admin"; // user guest bot

switch (typeUser) {
  case "admin":
    console.log("You admin");
    break;

  case "user":
    console.log("You user");
    break;

  case "guest":
    console.log("You guest");
    break;

  case "bot":
    console.log("You bot");
    break;

  default:
    console.log("Incorrect type of user");
    break;
}

let i = 0;
let endNumb = 21;
let result = "";
while (--endNumb >= i) {
  result += `${endNumb}${endNumb !== i ? ", " : ""} `;
}
console.log(result);
