console.log('Yo Dawg')
//main page on load
  // create the main page with a function that runs on load
  // function will append the main html section with and Image and a button
  // button takes user input (click) to move on to the next section of the app


const mainPage = document.querySelector('.main')
const homePageImage = 'https://i.imgur.com/aQ7nfhC.jpg'
let onLoad = () => {
  let home = document.createElement('div')
  home.className = ('home')
  mainPage.append(home)
  let homeImage = document.createElement('img')
  homeImage.setAttribute('src', img1)
  home.append(homeImage)
  let begin = document.createElement('input')
  begin.setAttribute('type', 'submit')
  begin.setAttribute('value', 'Click to Create a Character')
  home.append(begin)
  begin.addEventListener('click', (event) => {
    event.preventDefault()
    //function to call next section
    chooseRace()
  })
}


//charecter
  //set a variable to charecter which will be an object
  // character will include a race and class
  // character = object
  //      race
  //      class
  // create an array of objects of races
  // create an array of classes
  // create an image bank for each class
let img1 = 'https://wotbsadventurepath.files.wordpress.com/2013/05/ragesian-castle.jpg'

// character
let character = {
  race: "elf",
  class: "cleric",
}
// race objects
let dragonborn = {
  name: 'dragonborn',
  image: 'url',
}
let dwarf = {
  name: 'dwarf',
  image: 'url',
}
let elf = {
  name: 'elf',
  image: 'url',
}
let gnome = {
  name: 'gnome',
  image: 'url',
}
let halfElf = {
  name: 'half-elf',
  image: 'url',
}
let halfOrc = {
  name: 'half-orc',
  image: 'url',
}
let halfling = {
  name: 'halfling',
  image: 'url',
}
let human = {
  name: 'human',
  image: 'url',
}
let tiefling = {
  name: 'tiefling',
  image: 'url',
}
const races = [dragonborn, dwarf, elf, gnome, halfElf, halfOrc, halfling, human, tiefling]
const classes = ['barbarian', 'bard', 'cleric', 'druid', 'fighter', 'monk', 'paladin', 'ranger', 'rogue', 'sorcerer', 'warlock', 'wizard']
const imageBank = []
  

// clear the main
  //function to append the main and remove child elements
  //function = clearMain


let clearMain = () => {
  while (mainPage.lastChild) {
    mainPage.removeChild(mainPage.lastChild)
  }    
}
  

// User selects a race
    // on mainpage button event
      // run clearMain function
    //in a function:
      // append main html to present all races as options
      // add event listeners for user to click to select a race, a checkmark works as well
      //create a button on the main html that advances to the next section
      // on click store the users race selection in the character object and advance to next section of app


let chooseRace = () => {
  clearMain()
  for (let i = 0; i < races.length; i++) {
    let raceChoice = document.createElement('div')
    raceChoice.className = ('theRaces')
    mainPage.append(raceChoice)
    let raceName = document.createElement('h4')
    raceName.textContent = (races[i].name.toUpperCase())
    raceChoice.append(raceName)
    let raceImage = document.createElement('img')
    raceImage.setAttribute('src', homePageImage)
    raceChoice.append(raceImage)
    
  }
  let advance = document.createElement('input')
  advance.setAttribute('type', 'submit')
  advance.setAttribute('value', 'Now Choose your Class')
  mainPage.append(advance)
  advance.addEventListener('click', (event) => {
    event.preventDefault()
    //function to call next section
    chooseClass()
  })
}


// user selects a class
   // on advance button event
      // run clearMain function
    //in a function:
      // append main html to present all classes as options
      // add event listeners for user to click to select a class, a checkmark works as well
      //create a button on the main html that advances to the next section
      // on click store the users class selection in the character object and advance to next section of app


      let chooseClass = () => {
        clearMain()
        for (let i = 0; i < classes.length; i++) {
          let classChoice = document.createElement('div')
          classChoice.className = ('theClasses')
          mainPage.append(classChoice)
          let className = document.createElement('h4')
          className.textContent = (classes[i].toUpperCase())
          classChoice.append(className)
          let classImage = document.createElement('img')
          classImage.setAttribute('src', homePageImage)
          classChoice.append(classImage)
        }
        let advance = document.createElement('input')
        advance.setAttribute('type', 'submit')
        advance.setAttribute('value', 'Preview Your Character')
        mainPage.append(advance)
        advance.addEventListener('click', (event) => {
          event.preventDefault()
          //function to call next section
          displayCharacter('cleric')
        })
      }


// display results
  // on advance button event
      // run clearMain function
  //in a function
    // append the main html to display the race and class chosen by the user as text at the top of the page below the heading
    // access the image bank for the corresponding class and append to the main to appear on the right
    // use character class to access Dnd API
      // dispay the classes proficiencies and attributes listed on the API appended to the main on the left of the image
    // Append main with a start over button
      // button when click will refresh page or invoke main page function


let displayCharacter = (x) => {
  clearMain()
  let apiUrl = `https://www.dnd5eapi.co/api/classes/${x}`
//Display text stating what was made
  let characterHeading = document.createElement('h3')
  characterHeading.textContent = (`A ${character.race}, ${character.class}`)
  mainPage.append(characterHeading)
//create a div for the img and api query
  let characterDiv = document.createElement('div')
  characterDiv.className = 'charecterDiv'
  mainPage.append(characterDiv)
  //add image
  let characterImage = document.createElement('img')
  characterImage.setAttribute('src', homePageImage)
  characterDiv.append(characterImage)
  //access api
  let accessApi1 = async () => {
    try {
      let res = await axios.get(apiUrl)
      console.log(res)
      
    } catch (error) {
      console.log(`Error: ${error}`);
    }
  }
  accessApi1()
}





      
onLoad()