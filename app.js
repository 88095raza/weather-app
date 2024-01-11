const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'e309f54c11msh772d8dcd6ebe847p198ac9jsnb0421c02b898',
		'X-RapidAPI-Host': 'foreca-weather.p.rapidapi.com'
	}
};
const getWeather=(city)=>{
	cityName.innerHTML=city
fetch('https://foreca-weather.p.rapidapi.com/location/search/mumbai?lang=en&country=in'+city, options)
	.then(response => response.json())
	.then((response) => {


		console.log(response)

		feels_like.innerHTML = response.feels_like
		humidity.innerHTML = response.humidity
		max_temp.innerHTML = response.max_temp
		min_temp.innerHTML = response.min_temp
		temp.innerHTML = response.temp
		wind_degrees.innerHTML = response.wind_degrees
		wind_speed.innerHTML = response.wind_speed

	})
	.catch(err => console.error(err));
}
submit.addEventListener("click",(e) =>{
	e.preventDefault()
	getWeather(city.value)
})
getWeather("delhi")




// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'e309f54c11msh772d8dcd6ebe847p198ac9jsnb0421c02b898',
// 		'X-RapidAPI-Host': 'foreca-weather.p.rapidapi.com'
// 	}
// };
// const getWeather=(city)=>{
// 	cityName.innerHTML=city
// fetch('https://foreca-weather.p.rapidapi.com/location/search/mumbai?lang=en&country=in'+city, options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));



