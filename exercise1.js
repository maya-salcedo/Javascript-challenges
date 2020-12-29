function bmiCalculator (weight, height) {
    var bmi = Math.round(weight/(height*height));
    if (bmi < 18.5){
        return "Your MBI is " + bmi + ", so are underweight.";
    }
     if (bmi > 18.5  && bmi < 24.9){
        return "Your MBI is " + bmi + ", so are normal weight.";
    }
     if (bmi > 24.9){
        return "Your MBI is " + bmi + ", so are overweight.";
    }
}
/*************************************************************/
function isLeap(year) {
  if (year % 4 !==0 && year % 400 !==0){
    return "Not leap year.";
  }
  if (year % 4 ===0 && year % 100 === 0 && year % 400 !==0){
    return "Not leap year.";
  }
  else {
    return "Leap year.";
  }
}


/*************************************************************/
var output = [];
n = 1;

function fizzBuzz() {
    if (n % 3 === 0 && n % 5 === 0) {
        output.push("fizzBuzz");
    }
    else if (n % 3 === 0) {
        output.push("fizz");
    }
    else if (n % 5 === 0) {
        output.push("Buzz");
    }
    else {
        output.push(n);
    }
    n = n + 1;
    console.log(output);
} 

/*************************************************************/
var n = 100;  

function beer() {  
    while(n > 0) {  
        console.log(n + " bottles of beer on the wall, " + n +  
        " bottles of beer. Take one down and pass it around, " + (n-1) +  
        " bottles of beer on the wall."); 
        n = n - 1 
    } 
    console.log(`No more bottles of beer on the wall, no more bottles of beer.  
        Go to the store and but some more, 99 bottles of beer on the wall.`); 
} 

/*OR*/
var n = 100;   

function beer() {   
    while(n > 0) {   
        console.log(`${n} bottles of beer on the wall, ${n} bottles of beer. Take one down and pass it around, ${n-1} bottles of beer on the wall.`);
        n = n - 1 ; 
     }  
    console.log(`No more bottles of beer on the wall, no more bottles of beer. Go to the store and but some more, 99 bottles of beer on the wall.`);  

}  

/*************************************************************/
/*For Loop*/
var output = []; 

function fizzBuzz() { 
    for(var n = 1; n <= 100; n++) { 
    if (n % 3 === 0 && n % 5 === 0) { 
        output.push("fizzBuzz"); 
    } else if (n % 3 === 0) { 
        output.push("fizz"); 
    } else if (n % 5 === 0) { 
        output.push("Buzz"); 
    } 
    else { 
        output.push(n); 
    } 
    } 
    console.log(output); 
}  

/*************************************************************/

Fibonacci Code 

 

function fibonacciGenerator(num) { 

 
 

generatorArray = [] 

var x = 1; 

for (var i=0; i<(num-1); i=(i - i) + (x - i)) {  

x = x + i; 

generatorArray.push(i); 

}  

console.log(generatorArray);  

} 

 


/*************************************************************/
