  fetch("https://restcountries.com/v3.1/all").then(function(data){
    data.json().then(function(countrydata){
        console.log(countrydata);
    
        function weatherdata(capital){
          fetch("https://api.openweathermap.org/data/2.5/weather?q="+capital+"&appid=888d2767d9c310a5cc337e35e6086f46").then(async function(data){
        
          var data=await data.json();
          // alert(data);
        alert(JSON.stringify(data.main));
        console.log(data);
          }).catch(function(error){
            console.log(error)
            alert("something went wrong");
          })
        };
    
    
    
    
      for(let country of countrydata){
        let sec=document.createElement("section");
        sec.className="col-xxl-3 col-lg-4 col-md-6 col-sm-12";
        let capital=country.capital;
        
      sec.innerHTML=`<div id="id1"class="card style="width: 18rem;">
      <h5 class="card-title card-header">${country.name.common}</h5>
      <img src=${country.flags.png} class="card-img-top" alt="country flag">
      <div id="id2"class="card-body">
      
        <p class="card-text"><span>Capital :</span>${country.capital}</p>
        <p class="card-text"><span>Region :</span>${country.region}l</p>
        <p class="card-text"><span>Country code :</span>${country.fifa}</p>
        <p class="card-text"><span>Latlng :</span>${country.latlng}</p>
    <button id=${capital}>click<button>
    
    
       
      </div>
    </div>
    `
    {/* <a href="#" onclick="weatherdata(${capital})" class="btn btn-primary">Click for Weather</a> */}
    
    // const validateRequest = () => weatherdata(button.id);
    // const button = document.createElement('button');
    // button.setAttribute("id",capital);
    // button.onclick = validateRequest;
    // button.innerHTML = 'Click for Weather';
    
    document.getElementById(capital).addEventListener("click",function demo(){
      weatherdata(capital)
    })
    
    // var div1=document.getElementById("id1");
    // var div2=document.getElementById("id2");
    
    // div2.append("button);
    // div1.append(div2);
    // sec.append(div1);
    
    
    // document.body.appendChild(button);
    document.body.appendChild(sec);
    
    }
    
      
    });
      })
      .catch(function(error){
        alert("something went wrong");
    console.log(error);
      })
      
    