function makeRed(){
    document.body.style.backgroundColor ='red';
}

const makeblueButton = document.getElementById("make-blue");
makeblueButton.onclick= makeBlue;
function makeBlue(){
    document.body.style.backgroundColor ='blue';
}

const MakeOrange = document.getElementById("makeOrange");
MakeOrange.onclick= makeOrange;
function makeOrange(){
    document.body.style.backgroundColor ="orange";
}

const makepink =document.getElementById("makepink");
makepink.addEventListener('click',makePink);
function makePink(){
    document.body.style.backgroundColor = "pink";
}


const makeGreen = document.getElementById("makegreen");
makeGreen.addEventListener('click', function makegreen(){
 document.body.style.backgroundColor = "green";
});

//last option
const makeBlack = document.getElementById("makeblack").addEventListener('click',function makeblack(){
    document.body.style.backgroundColor ='black';
   });





