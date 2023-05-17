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
  - disable number inputs based on numbers selected
    - Example: If 6 is selected in rowOne, user cannot select number inputs less than or equal to 5
  - lockForm button click should disable the number inputs in that row

### 5. Penalties

- 4 checkboxes to track penalty tallies
  - with each tally, add -5 to penaltyTotal

### 6. Totals

- rowOneTotal, rowTwoTotal, rowThreeTotal, rowFourTotal:
  - show active totals for each row
- penaltyTotal (tally \* 5):
  - show penalties total (negative number)
- end game button
  - enabled when:
    - penaltyTotal equals -20
    - 2 or more rows have been locked
  - on click show final score:
    - add row totals and subtract penaltyTotal
