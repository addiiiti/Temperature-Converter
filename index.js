const tempInput=document.getElementById("tempInput");
const toFahrenheit=document.getElementById("toFahrenheit");
const toCelsius=document.getElementById("toCelsius");
const result = document.getElementById("result");

function convert(){
  let temp=Number(tempInput.value.trim());
  if (temp > 10000) {
      result.textContent = "Please enter a realistic temperature.";
      return;
  }
  if(toFahrenheit.checked){ 
    temp=(temp * 9/5) + 32;
    result.innerHTML = `${tempInput.value}&deg;C is ${temp.toFixed(2)}&deg;F`;

  }
  else if(toCelsius.checked){

    temp=(temp - 32) * 5/9;
    result.innerHTML = `${tempInput.value}&deg;F is ${temp.toFixed(1)}&deg;C`;
  }
  else{
    result.textContent="Please select a conversion option.";
  }
}