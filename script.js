document.addEventListener("DOMContentLoaded", function () {
    const display = document.getElementById("display");
    const buttons = document.querySelectorAll("button");

    buttons.forEach((button) => {
        button.addEventListener("click", function () {
            if (button.innerText === "=") {
                try {
                    display.value = eval(display.value);
                } catch (error) {
                    display.value = "Erro";
                }
            } else if (button.innerText === "C") {
                display.value = "";
            } else {
                display.value += button.innerText;
            }
        });
    });
});
