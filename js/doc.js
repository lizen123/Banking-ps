document.getElementById('button').addEventListener('click',function(){
    // get user email
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    // get user password
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;
    // check email and password
    if (userEmail == '12' && userPassword == '1') {
        window.location.href ="bank.html";
    }
});