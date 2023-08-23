/*const image = document.querySelector ('img');
  fetch('https://api.giphy.com/v1/gifs/translate?api_key=YOUR_KEY_HERE&s=kigali', {mode: 'cors'})
     .then(function(response) {
      return response.json();
    })
    .then(function(response) {
      img.src = response.data.images.original.url;
    }); 

const myBody = document.querySelector('body');
const myHeader = document.createElement('h1');
const myP1 = document.createElement('p');
const myCity = document.createElement('city');
const mySearch = document.createElement ('search');

//let city ='';//


myHeader.textContent = "WeatherAPI";
myHeader.style.color = "white";
myP1.textcontent = "search your city's weather data";
myP1.style.color = "white";
myCity.style = "backgroundColour: lightBlue  border= 1px black solid ";
mySearch.textContent = "search";

myHeader.appendChild(myP1);
myHeader.appendChild(myCity);
myHeader.appendChild(mySearch);

myBody.appendChild(myHeader);

/*function (city){
if (city = string);
return name;
search.addEventListener ('click () => s
 else (city = number);
prompt error =" Enter valid name of the city"
}*/

//the above lines can't be considered by anyone except me//

const apiKey = "b9f5a6337d89f4ebc99c5810790df141";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox= document.querySelector(".search input");
const searchBtn= document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city){
      const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
      var data= await response.json();

    

      document.querySelector(".city").innerHTML = data.name;
      document.querySelector(".temp").innerHTML = Math.round (data. main.temp) + "°C";
      document.querySelector(".humidity").innerHTML = data. main.humidity + "%";
      document.querySelector(".wind").innerHTML = data. wind.speed + " km/h"; 

      if(data.weather[0].main == Clouds){
        weatherIcon.href= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVcw-q_HK0qM_qQxctlfDMb5o9ftpb5kiz2w&usqp=CAU"
      }
     else if (data.weather[0].main == Clear){
        weatherIcon.src= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3Vv22vnZTUdm5Wbjn2uC4d6JSOF8EpSoHCA&usqp=CAU"
      }
      else if (data.weather[0].main == Rain){
        weatherIcon.src ="https://png.pngtree.com/png-vector/20190719/ourlarge/pngtree-rain-icon-png-image_1558221.jpg"
      }
      else if (data.weather[0].main == drizzle){
        weatherIcon.src = "https://cdn-icons-png.flaticon.com/512/1113/1113720.png"
      }
      else if(data.weather[0].main == Mist){
        weatherIcon.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTJs0ymRJAI_s8803MXK9SVpOavLpB127k5w&usqp=CAU"
      }

     // document.querySelector(".weather").style.display = "block";//
}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})

checkWeather();