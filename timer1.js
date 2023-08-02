// const timer = timer();
// let time =[];
// for (const element of timer){
//   setTimeout(()=>{
//     process.stdout.write('\x07 ${element}');
//   }, time);
// }

// timer.js

// Function to play beep sound
function timer() {
  process.stdout.write("\x07");
}

// Parse command line arguments
const alarms = process.argv
  .slice(2)
  .map(Number)
  .sort((a, b) => a - b);

// Set timeouts for each alarm
alarms.forEach((alarm) => {
  // Make sure the alarm is a positive number with >0
  if (alarm > 0) {
    setTimeout(() => {
      timer();
      console.log(`Alarm went off at ${alarm} seconds.`);
    }, alarm * 1000);
  }
});
