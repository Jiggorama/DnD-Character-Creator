console.log('Yo Dawg')
//      GLOBAL VARIABLES
//---------------------------------------------------------

const mainPage = document.querySelector('.main')
let control = document.querySelector('#controls')
// Character
let character = {
  race: null,
  class: null,
  raceImage: '',
  classImage: '',
}
// Race objects
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
  image: 'https://www.worldanvil.com/uploads/images/f9736309ba86edb1e6d9b9855af60198.png',
}

// Class objects
let barbarian = {
  name: 'barbarian',
  image: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d0b96e36-f76d-4af4-9379-8c1ae2d5d5c8/d8syebp-afb4f57d-2bee-42f6-ab0b-611da6cbcf19.jpg/v1/fill/w_487,h_350,q_70,strp/barbarian_by_tamplierpainter_d8syebp-350t.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD05MjEiLCJwYXRoIjoiXC9mXC9kMGI5NmUzNi1mNzZkLTRhZjQtOTM3OS04YzFhZTJkNWQ1YzhcL2Q4c3llYnAtYWZiNGY1N2QtMmJlZS00MmY2LWFiMGItNjExZGE2Y2JjZjE5LmpwZyIsIndpZHRoIjoiPD0xMjgwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.TjHpIyq1Ejao7WIibrgkcUO4m6iOcbokeBMt8icfQeY',
}
let bard = {
  name: 'bard',
  image: 'https://sho.co.il/barak/DND/Zamar.jpg',
}
let cleric = {
  name: 'cleric',
  image: 'https://geekandsundry.com/wp-content/uploads/2017/05/Cleric2.jpg',
}
let druid = {
  name: 'druid',
  image: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c3852962-10a3-453e-8ec1-4eb12f39da31/d8fjxze-4a626530-c64d-4487-b32d-79677d19148f.jpg/v1/fill/w_900,h_675,q_75,strp/druid_by_erlanarya_d8fjxze-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD02NzUiLCJwYXRoIjoiXC9mXC9jMzg1Mjk2Mi0xMGEzLTQ1M2UtOGVjMS00ZWIxMmYzOWRhMzFcL2Q4Zmp4emUtNGE2MjY1MzAtYzY0ZC00NDg3LWIzMmQtNzk2NzdkMTkxNDhmLmpwZyIsIndpZHRoIjoiPD05MDAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.wiensB1LhyQls8gwKQRj6FeS7w0g_m5vxT11oNeDYZU',
}
let fighter = {
  name: 'fighter',
  image: 'https://vignette.wikia.nocookie.net/sleeplessinstarsong/images/1/1d/Human_Fighter.jpg/revision/latest?cb=20190123000052',
}
let monk = {
  name: 'monk',
  image: 'https://www.belloflostsouls.net/wp-content/uploads/2016/12/dnd-monk.jpg',
}
let paladin = {
  name: 'paladin',
  image: 'https://static1.squarespace.com/static/5840d403bebafba4c28d6c4f/5840dc4a46c3c4e5e4b2af36/5842119f893fc0f82bcf506a/1480725201499/paladin-wallpaper%5B1%5D.jpg?format=1500w',
}
let ranger = {
  name: 'ranger',
  image: 'https://6lhz4vrtni-flywheel.netdna-ssl.com/wp-content/uploads/2020/06/unnamed1-512x481.jpg',
}
let rogue = {
  name: 'rogue',
  image: 'https://i.pinimg.com/originals/85/d7/f5/85d7f5831c04af0c961346b992e04016.jpg',
}
let sorcerer = {
  name: 'sorcerer',
  image: 'https://static.wikia.nocookie.net/emerald-isles/images/1/1b/Dwarf_Sorcerer.jpg/revision/latest?cb=20181011175750',
}
let warlock = {
  name: 'warlock',
  image: 'https://i2.wp.com/nerdarchy.com/wp-content/uploads/2018/06/warlock-spell.jpg?fit=1200%2C826&ssl=1',
}
let wizard = {
  name: 'wizard',
  image: 'https://blizzardwatch.com/wp-content/uploads/2020/08/TashaIggwil.png',
}
// Arrays of objects
const classes = [barbarian, bard, cleric, druid, fighter, monk, paladin, ranger, rogue, sorcerer, warlock, wizard]
const races = [dragonborn, dwarf, elf, gnome, halfElf, halfOrc, halfling, human, tiefling]

