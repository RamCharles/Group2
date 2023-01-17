const smallImages = document.querySelectorAll('.img-thumbnail');

smallImages


 // Get all the quantity buttons and input field
 const quantityButtons = document.querySelectorAll('.quantity-button');
 const quantityInput = document.querySelector('.quantity-input');

 // Add event listeners to the quantity buttons
 quantityButtons.forEach(button => {
   button.addEventListener('click', e => {
     // Get the value of the button (either 1 or -1)
     const value = parseInt(e.target.dataset.value);

     // Update the quantity input field
     quantityInput.value = parseInt(quantityInput.value) + value;
   });
 });