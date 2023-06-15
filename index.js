const inputName = document.getElementById("input-name");
const genereteButton = document.getElementById("generate-btn");
const paragraph = document.getElementById("output");

genereteButton.addEventListener("click", function () {
    const lowerCaseString = inputName.value.toLowerCase();
    let output = "";
    const string = "Your nickname is: ";

    for (let index = 0; index < lowerCaseString.length; index++) {
        const letter = lowerCaseString[index];

        if (letter === "a") {
            output += "4";
        } else if(letter === "i") {
            output += "1";
        } else if (letter === "o") {
            output += "0";
        }
        else {
            output += letter;
        }
    }
    
    paragraph.textContent = string + output;
    inputName.value = "";
})


console.log(genereteButton);
console.log(inputName);