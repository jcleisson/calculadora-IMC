// function to calculate BMI
function calculateBMI(height, weight) {
  // convert height from cm to m
  height = height / 100;
  // calculate BMI
  const bmi = weight / (height * height);
  // return BMI value
  return bmi;
}

// function to display BMI result
function displayResult(bmi) {
  // create a result element
  const result = document.createElement('p');
  // add the BMI value to the element
  result.innerText = 'Your BMI is ' + bmi;
  // add the result element to the page
  document.body.appendChild(result);
}

// function to handle the form submission
function handleFormSubmit(e) {
  // prevent the form from submitting
  e.preventDefault();

  // get the height and weight values from the form
  const height = e.target.elements.height.value;
  const weight = e.target.elements.weight.value;

  // calculate the BMI
  const bmi = calculateBMI(height, weight);

  // display the result
  displayResult(bmi);
}

// get the form element
const form = document.querySelector('form');

// add an event listener to handle form submission
form.addEventListener('submit', handleFormSubmit);
