// code your solution here
function saturdayFun(activity = "roller-skate") {
 return `This Saturday, I want to ${activity}!`
}
saturdayFun();
saturdayFun("read a book");

function mondayWork(activity="go to the office"){
 return `This Monday, I will ${activity}.`
}
mondayWork();
mondayWork("work from home")

function wrapAdjective(wraper="*"){
    return function (adjective="special"){
    return `You are ${wraper}${adjective}${wraper}!` 
};}
wrapAdjective("*")("a hard worker");