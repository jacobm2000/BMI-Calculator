var btn = document.getElementById("calc-btn")
var bmiOut = document.getElementById("bmi")
var height = document.getElementById("height")
var ft = document.getElementById("ft")
var inch = document.getElementById("in")
var heightCM = document.getElementById("heightCM")
var bmiClass = document.getElementById("bmi-class")
var unitSelect = document.getElementById("units")
var weightLabel = document.getElementById("weightLabel")
var heightMetric = document.getElementById("hm")
var heightImperial = document.getElementById("hi")

function units() {
    if (unitSelect.value === "Imperial") {
        weight.value = ""
        heightCM.value = ""
        heightMetric.style.display = "none"
        weightLabel.textContent = "Weight (lb)"
        heightImperial.style.display = "inherit"

    }
    if (unitSelect.value === "Metric") {
        weight.value = ""
        ft.value = ""
        inch.value = ""
        heightMetric.style.display = "inherit"
        weightLabel.textContent = "Weight (Kg)"
        heightImperial.style.display = " none"


    }

}


function calc() {
    //check to see if inputs are numeric and not empty
    if (unitSelect.value === "Imperial") {
        if (isNaN(weight.value) || weight.value === "" || isNaN(ft.value) || ft.value === "" || isNaN(inch.value) || inch.value == "") {
            alert("at least one of your values is not a number please enter only numbers")
            return
        }
        else {
            let tinch = (parseInt(ft.value) * 12) + parseFloat(inch.value)
            var bmi = ((parseFloat(weight.value) / tinch) / 71) * 703
        }
    }
    else {
        if (isNaN(weight.value) || weight.value === "" || isNaN(heightCM.value) || heightCM.value === "") {
            alert("at least one of your values is not a number please enter only numbers")
            return
        }
        else {
            let cm = (parseFloat(heightCM.value))
            var bmi = ((parseFloat(weight.value) / cm) / cm) * 10000
        }
    }
    bmiOut.textContent = "Your BMI is: " + bmi.toFixed(2)

    if (bmi < 18.5) {
        bmiClass.textContent = "BMI Catagory: Underweight"
    }
    else if (bmi > 18.5 && bmi <= 24.99) {
        bmiClass.textContent = "BMI Catagory: Normal"
    }
    else if (bmi > 24.99 && bmi <= 29.99) {
        bmiClass.textContent = "BMI Catagory: Overweight"
    }
    else if (bmi > 29.99 && bmi < 34.99) {
        bmiClass.textContent = "BMI Catagory: Obese"
    }
    else if (bmi > 34.99) {
        bmiClass.textContent = "BMI Catagory: Severely Obese"
    }



}





unitSelect.addEventListener("change", units)
btn.addEventListener("click", calc)