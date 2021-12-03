const input = document.getElementById("input")
const form = document.getElementById("form")
const city = document.getElementById("city")
const temp = document.getElementById("temp")
const stat = document.getElementById("stat")
const minmax = document.getElementById("min-max")
const url = "https://api.openweathermap.org/data/2.5/weather?q="
const apiKey = "00a4d13c0dca3ecedb4e6f32a3c3c355"

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    getWeatherInfo(input.value);
})

const getWeatherInfo = (cityName)=>{
    let query = `${url}${cityName}&appid=${apiKey}&units=metric&lang=en`
    fetch(query)
    .then(response => {
        return response.json()
    })
    .then(resultWeather)

}

const resultWeather = (result)=>{
    console.log(result)
    city.innerText=`${result.name}, ${result.sys.country}`;
    temp.innerText=`${Math.round(result.main.temp)}°C`;
    stat.innerText=`${result.weather[0].main}`;
    minmax.innerText= `${Math.round(result.main.temp_min)}°C / ${Math.round(result.main.temp_max)}`
}