//      USEFULL FUNCTIONS
//---------------------------------------------------------

// Clearing
let clearMain = () => {
  while (mainPage.lastChild) {
    mainPage.removeChild(mainPage.lastChild)
  }    
}
let clearModal = (parent) => {
   parent.removeChild(parent.lastChild)
}
// Highlight Divs
let highlight = (item) => {
  let images = document.querySelectorAll('img')
  images.forEach(element => {
    if (element.classList.contains('active')) {
      element.removeAttribute('class','active')
    }    
  })
  item.classList.add('active')
}
// Sound effects
let playSound = (x) => {
  let audio = document.getElementById(`${x}`)
  audio.play() 
}
let pause = (x) => {
  let audio = document.getElementById(`${x}`)
  audio.pause()
}
// Background music
control.addEventListener('click', () => {
  if (control.textContent == '>') {
    let audio = document.getElementById(`backgroundMusic`)
    audio.volume = 0.7
    audio.play()
    control.textContent = `||`
  } else {
    pause(`backgroundMusic`) 
    control.textContent = `>`
  }
})
// Tie final dispay images to user choices
let picRaceDisplay = () => {
  for (let i = 0; i < races.length; i++) {
   if (character.race == races[i].name) {
     character.raceImage = races[i].image
   }    
  }
}
let picClassDisplay = () => {
  for (let i = 0; i < classes.length; i++) {
   if (character.class == classes[i].name) {
     character.classImage = classes[i].image
   }    
  }
}
//  MAIN FUNCTIONS
//---------------------------------------------------------

// Opening Page
  let onLoad = () => {
  let home = document.createElement('div')
  character.race = null
  character.class = null
  home.className = ('home')
  mainPage.append(home)
  let begin = document.createElement('input')
  begin.setAttribute('type', 'submit')
  begin.setAttribute('value', 'Begin')
  home.append(begin)
  begin.addEventListener('click', (event) => {
    event.preventDefault()
    playSound(`jailDoor`)
    //function to call next section
    chooseRace()
    return
  })
}

// Choose Player Race
function chooseRace() {
  clearMain()
  //create instructions
  let instruct = document.createElement('h3')
  instruct.textContent = ('Click an Image to select your Race')
  mainPage.append(instruct)
  //Use for loop for unique options for each race
  for (let i = 0; i < races.length; i++) {
    //Create Divs for each race option
    let raceChoice = document.createElement('div')
    raceChoice.className = ('theRaces')
    mainPage.append(raceChoice)
    //Name element
    let raceName = document.createElement('h4')
    raceName.textContent = (races[i].name.toUpperCase())
    raceChoice.append(raceName)
    //image element
    let raceImage = document.createElement('img')
    raceImage.setAttribute('src', races[i].image)
    raceImage.className = ('theImages')
    raceImage.id =(races[i].name)
    raceChoice.append(raceImage)
    //image sets user input
    raceImage.addEventListener('click', () => {
      character.race = raceImage.id
      playSound(`arrowHit`)
      highlight(raceImage)
    })
    //info button element
    let infoButton = document.createElement('button')
    infoButton.setAttribute('id', races[i].name)
    infoButton.className = ('infoButton')
    infoButton.textContent = ('info')
    raceChoice.append(infoButton)
    //Populate modal with information from API
    infoButton.addEventListener('click', () => {
      playSound(`arrow`)
      let modal = document.querySelector('.modal')
      clearModal(modal)
      let info = document.createElement('p')
      //API access
      let accessApi1 = async () => {
        try {
          let res = await axios.get(`https://www.dnd5eapi.co/api/races/${infoButton.id}`)
          info.textContent = res.data.alignment
          modal.append(info)      
        } catch (error) {
          console.log(`Error: ${error}`);
        }
      }
      accessApi1()
      document.querySelector('.modalContainer').style.display = 'flex'
    })

  }
  //close Modal
  document.querySelector('.close').addEventListener('click', () => {
    playSound(`arrow`)
    document.querySelector('.modalContainer').style.display = 'none'
  })
  //Button to advance to next page
  let advance = document.createElement('input')
  advance.setAttribute('type', 'submit')
  advance.setAttribute('value', 'Now Choose your Class')
  advance.className = ('advance')
  mainPage.append(advance)
  //Button functionality
  advance.addEventListener('click', (event) => {
    event.preventDefault()
    if (character.race == null) {
      alert('PlEASE CHOOSE A RACE')
    } else {
      playSound(`jailDoor`)
      chooseClass()
    }
  })
}

