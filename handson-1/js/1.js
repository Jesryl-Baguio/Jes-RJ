

let score = parseFloat(prompt("What is your score")) ;

if ((score >= 90) && (score <= 100)) {
    console.log ("Congratulations you are top notch");
    document.getElementById("result").innerHTML = `${score} - Congratulations you are top notch`;
}
 else if ((score >= 80) && (score <= 90)) {
    console.log ("You are doing great");
    document.getElementById("result").innerHTML = ` ${score} - You are doing great`;
 } else if ((score >= 70) && (score <= 80)) {
     console.log ( "You are doing well");
     document.getElementById("result").innerHTML = `${score} - You are doing well`;
 } else if ((score >= 60) && (score <= 69)) {
    console.log ("You need to improve");
    document.getElementById("result").innerHTML = ` ${score} - You need to improve`;
 } else if ((score >= 0) && (score <=59 )) {
    console.log ("Keep Pushing");
    document.getElementById("result").innerHTML = ` ${score} - Keep Pushing`;
 } 
