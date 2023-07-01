
let showhide =document.querySelector(".showhide")
let erroricon =document.querySelector(".erroricon")
let text =document.querySelector(".text")
let Title =document.querySelector(".Title")
let input =document.getElementById("input")


// Show And Hide Icon

showhide.addEventListener("click",()=>{

    if( input.type === 'password' ){
        input.type ='text'
        showhide.classList.replace('fa-eye-slash','fa-eye')
    }else{
       input.type = 'password' 
        showhide.classList.replace('fa-eye','fa-eye-slash')
    }

})


// Code Password Strngth

let alphapet = /[ a-zA-Z ]/
let Numbers = /[0-9]/
let Chars = /[!@#$%^&*()_+/*-+?><}{":}]/

input.addEventListener("keyup",()=>{

//  Add Class Active
    Title.classList.add("active")

    let Value = input.value
    //    password Weak
   if( Value.match(alphapet) || Value.match(Numbers) || Value.match(Chars)  ){
    text.innerHTML = "Password is weak"
    erroricon.style.color =  "coral"
    text.style.color =  "coral"
    showhide.style.color =  "coral"
    input.style.borderColor =  "coral"
   }


   //    password Medium
   if( Value.match(alphapet) && Value.match(Numbers) && Value.match(Chars) && Value.length >= 6 ){
    text.innerHTML = "Password is Medium"
    erroricon.style.color =  "#cc9800"
    text.style.color =  "#cc9800"
    showhide.style.color =  "#cc9800"
    input.style.borderColor =  "#cc9800"
   }


   //    password Stronge
   if( Value.match(alphapet) && Value.match(Numbers) && Value.match(Chars) && Value.length >= 8 ){
    text.innerHTML = "Password is Stronge"
    erroricon.style.color =  "#22c32a"
    text.style.color =  "#22c32a"
    showhide.style.color =  "#22c32a"
    input.style.borderColor =  "#22c32a"
   }
  
//   Remove Class Active
   if(Value == ""){
    Title.classList.remove("active")
    input.style.borderColor =  "#777"
    showhide.style.borderColor =  "#777"
   }
})




