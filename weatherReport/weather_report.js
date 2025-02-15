function showweatherDetails(event) {
      event.preventDefault();
     
     const city = document.getElementById('city').value;
      const apiKey = '03cd3918b13d046511be5a99a44c027c'; 
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}`;
    }

     fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
          const weatherInfo = document.getElementById('weatherInfo');
          weatherInfo.innerHTML = `<h2>Weather in ${data.name}</h2>
                                  <p>Temperature: ${data.main.temp} &#8451;</p>
                                  <p>Weather: ${data.weather[0].description}</p>`;
        })
         document.getElementById('weatherForm').addEventListener('submit',showweatherDetails );

         .catch(error => {
            console.error('Error fetching weather:', error);
            const weatherInfo = document.getElementById('weatherInfo');
            weatherInfo.innerHTML = `<p>Failed to fetch weather. Please try again.</p>`;
          });