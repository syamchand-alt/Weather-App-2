let inputEle = document.getElementById("location-input");
let tempEle = document.getElementById("temp-value");
let locEle = document.getElementById("location");
let weatherdescEle = document.getElementById('Weather-desc');
let btnEle = document.getElementById("btn");
let icon = document.getElementById("icon");

const apikey = 'e7fba48a8d2b033c2f5700229af654c8';

btnEle.onclick = function() {
    if (inputEle.value === "") {
        alert("Please enter a location.");
    } else {
        let loc = inputEle.value;
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=${apikey}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const { name } = data;
                const { feels_like } = data.main;
                const { description, icon: iconCode } = data.weather[0];
                
                tempEle.innerText = Math.floor(feels_like - 273);
                locEle.innerText = name;
                weatherdescEle.innerText = description;
    
                

            })
            .catch(() => {
                alert("Enter a valid location");
            });

        inputEle.value = "";
    }
};
