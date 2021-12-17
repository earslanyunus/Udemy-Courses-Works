'use strict'

const openButton = document.querySelector('.open-nav-button')
const closeButton = document.querySelector('.close-nav-button')
const navclass = document.querySelector('nav')
openButton.addEventListener('click',function(){
    navclass.classList.toggle('nav-open-animate')
    openButton.classList.toggle('disp-none')
    closeButton.classList.toggle('display-none')
})
closeButton.addEventListener('click',function(){
    navclass.classList.toggle('nav-open-animate')
    openButton.classList.toggle('disp-none')
    closeButton.classList.toggle('display-none')
})