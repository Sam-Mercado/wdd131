const hamMenu = document.querySelector(".hamburguer");
const offScreenMenu = document.querySelector(".header-menu");

hamMenu.addEventListener("click", () => {
    hamMenu.classList.toggle("active");
    offScreenMenu.classList.toggle("active");
});


const year = document.querySelector("#year");
const lastModified = document.querySelector("#update");
const today = new Date();
year.innerHTML = ` <span class="highlight">${today.getFullYear()}</span>&copy; Samuel Mercado - Bolivia,Cochabamba`;




const lastModifiedDate = new Date(document.lastModified);
// Formats date to a readable string
const formattedDate = lastModifiedDate.toLocaleString(); 

lastModified.innerHTML = `Last Update: ${formattedDate}`;