//  Choose Player Class
let chooseClass = () => {
  clearMain()
  let instruct = document.createElement('h3')
  instruct.textContent = ('Click an Image to select your Class')
  mainPage.append(instruct)
  // Cycle through array of objects
  for (let i = 0; i < classes.length; i++) {
    let classChoice = document.createElement('div')
    classChoice.className = ('theClasses')
    mainPage.append(classChoice)
    //create headiing and images
    let className = document.createElement('h4')
    className.textContent = (classes[i].name.toUpperCase())
    classChoice.append(className)
    let classImage = document.createElement('img')
    classImage.setAttribute('src', classes[i].image)
    classImage.className = ('theImages')
    classImage.id = (classes[i].name)
    classChoice.append(classImage)
    //use image to select user class
    classImage.addEventListener('click', () => {
      character.class = classImage.id
      playSound(`arrowHit`)
      highlight(classImage)
    })
  }
  //Button to advance to next page
  let advance = document.createElement('input')
  advance.setAttribute('type', 'submit')
  advance.setAttribute('value', 'Preview Your Character')
  advance.className = ('advance')
  mainPage.append(advance)
  advance.addEventListener('click', (event) => {
    event.preventDefault()
    if (character.class == null) {
      alert('PlEASE CHOOSE A CLASS')
    } else {
      playSound(`jailDoor`)
      // function to call next section
      displayCharacter(character.class)
    }
  })
}

// Display results
let displayCharacter = (x) => {
  // Calling some useful functions
  clearMain()
  picRaceDisplay()
  picClassDisplay()
  let apiUrl = `https://www.dnd5eapi.co/api/classes/${x}`
  //Display a heading stating what was made
  let characterHeading = document.createElement('h3')
  characterHeading.className = ('characterHeading')
  characterHeading.textContent = (`YOU HAVE CREATED A ${character.race.toUpperCase()}, ${character.class.toUpperCase()}`)
  mainPage.append(characterHeading)
  //Create a div for the images and api query to style independently
  let characterDiv = document.createElement('div')
  characterDiv.className = 'characterDiv'
  mainPage.append(characterDiv)
  //add images
  let charRaceImg = document.createElement('img')
  charRaceImg.className = 'charRaceImg'
  charRaceImg.setAttribute('src', character.raceImage)
  characterDiv.append(charRaceImg)
  let charClassImg = document.createElement('img')
  charClassImg.className = 'charClassImg'
  charClassImg.setAttribute('src', character.classImage)
  characterDiv.append(charClassImg)
  let apiDiv = document.createElement('div')
  apiDiv.className = 'apiDiv'
  characterDiv.append(apiDiv)
  // API requests
  // one for proficiencies
  let accessApi2 = async () => {
    try {
      let res = await axios.get(apiUrl)
      let proficienciesList = document.createElement('ul')
      apiDiv.append(proficienciesList)
      proficienciesList.textContent = 'Proficiencies:'
      let proficiencies = res.data.proficiencies
      // let proficiencies = res.data.proficiency_choices[0].from
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
  //One for spells
  let accessApi3 = async () => {
    try {
      let res = await axios.get(`${apiUrl}/spells`)
      if (res.data.count > 0) {
        let spellsList = document.createElement('ul')
        apiDiv.append(spellsList)
        spellsList.textContent = 'Spells:'
        let spells = res.data.results
        for (let i = 0; i < 4; i++) {        
          let listItem = document.createElement('li')
          let randomIndex = Math.floor(Math.random() * spells.length)
            listItem.className = ('listItem')
            listItem.textContent = (spells[randomIndex].name)
            spellsList.append(listItem)         
        }
      }
    } catch (error) {
      console.log(`Error: ${error}`);
    }
  }
  accessApi2()
  accessApi3()
  //Button to start over again
  let advance = document.createElement('input')
        advance.setAttribute('type', 'submit')
        advance.setAttribute('value', 'Start Over')
  mainPage.append(advance)
  advance.className = ('advance')
  advance.addEventListener('click', (event) => {
    event.preventDefault()
    playSound(`jailDoor`)
    clearMain()
    onLoad()
  })
}
// Invoke App    
onLoad()