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


