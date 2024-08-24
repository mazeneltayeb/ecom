
// let navLinks = document.querySelectorAll(".nav-link")
// navLinks.forEach((e)=>{

//  e.onclick=function(){
//    navLinks.forEach((el)=>{
//      el.classList.remove("active")
//    })
// this.classList.add("active")
//  }
// })


// console.log(window.location.pathname)

let navLinks = document.querySelectorAll(".nav-link")
navLinks.forEach(e=>{
  if(e.href.includes(window.location.pathname)){
    navLinks.forEach((el)=>{
           el.classList.remove("active")
          })
    e.classList.add("active")
  }
})








