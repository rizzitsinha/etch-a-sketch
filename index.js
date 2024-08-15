const btn = document.querySelector("#btn")

// Creating and appending large container
const largeContainer = document.createElement("div");
largeContainer.classList.add("large-container");
document.body.appendChild(largeContainer);

// Event listener to create grid
btn.addEventListener(`click`, () => {

    // Prompting user for grid size
    let numberOfBoxes = Number(window.prompt("How many boxes do you wish for? (max: 100)", 16));
    let boxLen = 800 / numberOfBoxes;

    // Limiting number of boxes to 100
    if(numberOfBoxes > 100){
        numberOfBoxes = 100;
    }
    else if(numberOfBoxes < 1){
        numberOfBoxes = 1;
    }

    createContainer(boxLen, numberOfBoxes);
})

// Function to create grid
function createContainer(boxLen, numberOfBoxes) {

    // Looping to remove previous grid
    while(largeContainer.firstChild){
        largeContainer.removeChild(largeContainer.lastElementChild);
    }
    
    // Setting attributes for the large container
    largeContainer.setAttribute(`style`, `display: flex; flex-direction: column; align-items: center`)
    
    // Creating and appending 16 containers to the large-container
    for(let i = 0; i < numberOfBoxes; i++){
        const container = document.createElement("div");
        container.classList.add("container")
        largeContainer.appendChild(container);
    
        // Setting attributes for the container
        container.setAttribute(`style`, `display: flex`)
        
        // Creating and appending 16 grid boxed to each container
        for (let i = 0; i < numberOfBoxes; i++) {
            const gridBox = document.createElement("div");
            gridBox.classList.add("grid-box");
            container.appendChild(gridBox);
    
            // Setting attributrs for grid boxes
            gridBox.setAttribute(`style`, `height: ${boxLen}px; width: ${boxLen}px; background-color: bisque; border: black 1px solid`)
    
            // Adding hover effect
            gridBox.addEventListener(`mouseover`, () => {
                gridBox.style.backgroundColor = "burlywood";
            })
            gridBox.addEventListener(`mouseout`, () => {
                gridBox.style.backgroundColor = "chocolate";
            })
        }
    }
}

