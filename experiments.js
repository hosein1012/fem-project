const resultDiv = document.querySelector(".resultDiv");
const numberButtonList = document.querySelectorAll(".numberButton");
const operatorButtonList = document.querySelectorAll(".operatorButton")
const equalButton = document.querySelector(".equalButton")
const clearButton = document.querySelector(".clearButton")
const backSpaceButton = document.querySelector(".backSpaceButton")

let resultDivVal = 0
let operation = ""

for(let i=0 ; i<numberButtonList.length; i++){
    const button = numberButtonList[i];
    button.addEventListener("click" , function(e) {
        if ( resultDiv.textContent == '0'){
            resultDiv.textContent = button.textContent;
        }
        else{
            resultDiv.textContent += button.textContent
        }

    })
}

for(let i=0 ; i<operatorButtonList.length ; i++){
    const button = operatorButtonList[i]
    button.addEventListener("click" , function(e){
        let tmp = resultDiv.textContent
        tmp = Number(tmp)
        resultDivVal = tmp
        resultDiv.textContent = 0
        operation = button.textContent
    })
}

equalButton.addEventListener("click" , function(e){
    let tmp = resultDiv.textContent
    tmp = Number(tmp)
    if (operation=="+"){
        resultDivVal += tmp
    }
    else if( operation == "-"){
    resultDivVal -= tmp
    }
    else if( operation == "×"){
        resultDivVal *= tmp
    }
    else if(operation == "÷"){
        resultDivVal /= tmp
    }
    resultDiv.textContent = resultDivVal
})

clearButton.addEventListener("click" , function(e){
    resultDiv.textContent = "0"
})

backSpaceButton.addEventListener("click" , function(e){
    tmp = resultDiv.textContent
    tmp = tmp.substring(0 , tmp.length - 1)
    resultDiv.textContent = tmp
})