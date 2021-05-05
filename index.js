let tabs = document.querySelectorAll("nav ul li a")
let contents = document.querySelectorAll("section")

for(let i = 0; i < tabs.length; i++) {
  tabs[i].addEventListener("click", function(e){
    e.preventDefault()

    if(document.querySelector(".show")) {
      document.querySelector(".show").classList.remove("show")
    }
    
    let dataTarget = tabs[i].dataset.target
    let target = document.querySelector(("#" + dataTarget))
    target.classList.add("show")
  })
}

function toHide(elemsToHide) {
  for(let j = 0; j < elemsToHide.length; j++) {
    elemsToHide[j].classList.remove("show")
  }
}