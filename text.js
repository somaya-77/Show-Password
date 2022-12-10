// get variables
let myInput = document.querySelector("input");
let myButton = document.querySelector('button');

// button = show --> password => text && show => hide && button =>Hide
// button = Hide --> text => password && hide => show && button =>Show
/*
myButton.onclick = togglePassword;

function togglePassword(){

    if(myButton.getAttribute('data-pass') == "show"){
        
        myInput.setAttribute('type', 'text');
        myButton.setAttribute('data-pass','hide');
        myButton.innerHTML = 'Hide';
    }else{
        myInput.setAttribute('type', 'password');
        myButton.setAttribute('data-pass','show');
        myButton.innerHTML = 'Show';

    }
}
*/
//                  two solution
myButton.addEventListener("click" , function() {
    if(myButton.textContent == "show") {
        myButton.textContent = "hide";
        myInput.type = "text";
    }else {
        myButton.textContent = "show";
        myInput.type = "password";
    }
})