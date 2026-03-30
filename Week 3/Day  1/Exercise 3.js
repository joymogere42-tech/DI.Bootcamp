let personA = {
  fullName: "Alice Brown",
  mass: 80,
  height: 1.7,
  bmi: function () {
    return this.mass / (this.height * this.height);
  }
};

let personB = {
  fullName: "Bob Green",
  mass: 65,
  height: 1.8,
  bmi: function () {
    return this.mass / (this.height * this.height);
  }
};

function compare(person1, person2) {
  let bmiA = person1.bmi();
  let bmiB = person2.bmi();

  console.log(person1.fullName + " BMI:", bmiA.toFixed(2));
  console.log(person2.fullName + " BMI:", bmiB.toFixed(2));

  let higher = bmiA > bmiB ? person1.fullName : person2.fullName;
  console.log(higher + " has the higher BMI");
}

compare(personA, personB);


function calculateAverage(arr) {
  let total = 0;

  for (let i = 0; i < arr.length; i++) {
    total = total + arr[i];
  }

  return total / arr.length;
}

function result(avg) {
  console.log("Average:", avg);

  if (avg > 65) {
    console.log("You passed");
  } else {
    console.log("You failed and must repeat the course");
  }
}

let scores = [50, 60, 70, 80, 90];

let avgScore = calculateAverage(scores);
result(avgScore);