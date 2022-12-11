var containerBox = document.querySelector(".container-fluid");

let center_loading = document.querySelector(".center");
let outer = document.querySelector(".outer");
let inner = document.querySelector(".inner");
let persent = document.querySelector(".inner span");
let count = 0;

window.addEventListener("load", (event) => {
    let loading = setInterval(animate, 10);
    function animate() {
        if(count == 100) {
            clearInterval();

            containerBox.style.display = "block";
            center_loading.style.display = "none";
        } else {
            count += 1;
            persent.textContent = count + "%";
        }
    };
});