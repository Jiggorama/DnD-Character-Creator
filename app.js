console.log('Yo Dawg')
//main page on load
  // create the main page with a function that runs on load
  // function will append the main html section with and Image and a button
  // button takes user input (click) to move on to the next section of the app
// scroll background https://www.desktopbackground.org/download/1024x600/2013/12/11/683741_20-best-photos-of-scroll-backgrounds-template-blank-scroll-paper_1024x768_h.jpg

const mainPage = document.querySelector('.main')
const homePageImage = 'https://i.imgur.com/aQ7nfhC.jpg'
let onLoad = () => {
  let home = document.createElement('div')
  home.className = ('home')
  mainPage.append(home)
  // --image seems superfluous--
  // let homeImage = document.createElement('img')
  // homeImage.setAttribute('src', img1)
  // home.append(homeImage)
  let begin = document.createElement('input')
  begin.setAttribute('type', 'submit')
  begin.setAttribute('value', 'Begin')
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
  race: "human",
  class: 'fighter',
}
// race objects
let dragonborn = {
  name: 'dragonborn',
  image: 'https://i.pinimg.com/200x150/07/b2/db/07b2db8ddb667073da31a5f9d8add32b.jpg',
}
let dwarf = {
  name: 'dwarf',
  image: 'https://modernmaleficarum.files.wordpress.com/2015/08/1382893274618.jpg',
}
let elf = {
  name: 'elf',
  image: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/34d511d1-98d4-456c-b726-9f62e4ac38f5/d45lit4-44434b38-7592-410e-8ea9-1cc03d242c96.jpg/v1/fill/w_771,h_554,q_75,strp/high_elf_female_avatar_by_graysun_d_d45lit4-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD01NTQiLCJwYXRoIjoiXC9mXC8zNGQ1MTFkMS05OGQ0LTQ1NmMtYjcyNi05ZjYyZTRhYzM4ZjVcL2Q0NWxpdDQtNDQ0MzRiMzgtNzU5Mi00MTBlLThlYTktMWNjMDNkMjQyYzk2LmpwZyIsIndpZHRoIjoiPD03NzEifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.s6AI2k6NO6gWW2STpZzknXCe7Hg60ceaBkmSjL2xBPM',
}
let gnome = {
  name: 'gnome',
  image: 'https://static.wixstatic.com/media/619502_42abf1d00cc1464ea72686f9711b51b4~mv2.jpg/v1/fill/w_450,h_349,al_c,q_90/619502_42abf1d00cc1464ea72686f9711b51b4~mv2.jpg',
}
let halfElf = {
  name: 'half-elf',
  image: 'https://i.pinimg.com/originals/33/2e/76/332e76c81688a62f25f71426b2e30def.jpg',
}
let halfOrc = {
  name: 'half-orc',
  image: 'https://i.pinimg.com/originals/3f/5f/7a/3f5f7a884ee93b9486bf828fd27fe1d6.jpg',
}
let halfling = {
  name: 'halfling',
  image: 'https://db4sgowjqfwig.cloudfront.net/campaigns/203204/assets/905836/aleksander-karcz-halfling-bounder-aleksander-karcz.jpg?1538518193',
}
let human = {
  name: 'human',
  image: 'https://ga-core.s3.amazonaws.com/production/uploads/instructor/image/18780/2uzxc85.jpg',
}
let tiefling = {
  name: 'tiefling',
  image: 'https://a3fcd471-a-62cb3a1a-s-sites.googlegroups.com/site/heroesoflegendalpha/Navigation/Table-of-Contents/Character-Races/tiefling/Tiefling.png?attachauth=ANoY7cr5AkRFWggGWPJosi4RQyvA0NJvoY2m70Zx_8amxf5JjP1fSH56V4vf35jli3Le6nsIfzbD8aqSeIUwJgnaV3pD1JFhBAdYNYeDCZCvYc2HWrMDJkG5hTNUKtxJqjYwdO7XeiwNM42DQrZZB0Ddek_oJwnTNs8q9cgahp7erx4WdkLfsdfThguB21UuWLBTNfsvfBsXHYVfor7P4Z_Zim1vI2bDSjzLTy6-Gdi0WuvW71jPSLyzWfnTZaQaLgUVGMUECPjxwZfa3itjQ-6jZpDSVo9YZ-wh7Xm0fKvXrulTN9E6axo%3D&attredirects=0',
}
// array of objects
const races = [dragonborn, dwarf, elf, gnome, halfElf, halfOrc, halfling, human, tiefling]

// Class objects
let barbarian = {
  name: 'barbarian',
  image: 'url',
}
let bard = {
  name: 'bard',
  image: 'url',
}
let cleric = {
  name: 'cleric',
  image: 'url',
}
let druid = {
  name: 'druid',
  image: 'url',
}
let fighter = {
  name: 'fighter',
  image: 'url',
}
let monk = {
  name: 'monk',
  image: 'url',
}
let paladin = {
  name: 'paladin',
  image: 'url',
}
let ranger = {
  name: 'ranger',
  image: 'url',
}
let rogue = {
  name: 'rogue',
  image: 'url',
}
let sorcerer = {
  name: 'sorcerer',
  image: 'url',
}
let warlock = {
  name: 'warlock',
  image: 'url',
}
let wizard = {
  name: 'wizard',
  image: 'url',
}
//array of objects
const classes = [barbarian, bard, cleric, druid, fighter, monk, paladin, ranger, rogue, sorcerer, warlock, wizard]
// const imageBank = []
  

