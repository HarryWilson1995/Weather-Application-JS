class Weather {
  constructor(city, state) {
    this.apiKey = "47f305e987b04dc5888192c9d95f22d9";
    this.city = city;
    this.state = state;
  }

  // Fetch Weather from API
  async getWeather() {
    const response = await fetch(
      `https://api.weatherbit.io/v2.0/current?city=${this.city},${this.state}&key=${this.apiKey}&units=I`
    );

    const responseData = await response.json();

    return responseData.data[0];
  }

  // Change weather location
  changeLocation(city, state) {
    this.city = city;
    this.state = state;
  }
}
