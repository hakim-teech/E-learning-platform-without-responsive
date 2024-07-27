var menu = document.querySelector(".menu i")
var list = document.querySelector(".list ul")
menu.addEventListener('click',function(){
    list.classList.toggle('show')
})