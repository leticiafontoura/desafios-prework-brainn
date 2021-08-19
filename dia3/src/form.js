const input = document.querySelector("[data-js='name']");

input.addEventListener("input", (e) => {

  // console.log("e.target.value", e.target.value);
  // e.target.value = "a".repeat(e.target.value.length);
  const nameChange = e.target.value;
  // if (nameChange.includes("DA ")) {
  //   e.target.value = nameChange.replace("DA ", "da ");
  // } else if (nameChange.includes("dA ")) {
  //   e.target.value = nameChange.replace("dA ", "da ");
  // }

  // nameChange.includes("DA ") ? e.target.value = nameChange.replace("DA ", "da ") : nameChange.includes("Da ") ? e.target.value = nameChange.replace("Da ", "da ") : nameChange.includes("dA ") ? e.target.value = nameChange.replace("dA ", "da ") : ""

  // const regex = /da|das|do|dos|de/gi;
  // console.log(nameChange.replace(regex, "da"))
  if (nameChange.includes(" DA ") || nameChange.includes(" Da ") || nameChange.includes(" dA ")) {
    e.target.value = nameChange.replace(/ da /gi, " da ")
  } else if (nameChange.includes(" DO ") || nameChange.includes(" Do ") || nameChange.includes(" dO ")) {
    e.target.value = nameChange.replace(/ do /gi, " do ")
  } else if (nameChange.includes(" DE ") || nameChange.includes(" De ") || nameChange.includes(" dE ")) {
    e.target.value = nameChange.replace(/ de /gi, " de ")
  } else if (nameChange.includes(" DOS ") || nameChange.includes(" Dos ") || nameChange.includes(" dOs ") || nameChange.includes(" dOS ") || nameChange.includes(" doS ")) {
    e.target.value = nameChange.replace(/ dos /gi, " dos ")
  }


  // e.target.value = nameChange.replace(/da /gi, "da ")
  // e.target.value = nameChange.replace(/da/gi, "da")
  // e.target.value = nameChange.replace(/da/gi, "da")
  // e.target.value = nameChange.replace(/da/gi, "da")
})
