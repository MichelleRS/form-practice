# Qwixx Score Card

## MVP Goal

Digital score card for Qwixx game.

## Project Status

- _MVP in progress_

## Components

### 1-4. Score Rows

- rowOne, rowTwo, rowThree, rowFour

- Each score row is a form with:

  - checkbox inputs for numbers 2-12
  - lockForm button (type="button")
    - user can only press if 5 or more numbers from row are selected

- Events for each score row:
  - when checked, add to row total
  - disable checkbox numbers based on numbers selected
    - Example: If 6 is selected in rowOne, user cannot select checkbox numbers less than or equal to 5
  - lockForm button click should disable the number inputs in that row

### 5. Penalties

- 4 checkboxes to track penalty tallies
  - with each tally, add -5 to penaltyTotal

### 6. Totals

- rowOneTotal, rowTwoTotal, rowThreeTotal, rowFourTotal:
  - show active totals for each row
- penaltyTotal (tally \* 5):
  - show penalties total (negative number)

### 7. End Game Button

- enabled when:
  - penaltyTotal equals -20
  - 2 or more rows have been locked
- on click show final score:
  - add row totals and subtract penaltyTotal

## DOM Tree Planning

```
<main>
    <section#scoreRows>
        <form#rowOne/>
        <form#rowTwo/>
        <form#rowThree/>
        <form#rowFour/>
    </section>
    <section#penalties/>
    <section#totals/>
    <section#endGame/>
</main>
```

```
<form#rowOne>
    <fieldset#rowOneFieldset>
        <legend>Row One</legend>
        <div.control>
            <label for="rowOneBox1">1</label>
            <input type="checkbox" name="rowOneBox1" id="rowOneBox1"/>
        </div>
        <div.control>
            <label for="rowOneBox2">2</label>
            <input type="checkbox" name="rowOneBox2" id="rowOneBox2"/>
        </div>
        <!-- insert 9 more div.controls -->
    </fieldset>
    <button type="button">&#128274;</button>
</form>
```

## Tasks

### Slice 1: Row Components

- [x] initial form planning in html
- [x] create form data as an array of objects
- [] render form elements for each score row
- [] events for each form:

  - [] disable checkbox numbers based on numbers selected
  - [] enable lock button when 5 or more inputs in form row have been checked:
    - [] on click should disable the number inputs in that row

### Slice 2: Add Total + Track State

### Slice 3: Penalty

### Slice 4: End Game Total