// clear the main and other useful functions
  //function to append the main and remove child elements
  //function = clearMain


let clearMain = () => {
  while (mainPage.lastChild) {
    mainPage.removeChild(mainPage.lastChild)
  }    
}
let clearModal = (parent) => {
   parent.removeChild(parent.lastChild)
}

let highlight = (item) => {
  let images = document.querySelectorAll('img')
  console.log(images);
  images.forEach(element => {
    if (element.classList.contains('active')) {
      element.removeAttribute('class','active')
    }    
  })
  item.classList.add('active')
}

// User selects a race
    // on mainpage button event
      // run clearMain function
    //in a function:
      // append main html to present all races as options
      // add event listeners for user to click to select a race, a checkmark works as well
      //create a button on the main html that advances to the next section
      // on click store the users race selection in the character object and advance to next section of app


function chooseRace() {
  clearMain()
  for (let i = 0; i < races.length; i++) {
    let raceChoice = document.createElement('div')
    raceChoice.className = ('theRaces')
    mainPage.append(raceChoice)
    let raceName = document.createElement('h4')
    raceName.textContent = (races[i].name.toUpperCase())
    raceChoice.append(raceName)
    let raceImage = document.createElement('img')
    raceImage.setAttribute('src', races[i].image)
    raceImage.className = ('theImages')
    raceImage.id =(races[i].name)
    raceChoice.append(raceImage)
    raceImage.addEventListener('click', () => {
      character.race = raceImage.id
      console.log(character.race)
      highlight(raceImage)
    })
    let infoButton = document.createElement('button')
    infoButton.setAttribute('id', races[i].name)
    infoButton.className = ('infoButton')
    infoButton.textContent = ('info')
    raceChoice.append(infoButton)
    infoButton.addEventListener('click', () => {
      let modal = document.querySelector('.modal')
      clearModal(modal)
      let info = document.createElement('p')
      let accessApi2 = async () => {
        try {
          let res = await axios.get(`https://www.dnd5eapi.co/api/races/${infoButton.id}`)
          // console.log(res.data.alignment)
          info.textContent = res.data.alignment
          modal.append(info)
      
        } catch (error) {
          console.log(`Error: ${error}`);
        }
      }
      accessApi2()
      document.querySelector('.modalContainer').style.display = 'flex'
    })

  }
  document.querySelector('.close').addEventListener('click', () => {
    document.querySelector('.modalContainer').style.display = 'none'
  })
  let advance = document.createElement('input')
  advance.setAttribute('type', 'submit')
  advance.setAttribute('value', 'Now Choose your Class')
  advance.className = ('advance')
  mainPage.append(advance)
  advance.addEventListener('click', (event) => {
    event.preventDefault()
    // if (character.race == null) {
    //   alert('PlEASE CHOOSE A RACE')
    // } else {
      //function to call next section
      chooseClass()
    // }
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
          className.textContent = (classes[i].name.toUpperCase())
          classChoice.append(className)
          let classImage = document.createElement('img')
          classImage.setAttribute('src', homePageImage)
          classImage.className = ('theImages')
          classImage.id = (classes[i].name)
          classChoice.append(classImage)
          classImage.addEventListener('click', () => {
          character.class = classImage.id
          // console.log(character.class);
            highlight(classImage)
          })
        }
        let advance = document.createElement('input')
        advance.setAttribute('type', 'submit')
        advance.setAttribute('value', 'Preview Your Character')
        advance.className = ('advance')
        mainPage.append(advance)
        advance.addEventListener('click', (event) => {
          event.preventDefault()
          // if (character.class == null) {
          //   alert('PlEASE CHOOSE A CLASS')
          // } else {
          //function to call next section
          displayCharacter(character.class)
          // }
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
  characterHeading.className = ('characterHeading')
  characterHeading.textContent = (`YOU HAVE CREATED A ${character.race.toUpperCase()}, ${character.class.toUpperCase()}`)
  mainPage.append(characterHeading)
//create a div for the img and api query
  let characterDiv = document.createElement('div')
  characterDiv.className = 'characterDiv'
  mainPage.append(characterDiv)
  //add image
  let characterImage = document.createElement('img')
  characterImage.setAttribute('src', homePageImage)
  characterDiv.append(characterImage)

  //access api
  let accessApi1 = async () => {
    try {
      let res = await axios.get(apiUrl)
      // console.log(res.data)
      let apiDiv = document.createElement('div')
      apiDiv.className = 'apiDiv'
      characterDiv.append(apiDiv)
      let proficienciesList = document.createElement('ul')
      apiDiv.append(proficienciesList)
      proficienciesList.textContent = 'Proficiencies:'
      let proficiencies = res.data.proficiencies
      // console.log(proficiencies)
      proficiencies.forEach(element => {
        let listItem = document.createElement('li')
        listItem.className = ('listItem')
        listItem.textContent = (element.name)
        proficienciesList.append(listItem)
      });
      
    } catch (error) {
      console.log(`Error: ${error}`);
    }
  }
  accessApi1()
  let advance = document.createElement('input')
        advance.setAttribute('type', 'submit')
        advance.setAttribute('value', 'Start Over')
  mainPage.append(advance)
  advance.className = ('advance')
  advance.addEventListener('click', (event) => {
    event.preventDefault()
    clearMain()
    onLoad()
  })
}





      
onLoad()