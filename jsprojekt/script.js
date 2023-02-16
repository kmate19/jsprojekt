


var jatekTer = document.getElementById("jatekter")
var tabla = document.createElement("div")
var leftSide = document.createElement("div")
var kartyaBox = document.createElement("div")
var pontBox = document.createElement("div")
var korokBox = document.createElement("div")

var helyt=new Array()
var t2=new Array()
var t3=new Array();

function randomsz(felso,also) {
    return Math.floor(Math.random()*felso+also)
}

function JatekTerBetoltese(){
    leftSide.append(pontBox)
    leftSide.append(kartyaBox)
    jatekTer.appendChild(leftSide)
    jatekTer.appendChild(tabla)
    jatekTer.appendChild(korokBox)

    //tabla.innerHTML="tabla";
    kartyaBox.innerHTML="kartya box"
    pontBox.innerHTML="pontok"
    korokBox.innerHTML="korok"

}

function JatekTerElrendezese(){
    leftSide.id = "leftside"
    kartyaBox.id = "kartya"
    pontBox.id = "pontok"
    tabla.id = "tabla"
    korokBox.id = "korok"
    jatekTer.id = "jatekTer"
}


function TablaGeneralasa(){
    var k=0
    for (let i = 0; i < 5; i++) {
        var sordiv = document.createElement("div")
        sordiv.classList += " sordiv"
        for (let j = 0; j < 6; j++) 
        {
            var oszlopdiv = document.createElement("div")
            oszlopdiv.classList += " oszlopdiv"
            oszlopdiv.id=k
            k++
            sordiv.appendChild(oszlopdiv)
        }
        tabla.appendChild(sordiv)
    }
}
function KartyakatTablabaGeneral(){
    for (let index = 0; index < 23; index++) {
        var img = document.createElement("img")
        var kartyaveletlenszam=randomsz(23,1)
        kartyaveletlenszam=keres(t2,kartyaveletlenszam,23)
        img.src="img/"+kartyaveletlenszam+".png"
        var helyvelszam=randomsz(29,1)
        keres2(helyt,helyvelszam,img)
    }

}

function vargen(){
   for (let index = 0; index < 4; index++) {
        var img = document.createElement("img")
        var varvelszam=randomsz(4,1)
        varvelszam=keres(t3,varvelszam,4)
        img.src="img/varak/"+varvelszam+"P.png"
        var helyvelszam=randomsz(29,1)
        keres2(helyt,helyvelszam,img)
    }
}

function keres2(t,tulajdonsag,img) {
    if (!t.includes(tulajdonsag)) {
        t.push(tulajdonsag)
    }
    else {
        while (t.includes(tulajdonsag)) {
            tulajdonsag=randomsz(29,1)
        }
        t.push(tulajdonsag)
    }
    let hely=document.getElementById(tulajdonsag)
    hely.appendChild(img)
}

function keres(tomb,tulajdonsag,max) {

    if (!tomb.includes(tulajdonsag)) {
        tomb.push(tulajdonsag)
    }
    else {
        while (tomb.includes(tulajdonsag)) {
            tulajdonsag=randomsz(max,1)
        }
        tomb.push(tulajdonsag)
    }
    return tulajdonsag
}

function Main(){  
    JatekTerBetoltese()
    JatekTerElrendezese()
    TablaGeneralasa()
    KartyakatTablabaGeneral()
    vargen()
}

Main();