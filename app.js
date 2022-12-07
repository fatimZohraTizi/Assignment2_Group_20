$(document).ready(function () {
    
 
   $("#singUpForm").validate({
        errorPlacement: function(error, element) {
            if (element.attr("name") == "terms" ) {
              error.insertAfter("#term");
            } else {
              error.insertAfter(element);
            }
          },
        // in 'rules' user have to specify all the constraints for respective fields
        rules: {
            
            username: {
                required: true,
                minlength: 2 //for length of lastname
            },
            password: {
                required: true,
                minlength: 8
            },
            confirm_password: {
                required: true,
                minlength: 8,
                equalTo: "#password" //for checking both passwords are same or not
            },
            email: {
                required: true,
                email: true
            },
            terms: 'required'

        },
        // in 'messages' user have to specify message as per rules
        messages: {
            
            username: {
                required: " *Please enter a username",
                minlength: " Username must be at least 2 characters"
            },
            password: {
                required: " *Please enter a password",
                minlength: " Your password must be at least 8 characters"
            },
            confirm_password: {
                required: " *Please confirm the password",
                minlength: " Password must be at least 8 characters",
                equalTo: " This password does not match the first one "
            },
            terms: '*please accept our terms'
        }
    });
    
    $("#singUpForm").on('submit', function(){
        
        if(!$("#singUpForm").valid()){
        e.preventDefault();}
        else{
        var email = document.getElementById("email").value;
        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;
        
        var user = {
          email: email,
          username: username,
          password: password,
        };

        var exist = JSON.parse(localStorage.getItem(username));
        if(exist){
            alert("This Username already exist");
        }else{
      
        // storing input from register-form
        var json =  JSON.stringify(user);
        localStorage.setItem(email, json);
        console.log("USER ADDED");}
    }
         
    });
      

    //the login form validation
    $("#singInForm").validate({
        
        // in 'rules' user have to specify all the constraints for respective fields
        rules: {
            
            email: {
                required: true,
                email: true
            },
            password: {
                required: true,
                minlength: 8
            }

        },
        // in 'messages' user have to specify message as per rules
        messages: {
            
            username: {
                required: " *Please enter a username",
                minlength: " Username must be at least 2 characters"
            },
            password: {
                required: " *Please enter a password",
                minlength: " Your password must be at least 8 characters"
            }
        }
    });

    $("#singInForm").on('submit', function(){
        
        if(!$("#singInForm").valid()){
        e.preventDefault();
        }
        else{
        var email = document.getElementById("email").value;
        var password = document.getElementById("password").value;
        var user = JSON.parse(localStorage.getItem(email));
        if(!user){
            alert("This user does not exist");
        }else{
          if (user.password !== password){
                alert('wrong password');
            }
        }
            alert('logged in successfully');
    }
         
    });

    // registration form validation
   $("#registrForm").validate({
    errorPlacement: function(error, element) {
        if (element.attr("name") == "terms" ) {
          error.insertAfter("#term");
        } else {
          error.insertAfter(element);
        }
      },
    // in 'rules' user have to specify all the constraints for respective fields
    rules: {
        lName: {
            required: true,
            minlength: 2 //for length of lastname
        },
        phone: {
            required: true,
            phoneUS:true
        },
        address: {
            required: true,
            
        },
        groupAge: {
            required: true,   
        },
        session: {
            required: true,   
        },
        email: {
            required: true,
            email: true
        },
        terms: 'required'

    },
    // in 'messages' user have to specify message as per rules
    messages: {
        
        
        lName: {
            required: " *Please enter the full name",
            minlength: " Last name must be at least 2 characters"
        },
        address: {
            required: " *Please enter an address",
            
        },
        phone: {
            required: " *Please enter a phone number",
           
        },
        session: {
            required: " *Please select a session",
           
        },
        groupAge: {
            required: " *Please select a group Age",
           
        },
        terms: '*please accept our terms'
    }
    });
   
    //registration form submit if valid
    $("#registrForm").on('submit', function(){
        
        if(!$("#registrForm").valid()){
        e.preventDefault();}
        else{
        var firstN = document.getElementById("firstName").value;
        var lastN = document.getElementById("lastName").value;
        var phone = document.getElementById("phone").value;
        var email = document.getElementById("email").value;
        var theAddress = document.getElementById("street").value;
        var city = document.getElementById("city").value;
        var zipCode = document.getElementById("zipCode").value;
        var theSession =document.getElementById("sessions").value;
        var groupAge = document.getElementById("groupAge").value;
        var age = document.getElementById("Age").value;
        
        
      
        // storing input from register-form
       
        localStorage.setItem("firstName", firstN);
        localStorage.setItem("lastName", lastN);
        localStorage.setItem("phone", phone);
        localStorage.setItem("street", theAddress);
        localStorage.setItem("city", city);
        localStorage.setItem("zipCode", zipCode);
        localStorage.setItem("email", email);
        localStorage.setItem("age", age);
        localStorage.setItem("session", theSession);
        localStorage.setItem("groupAge", groupAge);
        console.log("USER ADDED");
    }
         
    });
      

    
});

function signIn(e) {
    let email = document.getElementById('email').value, pwd = document.getElementById('pwd').value;
    let formData = JSON.parse(localStorage.getItem('formData')) || [];
    let exist = formData.length && 
    JSON.parse(localStorage.getItem('formData')).some(data => data.email.toLowerCase() == email && data.pwd.toLowerCase() == pwd);
    if(!exist){
        alert("Incorrect login credentials");
    }
    else{
        location.href = "/";
    }
    e.preventDefault();
}

//https://stackoverflow.com/questions/72722473/login-signup-form-with-local-storage-javascript