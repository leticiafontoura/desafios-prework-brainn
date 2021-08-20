const carsForm = document.querySelector("[data-js='cars-form']");

const carTableInformation = document.querySelector("[data-js='table-body']");


carsForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const carImageInput = document.querySelector("[data-js='car-image']");
  const carRow = document.createElement("tr");
  carTableInformation.appendChild(carRow);
  const carImageElement = carImageInput.value;
  const carImageCell = document.createElement("td");
  carImageCell.innerHTML = carImageElement;
  carRow.appendChild(carImageCell);

  const carMakeModelInput = document.querySelector("[data-js='car-make-model']");
  carTableInformation.appendChild(carRow);
  const carMakeModelElement = carMakeModelInput.value;
  const carMakeModelCell = document.createElement("td");
  carMakeModelCell.innerHTML = carMakeModelElement;
  carRow.appendChild(carMakeModelCell);

  const carYearInput = document.querySelector("[data-js='car-year']");
  carTableInformation.appendChild(carRow);
  const carYearElement = carYearInput.value;
  const carYearCell = document.createElement("td");
  carYearCell.innerHTML = carYearElement;
  carRow.appendChild(carYearCell);

  const carLicensePlateInput = document.querySelector("[data-js='car-license-plate']");
  carTableInformation.appendChild(carRow);
  const carLicensePlateElement = carLicensePlateInput.value;
  const carLicensePlateCell = document.createElement("td");
  carLicensePlateCell.innerHTML = carLicensePlateElement;
  carRow.appendChild(carLicensePlateCell);

  const carColorInput = document.querySelector("[data-js='car-color']");
  carTableInformation.appendChild(carRow);
  const carColorElement = carColorInput.value;
  const carColorCell = document.createElement("td");
  carColorCell.innerHTML = carColorElement;
  carRow.appendChild(carColorCell);

  carImageInput.value = "";
  carMakeModelInput.value = "";
  carYearInput.value = "";
  carLicensePlateInput.value = "";
  carColorInput.value = "";

  carImageInput.focus();

})
