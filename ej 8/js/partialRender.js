document.addEventListener("DOMContentLoaded", function () {
    let btnCalc = document.getElementById("calculadora");
    let btnPi = document.getElementById("pi");
    let btnDev = document.getElementById("developer");
    let mainDiv = document.getElementById("mainDiv");


    btnPi.addEventListener("click",function (){ myfetch ('php/pi.php')});
    btnCalc.addEventListener("click",function (){ myfetch('calculadora.html')});
    btnDev.addEventListener("click",function (){ myfetch('php/dev.php')});


    function myfetch(url) {
        fetch(url).then(function(response){
            if (response.ok) {
                response.text().then(function(response){
                    mainDiv.innerHTML=response;
                })
            }
            else{
                console.log(response.statusText);
            }
        })
    }
})