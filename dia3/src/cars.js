const carsForm = document.querySelector("[data-js='cars-form']");

const carTableInformation = document.querySelector("[data-js='table-body']");

carsForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const carImageInput = document.querySelector("[data-js='car-image']");
  const carRow = document.createElement("tr");
  carTableInformation.appendChild(carRow);
  const carImageValue = carImageInput.value;
  const carImageCell = document.createElement("td");
  carImageCell.innerHTML = carImageValue;
  carRow.appendChild(carImageCell);

  const carMakeModelInput = document.querySelector("[data-js='car-make-model']");
  carTableInformation.appendChild(carRow);
  const carMakeModelValue = carMakeModelInput.value;
  const carMakeModelCell = document.createElement("td");
  carMakeModelCell.innerHTML = carMakeModelValue;
  carRow.appendChild(carMakeModelCell);

  const carYearInput = document.querySelector("[data-js='car-year']");
  carTableInformation.appendChild(carRow);
  const carYearValue = carYearInput.value;
  const carYearCell = document.createElement("td");
  carYearCell.innerHTML = carYearValue;
  carRow.appendChild(carYearCell);

  const carLicensePlateInput = document.querySelector("[data-js='car-license-plate']");
  carTableInformation.appendChild(carRow);
  const carLicensePlateValue = carLicensePlateInput.value;
  const carLicensePlateCell = document.createElement("td");
  carLicensePlateCell.innerHTML = carLicensePlateValue;
  carRow.appendChild(carLicensePlateCell);

  const carColorInput = document.querySelector("[data-js='car-color']");
  carTableInformation.appendChild(carRow);
  const carColorValue = carColorInput.value;
  const carColorCell = document.createElement("td");
  carColorCell.innerHTML = carColorValue;
  carRow.appendChild(carColorCell);

  carImageInput.value = "";
  carMakeModelInput.value = "";
  carYearInput.value = "";
  carLicensePlateInput.value = "";
  carColorInput.value = "";

  carImageInput.focus();

})
