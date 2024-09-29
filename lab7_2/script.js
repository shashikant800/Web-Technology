const apiKey = "548d292074d1aa2d4fab63f41818f7fb"; 

const placeInput = document.getElementById("placeInput");
const getWeatherButton = document.getElementById("getWeatherButton");
const weatherInfo = document.getElementById("weatherInfo");

getWeatherButton.addEventListener("click", () => {
    const place = placeInput.value;

    
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=${apiKey}&units=metric`)
        .then(response => response.json())
        .then(data => {
            const temperature = data.main.temp;
            weatherInfo.textContent = `Temperature in ${place} is ${temperature}°C`;
        })
        .catch(error => {
            console.error("Error fetching weather data:", error);
            weatherInfo.textContent = "Error fetching weather data.";
        });
});