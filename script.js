function populatedcountry(){
  const countryEl = document.getElementById("country").value;
  const stateEl = document.getElementById("state");
  stateEl.innerHTML = `<option value=""> Select a state</option>`;

  const options = {
    india : ["Karnataka", "Delhi", "Telangana", "Maharastra" ],
    usa : ["california", "loss angels", "sydny"],
    canada : ["dafdsf", "sdfdsfsdf", "afasfasf"]
  }

  if (options[countryEl]){
    options[countryEl].forEach((states) =>{
      const option = document.createElement("option");
      option.textContent = states;
      stateEl.appendChild(option);
    

  })
  }
}

