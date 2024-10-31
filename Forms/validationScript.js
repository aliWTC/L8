    // JavaScript code for form validation
	// Prevent form from submitting

      // Retrieve the input field value


let form = document.getElementById("myForm")


let regex = /^[a-zA-Z0-9]+$/;

form.addEventListener('submit', function(event){

  let input = document.getElementById("inputField")

  if (!regex.test(input.value)){
    window.alert('invalid');
    event.preventDefault();
  }
  else{
    window.alert('valid');
  }
})

      // Regular expression pattern for alphanumeric input

      // Check if the input value matches the pattern

        // Valid input: display confirmation and submit the form

        // Invalid input: display error message