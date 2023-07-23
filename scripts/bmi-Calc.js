var btn= document.getElementById("calc-btn")
var bmiOut=document.getElementById("bmi")
var height=document.getElementById("height")
var ft=document.getElementById("ft")
var inch=document.getElementById("in")
var bmiClass=document.getElementById("bmi-class")

function calc(){
    //check to see if inputs are numeric and not empty
    if(isNaN(weight.value)||weight.value===""|isNaN(ft.value)|| ft.value===""|| isNaN(inch.value)||inch.value==undefined){
        alert("at least one of your values is not a number please enter only numbers")
    }
    else{
        let tinch=(parseInt(ft.value)*12)+parseFloat(inch.value)
        let bmi=((parseFloat(weight.value)/tinch)/71)*703
        bmiOut.textContent="Your BMI is: "+bmi.toFixed(2)
        if(bmi<18.5){
            bmiClass.textContent="BMI Catagory: Underweight"
        }
        else if(bmi>18.5 && bmi<=24.99){
            bmiClass.textContent="BMI Catagory: Normal"
        }
        else if(bmi>24.99 && bmi<=29.99){
            bmiClass.textContent="BMI Catagory: Overweight"
        }
        else if(bmi>29.99 && bmi<34.99){
            bmiClass.textContent="BMI Catagory: Obese"
        }
        else if( bmi>34.99){
            bmiClass.textContent="BMI Catagory: Severely Obese"
        }
        
    }
  


}



btn.addEventListener("click",calc)