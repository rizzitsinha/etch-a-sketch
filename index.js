// Creating and appending large container
const largeContainer = document.createElement("div");
largeContainer.classList.add("large-container");
document.body.appendChild(largeContainer);

// Setting attributes for the large container
largeContainer.setAttribute(`style`, `display: flex; flex-direction: column; align-items: center`)

// Creating and appending 16 containers to the large-container
for(let i = 0; i < 16; i++){
    const container = document.createElement("div");
    container.classList.add("container")
    largeContainer.appendChild(container);
    console.log("appended container!")

    // Setting attributes for the container
    container.setAttribute(`style`, `display: flex`)
    
    // Creating and appending 16 grid boxed to each container
    for (let i = 0; i < 16; i++) {
        const gridBox = document.createElement("div");
        gridBox.classList.add("grid-box");
        container.appendChild(gridBox);
        console.log("appended box")

        // Setting attributrs for grid boxes
        gridBox.setAttribute(`style`, `height: 50px; width: 50px; background-color: bisque; border: black 1px solid`)

        // Adding hover effect
        gridBox.addEventListener(`mouseover`, () => {
            gridBox.style.backgroundColor = "burlywood";
        })
        gridBox.addEventListener(`mouseout`, () => {
            gridBox.style.backgroundColor = "chocolate";
        })
    }
}


