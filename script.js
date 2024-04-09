function changeColor(item) {
    if (item.style.backgroundColor === "rgb(255, 136, 0)") {
        item.style.backgroundColor = "#444";
    } else {
        item.style.backgroundColor = "#ff8800";
    }
}
document.addEventListener("DOMContentLoaded", function() {
    const submitButton = document.getElementById("submit-order");

    submitButton.addEventListener("click", function() {
        if (submitButton.style.backgroundColor === "rgb(76, 175, 80)") {
            submitButton.style.backgroundColor = "#4CAF50";
        } else {
            submitButton.style.backgroundColor = "#ff8800";
        }
    });
});
