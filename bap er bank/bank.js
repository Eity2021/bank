document.getElementById('submit_btn').addEventListener('click' , function(){
    //console.log('click')
    const emailField = document.getElementById('user_email');   
    const userEmail = emailField.value;
    //console.log(userEmail);

    //password
    const passwordField = document.getElementById('user_password');   
    const userPassword = passwordField.value;
    //console.log(userPassword);

    if(userEmail == 'eity2020@gmail.com' && userPassword == '2020@'){
        console.log('valid user');
        window.location.href = 'banking.html'
    }
    else{
        alert('user not valid')
    }
})


