let weather ={
    apiKey:"33eb4fe378a2f7aa94903699b2438b20",
    fetchweather: function(city){
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" +
              city +
              "&units=metric&appid=" +
              this.apiKey
         ) .then((response) =>{
            if (!response.ok) {
              alert("No weather found.");
              throw new Error("No weather found.");
            }
            return response.json();
          })
          .then((data)=>this.displayweather(data));
    },
    displayweather: function(data){
       const{name}=data;
       const{icon,description}=data.weather[0];
       const{temp,humidity}=data.main;
       const{speed}=data.wind;
       document.querySelector(".city").innerText="Wheather in "+name;   
       document.querySelector(".icon").src ="https://openweathermap.org/img/wn/" + icon + ".png";
    document.querySelector(".description").innerText=description;
    document.querySelector(".temp").innerText=temp + "℃";
    document.querySelector(".humidity").innerText="Humidity  " + humidity +"%";
    document.querySelector(".wind").innerText="wind Speed " +speed +"km/s";
    document.querySelector(".weather").classList.remove("loading");
    document.body.style.backgroundImage ="url('https://source.unsplash.com/1600x900/?" + name +" ')";
},

    search: function(){
this.fetchweather(document.querySelector(".search-bar").value);
  },
};
document.querySelector(".search button").addEventListener("click",function(){
    weather.search();
});
document
.querySelector(".search-bar")
.addEventListener("keyup",function(event){
   if(event.key=="Enter"){
    weather.search();
   }      
});
weather.fetchweather("Delhi");