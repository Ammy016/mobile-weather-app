const cityform = document.querySelector('form');
const UI = document.querySelector('.UI');
const img = document.querySelector('.card-img-top');
const icon = document.querySelector('.icon');
const card = document.querySelector('.card');


const  updateCity = async (city) => {

    const citydets = await getCity(city);
    const weatherdets = await getWeather(citydets.Key);
    return {
        citydets:citydets , 
        weatherdets : weatherdets
    };

};

const updateUI =  async (data) => {

    const city = data.citydets.EnglishName;
    console.log(city);
    const weather = data.weatherdets.WeatherText;

    const src = data.weatherdets.IsDayTime ? './img/day.svg':'./img/night.svg' ;
    img.setAttribute('src',src);
    const weathericon = `./img/icons/${data.weatherdets.WeatherIcon}.svg` ;
    icon.setAttribute('src',weathericon);


    UI.innerHTML = `<h4>${city}</h4>
    <h5 class="text-muted">${weather}</h5>
    <span>${data.weatherdets.Temperature.Metric.Value}</span>
    <span>&deg;C</span>`;

    if(card.classList.contains('d-none')){
        card.classList.remove('d-none');
    }

    

}

cityform.addEventListener('submit',(e)=>{

e.preventDefault();
const city = cityform.cityname.value.trim();
cityform.reset();


updateCity(city)
.then( data => {
    updateUI(data);
}).catch(err => console.log(err));


 

});