var button = document.querySelector('#btn');
var h2 = document.querySelector('h2');

button.onclick = function(){
    button.innerHTML="request sent";
    button.style.backgroundColor = "white";

    h2.innerHTML = "Friend";
    h2.style.color = "green";

};