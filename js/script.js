const yearEl=document.querySelector(".year");
const currentYear=new Date().getFullYear();
yearEl.textContent=currentYear


// MAKE MOBILE NAV WORKS 
const butnNav=document.querySelector(".btn-mobile-nav")
const headerEl=document.querySelector(".header")
butnNav.addEventListener("click",function(){
 headerEl.classList.toggle("nav-open")   
})
