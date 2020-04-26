class UI {
  constructor() {
    this.location = document.getElementById("w-location");
    this.desc = document.getElementById("w-desc");
    this.string = document.getElementById("w-string");
    this.details = document.getElementById("w-details");
    this.icon = document.getElementById("w-icon");
    // this.sunrise = document.getElementById("w-sunrise");
    // this.sunset = document.getElementById("w-sunset");
    this.snow = document.getElementById("w-snow");
    this.cloudCoverage = document.getElementById("w-cloud-coverage");
    this.humidity = document.getElementById("w-humidity");
    this.feelsLike = document.getElementById("w-feels-like");
    this.precipitation = document.getElementById("w-precipitation");
    this.wind = document.getElementById("w-wind");
  }
  paint(weather) {
    this.location.textContent = `${weather.city_name}, ${weather.state_code}`;
    this.desc.textContent = weather.weather.description;
    this.string.innerHTML = `${weather.temp} &#8457;`;
    // this.icon.setAttribute("src", weather.weather.icon);
    // this.sunrise.textContent = `Sunrise: ${weather.sunrise}`;
    // this.sunset.textContent = `Sunset: ${weather.sunset}`;
    this.snow.textContent = `Snow: ${weather.snow}`;
    this.cloudCoverage.textContent = `Cloud Coverage: ${weather.clouds}%`;
    this.humidity.textContent = `Relative Humidity: ${weather.rh}%`;
    this.feelsLike.innerHTML = `Feels Like: ${weather.app_temp} &#8457;`;
    this.precipitation.textContent = `Precipitation: ${weather.precip}`;
    this.wind.textContent = `Wind: ${weather.wind_spd} mph ${
      weather.wind_cdir_full.charAt(0).toUpperCase() +
      weather.wind_cdir_full.slice(1)
    }`;
  }
}
