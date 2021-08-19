const input = document.querySelector("[data-js='name']");

input.addEventListener("input", (e) => {

  function changeInputFormat() {
    let nameChange = e.target.value;
    let nameChangeArr = nameChange.split(" ");
    let newArrNames = [];

    for (let i = 0; i < nameChangeArr.length; i++) {
      newArrNames.push(nameChangeArr[i].charAt(0).toUpperCase() + nameChangeArr[i].slice(1));
    }

    for (let i = 0; i < newArrNames.length; i++) {
      if ((newArrNames[i].includes("Da") && newArrNames[i].length === 2) || (newArrNames[i].includes("DA") && newArrNames[i].length === 2)){
        newArrNames[i] = "da";
      }

      if ((newArrNames[i].includes("Do") && newArrNames[i].length === 2) || (newArrNames[i].includes("DO") && newArrNames[i].length === 2)){
        newArrNames[i] = "do";
      }

      if ((newArrNames[i].includes("De") && newArrNames[i].length === 2) || (newArrNames[i].includes("DE") && newArrNames[i].length === 2)){
        newArrNames[i] = "de";
      }

      if ((newArrNames[i].includes("DOS") && newArrNames[i].length === 3) || (newArrNames[i].includes("Dos") && newArrNames[i].length === 3) || (newArrNames[i].includes("DOs") && newArrNames[i].length === 3) || (newArrNames[i].includes("DoS") && newArrNames[i].length === 3)){
        newArrNames[i] = "dos";
      }
    }

    console.log(newArrNames);
    return nameChange = newArrNames.join(" ");

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
