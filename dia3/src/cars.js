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

  const itemsObj = {
    carImage: carImageValue,
    carMakeModel: carMakeModelValue,
    carYear: carYearValue,
    carLicensePlate: carLicensePlateValue,
    carColor: carColorValue
  }

  function renderTable(items) {
    carTableInformation.insertAdjacentHTML("beforebegin", `<tr>
    <td>${items.carImage}</td>
    <td>${items.carMakeModel}</td>
    <td>${items.carYear}</td>
    <td>${items.carLicensePlate}</td>
    <td>${items.carColor}</td>
  </tr>`)
  }

  renderTable(itemsObj);

  carImageInput.value = "";
  carMakeModelInput.value = "";
  carYearInput.value = "";
  carLicensePlateInput.value = "";
  carColorInput.value = "";

  carImageInput.focus();

})
