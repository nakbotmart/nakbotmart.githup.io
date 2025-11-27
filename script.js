const exitBtn = document.querySelector("#popup-exit");
const popup_container = document.getElementById('popup-contatiner');
const infoBtns = document.querySelectorAll(".more-info");
const popup_Iframe = document.querySelector("iframe");

exitBtn.addEventListener('click', function() {
    popup_container.setAttribute("data-enable", "off")
});

function btnClick(obj) {
    let src = obj.getAttribute("data-src")
    popup_Iframe.src = src
    
    popup_container.setAttribute("data-enable", "on")

}