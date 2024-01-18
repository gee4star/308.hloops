// Loop through all numbers from 1 to 100.
// If a number is divisible by 3, log “Fizz.”
// If a number is divisible by 5, log “Buzz.”
// If a number is divisible by both 3 and 5, log “Fizz Buzz.”
// If a number is not divisible by either 3 or 5, log the number.

// Loop through all numbers from 1 to 100.
for(let i = 1; i <= 100; i++){
    // If a number is divisible by 3, log “Fizz.”
    if(i % 3 === 0){
        console.log(i + " Fizz")
    }else if(i % 5 === 0) {  // If a number is divisible by 5, log “Buzz.”
        console.log(i + " Buzz")
    } else if(i % 3 === 0 && i % 5 === 0){// If a number is divisible by both 3 and 5, log “Fizz Buzz.”
        console.log(i + " Fizz Buzz")
    }else if(i % 3 != 0 || i % 5 != 0){ // If a number is not divisible by either 3 or 5, log the number.
        console.log(i);
    }
}
// Declare an arbitrary number, n.
// Create a loop that searches for the next prime number, starting at n and incrementing from there.
// As soon as you find the prime number, log that number and exit the loop.
// Continuing with the example above, if n is equal to 4, your loop should log 5. Similarly, if n is 5, it should log 7, and if n is 9, it should log 11. Test your loop with higher numbers and reference an online prime number table to determine the accuracy of your code
let prime = "";
for (let i = 1; i <= 11; i++) {
   // Create a loop that searches for the next prime number, starting at n and incrementing from there. 
   if(i ==1) i++;
    if(i == 2 || i == 3 || i % 3 !== 0 && i % 2 !== 0) {
        console.log(i);
        prime += i;
        break; 
    }
}
    console.log(`${prime} is the prime number`);


// As soon as you find the prime number, log that number and exit the loop.
