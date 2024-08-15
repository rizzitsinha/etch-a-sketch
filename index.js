const btn = document.querySelector("#btn")
const defaultColor = document.querySelector("#default-color");
const randomizedColor = document.querySelector("#randomized")
const darkenBox = document.querySelector("#darken")

// Creating and appending large container
const largeContainer = document.createElement("div");
largeContainer.classList.add("large-container");
document.body.appendChild(largeContainer);

// Event listener to create grid
btn.addEventListener(`click`, () => {

    // Prompting user for grid size
    let numberOfBoxes = Number(window.prompt("How many boxes do you wish for? (max: 100)", 16));
    
    // Limiting number of boxes to 100
    if(numberOfBoxes > 100){
        numberOfBoxes = 100;
    }
    else if(numberOfBoxes < 1){
        numberOfBoxes = 2;
    }
    
    let boxLen = 800 / numberOfBoxes;

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
            let percentage = 0;
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
                // Choosing stylus color
                if(defaultColor.checked){
                    gridBox.style.backgroundColor = "chocolate";
                }
                else if(randomizedColor.checked){
                gridBox.style.backgroundColor = selectRandomColor();
                }
                else if(darkenBox.checked){
                    gridBox.style.backgroundColor = `rgb(0 0 0 / ${percentage += 10}%)`
                }
            })
        }
    }
}

function selectRandomColor(){
    function randomNumber(){
        randomNum = Math.floor(Math.random() * 255);
        return randomNum;
    }
    let color = `rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()})`;

    return color;
}
