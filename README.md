# Project Overview

## Project Name

DnD-Character-Creator

## Project Description

A simple application that allows a user to create a charecter for the famous role-playing game Dungeons and Dragons.  The user will select a race followed by a class and then see a preview of the charecter they have created with relevent attributes and abilities

## API and Data Sample

https://www.dnd5eapi.co/api/
```JSON
{
    "ability-scores": "/api/ability-scores",
    "classes": "/api/classes",
    "conditions": "/api/conditions",
    "damage-types": "/api/damage-types",
    "equipment-categories": "/api/equipment-categories",
    "equipment": "/api/equipment",
    "features": "/api/features",
    "languages": "/api/languages",
    "magic-items": "/api/magic-items",
    "magic-schools": "/api/magic-schools",
    "monsters": "/api/monsters",
    "proficiencies": "/api/proficiencies",
    "races": "/api/races",
    "rules": "/api/rules",
    "rule-sections": "/api/rule-sections",
    "skills": "/api/skills",
    "spellcasting": "/api/spellcasting",
    "spells": "/api/spells",
    "starting-equipment": "/api/starting-equipment",
    "subclasses": "/api/subclasses",
    "subraces": "/api/subraces",
    "traits": "/api/traits",
    "weapon-properties": "/api/weapon-properties"
}
```

## Wireframes

- Desktop: https://wireframe.cc/etRTKu
- Mobile: https://wireframe.cc/IgCrit

### MVP/PostMVP

#### MVP 

- Prompt user to start a charecter creation 
- Allow the user to select a race and class
- Display the result of those choices on the Final page with information from the DnD API
- Display an image that reflects the choices of the user
- Allow for the user to start over again
- styling with css

#### PostMVP  

- Allow user to choose gender
- Use local storage to save user favorites
- access a second api for images
- advanced css styling

## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|Nov 9| Prompt / Wireframes / Priority Matrix / Timeframes | Complete
|Nov 10| Project Approval/Core Application Structure (HTML, CSS, etc.) | Complete
|Nov 12| Pseudocode / actual code / source images | Complete
|Nov 13| MVP | Complete
|Nov 16| PMVP / Polishing | Partial
|Nov 17| Presentations | Incomplete

## Priority Matrix

https://docs.google.com/drawings/d/1iO6J0560OiZ5ouG5mNHcnIAdojgH88kRoLnKAvmlL8g/edit?usp=sharing

## Timeframes

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Set up html homepage| H | 2hrs| 1.5 | 1.5|
|Code homepage javascript| H | 3hrs| 2 | 3.5 |
|Javascript for races| H | 3hrs| 4 | 7.5 |
|Manip Dom for choosing Race| H | 3hrs| 4 | 11.5 |
|Javascrpit for Classes| H | 3hrs| 2 | 13.5 |
|Manip Dom for choosing class| H | 3hrs| 3 | 16.5 |
|Working with API| H | 3hrs| 2 | 18.5 |
|Display API info| H | 3hrs| 3 | 21.5 |
|Styling Divs CSS| H | 3hrs| 4 | 25.5 |
|Styling Images CSS| H | 3hrs| 4| 29.5 |
| Extra hours javascripting | H | 3hrs| 4 | 33.5 |
| Finding Images | H | 3hrs| 4.5 | 38 |
| Attaching Images to user input | H | 3hrs| 3 | 41 |
| Advanced CSS | L | 3hrs| 4 | 45 |
| Total | H | 41hrs| 45hrs | 45hrs |

## Code Snippet

I use some modals to display alignment information from my API for for each of the different races. They are activated by clicking the info buttons which polulates the modal.  The information in the modal is unique for each race and is cleared upon close.

```
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
          info.textContent = res.data.alignment
          modal.append(info)      
        } catch (error) {
          console.log(`Error: ${error}`);
        }
      }
      accessApi2()
      document.querySelector('.modalContainer').style.display = 'flex'
    })
```

## Change Log
- Original plan was to incorporate character attributes on the display page.  I thought spells would be a little more interesting so I swapped the two. Future updates should include attributes.
- Used two images instead of one in order to save on space and having to source an additional 100 images for each race/class combination.

