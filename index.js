const tempInput=document.getElementById("tempInput");
const toFahrenheit=document.getElementById("toFahrenheit");
const toCelsius=document.getElementById("toCelsius");
const result = document.getElementById("result");

 let temp;
function convert(){
const toFahrenheit=document.getElementById("toFahrenheit");
  if(toFahrenheit.checked){
    temp=Number(tempInput.value);
    temp=(temp * 9/5) + 32;
    result.innerHTML = `${tempInput.value}&deg;C is ${temp.toFixed(1)}&deg;F`;

  }
  else if(toCelsius.checked){
    temp=Number(tempInput.value);
    temp=(temp - 32) * 5/9;
    result.innerHTML = `${tempInput.value}&deg;F is ${temp.toFixed(1)}&deg;C`;
  }
  else{
    result.textContent="Please select a conversion option.";
    
  }
}