function calculateBMI() {
  // Don't edit the code
  let age = document.getElementById("age").value;
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;
  let male = document.getElementById("m").checked;
  let female = document.getElementById("f").checked;
  console.table({ age, weight, height, male, female });

  // You are going to write the code here before the curly braces 👇🏻

  let height_cm = height / 100;
  // (weight (kg) / height^2(m)), don't forget to convert cm to m
  let bmi = weight / (height_cm * height_cm);

  alert("Your bmi is: " + bmi);

  //   1. Using the result you calculated in Challenge 1 and check the BMI state
  //     1. Below 18.5 Underweight
  //     2. 18.5 – 24.9 Healthy Weight
  //     3. 25.0 – 29.9 Overweight
  //     4. 30.0 and Above Obesity
  // 2. Show the BMI state in an alert

  if (bmi >= 30) {
    state = "Obesity";
  } else if (bmi < 29.9 && bmi > 25) {
    state = "Overweight";
  } else if (bmi < 24.9 && bmi > 18.6) {
    state = "Healthy Weight";
  } else if (bmi <= 18.5) {
    state = "Underweight";
  } else {
    state = "Underweight";
  }
  alert(state);

  // if (age >= 30 && bmi < 29.9 && bmi > 25) {
  //   helth = "healthy";
  //   // } else if (bmi < 29.9 && bmi > 25) {
  //   //   state = "Overweight";
  //   // } else if (bmi < 24.9 && bmi > 18.6) {
  //   //   state = "Healthy Weight";
  //   // } else if (bmi <= 18.5) {
  //   //   state = "Underweight";
  //   // } else {
  //   //   state = "Underweight";
  //   // }
  //   alert(helth);
  // }
}
