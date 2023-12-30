const cityInput = document.getElementById('cityInput');
const submitBtn = document.getElementById('submitBtn');
const temp = document.getElementById('temp');
const temp_status = document.getElementById('temp_status');
const cityName = document.getElementById('cityName');

const getInfo = async (event) => {
  event.preventDefault();
  let cityVal = cityInput.value;
  if (cityVal === "") {
    cityName.textContent = 'Please write the city name before search';
  } else {
    try {
      let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=c1af74b247283a72def2d4f537deee1a`;
      const response = await fetch(url);

      if (response.ok) {
        const data = await response.json();
        temp.textContent = `${Math.round(data.main.temp)}°C`;
        temp_status.textContent = data.weather[0].main;
        cityName.textContent = `${data.name}, ${data.sys.country}`;
      } else {
        throw new Error('Unable to fetch weather data');
      }
    } catch (error) {
      console.error(error);
      cityName.textContent = 'Please enter the city name properly';
    }
  }
};

submitBtn.addEventListener('click', getInfo);
