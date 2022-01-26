fetch("https://restcountries.com/v3.1/all").then(function(data){
    return data.json();
}).then(function(countryData){
    var div = document.createElement("div");
    div.setAttribute("class", "container");
    var row = document.createElement("div");
    row.setAttribute("class", "row");
    // row.style.alignItems = "center";
    div.append(row);
    // div.style.height = "100px";


    // countryData.forEach(function(country){
        var card = document.createElement("div");
        card.setAttribute("class", "card col-lg-4  col-sm-12");
        row.appendChild(card);

        var cardHeader = document.createElement("div");
        cardHeader.setAttribute("class", "card-header bg-dark text-white d-flex justify-content-center");
        cardHeader.innerHTML = country.name.common;
        card.append(cardHeader);

        var cardBody = document.createElement("div");
        cardBody.setAttribute("class", "card-body");
        cardBody.innerHTML = `<img class = "mx-auto d-block" src= ${country.flags.png} height = "100px" width = "200px">
        <p class = "text-center">  Capital : ${country.capital} </p>
        <p class = "text-center">  Region : ${country.region} </p> `;
        card.append(cardBody);

        var button = document.createElement("button");
        button.setAttribute("type", "button");
        button.setAttribute("class", "btn btn-primary");
        button.addEventListener("click", function(){
     fetch(`https://api.openweathermap.org/data/2.5/weather?q=${country.name.common}&appid=888d2767d9c310a5cc337e35e6086f46`)
     .then(function(resp){ return resp.json() })
     .then(function(climate){
         alert(`The temperature of the ${country.name.common}  is  ${climate.main.temp}`);
     }).catch(function(error){
         alert("Something Went Wrong");
     })

        })
        button.innerText = "Click For Weather";
        card.append(button);
    })

    document.body.append(div);

    // .catch(function(error){
    //     console.error("error");
    // })