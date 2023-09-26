// Dark mode toggle functionality
const toggleModeBtn = document.getElementById("toggleMode");
const body = document.body;

toggleModeBtn.addEventListener("click", () => {
    // Toggle the "dark-mode" class on the <body> element
    body.classList.toggle("dark-mode");
    // Check if the body currently has the "dark-mode" class
    const isDarkMode = body.classList.contains("dark-mode");

    // Change the text of the button based on the current mode
    if (isDarkMode) {
        toggleModeBtn.textContent = "Switch to Light Mode";
    } else {
        toggleModeBtn.textContent = "Switch to Dark Mode";
    }
});
// Temperature conversion logic
function convertTemperature() {
    const temperatureInput = parseFloat(document.getElementById("temperature").value);
    const fromUnit = document.getElementById("fromUnit").value;
    const toUnit = document.getElementById("toUnit").value;
    let result;

    // Conversion logic here
    if (fromUnit === "celsius" && toUnit === "fahrenheit") {
        result = (temperatureInput * 9/5) + 32;
    } else if (fromUnit === "celsius" && toUnit === "kelvin") {
        result = temperatureInput + 273.15;
    } else if (fromUnit === "fahrenheit" && toUnit === "celsius") {
        result = (temperatureInput - 32) * 5/9;
    } else if (fromUnit === "fahrenheit" && toUnit === "kelvin") {
        result = (temperatureInput - 32) * 5/9 + 273.15;
    } else if (fromUnit === "kelvin" && toUnit === "celsius") {
        result = temperatureInput - 273.15;
    } else if (fromUnit === "kelvin" && toUnit === "fahrenheit") {
        result = (temperatureInput - 273.15) * 9/5 + 32;
    } else {
        result = temperatureInput; // Same unit conversion
    }

    document.getElementById("result").textContent = `Result: ${result.toFixed(2)} ${toUnit}`;
}

// Event listener for the Convert button
document.getElementById("convertBtn").addEventListener("click", convertTemperature);