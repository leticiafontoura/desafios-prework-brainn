const carsForm = document.querySelector("[data-js='cars-form']");

const carTableInformation = document.querySelector("[data-js='table-body']");

carsForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const carImageInput = document.querySelector("[data-js='car-image']");
  const carImageValue = carImageInput.value;

  const carMakeModelInput = document.querySelector("[data-js='car-make-model']");
  const carMakeModelValue = carMakeModelInput.value;

  const carYearInput = document.querySelector("[data-js='car-year']");
  const carYearValue = carYearInput.value;

  const carLicensePlateInput = document.querySelector("[data-js='car-license-plate']");
  const carLicensePlateValue = carLicensePlateInput.value;

  const carColorInput = document.querySelector("[data-js='car-color']");
  const carColorValue = carColorInput.value;

  fetch("http://localhost:3333/cars", {
    method: "POST",
    body: JSON.stringify({
      image: carImageValue,
      brandModel: carMakeModelValue,
      year: carYearValue,
      plate: carLicensePlateValue,
      color: carColorValue
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  }).then(response => {
    fetch("http://localhost:3333/cars").then(response2 =>
      response2.json()).then(response2data => {
        console.log(response2data.length)
      for (let i = 0; i < response2data.length; i++) {
        carTableInformation.insertAdjacentHTML("beforebegin", `<tr>
     <td>${response2data[i].image}</td>
     <td>${response2data[i].brandModel}</td>
     <td>${response2data[i].year}</td>
     <td>${response2data[i].plate}</td>
     <td>${response2data[i].color}</td>
   </tr>`)
      }
    });
  })

  carImageInput.value = "";
  carMakeModelInput.value = "";
  carYearInput.value = "";
  carLicensePlateInput.value = "";
  carColorInput.value = "";

  carImageInput.focus();

})
