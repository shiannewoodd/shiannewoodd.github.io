function getCounterValue() {
    const counterSpan = document.getElementById("counter");
    return parseInt(counterSpan.textContent, 10) || 0;
  }
  
  function setCounterValue(value) {
    document.getElementById("counter").textContent = value;
  }
  
  function tickUp() {
    const current = getCounterValue();
    setCounterValue(current + 1);
  }
  
  function tickDown() {
    const current = getCounterValue();
    setCounterValue(current - 1);
  }
  
  function runForLoop() {
    const counter = getCounterValue();
    let output = "";
  
    for (let i = 0; i <= counter; i++) {
      output += i;
      if (i !== counter) output += " ";
    }
  
    document.getElementById("forLoopResult").textContent = output;
  }
  
  function showOddNumbers() {
    const counter = getCounterValue();
    let output = "";
    let first = true;
  
    for (let i = 1; i <= counter; i += 2) {
      if (!first) output += " ";
      output += i;
      first = false;
    }
  
    document.getElementById("oddNumberResult").textContent = output;
  }
  
  function addMultiplesToArray() {
    const counter = getCounterValue();
    const arr = [];
  
    if (counter >= 5) {
      let start = Math.floor(counter / 5) * 5;
      for (let i = start; i >= 5; i -= 5) {
        arr.push(i);
      }
    }
  
    console.log(arr);
  }
  
  function printCarObject() {
    const cType = document.getElementById("carType").value;
    const cMPG = document.getElementById("carMPG").value;
    const cColor = document.getElementById("carColor").value;
  
    const car = { cType: cType, cMPG: cMPG, cColor: cColor };
    console.log(car);
  }
  
  function loadCar(carNum) {
    let carData;
  
    if (carNum === 1) carData = carObject1;
    else if (carNum === 2) carData = carObject2;
    else if (carNum === 3) carData = carObject3;
    else return;
  
    document.getElementById("carType").value = carData.cType;
    document.getElementById("carMPG").value = carData.cMPG;
    document.getElementById("carColor").value = carData.cColor;
  }
  
  function changeColor(choice) {
    const p = document.getElementById("styleParagraph");
  
    if (choice === 1) p.style.color = "red";
    else if (choice === 2) p.style.color = "green";
    else if (choice === 3) p.style.color = "blue";
  }
  