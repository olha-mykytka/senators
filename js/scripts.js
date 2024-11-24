import{ senators } from '../data/senators.js'

const photoPath = "https://www.govtrack.us/static/legislator-photos/"
const photoSize = "-100px.jpeg"


const myNavigation = document.querySelector('nav')
const myParent = document.querySelector('#allCards')


const btnAll = document.createElement('button')
btnAll.textContent = "All Senators"
btnAll.addEventListener('click', () => displayPeople(senators))



const btnWomen = document.createElement('button')
btnWomen.textContent = "Women"
btnWomen.addEventListener('click', () =>{
    const arrayFemale = senators.filter(person => person.gender === 'F')
    displayPeople(arrayFemale)
}) //end of button

// create a male people button with filter
const btnMen = document.createElement('button')
btnMen.textContent = "Men"
btnMen.addEventListener('click', () =>{
    const arrayMale = senators.filter(person => person.gender === 'M')
    displayPeople(arrayMale)
})

const btnDemocrat = document.createElement('button')
btnDemocrat.textContent = "Democrat"
btnDemocrat.addEventListener('click', () =>{
    const arrayDemocrat = senators.filter(person => person.party === 'D')
    displayPeople(arrayDemocrat)
})

const btnRepublican = document.createElement('button')
btnRepublican.textContent = "Republican"
btnRepublican.addEventListener('click', () =>{
    const arrayRepublican = senators.filter(person => person.party === 'R')
    displayPeople(arrayRepublican)
})



// add buttons to page
myNavigation.appendChild(btnAll)
myNavigation.appendChild(btnWomen)
myNavigation.appendChild(btnMen)
myNavigation.appendChild(btnDemocrat)
myNavigation.appendChild(btnRepublican)


// loop

function displayPeople (x) {
    myParent.innerHTML = ""
    x.forEach(person => {
        const myFigure = document.createElement('figure')
        if (person.party === "R") {
            myFigure.classList.add('republican');
        } else if (person.party === "D") {
            myFigure.classList.add('democrat');
        }

        const nameDiv = document.createElement('div');
        nameDiv.textContent = `${person.first_name} ${person.last_name}`;
        nameDiv.classList.add('name-div'); // Add a class for styling

        const myImage = document.createElement('img')
      
        const charNumber = person.govtrack_id;
        myImage.src=`https://www.govtrack.us/static/legislator-photos/${charNumber}.jpeg`
        myImage.alt = `${person.first_name} ${person.last_name}`
        const myCaption = document.createElement('figcaption');
        myCaption.textContent = `${person.party} from ${person.state}`;

        // Create a button for the phone
        const phoneButton = document.createElement('button');
        phoneButton.textContent = person.phone ? person.phone : "No Phone";
        phoneButton.classList.add('phone-button'); // Add a class for styling
        //assign gender class




        myFigure.appendChild(nameDiv); // Add the name div above the image
        myFigure.appendChild(myImage); // Add the image
        myFigure.appendChild(myCaption); // Add the caption
        myFigure.appendChild(phoneButton); // Add the phone button

        // Attach to HTML
        myParent.appendChild(myFigure);

    }//end of fat arrow
    )// end of the loop
} // end of function

// call the function

displayPeople(senators);
