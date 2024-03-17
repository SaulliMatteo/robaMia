const p = document.querySelectorAll("p");

let i = 0;
function appari(){
    if(i<p.length){
        p[i].style.display = "block"
        i++;
    }
    else{
        clearInterval(intervalId);
    }
}

const intervalId = setInterval(appari, 1000)
