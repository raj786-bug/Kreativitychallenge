// JavaScript code using Fetch API
$(document).ready(function () {
  $("#dob").datepicker({
    changeMonth: true,
    changeYear: true,
    dateFormat: 'dd/mm/yy',
    yearRange: "2006:2016",
    maxDate: new Date('2016-01-01'),
    minDate: new Date('2006-01-01')
  });
  $('#relationship').change(function () {
    var selectedOption = $(this).val();
    var otherOptionContainer = $('#otherOptionContainer');

    if (selectedOption === 'others') {
      otherOptionContainer.removeClass('invisible');
      console.log("others");
    } else {
      otherOptionContainer.addClass('invisible');
    }
  });
});
function getIp(callback) {
  fetch('https://ipinfo.io/json?token=858ba90da1836c', { headers: { 'Accept': 'application/json' } })
    .then((resp) => resp.json())
    .catch(() => {
      return {
        country: 'in',
      };
    })
    .then((resp) => callback(resp.country));
}

const phoneInputField = document.querySelector("#whatsappNumber");
const phoneInput = window.intlTelInput(phoneInputField, {
  initialCountry: "IN",
  geoIpLookup: getIp,
  utilsScript:
    "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
});

const selectedCountryCode = phoneInput.getSelectedCountryData().dialCode;
console.log(selectedCountryCode); // Output: e.g., "+91" for India
const myButton = document.getElementById('myButton');


myButton.addEventListener('click', function () {
  const selectedCountryCode = phoneInput.getSelectedCountryData().dialCode;
  console.log(selectedCountryCode); // Output: e.g., "+91" for India
  // Data to be sent in the POST request
  let studentname = document.querySelector('#studentName').value;
  let dob = document.querySelector('#dob').value;
  let email = document.querySelector('#email').value
  let parentsName = document.querySelector('#parentsName').value
  let password = document.querySelector('#password').value
  let whatsappNumber = selectedCountryCode+document.querySelector('#whatsappNumber').value
  let relation = document.querySelector('#relationship').value;
  if (relation === "others") {
    relationship = document.querySelector("#otherOption").value;
  }
  else {
    relationship = document.querySelector("#relationship").value;
  }

  const postData = {
    studentName: studentname,
    dob: dob,
    email: email,
    parentsName: parentsName,
    password: password,
    relationship: relationship,
    whatsappNumber: whatsappNumber
  };

  // Make a POST request using Fetch API
  fetch('http://localhost:8080/students/std', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(postData),
  })
    .then(response => response.json())
    .then(data => {
      console.log('Data sent successfully:', data);
      // Handle the response from the server if needed
    })
    .catch(error => {
      console.error('Error sending data:', error);
      // Handle any errors that occurred during the request
    });

});
