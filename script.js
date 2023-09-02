let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons); //gives array of all buttons
arr.forEach(button =>{      //loop to check whenever button clicks the arrow function calls
    button.addEventListener('click',(e)=>{ //whenever button clicks e event will occur
        if(e.target.innerHTML == '='){ // if button is =, then evaluate the string(tf) and show that value in TF
            string = eval(string);
            input.value = string;
        }
        else if(e.target.innerHTML == 'AC'){
            string = "";
            input.value = string;
        }
        else if(e.target.innerHTML == 'DEL'){
            string = string.substring(0,string.length-1); //it gives substring from starting index to last index-1
            input.value = string;
        }
        
        else{
            //if the button is not = button then, add that number or operator to the string and change the value of TF to that
            string += e.target.innerHTML;
            input.value = string;
        }
    })
})