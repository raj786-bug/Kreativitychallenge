// Replace 'YOUR_BACKEND_URL' with the actual URL of your backend API for sending OTP.
const backendUrl = 'http://localhost:8080/mobileno';

function sendOTP() {
    const selectedCountryCode = phoneInput.getSelectedCountryData().dialCode;
    console.log(selectedCountryCode); // Output: e.g., "+91" for India
    let phoneNumber= "+"+selectedCountryCode+document.querySelector('#whatsappNumber').value
    console.log(phoneNumber);
    if (!phoneNumber) {
        showMessage("Please enter a valid phone number.");
        return;
    }
    
    // You can add additional validations for phone number format here if needed.

    // Make an API call to the backend to request and send the OTP using Fetch API.
    fetch('http://localhost:8080/mobileno', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ to: phoneNumber })
    })
        .then(response =>{
            if(response.status===200){
                showMessage("otp send successfully.");
               
            }
            else{
                console.log("otp not send successfully.");
            }
              
           } )
           
        
       
        
}

function showMessage(message) {
    document.getElementById('message').innerText = message;
}

function verifyOTP() {
    const selectedCountryCode = phoneInput.getSelectedCountryData().dialCode;
    console.log(selectedCountryCode); // Output: e.g., "+91" for India
    let phoneNumber= "+"+selectedCountryCode+document.querySelector('#whatsappNumber').value
    var enteredOTP = document.getElementById("otpInput").value;
    console.log(enteredOTP)
    const myButton = document.getElementById('myButton');
    
    var backendURL = 'http://localhost:8080/otp';

    const OtpData = {
        otp: enteredOTP,
        to: phoneNumber

    };

    fetch(backendURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(OtpData)
    })
        .then(response => {
            // Check if the response contains a valid JSON body
            if(response.status===200){
                showMessage("otp verified.");
                myButton.classList.remove('disabled');
                
            }
            else{
                console.log("otp not verified.");
            }
            const contentType = response.headers.get('content-type');
            if (contentType && contentType.includes('application/json')) {
                return response.json();
            } else {
                throw new Error("Response is not in JSON format");
            }
            
        })
        
}

function verifyOTP1() {
    const selectedCountryCode = phoneInput.getSelectedCountryData().dialCode;
    console.log(selectedCountryCode); // Output: e.g., "+91" for India
    let phoneNumber= "+"+selectedCountryCode+document.querySelector('#whatsappNumber').value
    var enteredOTP = document.getElementById("otpInput").value;
    console.log(enteredOTP)
    
    const tsubmit = document.getElementById('tsubmit');
    const exc = document.getElementById('excel');
    var backendURL = 'http://localhost:8080/otp';

    const OtpData = {
        otp: enteredOTP,
        to: phoneNumber

    };

    fetch(backendURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(OtpData)
    })
        .then(response => {
            // Check if the response contains a valid JSON body
            if(response.status===200){
                showMessage("otp verified.");
                tsubmit.classList.remove('disabled');
                exc.classList.remove('disabled');
                
            }
            else{
                console.log("otp not verified.");
            }
            const contentType = response.headers.get('content-type');
            if (contentType && contentType.includes('application/json')) {
                return response.json();
            } else {
                throw new Error("Response is not in JSON format");
            }
            
        })

        
        
}

