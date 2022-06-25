const bookMarked = document.getElementById("bookmarked");
const bookText = document.getElementById("bookmark-text");
const selectThis = document.getElementById("select-this");
const success = document.getElementById("success");
const htmlDoc = document.documentElement;
const gotIt = document.getElementById("got-it");

bookMarked.onclick = () => {
    bookMarked.classList.toggle("active-bookmark");
}

selectThis.onclick = () => {
    success.style.display = "flex";
    htmlDoc.style.overflow = "hidden";
    
    window.onclick = function(event) {
        if (event.target === success) {
            htmlDoc.style.overflow = "visible";
            success.style.display = "none";
        }
    }

    gotIt.addEventListener("click", () => {
        htmlDoc.style.overflow = "visible";
        success.style.display = "none";
    })

}


// const visibleClass = document.getElementById("visible");
// const bambooRadio = document.getElementById("bamboo")

// function visibleToggle() {
//     visibleClass.classList.toggle("active");
// }

// function toggleRadio() {
//     visibleToggle();
// }

