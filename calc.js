//display numbers in text box



// function displayNum(num){
//     result.value+=num//result.value=result.value+num
    

// }

var displayNum=((num)=>{
    result.value+=num//result.value=result.value+num
})

//clear numbers in text box

// function clearBox(){
//     result.value=null
// }

var clearBox=(()=>{
    result.value=null
})

//evaluate expression


function Eval(){
    //  result.value=expr
    //  eval(expr)=output
    //  result.value=output

    result.value=eval(result.value)
}

//delete last number in text box


function Del(){
    result.value=result.value.slice(0,-1)
}