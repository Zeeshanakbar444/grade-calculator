function check(){
    let totalMarks = document.querySelector("#inputNum1").value
    console.log('totalMarks;' , totalMarks)

    let obtainedMarks = document.querySelector("#inputNum2").value
    console.log('obtainedMarks;' , obtainedMarks)

    totalMarks = Number(totalMarks)
    obtainedMarks = Number(obtainedMarks)

let text = ''
let result = ''

if(isNaN(totalMarks)){
text = 'please enter a valid total marks'
}
if(isNaN(obtainedMarks)){
text = 'please enter a valid obtained marks'

}
if(totalMarks < 1){
text = 'please enter a positive number of total marks'
}
if (obtainedMarks < 0){
text = 'please enter a positive value of obtained marks'
}
if(obtainedMarks > totalMarks){
text = 'obtained marks cannot be greater than total  marks' }
if (text){
document.querySelector('#akbar').innerText = text;

} else {
document.querySelector('#akbar').innerText = "";

}
let percent = (obtainedMarks / totalMarks)  * 100 ;
console.log('percentage;' , percent)

if(percent <= 100 && percent >=95){
result = ' (A++) is Expceptional'
} else if (percent < 95 && percent >=90){
result = '(A+) is Outstanding'
} else if (percent < 90 && percent >=85){
result = "(A+ )is Excellent"
} else if (percent < 85 && percent >= 80){
result = "(B++) is very Good"
} else if (percent < 80 && percent >= 75){
result = "(B+) is Good"
} else if (percent < 75 && percent >=70 ){
result = "(B) is Fairly Good "
} else if (percent < 70 && percent >=60){
result =  " (C) is Above Average"
} else if (percent < 60 && percent >=50){
result = "(D) is Average" 
} else if (percent <50 && percent >=40){
result = "(E) is Below Average"
} else if (percent <40 && percent>=1){
result = "less than 40% is Failed"
} else{

}

document.querySelector('#zeeshan').innerText = `your percentage is ${percent}% and your grade is ${result}`;


}








