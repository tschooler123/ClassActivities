// Correct these statements so they make sense
// Sunday = 0, Monday = 1, ... Saturday = 6
// re-assign day to any number from 0 - 7 to test the result
let day = 1;
let dayName = `Today`;

// Complete this switch case statement to produce the correct results please.

switch (day) {
  case **{`Which case goes here`}** :
    dayName = `Today is Wednesday`;
    break;
  case 1:
    dayName = `Today is **{what day goes here}**`;
    break;

  // Note the code blocks in the next 2 cases: Why?
  case 4: {
    const message = `Today is **{what day goes here}**`;
    console.log(message);
    break;
  }
  case **{`Which case goes here`}** : {
    const message = `Tomorrow it's the weekend!`;
    console.log(message);
    break;
  }
  default:
    console.log(**{`Write a sassy default message here`}**);
    break;
  case **{`Which case goes here`}** :
    console.log(`Today is Tuesday`);
    break;
  // write a case here for the weekend (how many days in the weekend?)
  case :
    alert(`It's the Weekend !!`);

}
if (dayName !== 'Today'){
console.log(dayName);
}
