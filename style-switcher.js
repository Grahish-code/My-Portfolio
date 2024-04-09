const StyleSwitchOpen=document.querySelector(".style-switcher-toggler");
StyleSwitchOpen.addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.toggle("open");
  })


// theme color

const alternateStyles=document.querySelectorAll(".alternate-style");
function setActiveStyle(color){
    alternateStyles.forEach ((style) => {
      if(color === style.getAttribute("title"))
    {
        style.removeAttribute("disabled");
    }
    else{
        style.setAttribute("disabled","true");
    }
    })
    
}

// dark theme 
const dayNight=document.querySelector(".day-night");
dayNight.addEventListener("click",() => {
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
}
)
window.addEventListener("load",() => {
    if(document.body.classList.contains("dark")){
        dayNight.querySelector("i").classList.add("fa-sun")
    }
    else{
        dayNight.querySelector("i").classList.add("fa-moon")
    }
  
}
)
// side bar color
function Getcolor(clickedElement) {
    // Remove "active" class from all links
    const allLinks = document.querySelectorAll('.nav a');
    allLinks.forEach(link => {
      link.classList.remove('active');
    });

    // Add "active" class to the clicked link
    clickedElement.classList.add('active');
  }