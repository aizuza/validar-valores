

var elemLoginButton = document.getElementById("login_button");
console.log(elemLoginButton);








function showMessage(message, isError) {

    var elemPreviousMessage = document.getElementById("user_message")


    // borrar mensaje anterior en caso de existir

    if (elemPreviousMessage) {
        elemPreviousMessage.parentNode.removeChild(elemPreviousMessage)

    }




    // mostrar mensaje de bienvenida/ elem p
    var elemMessage = document.createElement("p");
    elemMessage.innerText = message;
    elemMessage.id = "user_message";
   
    if(isError){
        
        elemMessage.className = "error-message";
    }

    var elemMainDiv = document.getElementById("main_div");
    // es para ponerlo dentro y abajo de donde lo andas poniendo
    elemMainDiv.appendChild(elemMessage);


}

elemLoginButton.onclick = function () {
    console.log("Login button is clicked")

    //obtener elementos de html

    var elemUsername = document.getElementById("username");
    var elemPassword = document.getElementById("password");

    console.log(elemUsername);
    console.log(elemPassword);

    var username = elemUsername.value;
    console.log(username);







    //guardar valor del passw en una variable
    var username = elemUsername.value;
    var password = elemPassword.value;
    console.log(username);
    console.log(password);

    

    //validando variables
    if (username === "admin" && password === "admin") {

        //  if(!welcomeMessageShown){ //este if es para solo mostrar una vez porque se repite sino


        // mostrar mensaje de bienvenida/ elem p
        //var elemMessage = document.createElement("p");
        //elemMessage.innerText = "Bienvenido " + username;



        //var elemMainDiv = document.getElementById("main_div");
        // es para ponerlo dentro y abajo de donde lo andas poniendo
        //elemMainDiv.appendChild(elemMessage);




        //...--- otra forma de hacerlo
        showMessage("Bienvenido " + username);
        //welcomeMessageShown = true;
        // }
    } else {
        // if(!welcomeMessageShown){ //este if es para solo mostrar una vez porque se repite sino


        // mostrar mensaje de bienvenida/ elem p
        //var elemMessage = document.createElement("p");
        //elemMessage.innerText = "reinserte su password or username";



        //var elemMainDiv = document.getElementById("main_div");
        // es para ponerlo dentro y abajo de donde lo andas poniendo
        //elemMainDiv.appendChild(elemMessage);


        showMessage("error de identificación", true);

       // welcomeMessageShown = true;
        // }
    }
    if( username === ""){
        showMessage("introduce un value para username",true)
    }
    
    if( password === ""){
        showMessage("introduce un value para password",true)
    }
    if( username === "" && password === ""){
        showMessage("agregue credenciales de ambos",true)
    }
}

