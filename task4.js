let weather={
   apikey:"ecbb3886f8fe3f8258d1cae670cecde",
   fetchweather:function(city){
    fetch(
        "https://api.openweathermap.org/data/2.5/weather?q="+city+"&units=metrics&appid="+
        + city
        + "&units=metric&appid="
        + apikey
    )
    .then((response)=>response.json())
    .then((data)=>console.log(data));
},
displayweather:function(data){
    const{name}=data;
    const{icon,description}=data.weather
    const{temp,humidity}=data.main;
    const{speed}=data.wind;
    console.log(name,icon,description,temp,humidity,speed);
    documentTimeline.queryselector(".city").innertext="weather in"+name;
    document.queryselector(".icon").src=
    "https://openweathermap.org./img/wn/"+icon+".png";
    document.queryselecor(".description").innertext=description;
    document.queryselector(",temp").innertext=temp+"c";
    document.queryselector(".humidity").innertext=
    "humidity:"+humidity+"%";
    humidity.queryselector("wind").innerText=
    "wind speed:"+speed+"km/h";
    document.queryselector(".weather").classliast.remove("loading");
    document.body.style.backgroundimage="url('https://source.unsplash.com/1600*900/?"+name+"')"
},
search:function(){
    this.fetchweather(document.queryselector(".search-bar"))
},
};

document.queryselector(".search button").addEventListener("click",function(){
weather.search();
});
document
.queryselector(".search-bar")
.addEventListener("keyup",function(event){
if (event.key=="enter"){
    weather.search();
}
});
weather.fetchweather("denver");

