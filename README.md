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
|Nov 9| Prompt / Wireframes / Priority Matrix / Timeframes | Incomplete
|Nov 10| Project Approval/Core Application Structure (HTML, CSS, etc.) | Incomplete
|Nov 12| Pseudocode / actual code / source images | Incomplete
|Nov 13| MVP | Incomplete
|Nov 16| PMVP / Polishing | Incomplete
|Nov 17| Presentations | Incomplete

## Priority Matrix

https://docs.google.com/drawings/d/1iO6J0560OiZ5ouG5mNHcnIAdojgH88kRoLnKAvmlL8g/edit?usp=sharing

## Timeframes

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Set up html homepage| H | 2hrs| 1 | -- |
|Code homepage javascript| H | 3hrs| 2 | -- |
|Javascript for races| H | 3hrs| 1hrs | 4 |
|Manip Dom for choosing Race| H | 3hrs| 3 | -- |
|Javascrpit for Classes| H | 3hrs| -- | 2 |
|Manip Dom for choosing class| H | 3hrs| 2 | -- |
|Working with API| H | 3hrs| 2 | -- |
|Display API info| H | 3hrs| 2 | -- |
|Styling Divs CSS| H | 3hrs| 4 | -- |
|Styling Images CSS| H | 3hrs| 4| -- |
| Extra hours javascripting | H | 3hrs| -2 | -- |
| Finding Images | H | 3hrs| 6 | -- |
| Attaching Images to user input | H | 3hrs| 3 | -- |
| Advanced CSS | L | 3hrs| 4 | -- |
| Total | H | 41hrs| -- | -- |

## Code Snippet

I use some modals to display alignment information from my API for for each of the different race. They are activated by clicking the info buttons which polulates the modal.  The information in the modal is unique for each race and is cleared upon close.

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
 Use this section to document what changes were made and the reasoning behind those changes.  
