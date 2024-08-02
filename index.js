var random1 = Math.random()
random1 = (random1 * 6) + 1
random1 = Math.floor(random1)


var imagesource = "images/dice"+random1+".png"
document.querySelectorAll("img")[0].setAttribute("src" ,imagesource)

var random2 = Math.random()
random2 = (random2 * 6) + 1
random2 = Math.floor(random2)

var imagesource1 = "images/dice"+random2+".png"
document.querySelectorAll("img")[1].setAttribute("src" ,imagesource1)


if(random1 === random2){
document.querySelector ("h1").innerHTML = "Draw"   
} else if(random1 > random2){
    document.querySelector ("h1").innerHTML ="player 2 wins "
}
if(random1 < random2){
    document.querySelector ("h1").innerHTML ="player 1 wins "  
}
else{
    
}