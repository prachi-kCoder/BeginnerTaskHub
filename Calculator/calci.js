let input=document.getElementById("inputBox");
let buttons=document.querySelectorAll("button");
let string="";
let arr=Array.from(buttons);
arr.forEach(button=>{
    button.addEventListener("click",(e)=>{
        //funtioning of = btn
        if (e.target.innerHTML=="="){
            string=eval(string);
            input.value=string;
        }
        //funtioning of AC btn
        else if (e.target.innerHTML=="AC"){
            string="";
            input.value=string;
        }
        //funtioning of AC btn
        else if (e.target.innerHTML=="DEL"){
            //last ele htne ke kiye just like backSpace
            string=string.substring(0,string.length-1);
            input.value=string;
        }
        else{
            string+=e.target.innerHTML;
            input.value=string;
        }
    })
});