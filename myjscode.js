const submitbtn = document.querySelector('.btn').addEventListener('click', submit)
const nameInput = document.getElementById('name')
const email = document.getElementById('email')
const password = document.getElementById('password')
const confirmPassword = document.getElementById('confirm_password')
const btn = document.querySelector('.btn')

nameInput.addEventListener('blur', nameCheck)
email.addEventListener('blur', emailCheck)
password.addEventListener('blur', passwordCheck)
confirmPassword.addEventListener('blur', confirmPasswordCheck)

function nameCheck(){

  if(nameInput.value.length >= 5){
    nameInput.style.border = '2px solid #10B981'
    document.querySelector('.name-text').textContent = 'Name'
    document.querySelector('.name-text').style.color = 'white'
    return true
  } else {
    nameInput.style.border = '2px solid #EF4444'
    document.querySelector('.name-text').textContent = 'Name is incorrect!'
    document.querySelector('.name-text').style.color = '#EF4444'
    return false
  }
}

function emailCheck(){
  if(email.value.length != 0){
    document.querySelector('.email-text').textContent = 'Email'
    document.querySelector('.email-text').style.color = 'white'
    email.style.border = '2px solid #10B981'
    return true
  } else {
    email.style.border = '2px solid #EF4444'
    document.querySelector('.email-text').textContent = 'Email is incorrect!'
    document.querySelector('.email-text').style.color = '#EF4444'
    return false
  }
}

function passwordCheck(){

  if(password.value.length >= 8){
    document.querySelector('.password-text').textContent = 'Password'
    document.querySelector('.password-text').style.color = 'white'
    password.style.border = '2px solid #10B981'
    return true
  } else {
    password.style.border = '2px solid #EF4444'
    document.querySelector('.password-text').textContent = 'Password is incorrect!'
    document.querySelector('.password-text').style.color = '#EF4444'
    return false
  }
}

function confirmPasswordCheck(){
  
  if(confirmPassword.value.length >= 8 && confirmPassword.value == password.value){
    confirmPassword.style.border = '2px solid #10B981'
    document.querySelector('.confirm-password-text').textContent = 'Confirm Password'
    document.querySelector('.confirm-password-text').style.color = 'white'
    return true
  } else {
    confirmPassword.style.border = '2px solid #EF4444'
    document.querySelector('.confirm-password-text').textContent = 'Password does not match'
    document.querySelector('.confirm-password-text').style.color = '#EF4444'
    return false
  }
}

// Submit button
function submit(e){
  if(nameCheck() && emailCheck() && passwordCheck() && confirmPasswordCheck() == true){
    alert('Form is successfully Submitted')

    // nameInput.value = ''
    // email.value = ''
    // password.value = ''
    // confirmPassword.value = ''
    // nameInput.style.border = '#ced4da'
    // email.style.border = 'ced4da'
    // password.style.border = '#ced4da'
    // confirmPassword.style.border = '#ced4da'
    document.querySelector('myForm').window.reload()
  }

  e.preventDefault()
}

/* 
1. Name should be atleast 5 characters long.
2. passwords must match
3. password must be atleast 8 characters long.
4. Stop form submission on validation fail.
5. highlight input field with red border which have error.
6. display proper error messages
*/
