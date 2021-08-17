import './style.css'

document.querySelector('[data-js="app"]').innerHTML = `
  <h1>B. Academy</h1>
  <p>Boas vindas à semana de pré-work para o Bootcamp em React.js 😁</p>
`

const content = document.querySelector('.app');
content.style.display = "block";

const link = document.querySelector('[data-js="link"]');
link.addEventListener("click", (e) => {
  e.preventDefault();
  if (content.style.display === "block") {
    console.log("sumiu");
    content.style.display = "none";
  } else {
    console.log("apareceu");
    content.style.display = "block";
  }
})

//também dá pra fazer com classList.toggle (não sei qual o "mais correto", mas com certeza é menor)

// link.addEventListener("click", (e) => {
//   e.preventDefault();
//   content.classList.toggle("app-hidden");
// })
