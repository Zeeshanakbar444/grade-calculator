let percentage = prompt("Enter your percentage")


if(percentage > 100){
    console.log("no found result")
    alert("no found result")
} else if(percentage >= 95){
    console.log(" your grade is A++ Exceptional")
    alert(" your grade is A++ Exceptional")
} else if (percentage >=90){
    console.log(" your grade is A+ Outstanding")
    alert(" your grade is A+ Outstanding")
} else if (percentage >=85){
    console.log("your grade is A+ Excellent")
    alert(" your grade is A+ Excellent")
} else if(percentage >=80){
    console.log(" your grade is B++ very Good")
    alert(" your grade is B++ very Good")
} else if(percentage >=75){
    console.log("your grade is B+ Good")
    alert("your grade is B+ Good")
} else if(percentage >=70){
    console.log("your grade is B Fairly Good")
    alert("your grade is B Fairly Good")
} else if (percentage >=60){
    console.log(" your grade is C Above Average")
     alert("your grade is C Above Average")
} else if (percentage >=50){
    console.log(" your grade is D Average")
   alert("your grade is D Average")
} else if (percentage >= 40){
    console.log("your grade is E Below Average")
    alert("your grade is E Below Average")
} else{
    console.log("faild")
    alert("failed")
}
