const apiKey = "93b9148147be0712dd20773507e99af6"; // Replace with your OpenWeatherMap API key
const weatherInfoDiv = document.getElementById("details");

async function getWeather(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    // Show a loading message
    weatherInfoDiv.innerHTML = `<p style="color: #007bff;">Fetching weather data...</p>`;

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("City not found");
        }

        const data = await response.json();
        displayWeather(data, city);
    } catch (error) {
        weatherInfoDiv.innerHTML = `<p style="color: red;">Error: ${error.message}</p>`;
    }
}

function displayWeather(data, city) {
    const temperature = data.main.temp;
    const description = data.weather[0].description;
    const windSpeed = data.wind.speed;

    weatherInfoDiv.innerHTML = `
        <h3>Weather in ${city}</h3>
        <p><strong>Temperature:</strong> ${temperature}°C</p>
        <p><strong>Description:</strong> ${description}</p>
        <p><strong>Wind Speed:</strong> ${windSpeed} m/s</p>
    `;
}
