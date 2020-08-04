const key = 'V0K7jcA6YFJk6O6PGfHVsTF9MZHJPeFX';

//city information

const getCity =  async (city) => {
    const url = 'http://dataservice.accuweather.com/locations/v1/cities/search'
    const apikey = `?apikey=${key}&q=${city}`;

    const response = await fetch(url+apikey);
    const data = await response.json();
    return data[0];

}

// weather info for the city

const getWeather  = async (locationkey) => {
    const url = 'http://dataservice.accuweather.com/currentconditions/v1/';
    const apikey = `${locationkey}?apikey=${key}`;
    const response = await fetch(url + apikey);
    const data = await response.json();

    return data[0];
}

// getCity('london').then((data)=>{
//     return getweather(data.Key);
// }).then((data)=>{console.log(data)});




