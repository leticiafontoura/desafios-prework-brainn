const input = document.querySelector("[data-js='name']");

input.addEventListener("input", (e) => {

  let nameChange = e.target.value;
  const nameChangeArr = nameChange.split(" ");

  // for (let i = 0; i < nameChangeArr; i++) {
  //   newArrNames.push(nameChangeArr[i].charAt(0).toUpperCase() + nameChangeArr[i].slice(1));
  // }

const newArrNames = [];

  nameChangeArr.forEach(name => {
   newArrNames.push(name.charAt(0).toUpperCase() + name.slice(1));
  })

  console.log(newArrNames)

  nameChange = newArrNames.join(" ");
  e.target.value = nameChange;

  if (nameChange.includes(" DA ") || nameChange.includes(" Da ") || nameChange.includes(" dA ")) {
    e.target.value = nameChange.replace(/ da /gi, " da ")
  } else if (nameChange.includes(" DO ") || nameChange.includes(" Do ") || nameChange.includes(" dO ")) {
    e.target.value = nameChange.replace(/ do /gi, " do ")
  } else if (nameChange.includes(" DE ") || nameChange.includes(" De ") || nameChange.includes(" dE ")) {
    e.target.value = nameChange.replace(/ de /gi, " de ")
  } else if (nameChange.includes(" DOS ") || nameChange.includes(" Dos ") || nameChange.includes(" dOs ") || nameChange.includes(" dOS ") || nameChange.includes(" doS ") || nameChange.includes(" DoS ") ) {
    e.target.value = nameChange.replace(/ dos /gi, " dos ")
  }

})
