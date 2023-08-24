const inputs = document.querySelectorAll(".panel input");
const c = document.querySelector("#celsius");
const f = document.querySelector("#fahrenheit");
const k = document.querySelector("#kelvin");

inputs.forEach(input => {
    input.addEventListener("input", e => {
        const unit = e.target.id;
        const v = parseFloat(e.target.value); // Use parseFloat instead of parseInt for decimal values

        if (unit === "celsius") {
            f.value = ((v * 1.8) + 32).toFixed(4);
            k.value = (v + 273.15).toFixed(4);
        } else if (unit === "fahrenheit") {
            c.value = ((v - 32) * 5 / 9).toFixed(4);
            k.value = (((v - 32) * 5 / 9) + 273.15).toFixed(4);
        } else if (unit === "kelvin") {
            c.value = (v - 273.15).toFixed(4);
            f.value = ((v - 273.15) * 9 / 5 + 32).toFixed(4);
        }
    });
});
