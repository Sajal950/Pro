document.addEventListener('DOMContentLoaded', () => {
    openPopup();
});

// function openPopup() {
//     const popup = document.getElementById('popupForm'); // Adjust the ID to match your form container
//     popup.style.display = 'block'; // Show the popup
// }

// function closePopup() {
//     const popup = document.getElementById('popupForm');
//     popup.style.display = 'none'; // Hide the popup
// }

function validateStep1() {
    const name = document.getElementById('name').value.trim();
    const dob = document.getElementById('dob').value.trim();
    const mobile = document.getElementById('mobile').value.trim();
    const category = document.getElementById('category').value.trim();
    const address = document.getElementById('address').value.trim();
    const pin = document.getElementById('pin').value.trim();
    const email=document.getElementById('email').value.trim();

    if (!name || !dob || !mobile ||!email|| !category || !address || !pin) {
        alert("Please fill in all the fields in Step 1.");
        return false;
    }
    return true;
}

// Function to validate Step 2 (Academic Details)
function validateStep2() {
    const course = document.getElementById('course').value;
    const board = document.getElementById('board').value.trim();
    const year = document.getElementById('year').value.trim();
    const rollNo = document.getElementById('rollNo').value.trim();
    const percentage = document.getElementById('percentage').value.trim();

    if (!course || !board || !year || !rollNo || !percentage) {
        alert("Please fill in all the fields in Step 2.");
        return false;
    }
    return true;
}

// Function to validate Step 3 (Documents Upload)
function validateStep3() {
    const marksheet10 = document.getElementById('marksheet10').files.length;
    const marksheet12 = document.getElementById('marksheet12').files.length;
    const aadhaar = document.getElementById('aadhaar').files.length;
    const signature = document.getElementById('signature').files.length;
    const photo = document.getElementById('photo').files.length;
    const thumb = document.getElementById('thumb').files.length;

    if (!marksheet10 || !aadhaar|| !signature|| !photo||!thumb) {
        alert("Please upload all the required documents in Step 3.");
        return false;
    }
    return true;
}

// Function to validate Step 4 (Payment Screenshot)
function validateStep4() {
    const paymentScreenshot = document.getElementById('paymentScreenshot').files.length;

    if (!paymentScreenshot) {
        alert("Please upload the payment screenshot in Step 4.");
        return false;
    }
    return true;
}

// async function submitForm() {
//     const formData = {
//         name: document.getElementById('name').value,
//         dob: document.getElementById('dob').value,
//         mobile: document.getElementById('mobile').value,
//         email: document.getElementById('email').value,
//         category: document.getElementById('category').value,
//         address: document.getElementById('address').value,
//         pin: document.getElementById('pin').value,
//         course: document.getElementById('course').value,
//         board: document.getElementById('board').value,
//         year: document.getElementById('year').value,
//         rollNo: document.getElementById('rollNo').value,
//         percentage: document.getElementById('percentage').value,
//         marksheet10:document.getElementById('marksheet10').files[0],
//         marksheet12:document.getElementById('marksheet12').files[0],
//         aadhaar:document.getElementById('aadhaar').files[0],
//         paymentScreenshot:document.getElementById('paymentScreenshot').files[0],
//         };
   




    
async function submitForm() {
    // Create a new FormData object
    const formData = new FormData();

    // Add form fields to the FormData object
    formData.append('name', document.getElementById('name').value);
    formData.append('dob', document.getElementById('dob').value);
    formData.append('mobile', document.getElementById('mobile').value);
    formData.append('email', document.getElementById('email').value);
    formData.append('category', document.getElementById('category').value);
    formData.append('address', document.getElementById('address').value);
    formData.append('pin', document.getElementById('pin').value);
    formData.append('course', document.getElementById('course').value);
    formData.append('board', document.getElementById('board').value);
    formData.append('year', document.getElementById('year').value);
    formData.append('rollNo', document.getElementById('rollNo').value);
    formData.append('percentage', document.getElementById('percentage').value);
    formData.append('marksheet10', document.getElementById('marksheet10').files[0]);
    formData.append('marksheet12', document.getElementById('marksheet12').files[0]);
    formData.append('aadhaar', document.getElementById('aadhaar').files[0]);
    formData.append('signature', document.getElementById('signature').files[0]);
    formData.append('photo', document.getElementById('photo').files[0]);
    formData.append('thumb', document.getElementById('thumb').files[0]);
    formData.append('paymentScreenshot', document.getElementById('paymentScreenshot').files[0]);

    // Send the FormData object to the server
    
    try {
        const response = await fetch('https://api.cors.lol/?url=https://courageous-dasik-6bc435.netlify.app/.netlify/functions/api/register', {
          method: 'POST',
          body: formData, // Use the FormData object directly
        });
    
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const result = await response.json();
        console.log('Success:', result);
        alert('Form submitted successfully!');
      } catch (error) {
        console.error('Error submitting form:', error);
      }
      
}
// fetch('http://localhost:9999/register', {
//     method: 'POST',
//     body: formData,
// })
//     .then(response => {
//         if (!response.ok) {
//             throw Error(`Server responded with status: ${response.status}`);
//         }
//         return response.json();
//     })
//     .then(data => console.log(data))
//     .catch(error => console.error('Error:', error));}
   
