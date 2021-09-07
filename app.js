// Selecting Html Tags
const inp = document.querySelector("input");
const btn = document.querySelector("button");
const output = document.querySelector(".output");
const body = document.querySelector("body");
// selecting tags
const p1 = document.querySelector(".p1");
const p2 = document.querySelector(".p2");
const p3 = document.querySelector(".p3");
const p4 = document.querySelector(".p4");
const p5 = document.querySelector(".p5");
const p6 = document.querySelector(".p6");


// backgroung imgae changes using function call

function myfun(res, temp) {
    if (temp <= 0) {
        body.style.backgroundImage = "url('https://images.unsplash.com/photo-1478719059408-592965723cbc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=712&q=80')";
    } else if (res == 'overcast clouds' || res == 'scattered clouds' || res == 'broken clouds') {
        body.style.backgroundImage = "url('https://images.unsplash.com/photo-1483977399921-6cf94f6fdc3a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=793&q=80')";
    } else if (res == 'clear sky') {
        body.style.backgroundImage = "url('https://images.unsplash.com/photo-1595865749889-b37a43c4eba4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1983&q=80')";
    } else if (res == 'light rain' || res == 'moderate rain' || res == 'heavy rain' || res == 'rain') {
        body.style.backgroundImage = "url('https://images.unsplash.com/photo-1519692933481-e162a57d6721?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGhlYXZ5JTIwcmFpbnxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')";
    } else if (res == 'haze') {
        body.style.backgroundImage = "url('https://images.unsplash.com/photo-1522163723043-478ef79a5bb4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=813&q=80')";
    } else {
        body.style.backgroundImage = "url('https://images.unsplash.com/photo-1553901753-215db344677a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80')"
    }


}


// Start Processing
btn.addEventListener("click", (e) => {
    let cityName = inp.value;

    if (cityName != "") {
        output.style.display = "block";
        // Declaration of Some value
        let description;
        let temp;
        let tempMin, tempMax, tempAll;
        let humidity;
        let time = new Date().toDateString();
        // fetching data from Api

        let api = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=57d089aa08a6b287669bca5a71b82149`
        fetch(api)
            .then((result) => {
                return result.json();
            })
            .then((data) => {

                // Getting Data Values

                description = data.weather[0].description;
                temp = data.main.temp;
                tempMin = data.main.temp_min;
                tempMax = data.main.temp_max;
                humidity = data.main.humidity;



                // Some Modification
                temp = temp - 273.15;
                temp = Math.round(temp);

                // function call

                myfun(description, temp);

                temp = temp + "°C";


                tempMin = tempMin - 273.15;
                tempMin = Math.round(tempMin);
                tempMin = tempMin + "°C";

                tempMax = tempMax - 273.15;
                tempMax = Math.round(tempMax);
                tempMax = tempMax + "°C";


                tempAll = tempMin + " (min) /" + tempMax + " (max)";

                humidity = "Humidity: " + humidity + "%";


                // Appending Data
                p1.innerText = cityName;
                p2.innerText = time;
                p3.innerText = temp;
                p4.innerText = tempAll;
                p5.innerText = humidity;
                p6.innerText = description;


            })
            .catch((err) => {
                alert(err);
            });



        // Setting attribute For designing Purpose
        p1.setAttribute("class", "p1");
        p2.setAttribute("class", "p1");
        p3.setAttribute("class", "p1");
        p6.setAttribute("class", "p1");
        p3.setAttribute("id", "newOne");



        // clearing input

        inp.value = "";

    }


});