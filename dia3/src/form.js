import "./style.css"

const input = document.querySelector("[data-js='name']");

input.addEventListener("input", (e) => {

  function changeInputFormat() {
    let value = e.target.value;
    let words = value.split(" ");
    let newWords = [];

    for (let i = 0; i < words.length; i++) {
      newWords.push(words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase());
    }

    for (let i = 0; i < newWords.length; i++) {
      const lowerCaseWord = newWords[i].toLowerCase();

      if (lowerCaseWord === "da") {
        newWords[i] = "da";
      }

      if (lowerCaseWord === "do") {
        newWords[i] = "do";
      }

      if (lowerCaseWord === "de") {
        newWords[i] = "de";
      }

      if (lowerCaseWord === "dos") {
        newWords[i] = "dos";
      }
    }

    console.log(newWords);
    return value = newWords.join(" ");

  }

  e.target.value = changeInputFormat();

  //ALL FAILED ATTEMPTS \/

  // const nameChangeArr = nameChange.split(" ");

  // for (let i = 0; i < nameChangeArr; i++) {
  //   newArrNames.push(nameChangeArr[i].charAt(0).toUpperCase() + nameChangeArr[i].slice(1));
  // }

  // const newArrNames = [];

  //   nameChangeArr.forEach(name => {
  //    newArrNames.push(name.charAt(0).toUpperCase() + name.slice(1));
  //   })

  //   newArrNames.map(function(elms) {
  //     if (elms.includes(" DA ") || elms.includes(" Da ") || elms.includes(" dA ") || elms.includes(" da ")) {
  //       e.target.value = elms.replace(/ da /gi, " da ")
  //   }
  //   })

  //   console.log(newArrNames);


  //   // console.log(newArrNames)

  // nameChange = newArrNames.join(" ");


  //   e.target.value = nameChange;
  //   console.log(nameChange);



  // if (nameChange.includes(" DA ") || nameChange.includes(" Da ") || nameChange.includes(" dA ") || nameChange.includes(" da ")) {
  //   e.target.value = nameChange.replace(/ da /gi, " da ")
  // }

  // if (nameChange.includes(" DO ") || nameChange.includes(" Do ") || nameChange.includes(" dO ")) {
  //   e.target.value = nameChange.replace(/ do /gi, " do ")
  // }

  // if (nameChange.includes(" DE ") || nameChange.includes(" De ") || nameChange.includes(" dE ")) {
  //   e.target.value = nameChange.replace(/ de /gi, " de ")
  // }

  // if (nameChange.includes(" DOS ") || nameChange.includes(" Dos ") || nameChange.includes(" dOs ") || nameChange.includes(" dOS ") || nameChange.includes(" doS ") || nameChange.includes(" DoS ") ) {
  //   e.target.value = nameChange.replace(/ dos /gi, " dos ")
  // }

})

const form = document.querySelector("[data-js='form']");

form.innerHTML = `<label for="colors">Escolha uma cor:</label></br>

<select name="colors" id="colors" multiple data-js="select-colors">
  <option value="Blue">Blue</option>
  <option value="Green">Green</option>
  <option value="Red">Red</option>
  <option value="Purple">Purple</option>
  <option value="Black">Black</option>
</select>`

const colorsSelect = document.querySelector("[data-js='select-colors']");
const colorsDiv = document.createElement("div");
colorsDiv.style.display = "flex";
form.appendChild(colorsDiv);

const blue = document.createElement("div");
blue.setAttribute("class", "blue");

const green = document.createElement("div");
green.setAttribute("class", "green");

const red = document.createElement("div");
red.setAttribute("class", "red");

const purple = document.createElement("div");
purple.setAttribute("class", "purple");

const black = document.createElement("div");
black.setAttribute("class", "black");

colorsSelect.addEventListener("click", (e) => {

  if (e.target.value === "Blue") {
    colorsDiv.appendChild(blue);
    blue.classList.toggle("with-color");
  }

  if (e.target.value === "Green") {
    colorsDiv.appendChild(green);
    green.classList.toggle("with-color");
  }

  if (e.target.value === "Red") {
    colorsDiv.appendChild(red);
    red.classList.toggle("with-color");
  }

  if (e.target.value === "Purple") {
    colorsDiv.appendChild(purple);
    purple.classList.toggle("with-color");
  }

  if (e.target.value === "Black") {
    colorsDiv.appendChild(black);
    black.classList.toggle("with-color");
  }
})
