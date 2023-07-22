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
        bmiOut.textContent="your bmi is: "+bmi.toFixed(2)
        if(bmi<18.5){
            bmiClass.textContent=" Your Bmi is: Underweight"
        }
        else if(bmi>18.5 && bmi<=24.99){
            bmiClass.textContent=" Your Bmi is: Normal"
        }
        else if(bmi>24.99 && bmi<=29.99){
            bmiClass.textContent=" Your Bmi is: Overweight"
        }
        else if(bmi>29.99 && bmi<34.99){
            bmiClass.textContent=" Your Bmi is: Obese"
        }
        else if( bmi>34.99){
            bmiClass.textContent=" Your Bmi is: Severely Obese"
        }
        
    }
  


}



btn.addEventListener("click",calc)