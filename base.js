'use strict'

const openButton = document.querySelector('.open-nav-button')
const closeButton = document.querySelector('.close-nav-button')
const navclass = document.querySelector('nav')
const navopen = function () {
    navclass.classList.toggle('nav-open-animate')
    openButton.classList.toggle('disp-none')
    closeButton.classList.toggle('display-none')
}
openButton.addEventListener('click',navopen)

closeButton.addEventListener('click',function(){
    navclass.classList.toggle('nav-open-animate')
    openButton.classList.toggle('disp-none')
    closeButton.classList.toggle('display-none')
})
const AllLinks = document.querySelectorAll('a:link');

const openbutonstyle = getComputedStyle(document.querySelector('.open-nav-button'))
const closebutonstyle = getComputedStyle(document.querySelector('.close-nav-button'))
AllLinks.forEach(function(link){
   link.addEventListener('click',function(){
       const href = link.getAttribute('href');
       
       if(href === '#'){
           window.scrollTo({
               top:0,
               behavior:'smooth'
               
           })}

        if(href !== '#' && href.startsWith('#') ){
            const selectelement = document.querySelector(href)
            selectelement.scrollIntoView({behavior:'smooth'})


        }
       if(closebutonstyle.display == 'block' && openbutonstyle.display == 'none'){
        navopen()

       }
       
   })
})
const head = document.querySelector('.head-box') 
const herosection = document.querySelector('.hero-section')
const obs =  new IntersectionObserver(function (entries){
    const ent = entries[0]

    if(ent.isIntersecting===false){
        head.classList.add('sticky')
        document.querySelector('.head').style.backgroundColor = 'rgba(255, 255, 255, 0.97)'
    }
    if(ent.isIntersecting===true){
        head.classList.remove('sticky');
        document.querySelector('.head').style.backgroundColor = '#fdf2e9'

        
    }
},{


    root: null,
    threshold: 0,
    rootMargin: '-80px',
    


})
    
obs.observe(herosection)
