
let error = document.getElementById("error")

submit = document.getElementById("top-result")
submit.addEventListener("input", conversion)


function conversion() {
let metreCon = document.getElementById("metercon")
let kiloCon = document.getElementById("kilocon");;
let volumeCon = document.getElementById("volumecon");



let userInput = document.getElementById("top-result").value;

  let feet = (userInput*3.2808).toFixed(3);
  let meter = (userInput/3.2808).toFixed(3);
  let pound = (userInput*2.2046).toFixed(3);
  let kilo = (userInput/2.2046).toFixed(3);
  let gallon = (userInput* 0.264172).toFixed(3); 
  let liters = (userInput* 3.785412).toFixed(3);

  if ( userInput=== "" || isNaN(userInput) || userInput === undefined || userInput === null){
    error.innerHTML = "Please provide a number!"

  } else{


    error.innerHTML =""

    metreCon.innerHTML = `${userInput} meters = ${feet} feet| ${userInput} feet = ${meter} meters`
    volumeCon.innerHTML = `${userInput} liters = ${gallon} gallons| ${userInput} gallons = ${liters} liters`
    kiloCon.innerHTML = `${userInput} kilos ${pound} pounds| ${userInput} pounds = ${kilo} kilos`

  }


 
}
