var join = document.querySelector(".join")
var pop = document.querySelector(".popupt")
var pop1 = document.querySelector(".popup-box")
var pop2 = document.querySelector(".popdetail")

function joine(){
    
    pop.style.display="block"
    pop1.style.display = "block"
    pop2.style.display = "block"
}

var cancel = document.querySelector(".cancel")
cancel.addEventListener("click",function(e){
    e.preventDefault()
     
    pop.style.display="none"
    pop1.style.display = "none"
    pop2.style.display = "none"
    
})
var submit = document.querySelector(".submit")
