var colorBox = document.getElementById("boxColor");

var colorBtn = document.getElementById("colorBtn")


var copyBtn = document.getElementById("copyBtn")


function getRandomColor() {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

function isColorDark(hex) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);

    // Perceived brightness formula
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;

    return brightness < 128; // true = dark, false = light
}

colorBtn.addEventListener("click", function () {
    var randomColor = getRandomColor()

    colorBox.style.backgroundColor = randomColor

    colorBox.innerHTML = randomColor;

    colorBox.style.boxShadow = "0 4px 24px " + randomColor;

    colorBox.style.color = isColorDark(randomColor) ? "#ffffff" : "#000000";

})

document.addEventListener("DOMContentLoaded", function () {
    var randomColor = getRandomColor();

    colorBox.style.backgroundColor = randomColor;

    colorBox.innerHTML = randomColor;

    colorBox.style.boxShadow = "0 4px 24px " + randomColor;

    colorBox.style.color = isColorDark(randomColor) ? "#ffffff" : "#000000";
});

copyBtn.addEventListener("click", function () {
    var colorText = colorBox.innerHTML;
    navigator.clipboard
        .writeText(colorText)
        .then(function () {
            // Set message dynamically
            document.getElementById("toastBody").textContent =
                "Color copied: " + colorText;

            // Initialize and show toast
            var toastElement = document.getElementById("copyToast");
            var toast = new bootstrap.Toast(toastElement);
            toast.show();
        })
        .catch(function (error) {
            console.error("Failed to copy: ", error);
        });
});