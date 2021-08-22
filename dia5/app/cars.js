const carsForm = document.querySelector("[data-js='cars-form']");
const table = document.querySelector("table");

function refreshTable() {

  console.log("Refreshing table..");

  fetch("http://localhost:3333/cars")
    .then((response) => response.json())
    .then((cars) => {
       // If tbody already exists, we simply remove it, because we'll always create a new one.
       const existingTbody = document.querySelector("tbody");
       if (existingTbody) {
         existingTbody.remove();
       }
       
      if (cars.length === 0) {
        table.insertAdjacentHTML("beforeend", `<tbody><tr><td colspan="6">Nenhum carro cadastrado</td></tr></tbody>`)
        return;
      }



      const tbody = document.createElement("tbody");
      table.appendChild(tbody);
      for (let i = 0; i < cars.length; i++) {
        tbody.insertAdjacentHTML("beforeend", `<tr data-js='table-row'>
        <td>${cars[i].image}</td>
        <td>${cars[i].brandModel}</td>
        <td>${cars[i].year}</td>
        <td>${cars[i].plate}</td>
        <td>${cars[i].color}</td>
        <td><button data-js="del-btn">deletar</button></td>
        </tr>`)
      }

      const btn = document.querySelectorAll("[data-js='del-btn']")
      const btnArray = Array.from(btn);
      console.log(btnArray)

      for (let i = 0; i < btnArray.length; i++) {
        btnArray[i].addEventListener("click", () => {
          fetch(
            "http://localhost:3333/cars", {
              method: "delete",
              body: JSON.stringify({
                plate: cars[i].plate,
              }),
              headers: {
                "Content-type": "application/json; charset=UTF-8"
              },
            }
          ).then(() => {
            console.log(cars[i].plate)
            refreshTable()
          })})


      }

    })


}

refreshTable();

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
    }).then((response) => response.json())
    .then((response) => {
      const errorMessage = document.querySelector("[data-js='error-message']");
      errorMessage.innerHTML = response.message;
      if (response.error) {
        errorMessage.style.display = "block";
      } else {
        errorMessage.style.display = "none"
        refreshTable();
      }
    })

  carImageInput.value = "";
  carMakeModelInput.value = "";
  carYearInput.value = "";
  carLicensePlateInput.value = "";
  carColorInput.value = "";

  carImageInput.focus();

})


// button.addEventListener("click", (e) => {
//   e.deleteCar();
//   console.log("foi")
// })
