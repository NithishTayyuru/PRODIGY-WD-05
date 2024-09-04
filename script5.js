const apiKey = ' a3e6918258654bafa67162727240409'; // Replace with your WeatherAPI key

function getWeather() {
    const location = document.getElementById('locationInput').value;
    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}`;

    fetch(url)
        .then(response => {
            console.log(response); // Log the response for debugging
            if (!response.ok) {
                throw new Error('Location not found: ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            displayWeather(data);
        })
        .catch(error => {
            console.error('Error:', error); // Log the error for debugging
            document.getElementById('weatherDisplay').innerText = error.message;
        });
}

function displayWeather(data) {
    const weatherDisplay = document.getElementById('weatherDisplay');
    const temperature = data.current.temp_c; // Temperature in Celsius
    const weatherDescription = data.current.condition.text; // Weather condition text
    const cityName = data.location.name; // City name

    weatherDisplay.innerHTML = `
        <h2>Current Weather in ${cityName}</h2>
        <p>Temperature: ${temperature}°C</p>
        <p>Condition: ${weatherDescription}</p>
    `;
}
