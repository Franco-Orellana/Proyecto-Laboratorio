// Look for .hamburger
const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector('.nav')

// On click
hamburger.addEventListener("click", function() {
    // Toggle class "is-active"
    hamburger.classList.toggle("is-active");
    // Do something else, like open/close menu
    nav.classList.toggle('active');
});

const subMenuBtn = document.querySelectorAll(".submenu-btn");
for (let i=0; i < subMenuBtn.length; i++){
    subMenuBtn[i].addEventListener("click", function() {
        if(window.innerWidth < 1024){
            const subMenu = this.nextElementSibling;
            const height = subMenu.scrollHeight;

            if(subMenu.classList.contains("desplegar")){
                subMenu.classList.remove("desplegar");
                subMenu.removeAttribute("style")
            }else{
                subMenu.classList.add("desplegar");
                subMenu.style.height = height + "px";
            }
        }
    });
}