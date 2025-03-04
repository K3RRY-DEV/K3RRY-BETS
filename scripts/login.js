// document.getElementById('login-form').addEventListener('submit', function(event) {
//   event.preventDefault(); // Prevent default form submission

//   const form = event.target;
//   const formData = new FormData(form);

//   fetch('../php/login.php', {
//       method: 'POST',
//       body: formData
//   })
//   .then(response => response.json())
//   .then(data => {
//       if (data.success) {
//           window.location.href = '../Html/profile.html'; // Redirect on success
//       } else {
//           document.getElementById('error-message').textContent = data.error; // Display error
//       }
//   })
//   .catch(error => {
//       console.error('Error:', error);
//       document.getElementById('error-message').textContent = 'An error occurred. Please try again.';
//   });
// });