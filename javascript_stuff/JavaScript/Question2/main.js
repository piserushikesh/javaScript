
const myform=document.querySelector('.for_form');
const  Name=document.querySelector('#nm');
const Address=document.querySelector('#add');
const Hobbies=document.querySelector('#hob');
const List=document.querySelector('#list');
const Msg=document.querySelector('.msg');

//myform.addEventListener('submit',onsubmit);
var count =1;
var str ="<ol>"  ;

AddObject=()=>{
    //console.log(Name.value.length);
    if(Name.value.length>=6){
        alert("It should be less than SIX charachters!!!!!!!!!");
    }
    else{
        
       // console.log(Name.value);
        str+= `<li> ${Name.value}  ${Address.value}  ${Hobbies.value}</li>`  
        Name.value='';
        Address.value='';
        Hobbies.value='';
}
}
DisplayObject=()=>{
   
    if(count==0){
    document.getElementById("new").classList.remove("for_formREd");

    document.getElementById("new").classList.add("for_form");
    count=1;
   }else{
    document.getElementById("new").classList.remove("for_form");

    document.getElementById("new").classList.add("for_formREd");
    count= 0;

    display();
        
   }
}
display=()=>{
   // console.log(str);
    str+="</ol>"
    document.getElementById("output").innerHTML+=str;
   
}

// // function onsubmit(e)
// // {
// //     // console.log(Name.length)
// e.preventDefault();

        
// const li=document.createElement('li');
// li.appendChild(document.createTextNode(`${Name.value} , ${Address.value} , ${Hobbies.value}`));
// List.appendChild(li);
 
// }
    
    

// }

