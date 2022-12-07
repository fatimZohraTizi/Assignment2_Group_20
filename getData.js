        var firstN =localStorage.getItem("firstName", firstN);   
        var lastN =localStorage.getItem("lastName", lastN); 
        var phone = localStorage.getItem("phone", phone); 
        var email =localStorage.getItem("email", email); 
        var theAddress = localStorage.getItem("street", theAddress); 
        var city =localStorage.getItem("city", city); 
        var zipCode =localStorage.getItem("zipCode", zipCode); 
        var theSession =localStorage.getItem("sessions", theSession); 
        var groupAge =localStorage.getItem("groupAge", groupAge); 
        var age =localStorage.getItem("age", age); 
        
        
      
        // storing input from register-form
       
        document.getElementById("firstName").appendChild(document.createTextNode(firstN));
        document.getElementById("lastName").appendChild(document.createTextNode(lastN));
        document.getElementById("phone").appendChild(document.createTextNode(phone));
        document.getElementById("email").appendChild(document.createTextNode(email));
        document.getElementById("street").appendChild(document.createTextNode(theAddress));
        document.getElementById("city").appendChild(document.createTextNode(city));
        document.getElementById("zipCode").appendChild(document.createTextNode(zipCode));
        document.getElementById("session").appendChild(document.createTextNode(theSession));
       document.getElementById("groupAge").appendChild(document.createTextNode(groupAge));
        document.getElementById("Age").appendChild(document.createTextNode(age));