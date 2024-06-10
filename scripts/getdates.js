

const year = document.querySelector("#year");
const lastModified = document.querySelector("#lastModified");

const today = new Date();
year.innerHTML = ` <span class="highlight">${today.getFullYear()}</span>&copy; Samuel Mercado - Bolivia,Cochabamba`;

const lastModifiedDate = new Date(document.lastModified);
// Formats date to a readable string
const formattedDate = lastModifiedDate.toLocaleString(); 

lastModified.innerHTML = `Last modified: ${formattedDate}`;