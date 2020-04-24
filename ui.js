class UI {
  constructor() {
    this.location = document.getElementById("w-location");
    this.desc = document.getElementById("w-desc");
    this.string = document.getElementById("w-string");
    this.details = document.getElementById("w-details");
    this.icon = document.getElementById("w-icon");
    this.timezone = document.getElementById("w-timezone");
    this.feelsLike = document.getElementById("w-feels-like");
    this.precipitation = document.getElementById("w-precipitation");
    this.wind = document.getElementById("w-wind");
  }
  paint(weather) {
    this.location.textContent = `${weather.city_name}, ${weather.state_code}, ${weather.country_code}`;
    this.desc.textContent = weather.weather.description;
    this.string.textContent = `${weather.temp} Degrees Celcius`;
    // this.icon.setAttribute("src", weather.weather.icon);
    this.timezone.textContent = `Timezone: ${weather.timezone}`;
    this.feelsLike.textContent = `Feels Like: ${weather.app_temp} Degrees Celcius`;
    this.precipitation.textContent = `Precipitation: ${weather.precip}`;
    this.wind.textContent = `Wind Speed: ${weather.wind_spd}`;
  }
}
