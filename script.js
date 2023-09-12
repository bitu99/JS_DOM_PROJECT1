var button = document.querySelector('#btn');
var h2 = document.querySelector('h2');
var a=0;

button.onclick = function(){
    button.innerHTML="remove";
    button.style.backgroundColor = "white";
    button.style.color = "black";

    h2.innerHTML = "Friend";
    h2.style.color = "green";

    button.onclick = function(){
        h2.innerHTML = "Stranger";
        h2.style.color = "red";
            
        button.innerHTML="Make friend";
        button.style.backgroundColor = "cornflowerblue";
        button.style.color = "white";

        button.onclick = function(){
            button.innerHTML="remove";
            button.style.backgroundColor = "white";
            button.style.color = "black";
        
            h2.innerHTML = "Friend";
            h2.style.color = "green";

            button.onclick = function(){
                h2.innerHTML = "Stranger";
                h2.style.color = "red";
                    
                button.innerHTML="Make friend";
                button.style.backgroundColor = "cornflowerblue";
                button.style.color = "white";

                button.onclick = function(){
                    button.innerHTML="remove";
                    button.style.backgroundColor = "white";
                    button.style.color = "black";
                
                    h2.innerHTML = "Friend";
                    h2.style.color = "green";

                    button.onclick = function(){
                        h2.innerHTML = "Stranger";
                        h2.style.color = "red";
                            
                        button.innerHTML="Make friend";
                        button.style.backgroundColor = "cornflowerblue";
                        button.style.color = "white";

                        button.onclick = function(){
                            button.innerHTML="remove";
                            button.style.backgroundColor = "white";
                            button.style.color = "black";
                        
                            h2.innerHTML = "Friend";
                            h2.style.color = "green";
                        };
                    };
                };
            };
        };
    };
};













































