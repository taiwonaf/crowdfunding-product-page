const bookMarked = document.getElementById("bookmarked");
const bookText = document.getElementById("bookmark-text");
const selectThis = document.getElementById("select-this");
const success = document.getElementById("success");
const htmlDoc = document.documentElement;
const gotIt = document.getElementById("got-it");
const backThis = document.getElementById("back-this");
const selectionModal = document.getElementById("selection-modal");
const docBody = document.body;
const visibleClasses = document.querySelectorAll(".visible");
const toggleBtn = document.getElementById("toggle");
const cancelSelect = document.getElementById("cancel");

cancelSelect.onclick = () => {
    selectionModal.style.display = "none";
    window.onclick = function(event) {
        if (event.target === selectionModal) {
            htmlDoc.style.overflow = "visible";
            selectionModal.style.display = "none";
        }
    }
}

visibleClasses.forEach((visibleClass) => {
    visibleClass.addEventListener("click", (e) => {
        visibleClass.classList.toggle("activate-hidden");
        console.log(e.target);
        // if (e.target == toggleBtn) {
        //     visibleClass.classList.toggle("activate-hidden");
        // }
    })
})

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

backThis.addEventListener("click", () => {
    selectionModal.style.display = "flex";
    htmlDoc.style.overflow = "scroll";
    htmlDoc.style.height = "1400px";
    docBody.style.height = "1400px"
    docBody.style.overflow = "hidden"
})


// const visibleClass = document.getElementById("visible");
// const bambooRadio = document.getElementById("bamboo")

// function visibleToggle() {
//     visibleClass.classList.toggle("active");
// }

// function toggleRadio() {
//     visibleToggle();
// }

