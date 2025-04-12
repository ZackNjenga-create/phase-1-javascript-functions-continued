// code your solution here

razzle()
function razzle(lawyer = "Billy", target = "'em"){
    console.log(`${lawyer} razzle-dazzles ${target}!`);
}

// const button = document.getElementById("button")
// button.addEventListener("click", function (){
//     console.log("Yet more razzling")
// })
// const fn = function (){
//         console.log("Yet more razzling");
//     };
function outer(greeting, msg = "It's a fine day to learn"){
    const innerFunction = function(name, lang="Pyhton"){
        return `${greeting}, ${name}, ${msg} ${lang}`
    }
return innerFunction("student", "Javascript")
}
outer("Hello")
(function (baseNumber){
    return baseNumber + 3;
})(2);

(function(){
    console.log("Yet more razzling");
});

function saturdayFun(activity = "roller-skate"){
    return `This Saturday, I want to ${activity}!`;
}



function mondayWork(activity = "go to the office"){
   return `This Monday, I will ${activity}.`;
}

function wrapAdjective(wrap = "*"){
    return function (adjective = "special"){
        return `You are ${wrap}${adjective}${wrap}!`;
    }
    
}