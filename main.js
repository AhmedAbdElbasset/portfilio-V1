

let about = document.querySelector('.about');
let skills = document.querySelector(".Skills");
let spans = document.querySelectorAll(".Skills .box .width");
let boxes=document.querySelectorAll("skills .box")
window.onscroll = function () {
    if (scrollY >= about.offsetTop - 400) {
        document.querySelector(".img").style.left = "-50px"
        document.querySelector(".about .text").style.right = "43px"
        
    }
    else {
        document.querySelector(".img").style.left = "-500px"
        document.querySelector(".about .text").style.right = "-700px"
    }
    if (scrollY >= skills.offsetTop -500) {
            document.querySelector(".Skills .man-heading").style.top="0"
    }
    else (
            document.querySelector(".Skills .man-heading").style.top="-48px"
    )
    if (scrollY >= skills.offsetTop -400) { 
        spans.forEach((span) => {
            span.style.width = span.dataset.width;
            span.style.transition = "0.5s";
        }
        )
    }
    else { 
        spans.forEach((span) => {
            span.style.width = 0;
        }
        )
    }
    }
    // if (document.body.style.maxWidth="767px") {
    //     if (scrollY >= about.offsetTop - 400) {
    //     document.querySelector(".about .text").style.right = "50px"
        
    // }
    // else {
    //     document.querySelector(".about .text").style.right = "-700px"
    // }
    // }
let book = document.querySelector(".Portfolio .book")
let page = document.querySelector(".Portfolio .book .cover.turn");
let booStore = book.querySelector(".bookStory");
let tamwink=book.querySelector(".tamwink")
let elzero = book.querySelector(".Elzero");
let end= book.querySelector(".end");
// page.onmouseover = function () {
//     page.classList.add("active")
// }
end.onclick = function () {
    if (page.classList.contains("active")) {
        page.classList.remove("active")
        booStore.classList.remove("active");
        elzero.classList.remove("active");
        tamwink.classList.remove("active");
    }
    else {
        page.classList.add("active")
    }
}
page.onclick = function () {
    if(booStore.classList.contains("active")) {
        booStore.classList.add("active")
    }
    else {
        booStore.classList.add("active")
    }
    if (this.classList.contains("active")) {
        this.classList.remove("active")
    }
    else {
        this.classList.add("active")
    }
}
book.querySelector(".bookStory").onclick = function () {
    if(page.classList.contains("active")){
        page.classList.remove("active")
    }
    else {
        page.classList.add("active")
    }
}
// book.querySelector(".tamwink").querySelector("p").onclick = function () {
//     book.querySelector(".tamwink").style.transform = "rotateY(67deg)";
//     book.querySelector(".tamwink").classList.toggle("active");
//     }
book.querySelector(".tamwink").onclick = function (ele) {
    if (this.classList.contains("active")) {
        this.classList.remove("active")
    }
    else {
        this.classList.add("active")
    }
}

elzero.onclick = function (ele) {
    if (this.classList.contains("active")) {
        this.classList.remove("active")
    }
    else {
        this.classList.add("active")
    }
}