# Qwixx Score Card

Digital score card for Qwixx game.

## Project Status

- Working on [Slice 3](#slice-3-add-total--track-state).

## Components

### 1-4. Score Rows

- Each score row is a form with:
  - checkbox inputs for numbers 2-12
  - lock button (type="submit")
    - disable on page load
    - enable when user checks 5+ checkboxes in row
    - on click: (1) disables checkboxes in row, (2) notifies user row is locked, (3) renders an unlock button
  - unlock button (type="button")
    - on click: (1) enable checkboxes in row, (2) remove row lock notification, (3) hide unlock button

### 5. Penalties

- 4 checkbox inputs to track penalty tallies
  - with each tally, add -5 to penaltyTotal

### 6. Totals

- show active totals for each row
- penaltyTotal (tally \* 5):
  - show penalties total (negative number)
- show current game total (row totals - penaltyTotal)

### 7. End Game

- game ends when: (1) penaltyTotal equals -20, or (2) two rows have been locked

## DOM Tree Planning

### Main

```
<main>
    <section#scoreRows>
        <form#scoreRow1.scoreRow/>
        <form#scoreRow2.scoreRow/>
        <form#scoreRow3.scoreRow/>
        <form#scoreRow4.scoreRow/>
    </section>
    <section#penalties/>
    <section#totals/>
    <section#endGame/>
</main>
```

### Section: Score Rows

```
<form#scoreRow1.scoreRow>
    <fieldset#rowOneFieldset>
        <legend#rowOneLegend>Row One</legend>
        <div.control>
            <label for="rowOneBox2">2</label>
            <input type="checkbox" name="rowOneBox2" id="rowOneBox2" value="2" class="rowOneBox/>
        </div>
        <div.control>
            <label for="rowOneBox3">3</label>
            <input type="checkbox" name="rowOneBox3" id="rowOneBox3"/>
        </div>
        <!-- insert 9 more div.controls -->
    </fieldset>
    <button type="submit" id="rowOneLockBtn" aria-label="Row One Lock Button" disabled>&#128274;</button>
    <button type="button" id="rowOneUnlockBtn">Unlock Row</button>
</form>
```

## Tasks

### Slice 1: Row Components

- [x] initial form planning in html
- [x] create form data as an array of objects
- [x] render form elements for each score row
  - [x] begin doBuildScoreRows(), which makes a call to render form elements
  - [x] add event listener on page load that makes a call to doBuildScoreRows() and passes in number of rows
  - [x] build form container and render
  - [x] build fieldset, append to form
  - [x] build button, append to form
  - [x] build legend, append to fieldset
  - [x] build div containers for checkboxes, append to fieldset
  - [x] build checkbox inputs and labels, append to div

### Slice 2: Events for Score Row

- [x] build event listener that listens for changes by score row
- [x] get checked checkbox count by row
- [x] handle lock button, disabled on page load
  - [x] enable lock button when 5+ checkboxes in row have been checked
  - [x] lock button click events:
    - [x] disable checkboxes in row
    - [x] notify user row is locked
    - [x] render unlock button
  - [x] on unlock button click:
    - [x] enable checkboxes in row
    - [x] remove row lock notification
    - [x] hide unlock button
  - [] lock row if last checkbox has been selected
- [x] handle checkbox checks by row
  - [x] get min and max checked checkbox index
  - [x] when user checks a checkbox, all unchecked numbers to its left are disabled

### Slice 3: Add Total + Track State

### Slice 4: Penalties

### Slice 5: End Game Total
