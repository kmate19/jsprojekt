


var jatekTer = document.getElementById("jatekter");
var tabla = document.createElement("div");
var leftSide = document.createElement("div");
var kartyaBox = document.createElement("div");
var pontBox = document.createElement("div");
var korokBox = document.createElement("div");


function JatekTerBetoltese(){
    leftSide.append(pontBox);
    leftSide.append(kartyaBox);
    jatekTer.appendChild(leftSide);
    jatekTer.appendChild(tabla);
    jatekTer.appendChild(korokBox);

    //tabla.innerHTML="tabla";
    kartyaBox.innerHTML="kartya box";
    pontBox.innerHTML="pontok";
    korokBox.innerHTML="korok";

}

function KartyakTablaraGeneralas(db){
    for (let index = 0; index < 5; index++) {
        var veletlenszam = Math.floor(Math.random()*23+1)
        var kep1 = document.createElement("img")
        kep1.src = "img/"+veletlenszam+".png"
        var hely = document.getElementById(veletlenszam)
        hely.appendChild(kep1)
        
        
    }

    // var veletlenszam2 = Math.floor(Math.random()*23+1)
    // var kep2 = document.createElement("img")
    // kep2.src = "img/"+veletlenszam2+".png"
    // var hely = document.getElementById(veletlenszam2)
    // hely.appendChild(kep2)
        
    // var veletlenszam3 = Math.floor(Math.random()*23+1)
    // var kep3 = document.createElement("img")
    // kep3.src = "img/"+veletlenszam3+".png"
    // var hely = document.getElementById(veletlenszam3)
    // hely.appendChild(kep3)
        
    // var veletlenszam4 = Math.floor(Math.random()*23+1)
    // var kep4 = document.createElement("img")
    // kep4.src = "img/"+veletlenszam4+".png"
    // var hely = document.getElementById(veletlenszam4)
    // hely.appendChild(kep4)
        
    // var veletlenszam5 = Math.floor(Math.random()*23+1)
    // var kep5 = document.createElement("img")
    // kep5.src = "img/"+veletlenszam5+".png"
    // var hely = document.getElementById(veletlenszam5)
    // hely.appendChild(kep5)
}

function JatekTerElrendezese(){
    leftSide.id = "leftside";
    kartyaBox.id = "kartya";
    pontBox.id = "pontok";
    tabla.id = "tabla";
    korokBox.id = "korok";
    jatekTer.id = "jatekTer"
}


function TablaGeneralasa(){
    var k = 0;
    for (let i = 0; i < 5; i++) {
        var sordiv = document.createElement("div");
        sordiv.classList += " sordiv";
        for (let j = 0; j < 6; j++) 
        {
            var oszlopdiv = document.createElement("div");
            oszlopdiv.classList += " oszlopdiv";
            oszlopdiv.innerHTML = "";
            oszlopdiv.id=k
            k++
            sordiv.appendChild(oszlopdiv);
        }
        tabla.appendChild(sordiv);
    }
}

function Main(){
    
    JatekTerBetoltese();
    JatekTerElrendezese();
    TablaGeneralasa();
    KartyakTablaraGeneralas();
}

Main();