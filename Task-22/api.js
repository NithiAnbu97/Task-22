fetch("https://restcountries.com/v3.1/all").then(function(data){
    return data.json()
})
.then(function(countryList){
    var ul= document.createElement("ul");
    countryList.forEach(function(country){
        var li= document.createElement("li");
        li.innerText = country.name.common + " - " + countryList.population;
        ul.appendChild(li);

    })
        
    document.body.appendChild(ul)
})
.catch(function(error){
    console.log(error);
})