let result = "";
let string="";
let buttons=document.querySelectorAll(".btn");

// for mouse click / click in mobile
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(event)=>{
        if(event.target.innerHTML == "enter"){
            result=""+eval(result);
            document.querySelector(".result").innerHTML=result;

        }
        else if(event.target.innerHTML == "CE"){
            result="";
            string="";
            document.querySelector(".result").innerHTML=result;
        }
        else if(event.target.innerHTML == "delete"){
            string=string.substring(0,string.length-1);
            result=string;
        }
        else{

            result=result+event.target.innerHTML;
            string=string+event.target.innerHTML;
        }
        document.querySelector(".calc").innerHTML=string;
    })
})

// for keyboard button press

    document.addEventListener('keydown',(event)=>{
        
        if(event.key == "Enter"){
            result=""+eval(result);
            string=result;
            document.querySelector(".result").innerHTML=result;

        }
        else if(event.key== "Delete"){
            result="";
            string="";
            document.querySelector(".result").innerHTML=result;
        }
        else if(event.key == "Backspace"){
            string=string.substring(0,string.length-1);
            result=string;
        }
        else if(event.key == "%" || event.key == "*" || event.key == "/" || event.key == "-" || event.key == "+" || event.key == "7" || event.key == "8" || event.key == "9" || event.key == "4" || event.key == "5" || event.key == "6" || event.key == "1" || event.key == "2" || event.key == "3" || event.key == "0" || event.key == "."){

            result=result+event.key;
            string=string+event.key;
        }
        document.querySelector(".calc").innerHTML=string;
    })
