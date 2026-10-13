
const animateButton = document.getElementById("animateButton");

animateButton.addEventListener("click", function () {
    animateButton.textContent = "Animation Activated ✓";

    setTimeout(function () {
        animateButton.textContent = "Explore Animation →";
    }, 1500);
});
