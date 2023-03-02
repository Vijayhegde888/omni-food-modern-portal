const yearEl=document.querySelector(".year");
const currentYear=new Date().getFullYear();
yearEl.textContent=currentYear


// MAKE MOBILE NAV WORKS 
const butnNav=document.querySelector(".btn-mobile-nav")
const headerEl=document.querySelector(".header")
butnNav.addEventListener("click",function(){
 headerEl.classList.toggle("nav-open")   
})

// Sticky navigation 
const sectionHeroEl= document.querySelector(".section-hero")
const obs = new IntersectionObserver(function(entries){
    const ent=entries[0];
    console.log('ent',ent)
    if(!ent.isIntersecting)
    {

        document.querySelector(".header").classList.add("sticky")
    }
},{
    
    root:null,
    threshold:0
})

obs.observer(sectionHeroEl);