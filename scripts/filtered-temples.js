const hamMenu = document.querySelector(".hamburguer");
const offScreenMenu = document.querySelector(".off-screen-menu");

hamMenu.addEventListener("click", () => {
    hamMenu.classList.toggle("active");
    offScreenMenu.classList.toggle("active");
});

//   const templeDictionary = document.querySelector("#main");

const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Cochabamba Bolivia Temple",
        location: "Cochabamba, Bolivia",
        dedicated: "2000, April, 30",
        area: 35500,
        imageUrl: "https://newsroom.churchofjesuschrist.org/media/960x540/Cochabamba-Bolivia-Temple.jpg"
    },
    {
        templeName: "Adelaide Australia Temple",
        location: "Adelaide, Australia",
        dedicated: "2000, June, 15",
        area: 10700,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/adelaide-australia/800x500/adelaide-australia-temple-lds-675332-wallpaper.jpg"
    },
    {
        templeName: "Baton Rouge Louisiana Temple",
        location: "Louisiana",
        dedicated: "2000, July, 16",
        area: 10890,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/baton-rouge-louisiana/800x500/1-ea20b19384c9f98d17ef56b627c79c3a75f62cb3.jpeg"
    }
];

displayTemples(temples);


function displayTemples(t) {
  t.forEach(temple => {
      
      let card = document.createElement("section");
      let name = document.createElement("h2");
      let templeLocation = document.createElement("p");
      let templeDedicated = document.createElement("p");
      let templeArea = document.createElement("p");
      let templeImage = document.createElement("img");

      name.textContent = temple.templeName;
      templeLocation.innerHTML = `<span class="label">Location: </span> ${temple.location}`;
      templeDedicated.innerHTML = `<span clas="label">Dedicated: </span> ${temple.dedicated}`;
      templeArea.innerHTML = `<span class"label">Area:</span> ${temple.area}`;
      templeImage.setAttribute("src", temple.imageUrl);
      templeImage.setAttribute("alt", `${temple.templeName} Temple`);
      templeImage.setAttribute("loading", "lazy");

      card.appendChild(name);
      card.appendChild(templeLocation);
      card.appendChild(templeDedicated);
      card.appendChild(templeArea);
      card.appendChild(templeImage);
      

      document.querySelector(".res-div").appendChild(card);
  });
};


function filterTemples(t) {
 document.querySelector(".res-div").innerHTML = "";
  temples.forEach(temple => {
      let card = document.createElement("section");
      let name = document.createElement("h2");
      let templeLocation = document.createElement("p");
      let templeDedicated = document.createElement("p");
      let templeArea = document.createElement("p");
      let templeImage = document.createElement("img");

      name.textContent = temple.templeName;
      templeLocation.innerHTML = `<span class="label">Location: </span> ${temple.location}`;
      templeDedicated.innerHTML = `<span clas="label">Dedicated: </span> ${temple.dedicated}`;
      templeArea.innerHTML = `<span class"label">Area:</span> ${temple.area}`;
      templeImage.setAttribute("src", temple.imageUrl);
      templeImage.setAttribute("alt", `${temple.templeName} Temple`);
      templeImage.setAttribute("loading", "lazy");

      card.appendChild(name);
      card.appendChild(templeLocation);
      card.appendChild(templeDedicated);
      card.appendChild(templeArea);
      card.appendChild(templeImage);
      

      document.querySelector(".res-div").appendChild(card);
  });
};

const noUtah = document.querySelector("#nonUtah");
const noNigeria = document.querySelector("#noNigeria");
const mexico = document.querySelector("#mexico");

noUtah.addEventListener("click",() => {
filterTemples(temple=>!temple.location.includes("Utah"));
});

noNigeria.addEventListener("click",() => {
filterTemples(temple=>!temple.location.includes("Nigeria"));
});

mexico.addEventListener("click",() => {
filterTemples(temple=>temple.location.includes("Mexico"));
});
