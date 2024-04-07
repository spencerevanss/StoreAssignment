import { store } from "../data/store.js";

// grab the HTML references
const myNav = document.querySelector('nav');
const myViewer = document.querySelector('#viewer'); 

// nav items
store.forEach(item => {
    console.log(item);
    const myButton = document.createElement('button');
    myButton.textContent = item.title;
    myButton.addEventListener('click', () => showItem(item));
    myNav.appendChild(myButton);
});

function showItem(item) {
    console.log(item);

    let itemSection = document.createElement("section");
    let itemDescription = document.createElement("ul");
    let itemPhoto = document.createElement("img");
    let itemPrice = document.createElement("p");
    let itemTitle = document.createElement("h2");
    let itemFeatures = document.createElement("p");

    itemTitle.textContent = `${item.title}`;
    itemPhoto.src = `images/${item.photo}`; 
    itemPhoto.alt = item.title;
    itemFeatures.textContent = `Features: ${item.features}`; 
    itemPrice.textContent = `Price: ${item.price}`;
    item.Description.forEach(desc => {
        let descriptionItem = document.createElement("li");
        descriptionItem.textContent = desc;
        itemDescription.appendChild(descriptionItem);
    });

    // assemble the card
    itemSection.appendChild(itemTitle);
    itemSection.appendChild(itemPhoto);
    itemSection.appendChild(itemFeatures);
    itemSection.appendChild(itemPrice);
    itemSection.appendChild(itemDescription);
    myViewer.innerHTML = '';
    myViewer.appendChild(itemSection);
}


